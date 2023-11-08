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
          {/* <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse> */}
          <Sidebar.Item href="#" icon={HiInbox}>
            Id: {task.id}
          </Sidebar.Item>
          {user.isAdmin && (
            <Sidebar.Item icon={HiUser}>
              <Link to={`/admin/user/?session=${user.email}`}>Admin Panel</Link>
            </Sidebar.Item>
          )}
          {/* <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
