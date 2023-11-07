import React from "react";
import Task from "../component/Task";
import { db } from "../service/db.server";

export const loader = async () => {
  let task = await db.task.findFirst({
    where: {
      status: null,
    },
  });
  return { task };
};

export const action = async ({ request }) => {
  let formdata = await request.formData();
  let action = formdata.get("_action") as string;
  let taskId = formdata.get("taskId") as string;
  if (action === "accept_task") {
    let text = formdata.get("text") as string;
    await db.task.update({
      where: {
        id: parseInt(taskId),
      },
      data: {
        status: "accepted",
        text,
      },
    });
  }
  if (action === "reject_task") {
    await db.task.update({
      where: {
        id: parseInt(taskId),
      },
      data: {
        status: "rejected",
      },
    });
  }
  return null;
};

function Index() {
  return <Task />;
}

export default Index;
