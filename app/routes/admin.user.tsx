import React, { useState } from "react";
import { db } from "../service/db.server";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Checkbox, Select, Table, TextInput } from "flowbite-react";
export const loader = async ({ request }) => {
  let users = await db.user.findMany({
    orderBy: {
      isAdmin: "asc",
    },
  });
  return { users };
};

export const action = async ({ request }) => {
  let formdata = await request.formData();
  let _action = formdata.get("_action");
  let userId = formdata.get("userId");
  if (_action === "role_change") {
    let role = formdata.get("role");
    return await db.user.update({
      where: {
        id: userId,
      },
      data: {
        role,
      },
    });
  }
  if (_action === "isAdmin_change") {
    let checked = formdata.get("checked") as string;

    return await db.user.update({
      where: { id: userId },
      data: {
        isAdmin: checked === "true" ? true : false,
      },
    });
  }

  return null;
};

function AdminUser() {
  let { users } = useLoaderData();
  let [search, setSearch] = useState("");
  return (
    <div className="flex flex-col gap-2 my-2">
      <TextInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="email"
        placeholder="search eg.name@flowbite.com"
      />
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>id</Table.HeadCell>
          <Table.HeadCell>email</Table.HeadCell>
          <Table.HeadCell>isAdmin</Table.HeadCell>

          <Table.HeadCell>role</Table.HeadCell>
          <Table.HeadCell>created At</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y max-h-screen  overflow-y-scroll">
          {users
            .filter((item) =>
              item.email?.toLowerCase().includes(search.toLowerCase())
            )
            .map((user) => {
              return <EachUser user={user} />;
            })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default AdminUser;

function EachUser({ user }) {
  let fetcher = useFetcher();
  const handleRoleChange = (e) => {
    let newRole = e.target.value;
    fetcher.submit(
      {
        _action: "role_change",
        userId: user.id,
        role: newRole,
      },
      {
        method: "POST",
      }
    );
  };
  const handleIsAdmin = (e) => {
    let isAdmin = e.target.checked;
    fetcher.submit(
      {
        _action: "isAdmin_change",
        userId: user.id,
        checked: isAdmin,
      },
      {
        method: "POST",
      }
    );
  };
  return (
    <Table.Row
      key={user.id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {user.id}
      </Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>
        <Checkbox checked={!!user.isAdmin} onChange={handleIsAdmin} />
      </Table.Cell>

      <Table.Cell>
        <Select
          disabled={fetcher.state !== "idle"}
          onChange={handleRoleChange}
          value={user?.role}
          className="w-32"
        >
          <option>user</option>
          <option>annotator</option>
        </Select>
      </Table.Cell>
      <Table.Cell>{user?.createdAt}</Table.Cell>
    </Table.Row>
  );
}
