import React from "react";
import { db } from "../service/db.server";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Button, FileInput, Table } from "flowbite-react";
import { AiFillDelete } from "react-icons/ai";
import Papa from "papaparse";
export const loader = async () => {
  let tasks = await db.task.findMany({
    select: {
      id: true,
      user: true,
      imageUrl: true,
      text: true,
    },
    orderBy: {
      id: "desc",
    },
  });
  return { tasks };
};

export const action = async ({ request }) => {
  let formdata = await request.formData();
  let _action = formdata.get("_action");
  let data = formdata.get("data");
  if (_action === "upload_task") {
    data = JSON.parse(data);
    let inputdata = data.map((d) => ({ imageUrl: d.imageUrl, text: d.text }));
    try {
      let res = await db.task.createMany({
        data: inputdata,
      });
      return res;
    } catch (e) {
      return { error: "error : " + e };
    }
  }
  if (_action === "delete_task") {
    let id = formdata.get("id");
    return await db.task.delete({
      where: { id: parseInt(id) },
    });
  }
};

function AdminTask() {
  let { tasks } = useLoaderData();
  let [fileData, setFileData] = React.useState([]);
  const [jsonData, setJsonData] = React.useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async function (results) {
        setFileData(results?.data);
      },
    });
  };
  let fetcher = useFetcher();
  function handleUpload() {
    fetcher.submit(
      {
        _action: "upload_task",
        data: JSON.stringify(fileData),
      },
      {
        method: "POST",
      }
    );
  }

  return (
    <div className=" h-[100dvh] w-full flex gap-3 flex-col my-5 ">
      <div className="flex gap-2">
        {fetcher?.data?.error && <span>{fetcher?.data?.error}</span>}
        <div className="flex flex-col">
          <FileInput
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            helperText="file should be a .json type with array of objects with imageUrl and text"
          />
        </div>
        <Button onClick={handleUpload}>upload</Button>
      </div>
      <div className="h-[88vh] overflow-y-scroll flex flex-col">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>id</Table.HeadCell>
            <Table.HeadCell>image</Table.HeadCell>
            <Table.HeadCell>text</Table.HeadCell>
            <Table.HeadCell>Annotator</Table.HeadCell>
            <Table.HeadCell>action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y flex-1 w-full ">
            {tasks.map((task) => {
              return <EachTask task={task} key={task.id} />;
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default AdminTask;

function EachTask({ task }) {
  let [showAll, setShowAll] = React.useState(false);
  let fetcher = useFetcher();
  function handleDelete() {
    fetcher.submit(
      {
        _action: "delete_task",
        id: task.id,
      },
      {
        method: "POST",
      }
    );
  }
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {task.id}
      </Table.Cell>
      <Table.Cell>
        <a href={task.imageUrl} target="_blank">
          click
        </a>
      </Table.Cell>
      <Table.Cell>
        {showAll ? (
          task.text
        ) : (
          <>
            {task?.text.slice(0, 50) + "..."}
            <div
              onClick={() => {
                setShowAll(true);
              }}
              className="cursor-pointer text-blue-500 underline"
            >
              read full
            </div>
          </>
        )}
      </Table.Cell>
      <Table.Cell>{task?.user?.email}</Table.Cell>
      <Table.Cell>
        <Button onClick={handleDelete}>
          <AiFillDelete />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
