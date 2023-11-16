//assign task to user

import { db } from "../service/db.server";

export async function getAndAssignTask(userId: string) {
  //check if user has task
  let old_task = await db.task.findFirst({
    where: {
      status: null,
      userId: userId,
    },
  });
  if (old_task) return old_task;
  //get task from db
  let null_task = await db.task.findFirst({
    where: {
      status: null,
    },
    orderBy: {
      id: "asc",
    },
  });

  //assign task to user
  let task = await db.task.update({
    where: {
      id: null_task.id,
    },
    data: {
      userId: userId,
    },
  });
  //return task
  return task;
}
