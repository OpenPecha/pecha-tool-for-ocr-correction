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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
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
var tailwind_default = "/build/_assets/tailwind-SVZ4EZGY.css";

// app/style/global.css
var global_default = "/build/_assets/global-VACHWU72.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/admin.task.tsx
var admin_task_exports = {};
__export(admin_task_exports, {
  default: () => admin_task_default
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function AdminTask() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "AdminTask" }, void 0, !1, {
    fileName: "app/routes/admin.task.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
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
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/routes/admin.user.tsx
var import_react4 = require("@remix-run/react"), import_flowbite_react = require("flowbite-react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader = async ({ request }) => ({ users: await db.user.findMany({
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-2 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_flowbite_react.TextInput,
      {
        value: search,
        onChange: (e) => setSearch(e.target.value),
        type: "email",
        placeholder: "search eg.name@flowbite.com"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table, { hoverable: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "id" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "email" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "isAdmin" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "role" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "created At" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Edit" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.Body, { className: "divide-y", children: users.filter(
        (item) => item.email?.toLowerCase().includes(search.toLowerCase())
      ).map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(EachUser, { user }, void 0, !1, {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 72,
        columnNumber: 22
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.user.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_flowbite_react.Table.Row,
    {
      className: "bg-white dark:border-gray-700 dark:bg-gray-800",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: user.id }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 115,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.Cell, { children: user.email }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 118,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Checkbox, { checked: !!user.isAdmin, onChange: handleIsAdmin }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 120,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 119,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_flowbite_react.Select,
          {
            disabled: fetcher.state !== "idle",
            onChange: handleRoleChange,
            value: user?.role,
            className: "w-32",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "user" }, void 0, !1, {
                fileName: "app/routes/admin.user.tsx",
                lineNumber: 130,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "annotator" }, void 0, !1, {
                fileName: "app/routes/admin.user.tsx",
                lineNumber: 131,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin.user.tsx",
            lineNumber: 124,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react.Table.Cell, { children: user?.createdAt }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 134,
          columnNumber: 7
        }, this)
      ]
    },
    user.id,
    !0,
    {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 111,
      columnNumber: 5
    },
    this
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
var import_react5 = require("react"), import_flowbite_react2 = require("flowbite-react"), import_react6 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
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
  return task ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full w-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 max-w-4xl rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: task.imageUrl,
        alt: "Google",
        className: "h-[40vh] w-full object-contain"
      },
      void 0,
      !1,
      {
        fileName: "app/component/Task.tsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full flex flex-col p-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-2 block ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react2.Label,
        {
          htmlFor: "comment",
          className: "text-gray-400 font-Elsie",
          value: "transcribe"
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 46,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/component/Task.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react2.Textarea,
        {
          id: "comment",
          placeholder: "Leave a comment...",
          required: !0,
          className: "flex-1   overflow-auto",
          rows: 4,
          value: textInput,
          onChange: (e) => setInput(e.target.value)
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/component/Task.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-3 justify-around items-center my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react2.Button,
        {
          className: "  bg-green-500 font-Elsie hover:bg-green-400",
          onClick: handleSubmit,
          children: "Submit"
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 63,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react2.Button,
        {
          className: "bg-red-500 font-Elsie hover:bg-red-400",
          onClick: handleReject,
          children: "Reject"
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 69,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/component/Task.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Task.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/component/Task.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-10 flex justify-center w-full", children: "thanks the work is done" }, void 0, !1, {
    fileName: "app/component/Task.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this);
}
var Task_default = Task;

// app/component/Sidebar.tsx
var import_flowbite_react3 = require("flowbite-react"), import_hi = require("react-icons/hi"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Sidebar_Container() {
  let { task, user } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_flowbite_react3.Sidebar,
    {
      className: "hidden md:block",
      "aria-label": " Sidebar with multi-level dropdown example",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react3.Sidebar.Items, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react3.Sidebar.ItemGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react3.Sidebar.Item, { href: "#", icon: import_hi.HiChartPie, children: "Task" }, void 0, !1, {
          fileName: "app/component/Sidebar.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react3.Sidebar.Item, { href: "#", icon: import_hi.HiInbox, children: [
          "Id: ",
          task?.id
        ] }, void 0, !0, {
          fileName: "app/component/Sidebar.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        user.isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react3.Sidebar.Item, { icon: import_hi.HiUser, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: `/admin/user/?session=${user?.email}`, children: "Admin Panel" }, void 0, !1, {
          fileName: "app/component/Sidebar.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/component/Sidebar.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/Sidebar.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/component/Sidebar.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/component/Sidebar.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var import_node2 = require("@remix-run/node"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex h-full gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Sidebar_Container, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Task_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
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
var import_flowbite_react4 = require("flowbite-react"), import_hi2 = require("react-icons/hi"), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Sidebar_Container2() {
  let { user } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_flowbite_react4.Sidebar,
    {
      className: "hidden md:block",
      "aria-label": " Sidebar with multi-level dropdown example",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react4.Sidebar.Items, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react4.Sidebar.ItemGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react4.Sidebar.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: `/?session=${user.email}`, children: "Home" }, void 0, !1, {
          fileName: "app/component/admin/Sidebar.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/component/admin/Sidebar.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react4.Sidebar.Item, { icon: import_hi2.HiChartPie, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react8.NavLink,
          {
            to: `/admin/user/?session=${user.email}`,
            className: ({ isActive, isPending }) => isPending ? "bg-gray-400" : isActive ? "bg-slate-500 w-full block p-2 rounded text-white" : "",
            children: "Users"
          },
          void 0,
          !1,
          {
            fileName: "app/component/admin/Sidebar.tsx",
            lineNumber: 26,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/component/admin/Sidebar.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react4.Sidebar.Item, { icon: import_hi2.HiInbox, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react8.NavLink,
          {
            to: `/admin/task/?session=${user.email}`,
            className: ({ isActive, isPending }) => isPending ? "bg-gray-400" : isActive ? "bg-slate-500 w-full block p-2 rounded text-white" : "",
            children: "Tasks"
          },
          void 0,
          !1,
          {
            fileName: "app/component/admin/Sidebar.tsx",
            lineNumber: 40,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/component/admin/Sidebar.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/component/admin/Sidebar.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/component/admin/Sidebar.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/component/admin/Sidebar.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}

// app/routes/admin.tsx
var import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex h-full gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Sidebar_Container2, {}, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
var admin_default = admin;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-VAYZZIPM.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-J4GLYRZ6.js", "/build/_shared/chunk-YJEIG4AS.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YZXWYDOX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-2FK5FY2D.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-VND2STOW.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-CIPHX55W.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-VND2STOW.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin.task": { id: "routes/admin.task", parentId: "routes/admin", path: "task", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.task-JXXTKDIB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/admin.user": { id: "routes/admin.user", parentId: "routes/admin", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.user-GKAISAT2.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "8c7af7df", hmr: { runtime: "/build/_shared\\chunk-YJEIG4AS.js", timestamp: 1699421955673 }, url: "/build/manifest-8C7AF7DF.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
//# sourceMappingURL=index.js.map
