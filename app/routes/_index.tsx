import React from "react";
import Task from "../component/Task";
import { db } from "../service/db.server";
import Sidebar_Container from "../component/Sidebar";
import { redirect } from "@remix-run/node";
import { getAndAssignTask } from "../modelAction/task";
export const loader = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session") as string;
  if (!session) return redirect("http://pecha.tools");
  let user = await db.user.findUnique({
    where: { email: session },
  });
  if (!user) {
    user = await db.user.create({
      data: {
        email: session,
      },
    });
  }
  let task = user.role === "annotator" ? await getAndAssignTask(user.id) : null;
  return {
    user,
    task,
  };
};

export const action = async ({ request }) => {
  let formdata = await request.formData();
  let action = formdata.get("_action") as string;
  let taskId = formdata.get("taskId") as string;
  let userId = formdata.get("userId") as string;
  if (action === "accept_task") {
    let text = formdata.get("text") as string;
    await db.task.update({
      where: {
        id: parseInt(taskId),
      },
      data: {
        status: "accepted",
        text,
        userId,
      },
    });
  }
  if (action === "reject_task") {
    console.log(userId);
    await db.task.update({
      where: {
        id: parseInt(taskId),
      },
      data: {
        status: "rejected",
        userId,
      },
    });
  }
  return null;
};

function Index() {
  return (
    <div className="flex h-full gap-3">
      <Sidebar_Container />
      <Task />
    </div>
  );
}

export default Index;
