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
var tailwind_default = "/build/_assets/tailwind-BMOPRWFI.css";

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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
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
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
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
  action: () => action,
  default: () => admin_task_default,
  loader: () => loader
});
var import_react3 = __toESM(require("react"));

// app/service/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/routes/admin.task.tsx
var import_react4 = require("@remix-run/react"), import_flowbite_react = require("flowbite-react"), import_ai = require("react-icons/ai"), import_papaparse = __toESM(require("papaparse")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async () => ({ tasks: await db.task.findMany({
  select: {
    id: !0,
    user: !0,
    imageUrl: !0,
    text: !0
  },
  orderBy: {
    id: "desc"
  }
}) }), action = async ({ request }) => {
  let formdata = await request.formData(), _action = formdata.get("_action"), data = formdata.get("data");
  if (_action === "upload_task") {
    data = JSON.parse(data);
    let inputdata = data.map((d) => ({ imageUrl: d.imageUrl, text: d.text }));
    try {
      return await db.task.createMany({
        data: inputdata
      });
    } catch (e) {
      return { error: "error : " + e };
    }
  }
  if (_action === "delete_task") {
    let id = formdata.get("id");
    return await db.task.delete({
      where: { id: parseInt(id) }
    });
  }
};
function AdminTask() {
  let { tasks } = (0, import_react4.useLoaderData)(), [fileData, setFileData] = import_react3.default.useState([]), handleFileChange = (e) => {
    let file = e.target.files[0];
    import_papaparse.default.parse(file, {
      header: !0,
      skipEmptyLines: !0,
      complete: async function(results) {
        setFileData(results?.data);
      }
    });
  }, fetcher = (0, import_react4.useFetcher)();
  function handleUpload() {
    fetcher.submit(
      {
        _action: "upload_task",
        data: JSON.stringify(fileData)
      },
      {
        method: "POST"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " h-[100dvh] w-full flex gap-3 flex-col my-5 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-2", children: [
      fetcher?.data?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: fetcher?.data?.error }, void 0, !1, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 75,
        columnNumber: 34
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_flowbite_react.FileInput,
        {
          type: "file",
          accept: ".csv",
          onChange: handleFileChange,
          helperText: "file should be a .json type with array of objects with imageUrl and text"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 77,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Button, { onClick: handleUpload, children: "upload" }, void 0, !1, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-[88vh] overflow-y-scroll flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table, { hoverable: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "id" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "image" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "text" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "Annotator" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "action" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Body, { className: "divide-y flex-1 w-full ", children: tasks.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EachTask, { task }, task.id, !1, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 97,
        columnNumber: 22
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.task.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
var admin_task_default = AdminTask;
function EachTask({ task }) {
  let [showAll, setShowAll] = import_react3.default.useState(!1), fetcher = (0, import_react4.useFetcher)();
  function handleDelete() {
    fetcher.submit(
      {
        _action: "delete_task",
        id: task.id
      },
      {
        method: "POST"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Row, { className: "bg-white dark:border-gray-700 dark:bg-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: task.id }, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: task.imageUrl, target: "_blank", children: "click" }, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Cell, { children: showAll ? task.text : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      task?.text.slice(0, 50) + "...",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          onClick: () => {
            setShowAll(!0);
          },
          className: "cursor-pointer text-blue-500 underline",
          children: "read full"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 138,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Cell, { children: task?.user?.email }, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Button, { onClick: handleDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ai.AiFillDelete, {}, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 152,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.task.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}

// app/routes/admin.user.tsx
var admin_user_exports = {};
__export(admin_user_exports, {
  action: () => action2,
  default: () => admin_user_default,
  loader: () => loader2
});
var import_react5 = require("react");
var import_react6 = require("@remix-run/react"), import_flowbite_react2 = require("flowbite-react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => ({ users: await db.user.findMany({
  orderBy: {
    isAdmin: "asc"
  }
}) }), action2 = async ({ request }) => {
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
  let { users } = (0, import_react6.useLoaderData)(), [search, setSearch] = (0, import_react5.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-2 my-2 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_flowbite_react2.TextInput,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-h-[90dvh] overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table, { hoverable: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "id" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "email" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "isAdmin" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "role" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "created At" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Edit" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Body, { className: "divide-y max-h-screen  overflow-y-scroll", children: users.filter(
        (item) => item.email?.toLowerCase().includes(search.toLowerCase())
      ).map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(EachUser, { user }, void 0, !1, {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 73,
        columnNumber: 24
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.user.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, !1, {
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
  let fetcher = (0, import_react6.useFetcher)(), handleRoleChange = (e) => {
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
    import_flowbite_react2.Table.Row,
    {
      className: "bg-white dark:border-gray-700 dark:bg-gray-800",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: user.id }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 117,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Cell, { children: user.email }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 120,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Checkbox, { checked: !!user.isAdmin, onChange: handleIsAdmin }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 122,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 121,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_flowbite_react2.Select,
          {
            disabled: fetcher.state !== "idle",
            onChange: handleRoleChange,
            value: user?.role,
            className: "w-32",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "user" }, void 0, !1, {
                fileName: "app/routes/admin.user.tsx",
                lineNumber: 132,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "annotator" }, void 0, !1, {
                fileName: "app/routes/admin.user.tsx",
                lineNumber: 133,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin.user.tsx",
            lineNumber: 126,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 125,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Cell, { children: user?.createdAt }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 136,
          columnNumber: 7
        }, this)
      ]
    },
    user.id,
    !0,
    {
      fileName: "app/routes/admin.user.tsx",
      lineNumber: 113,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action3,
  default: () => index_default,
  loader: () => loader3
});

// app/component/Task.tsx
var import_react7 = require("react"), import_flowbite_react3 = require("flowbite-react"), import_react8 = require("@remix-run/react"), import_rx = require("react-icons/rx"), import_ti = require("react-icons/ti"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Task() {
  let { task, user } = (0, import_react8.useLoaderData)(), [textInput, setInput] = (0, import_react7.useState)(task?.text);
  (0, import_react7.useEffect)(() => {
    setInput(task?.text);
  }, [task?.text]);
  let fetcher = (0, import_react8.useFetcher)(), [isLandscape, setIsLandscape] = (0, import_react7.useState)(!1), handleImageLoad = (event) => {
    let { naturalWidth, naturalHeight } = event.target, landscape = naturalWidth > naturalHeight;
    setIsLandscape(landscape);
  };
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
        taskId: task.id,
        userId: user.id
      },
      { method: "POST" }
    );
  }
  return task ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full w-full flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "div",
      {
        className: "flex flex-1 max-w-4xl  w-full h-[70dvh] m-10 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
        style: {
          flexDirection: isLandscape ? "column" : "row"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "md:hidden text-gray-200 ml-3", children: [
            " ID: ",
            task.id
          ] }, void 0, !0, {
            fileName: "app/component/Task.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "img",
            {
              src: task.imageUrl,
              alt: "task_image",
              className: "h-full object-contain",
              style: { height: isLandscape ? "60%" : "100%" },
              onLoad: handleImageLoad
            },
            void 0,
            !1,
            {
              fileName: "app/component/Task.tsx",
              lineNumber: 57,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col flex-1 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full flex h-full flex-col p-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-2 block ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_flowbite_react3.Label,
              {
                htmlFor: "comment",
                className: "text-gray-400 font-Elsie",
                value: "transcribe"
              },
              void 0,
              !1,
              {
                fileName: "app/component/Task.tsx",
                lineNumber: 67,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/component/Task.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_flowbite_react3.Textarea,
              {
                id: "comment",
                placeholder: "Leave a comment...",
                required: !0,
                className: "flex-1 h-full overflow-auto",
                rows: 4,
                value: textInput,
                onChange: (e) => setInput(e.target.value)
              },
              void 0,
              !1,
              {
                fileName: "app/component/Task.tsx",
                lineNumber: 73,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/component/Task.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/component/Task.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/component/Task.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-3 justify-center items-center my-2 h-[10dvh]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react3.Button,
        {
          className: " h-20 w-20 bg-green-500 font-Elsie hover:bg-green-400",
          onClick: handleSubmit,
          title: "submit",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_ti.TiTick, { size: 30 }, void 0, !1, {
            fileName: "app/component/Task.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 86,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react3.Button,
        {
          className: "h-20 w-20 bg-red-500 font-Elsie hover:bg-red-400",
          onClick: handleReject,
          title: "reject",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_rx.RxCross2, { size: 30 }, void 0, !1, {
            fileName: "app/component/Task.tsx",
            lineNumber: 98,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/component/Task.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Task.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-10 flex justify-center w-full", children: "thanks the work is done" }, void 0, !1, {
    fileName: "app/component/Task.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this);
}
var Task_default = Task;

// app/component/Sidebar.tsx
var import_flowbite_react4 = require("flowbite-react"), import_hi = require("react-icons/hi"), import_react9 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Sidebar_Container() {
  let { task, user } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_flowbite_react4.Sidebar,
    {
      className: "hidden md:block",
      "aria-label": " Sidebar with multi-level dropdown example",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react4.Sidebar.Items, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react4.Sidebar.ItemGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react4.Sidebar.Item, { href: "#", icon: import_hi.HiChartPie, children: "Task" }, void 0, !1, {
          fileName: "app/component/Sidebar.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react4.Sidebar.Item, { href: "#", icon: import_hi.HiInbox, children: [
          "Id: ",
          task?.id
        ] }, void 0, !0, {
          fileName: "app/component/Sidebar.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        user.isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_flowbite_react4.Sidebar.Item, { icon: import_hi.HiUser, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react9.Link, { to: `/admin/user/?session=${user?.email}`, children: "Admin Panel" }, void 0, !1, {
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
var import_node2 = require("@remix-run/node");

// app/modelAction/task.ts
async function getAndAssignTask(userId) {
  let old_task = await db.task.findFirst({
    where: {
      status: null,
      userId
    }
  });
  if (old_task)
    return old_task;
  let null_task = await db.task.findFirst({
    where: {
      status: null
    },
    orderBy: {
      id: "asc"
    }
  });
  return await db.task.update({
    where: {
      id: null_task.id
    },
    data: {
      userId
    }
  });
}

// app/routes/_index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
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
  let task = user.role === "annotator" ? await getAndAssignTask(user.id) : null;
  return {
    user,
    task
  };
}, action3 = async ({ request }) => {
  let formdata = await request.formData(), action4 = formdata.get("_action"), taskId = formdata.get("taskId"), userId = formdata.get("userId");
  if (action4 === "accept_task") {
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
  return action4 === "reject_task" && (console.log(userId), await db.task.update({
    where: {
      id: parseInt(taskId)
    },
    data: {
      status: "rejected",
      userId
    }
  })), null;
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex h-full gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Sidebar_Container, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Task_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
var index_default = Index;

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default,
  loader: () => loader4
});
var import_react11 = require("@remix-run/react");

// app/component/admin/Sidebar.tsx
var import_flowbite_react5 = require("flowbite-react"), import_hi2 = require("react-icons/hi"), import_react10 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Sidebar_Container2() {
  let { user } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_flowbite_react5.Sidebar,
    {
      className: "hidden md:block",
      "aria-label": " Sidebar with multi-level dropdown example",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react5.Sidebar.Items, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react5.Sidebar.ItemGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react5.Sidebar.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: `/?session=${user.email}`, children: "Home" }, void 0, !1, {
          fileName: "app/component/admin/Sidebar.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/component/admin/Sidebar.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react5.Sidebar.Item, { icon: import_hi2.HiChartPie, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react10.NavLink,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_flowbite_react5.Sidebar.Item, { icon: import_hi2.HiInbox, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react10.NavLink,
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
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex h-full gap-3 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Sidebar_Container2, {}, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-VAYZZIPM.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-J4GLYRZ6.js", "/build/_shared/chunk-YJEIG4AS.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L644ZJEY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-GRRH3675.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-CK2LANOW.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-NNSGB4IZ.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-CK2LANOW.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin.task": { id: "routes/admin.task", parentId: "routes/admin", path: "task", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.task-DN52D74F.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin.user": { id: "routes/admin.user", parentId: "routes/admin", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.user-EEUFVOGF.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "155c104d", hmr: { runtime: "/build/_shared\\chunk-YJEIG4AS.js", timestamp: 1700808708799 }, url: "/build/manifest-155C104D.js" };

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
