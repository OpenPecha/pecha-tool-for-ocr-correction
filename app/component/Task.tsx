import React, { useState } from "react";
import { Label, Textarea, Button } from "flowbite-react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
function Task() {
  let { task, user } = useLoaderData();
  let [textInput, setInput] = useState(task?.text);

  let fetcher = useFetcher();
  const [isLandscape, setIsLandscape] = useState(false);

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    const landscape = naturalWidth > naturalHeight;
    setIsLandscape(landscape);
  };
  function handleSubmit() {
    fetcher.submit(
      {
        _action: "accept_task",
        text: textInput,
        taskId: task.id,
        userId: user.id,
      },
      { method: "POST" }
    );
  }
  function handleReject() {
    fetcher.submit(
      {
        _action: "reject_task",
        taskId: task.id,
        userId: user.id,
      },
      { method: "POST" }
    );
  }
  if (!task)
    return (
      <div className="mt-10 flex justify-center w-full">
        thanks the work is done
      </div>
    );
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div
        className="flex flex-1 max-w-4xl  w-full h-[70dvh] m-10 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
        style={{
          flexDirection: isLandscape ? "column" : "row",
        }}
      >
        <span className="md:hidden text-gray-200 ml-3"> ID: {task.id}</span>
        <img
          src={task.imageUrl}
          alt="task_image"
          className="h-full object-contain"
          style={{ height: isLandscape ? "60%" : "100%" }}
          onLoad={handleImageLoad}
        />
        <div className="flex flex-col flex-1 gap-2">
          <div className="w-full flex h-full flex-col p-3">
            <div className="mb-2 block ">
              <Label
                htmlFor="comment"
                className="text-gray-400 font-Elsie"
                value="transcribe"
              />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              className="flex-1 h-full overflow-auto"
              rows={4}
              value={textInput}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center my-2 h-[10dvh]">
        <Button
          className=" h-20 w-20 bg-green-500 font-Elsie hover:bg-green-400"
          onClick={handleSubmit}
          title="submit"
        >
          <TiTick size={30} />
        </Button>
        <Button
          className="h-20 w-20 bg-red-500 font-Elsie hover:bg-red-400"
          onClick={handleReject}
          title="reject"
        >
          <RxCross2 size={30} />
        </Button>
      </div>
    </div>
  );
}

export default Task;
