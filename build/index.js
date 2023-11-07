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
var tailwind_default = "/build/_assets/tailwind-NP744Q3J.css";

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

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action,
  default: () => index_default,
  loader: () => loader
});

// app/component/Task.tsx
var import_react3 = require("react"), import_flowbite_react = require("flowbite-react"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Task() {
  let { task } = (0, import_react4.useLoaderData)(), [textInput, setInput] = (0, import_react3.useState)(task?.text), fetcher = (0, import_react4.useFetcher)();
  function handleSubmit() {
    fetcher.submit(
      {
        _action: "accept_task",
        text: textInput,
        taskId: task.id
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
  return task ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full w-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 max-w-4xl rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
        lineNumber: 33,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-2 block w-6/12 mx-auto font-Elsie", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Label, { htmlFor: "comment", value: "transcribe" }, void 0, !1, {
        fileName: "app/component/Task.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/component/Task.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_flowbite_react.Textarea,
        {
          id: "comment",
          placeholder: "Leave a comment...",
          required: !0,
          className: "w-6/12 mx-auto overflow-auto",
          rows: 4,
          value: textInput,
          onChange: (e) => setInput(e.target.value)
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 42,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/component/Task.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-3 justify-around items-center my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_flowbite_react.Button,
        {
          className: "bg-green-500 hover:bg-green-400",
          onClick: handleSubmit,
          children: "Submit"
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 53,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_flowbite_react.Button,
        {
          className: "bg-red-500 hover:bg-red-400",
          onClick: handleReject,
          children: "Reject"
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/component/Task.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Task.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/component/Task.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "thanks the work is done" }, void 0, !1, {
    fileName: "app/component/Task.tsx",
    lineNumber: 29,
    columnNumber: 21
  }, this);
}
var Task_default = Task;

// app/service/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/routes/_index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader = async () => ({ task: await db.task.findFirst({
  where: {
    status: null
  }
}) }), action = async ({ request }) => {
  let formdata = await request.formData(), action2 = formdata.get("_action"), taskId = formdata.get("taskId");
  if (action2 === "accept_task") {
    let text = formdata.get("text");
    await db.task.update({
      where: {
        id: parseInt(taskId)
      },
      data: {
        status: "accepted",
        text
      }
    });
  }
  return action2 === "reject_task" && await db.task.update({
    where: {
      id: parseInt(taskId)
    },
    data: {
      status: "rejected"
    }
  }), null;
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Task_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
var index_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-KJST7XCD.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-J4GLYRZ6.js", "/build/_shared/chunk-YJEIG4AS.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-Z2MXST2Y.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YJJKUYBD.js", imports: ["/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "89968e82", hmr: { runtime: "/build/_shared\\chunk-YJEIG4AS.js", timestamp: 1699382161071 }, url: "/build/manifest-89968E82.js" };

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
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
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
