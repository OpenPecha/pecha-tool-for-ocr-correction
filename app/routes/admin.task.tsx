import React from "react";
import { db } from "../service/db.server";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Button, FileInput, Table } from "flowbite-react";
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
  let data = formdata.get("data");
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
};

function AdminTask() {
  let { tasks } = useLoaderData();

  const [jsonData, setJsonData] = React.useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target.result);
          console.log(json);
          setJsonData(json);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          setJsonData(null);
        }
      };

      reader.readAsText(file);
    }
  };
  let fetcher = useFetcher();
  function handleUpload() {
    fetcher.submit(
      {
        _action: "upload_task",
        data: JSON.stringify(jsonData),
      },
      {
        method: "POST",
      }
    );
  }

  const renderRow = ({ index, style, key }) => (
    <div
      className={index % 2 ? "bg-gray-200" : "bg-gray-400"}
      key={key}
      style={style}
    >
      <EachTask task={tasks[index]} />
    </div>
  );
  return (
    <div className=" h-[100dvh] w-full flex gap-3 flex-col my-5 ">
      <div className="flex gap-2">
        {fetcher?.data?.error && <span>{fetcher?.data?.error}</span>}
        <div className="flex flex-col">
          <FileInput
            type="file"
            accept=".json"
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
            <Table.HeadCell>user</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y flex-1 w-full ">
            {tasks.map((task) => {
              return <EachTask task={task} />;
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
  return (
    <Table.Row
      key={task.id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
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
    </Table.Row>
  );
}
