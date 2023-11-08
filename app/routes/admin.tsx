import React from "react";
import { Outlet } from "@remix-run/react";
import Sidebar_Container from "../component/admin/Sidebar";
import { redirect } from "@remix-run/node";
import { db } from "../service/db.server";

export const loader = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  if (!session) return redirect("https://pecha.tools");
  let user = await db.user.findUnique({
    where: {
      email: session,
    },
  });
  if (!user?.isAdmin) return redirect("/?session=" + session);
  return { user };
};

function admin() {
  return (
    <div className="flex h-full gap-3 overflow-hidden">
      <Sidebar_Container />
      <Outlet />
    </div>
  );
}

export default admin;
