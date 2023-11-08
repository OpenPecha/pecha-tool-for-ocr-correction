import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { Link, NavLink, useLoaderData } from "@remix-run/react";

export default function Sidebar_Container() {
  let { user } = useLoaderData();
  return (
    <Sidebar
      className="hidden md:block"
      aria-label=" Sidebar with multi-level dropdown example"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item>
            <Link to={`/?session=${user.email}`}>Home</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiChartPie}>
            <NavLink
              to={`/admin/user/?session=${user.email}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "bg-gray-400"
                  : isActive
                  ? "bg-slate-500 w-full block p-2 rounded text-white"
                  : ""
              }
            >
              Users
            </NavLink>
          </Sidebar.Item>
          <Sidebar.Item icon={HiInbox}>
            <NavLink
              to={`/admin/task/?session=${user.email}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "bg-gray-400"
                  : isActive
                  ? "bg-slate-500 w-full block p-2 rounded text-white"
                  : ""
              }
            >
              Tasks
            </NavLink>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
