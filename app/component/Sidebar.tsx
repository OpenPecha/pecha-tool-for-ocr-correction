import React from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser } from "react-icons/hi";
import { Link, useLoaderData } from "@remix-run/react";

export default function Sidebar_Container() {
  let { task, user } = useLoaderData();
  return (
    <Sidebar
      className="hidden md:block"
      aria-label=" Sidebar with multi-level dropdown example"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Task
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Id: {task?.id}
          </Sidebar.Item>
          {user.isAdmin && (
            <Sidebar.Item icon={HiUser}>
              <Link to={`/admin/user/?session=${user?.email}`}>
                Admin Panel
              </Link>
            </Sidebar.Item>
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
