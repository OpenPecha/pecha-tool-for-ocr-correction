var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/style/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XDWQSVFB.css";

// app/style/global.css
var global_default = "/build/_assets/global-V6GBU7DO.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {})
    ] })
  ] });
}

// app/routes/admin.task.tsx
var admin_task_exports = {};
__export(admin_task_exports, {
  default: () => admin_task_default
});
var import_jsx_runtime3 = require("react/jsx-runtime");
function AdminTask() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: "AdminTask" });
}
var admin_task_default = AdminTask;

// app/routes/admin.user.tsx
var admin_user_exports = {};
__export(admin_user_exports, {
  action: () => action,
  default: () => admin_user_default,
  loader: () => loader
});
var import_react3 = require("react");

// app/service/db.server.ts
var import_client = require("@prisma/client"), db;
db = new import_client.PrismaClient();

// app/routes/admin.user.tsx
var import_react4 = require("@remix-run/react"), import_flowbite_react = require("flowbite-react"), import_jsx_runtime4 = require("react/jsx-runtime"), loader = async ({ request }) => ({ users: await db.user.findMany({
  orderBy: {
    isAdmin: "asc"
  }
}) }), action = async ({ request }) => {
  let formdata = await request.formData(), _action = formdata.get("_action"), userId = formdata.get("userId");
  if (_action === "role_change") {
    let role = formdata.get("role");
    return await db.user.update({
      where: {
        id: userId
      },
      data: {
        role
      }
    });
  }
  if (_action === "isAdmin_change") {
    let checked = formdata.get("checked");
    return await db.user.update({
      where: { id: userId },
      data: {
        isAdmin: checked === "true"
      }
    });
  }
  return null;
};
function AdminUser() {
  let { users } = (0, import_react4.useLoaderData)(), [search, setSearch] = (0, import_react3.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col gap-2 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_flowbite_react.TextInput,
      {
        value: search,
        onChange: (e) => setSearch(e.target.value),
        type: "email",
        placeholder: "search eg.name@flowbite.com"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_flowbite_react.Table, { hoverable: !0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_flowbite_react.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.HeadCell, { children: "id" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.HeadCell, { children: "email" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.HeadCell, { children: "isAdmin" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.HeadCell, { children: "role" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.HeadCell, { children: "created At" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sr-only", children: "Edit" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.Body, { className: "divide-y", children: users.filter(
        (item) => item.email?.toLowerCase().includes(search.toLowerCase())
      ).map((user) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EachUser, { user })) })
    ] })
  ] });
}
var admin_user_default = AdminUser;
function EachUser({ user }) {
  let fetcher = (0, import_react4.useFetcher)(), handleRoleChange = (e) => {
    let newRole = e.target.value;
    fetcher.submit(
      {
        _action: "role_change",
        userId: user.id,
        role: newRole
      },
      {
        method: "POST"
      }
    );
  }, handleIsAdmin = (e) => {
    let isAdmin = e.target.checked;
    fetcher.submit(
      {
        _action: "isAdmin_change",
        userId: user.id,
        checked: isAdmin
      },
      {
        method: "POST"
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_flowbite_react.Table.Row,
    {
      className: "bg-white dark:border-gray-700 dark:bg-gray-800",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: user.id }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.Cell, { children: user.email }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Checkbox, { checked: !!user.isAdmin, onChange: handleIsAdmin }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          import_flowbite_react.Select,
          {
            disabled: fetcher.state !== "idle",
            onChange: handleRoleChange,
            value: user?.role,
            className: "w-32",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { children: "user" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { children: "annotator" })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_flowbite_react.Table.Cell, { children: user?.createdAt })
      ]
    },
    user.id
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action2,
  default: () => index_default,
  loader: () => loader2
});

// app/component/Task.tsx
var import_react5 = require("react"), import_flowbite_react2 = require("flowbite-react"), import_react6 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime");
function Task() {
  let { task, user } = (0, import_react6.useLoaderData)(), [textInput, setInput] = (0, import_react5.useState)(task?.text), fetcher = (0, import_react6.useFetcher)();
  function handleSubmit() {
    fetcher.submit(
      {
        _action: "accept_task",
        text: textInput,
        taskId: task.id,
        userId: user.id
      },
      { method: "POST" }
    );
  }
  function handleReject() {
    fetcher.submit(
      {
        _action: "reject_task",
        taskId: task.id
      },
      { method: "POST" }
    );
  }
  return task ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "h-full w-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-1 max-w-4xl rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "img",
      {
        src: task.imageUrl,
        alt: "Google",
        className: "h-[40vh] w-full object-contain"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full flex flex-col p-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mb-2 block ", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_flowbite_react2.Label,
        {
          htmlFor: "comment",
          className: "text-gray-400 font-Elsie",
          value: "transcribe"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_flowbite_react2.Textarea,
        {
          id: "comment",
          placeholder: "Leave a comment...",
          required: !0,
          className: "flex-1   overflow-auto",
          rows: 4,
          value: textInput,
          onChange: (e) => setInput(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex gap-3 justify-around items-center my-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_flowbite_react2.Button,
        {
          className: "  bg-green-500 font-Elsie hover:bg-green-400",
          onClick: handleSubmit,
          children: "Submit"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_flowbite_react2.Button,
        {
          className: "bg-red-500 font-Elsie hover:bg-red-400",
          onClick: handleReject,
          children: "Reject"
        }
      )
    ] })
  ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-10 flex justify-center w-full", children: "thanks the work is done" });
}
var Task_default = Task;

// app/component/Sidebar.tsx
var import_flowbite_react3 = require("flowbite-react"), import_hi = require("react-icons/hi"), import_react7 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime");
function Sidebar_Container() {
  let { task, user } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_flowbite_react3.Sidebar,
    {
      className: "hidden md:block",
      "aria-label": " Sidebar with multi-level dropdown example",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_flowbite_react3.Sidebar.Items, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_flowbite_react3.Sidebar.ItemGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_flowbite_react3.Sidebar.Item, { href: "#", icon: import_hi.HiChartPie, children: "Task" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_flowbite_react3.Sidebar.Item, { href: "#", icon: import_hi.HiInbox, children: [
          "Id: ",
          task.id
        ] }),
        user.isAdmin && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_flowbite_react3.Sidebar.Item, { icon: import_hi.HiUser, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Link, { to: `/admin/user/?session=${user.email}`, children: "Admin Panel" }) })
      ] }) })
    }
  );
}

// app/routes/_index.tsx
var import_node2 = require("@remix-run/node"), import_jsx_runtime7 = require("react/jsx-runtime"), loader2 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node2.redirect)("http://pecha.tools");
  let user = await db.user.findUnique({
    where: { email: session }
  });
  user || (user = await db.user.create({
    data: {
      email: session
    }
  }));
  let task = user.role === "annotator" ? await db.task.findFirst({
    where: {
      status: null
    },
    orderBy: {
      id: "asc"
    }
  }) : null;
  return {
    user,
    task
  };
}, action2 = async ({ request }) => {
  let formdata = await request.formData(), action3 = formdata.get("_action"), taskId = formdata.get("taskId"), userId = formdata.get("userId");
  if (action3 === "accept_task") {
    let text = formdata.get("text");
    await db.task.update({
      where: {
        id: parseInt(taskId)
      },
      data: {
        status: "accepted",
        text,
        userId
      }
    });
  }
  return action3 === "reject_task" && await db.task.update({
    where: {
      id: parseInt(taskId)
    },
    data: {
      status: "rejected"
    }
  }), null;
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex h-full gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Sidebar_Container, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Task_default, {})
  ] });
}
var index_default = Index;

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default,
  loader: () => loader3
});
var import_react9 = require("@remix-run/react");

// app/component/admin/Sidebar.tsx
var import_flowbite_react4 = require("flowbite-react"), import_hi2 = require("react-icons/hi"), import_react8 = require("@remix-run/react"), import_jsx_runtime8 = require("react/jsx-runtime");
function Sidebar_Container2() {
  let { user } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_flowbite_react4.Sidebar,
    {
      className: "hidden md:block",
      "aria-label": " Sidebar with multi-level dropdown example",
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_flowbite_react4.Sidebar.Items, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_flowbite_react4.Sidebar.ItemGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_flowbite_react4.Sidebar.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react8.Link, { to: `/?session=${user.email}`, children: "Home" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_flowbite_react4.Sidebar.Item, { icon: import_hi2.HiChartPie, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_react8.NavLink,
          {
            to: `/admin/user/?session=${user.email}`,
            className: ({ isActive, isPending }) => isPending ? "bg-gray-400" : isActive ? "bg-slate-500 w-full block p-2 rounded text-white" : "",
            children: "Users"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_flowbite_react4.Sidebar.Item, { icon: import_hi2.HiInbox, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_react8.NavLink,
          {
            to: `/admin/task/?session=${user.email}`,
            className: ({ isActive, isPending }) => isPending ? "bg-gray-400" : isActive ? "bg-slate-500 w-full block p-2 rounded text-white" : "",
            children: "Tasks"
          }
        ) })
      ] }) })
    }
  );
}

// app/routes/admin.tsx
var import_node3 = require("@remix-run/node");
var import_jsx_runtime9 = require("react/jsx-runtime"), loader3 = async ({ request }) => {
  let session = new URL(request.url).searchParams.get("session");
  if (!session)
    return (0, import_node3.redirect)("https://pecha.tools");
  let user = await db.user.findUnique({
    where: {
      email: session
    }
  });
  return user?.isAdmin ? { user } : (0, import_node3.redirect)("/?session=" + session);
};
function admin() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex h-full gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Sidebar_Container2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react9.Outlet, {})
  ] });
}
var admin_default = admin;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-B2UR3ROU.js", imports: ["/build/_shared/chunk-3RVWVZ2O.js", "/build/_shared/chunk-335HSK5A.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SZOU4NZN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-NBYG3PTJ.js", imports: ["/build/_shared/chunk-YD3KDPF7.js", "/build/_shared/chunk-WBVMJJML.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-UW2UFD4I.js", imports: ["/build/_shared/chunk-YD3KDPF7.js", "/build/_shared/chunk-WBVMJJML.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin.task": { id: "routes/admin.task", parentId: "routes/admin", path: "task", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.task-SLWGCYXF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/admin.user": { id: "routes/admin.user", parentId: "routes/admin", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.user-D3G2RVFD.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "90d39948", hmr: void 0, url: "/build/manifest-90D39948.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/admin.task": {
    id: "routes/admin.task",
    parentId: "routes/admin",
    path: "task",
    index: void 0,
    caseSensitive: void 0,
    module: admin_task_exports
  },
  "routes/admin.user": {
    id: "routes/admin.user",
    parentId: "routes/admin",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: admin_user_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
