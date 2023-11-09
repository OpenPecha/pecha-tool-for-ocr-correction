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
var tailwind_default = "/build/_assets/tailwind-CL65YVAC.css";

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
var import_react4 = require("@remix-run/react"), import_flowbite_react = require("flowbite-react"), import_ai = require("react-icons/ai"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async () => ({ tasks: await db.task.findMany({
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
  let { tasks } = (0, import_react4.useLoaderData)(), [jsonData, setJsonData] = import_react3.default.useState(null), handleFileChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (event) => {
        try {
          let json = JSON.parse(event.target.result);
          console.log(...oo_oo("3894279447_58_10_58_27_4", json)), setJsonData(json);
        } catch (error) {
          console.error("Error parsing JSON:", error), setJsonData(null);
        }
      }, reader.readAsText(file);
    }
  }, fetcher = (0, import_react4.useFetcher)();
  function handleUpload() {
    fetcher.submit(
      {
        _action: "upload_task",
        data: JSON.stringify(jsonData)
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
        lineNumber: 85,
        columnNumber: 34
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_flowbite_react.FileInput,
        {
          type: "file",
          accept: ".json",
          onChange: handleFileChange,
          helperText: "file should be a .json type with array of objects with imageUrl and text"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 87,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Button, { onClick: handleUpload, children: "upload" }, void 0, !1, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-[88vh] overflow-y-scroll flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table, { hoverable: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "id" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "image" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "text" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "Annotator" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.HeadCell, { children: "action" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Body, { className: "divide-y flex-1 w-full ", children: tasks.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EachTask, { task }, void 0, !1, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 107,
        columnNumber: 22
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.task.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.task.tsx",
    lineNumber: 83,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_flowbite_react.Table.Row,
    {
      className: "bg-white dark:border-gray-700 dark:bg-gray-800",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: task.id }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 137,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: task.imageUrl, target: "_blank", children: "click" }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 141,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 140,
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
              lineNumber: 151,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 145,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Cell, { children: task?.user?.email }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 162,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_flowbite_react.Button, { onClick: handleDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ai.AiFillDelete, {}, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 165,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 164,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.task.tsx",
          lineNumber: 163,
          columnNumber: 7
        }, this)
      ]
    },
    task.id,
    !0,
    {
      fileName: "app/routes/admin.task.tsx",
      lineNumber: 133,
      columnNumber: 5
    },
    this
  );
}
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','51848','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.249.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699507428337','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
  } catch {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch {
  }
  return v;
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-2 my-2", children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table, { hoverable: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Head, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "id" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "email" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "isAdmin" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "role" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: "created At" }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.HeadCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Edit" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Body, { className: "divide-y max-h-screen  overflow-y-scroll", children: users.filter(
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
          lineNumber: 115,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Cell, { children: user.email }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 118,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Checkbox, { checked: !!user.isAdmin, onChange: handleIsAdmin }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 120,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.user.tsx",
          lineNumber: 119,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_flowbite_react2.Table.Cell, { children: user?.createdAt }, void 0, !1, {
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
  action: () => action3,
  default: () => index_default,
  loader: () => loader3
});

// app/component/Task.tsx
var import_react7 = require("react"), import_flowbite_react3 = require("flowbite-react"), import_react8 = require("@remix-run/react"), import_rx = require("react-icons/rx"), import_ti = require("react-icons/ti"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Task() {
  let { task, user } = (0, import_react8.useLoaderData)(), [textInput, setInput] = (0, import_react7.useState)(task?.text), fetcher = (0, import_react8.useFetcher)();
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
  return task ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full w-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 max-w-4xl rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "md:hidden text-gray-200 ml-3", children: [
      " ID: ",
      task.id
    ] }, void 0, !0, {
      fileName: "app/component/Task.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
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
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full flex flex-col p-3", children: [
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
          lineNumber: 50,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/component/Task.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react3.Textarea,
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
          lineNumber: 56,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/component/Task.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-3 justify-center items-center my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react3.Button,
        {
          className: "  bg-green-500 font-Elsie hover:bg-green-400",
          onClick: handleSubmit,
          title: "submit",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_ti.TiTick, { size: 30 }, void 0, !1, {
            fileName: "app/component/Task.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 67,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_flowbite_react3.Button,
        {
          className: "bg-red-500 font-Elsie hover:bg-red-400",
          onClick: handleReject,
          title: "reject",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_rx.RxCross2, { size: 30 }, void 0, !1, {
            fileName: "app/component/Task.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/component/Task.tsx",
          lineNumber: 74,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/component/Task.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/Task.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/component/Task.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-10 flex justify-center w-full", children: "thanks the work is done" }, void 0, !1, {
    fileName: "app/component/Task.tsx",
    lineNumber: 35,
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
var import_node2 = require("@remix-run/node"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
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
  return action4 === "reject_task" && (console.log(...oo_oo2("1374042638_56_4_56_23_4", userId)), await db.task.update({
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
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Task_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
var index_default = Index;
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1310fe=_0x4a85;(function(_0x40022d,_0x435070){var _0x581d6e=_0x4a85,_0xae27bc=_0x40022d();while(!![]){try{var _0x92e9b=parseInt(_0x581d6e(0xb5))/0x1*(parseInt(_0x581d6e(0xd9))/0x2)+parseInt(_0x581d6e(0xa9))/0x3*(parseInt(_0x581d6e(0x140))/0x4)+parseInt(_0x581d6e(0xcb))/0x5+-parseInt(_0x581d6e(0xd6))/0x6+parseInt(_0x581d6e(0x149))/0x7*(-parseInt(_0x581d6e(0x9b))/0x8)+-parseInt(_0x581d6e(0x105))/0x9+-parseInt(_0x581d6e(0x9c))/0xa;if(_0x92e9b===_0x435070)break;else _0xae27bc['push'](_0xae27bc['shift']());}catch(_0x482a25){_0xae27bc['push'](_0xae27bc['shift']());}}}(_0x75fd,0xdc912));var j=Object[_0x1310fe(0x102)],H=Object[_0x1310fe(0xb1)],G=Object[_0x1310fe(0x10e)],ee=Object[_0x1310fe(0x8b)],te=Object[_0x1310fe(0x12b)],ne=Object[_0x1310fe(0x129)][_0x1310fe(0x11a)],re=(_0x428238,_0x4aa15a,_0x1fc398,_0x2976ec)=>{var _0x2a2673=_0x1310fe;if(_0x4aa15a&&typeof _0x4aa15a==_0x2a2673(0x7f)||typeof _0x4aa15a==_0x2a2673(0xc5)){for(let _0x3c355d of ee(_0x4aa15a))!ne[_0x2a2673(0xf3)](_0x428238,_0x3c355d)&&_0x3c355d!==_0x1fc398&&H(_0x428238,_0x3c355d,{'get':()=>_0x4aa15a[_0x3c355d],'enumerable':!(_0x2976ec=G(_0x4aa15a,_0x3c355d))||_0x2976ec[_0x2a2673(0x89)]});}return _0x428238;},x=(_0x26c04b,_0x3b6dbb,_0x457b65)=>(_0x457b65=_0x26c04b!=null?j(te(_0x26c04b)):{},re(_0x3b6dbb||!_0x26c04b||!_0x26c04b[_0x1310fe(0x156)]?H(_0x457b65,_0x1310fe(0x148),{'value':_0x26c04b,'enumerable':!0x0}):_0x457b65,_0x26c04b)),X=class{constructor(_0x1ecc1c,_0x1836cf,_0x2160cf,_0x26a081,_0x30909d){var _0x1585d2=_0x1310fe;this[_0x1585d2(0xdb)]=_0x1ecc1c,this['host']=_0x1836cf,this[_0x1585d2(0xda)]=_0x2160cf,this['nodeModules']=_0x26a081,this['dockerizedApp']=_0x30909d,this[_0x1585d2(0x11f)]=!0x0,this[_0x1585d2(0x103)]=!0x0,this[_0x1585d2(0x14e)]=!0x1,this[_0x1585d2(0x94)]=!0x1,this['_inNextEdge']=_0x1ecc1c[_0x1585d2(0xe6)]?.[_0x1585d2(0x87)]?.[_0x1585d2(0xb0)]==='edge',this[_0x1585d2(0xd5)]=!this['global'][_0x1585d2(0xe6)]?.[_0x1585d2(0x7c)]?.[_0x1585d2(0xd7)]&&!this[_0x1585d2(0x152)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x1585d2(0x131)]=0x14,this[_0x1585d2(0x145)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1585d2(0xd5)]?_0x1585d2(0x108):_0x1585d2(0x12e))+this[_0x1585d2(0x145)];}async[_0x1310fe(0xbc)](){var _0x581e84=_0x1310fe;if(this[_0x581e84(0x91)])return this[_0x581e84(0x91)];let _0x5311ce;if(this['_inBrowser']||this[_0x581e84(0x152)])_0x5311ce=this[_0x581e84(0xdb)][_0x581e84(0x10c)];else{if(this['global']['process']?.[_0x581e84(0x14a)])_0x5311ce=this['global'][_0x581e84(0xe6)]?.[_0x581e84(0x14a)];else try{let _0x3b9e8a=await import(_0x581e84(0xb9));_0x5311ce=(await import((await import('url'))[_0x581e84(0xf6)](_0x3b9e8a[_0x581e84(0x127)](this[_0x581e84(0xa8)],_0x581e84(0x79)))[_0x581e84(0xe8)]()))[_0x581e84(0x148)];}catch{try{_0x5311ce=require(require(_0x581e84(0xb9))[_0x581e84(0x127)](this[_0x581e84(0xa8)],'ws'));}catch{throw new Error(_0x581e84(0x9d));}}}return this[_0x581e84(0x91)]=_0x5311ce,_0x5311ce;}[_0x1310fe(0x120)](){var _0x5d54b6=_0x1310fe;this[_0x5d54b6(0x94)]||this[_0x5d54b6(0x14e)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x5d54b6(0x103)]=!0x1,this[_0x5d54b6(0x94)]=!0x0,this[_0x5d54b6(0xd2)]++,this[_0x5d54b6(0xa0)]=new Promise((_0x27eed4,_0x467d03)=>{var _0x150194=_0x5d54b6;this['getWebSocketClass']()['then'](_0x2baad7=>{var _0x3f9d70=_0x4a85;let _0x3597f2=new _0x2baad7('ws://'+(!this[_0x3f9d70(0xd5)]&&this[_0x3f9d70(0xbe)]?_0x3f9d70(0x84):this[_0x3f9d70(0x83)])+':'+this['port']);_0x3597f2[_0x3f9d70(0xaf)]=()=>{var _0x2fd85c=_0x3f9d70;this[_0x2fd85c(0x11f)]=!0x1,this[_0x2fd85c(0x8d)](_0x3597f2),this['_attemptToReconnectShortly'](),_0x467d03(new Error(_0x2fd85c(0x126)));},_0x3597f2[_0x3f9d70(0x110)]=()=>{var _0x252ddf=_0x3f9d70;this[_0x252ddf(0xd5)]||_0x3597f2[_0x252ddf(0x11d)]&&_0x3597f2[_0x252ddf(0x11d)][_0x252ddf(0x117)]&&_0x3597f2['_socket']['unref'](),_0x27eed4(_0x3597f2);},_0x3597f2[_0x3f9d70(0x15c)]=()=>{var _0x816f41=_0x3f9d70;this[_0x816f41(0x103)]=!0x0,this[_0x816f41(0x8d)](_0x3597f2),this['_attemptToReconnectShortly']();},_0x3597f2[_0x3f9d70(0x132)]=_0x30e0c0=>{var _0x3873e1=_0x3f9d70;try{_0x30e0c0&&_0x30e0c0[_0x3873e1(0x155)]&&this['_inBrowser']&&JSON[_0x3873e1(0xf8)](_0x30e0c0[_0x3873e1(0x155)])[_0x3873e1(0xfa)]===_0x3873e1(0xbb)&&this[_0x3873e1(0xdb)][_0x3873e1(0xd1)][_0x3873e1(0xbb)]();}catch{}};})[_0x150194(0x116)](_0x291f85=>(this[_0x150194(0x14e)]=!0x0,this[_0x150194(0x94)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x150194(0x11f)]=!0x0,this[_0x150194(0xd2)]=0x0,_0x291f85))[_0x150194(0xa7)](_0xdce05b=>(this[_0x150194(0x14e)]=!0x1,this[_0x150194(0x94)]=!0x1,console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x150194(0x145)]),_0x467d03(new Error(_0x150194(0x134)+(_0xdce05b&&_0xdce05b[_0x150194(0xbd)])))));}));}['_disposeWebsocket'](_0x2e941b){var _0x2e4afd=_0x1310fe;this[_0x2e4afd(0x14e)]=!0x1,this[_0x2e4afd(0x94)]=!0x1;try{_0x2e941b['onclose']=null,_0x2e941b[_0x2e4afd(0xaf)]=null,_0x2e941b[_0x2e4afd(0x110)]=null;}catch{}try{_0x2e941b[_0x2e4afd(0xdd)]<0x2&&_0x2e941b[_0x2e4afd(0xce)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2eb6bc=_0x1310fe;clearTimeout(this[_0x2eb6bc(0x7b)]),!(this[_0x2eb6bc(0xd2)]>=this[_0x2eb6bc(0x131)])&&(this[_0x2eb6bc(0x7b)]=setTimeout(()=>{var _0x1e6d68=_0x2eb6bc;this[_0x1e6d68(0x14e)]||this['_connecting']||(this[_0x1e6d68(0x120)](),this['_ws']?.[_0x1e6d68(0xa7)](()=>this[_0x1e6d68(0x76)]()));},0x1f4),this[_0x2eb6bc(0x7b)]['unref']&&this[_0x2eb6bc(0x7b)][_0x2eb6bc(0x117)]());}async[_0x1310fe(0xaa)](_0x5b473d){var _0x48e7bc=_0x1310fe;try{if(!this['_allowedToSend'])return;this[_0x48e7bc(0x103)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x48e7bc(0xaa)](JSON[_0x48e7bc(0xd8)](_0x5b473d));}catch(_0x38c570){console[_0x48e7bc(0x78)](this['_sendErrorMessage']+':\\x20'+(_0x38c570&&_0x38c570[_0x48e7bc(0xbd)])),this[_0x48e7bc(0x11f)]=!0x1,this[_0x48e7bc(0x76)]();}}};function _0x75fd(){var _0x58ded5=['autoExpandLimit','getter','count','reduceLimits','process','autoExpandMaxDepth','toString','51848','date','timeStamp','_setNodeExpandableState','autoExpandPreviousObjects','','_getOwnPropertyNames','_isMap','_isNegativeZero','bigint','call','_Symbol','positiveInfinity','pathToFileURL','RegExp','parse','match','method','allStrLength','hrtime','undefined','null','expressionsToEvaluate','_isPrimitiveWrapperType','number','create','_allowedToConnectOnSend','value','2489850dbovfj','indexOf','unshift','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertySymbols','substr','console','WebSocket','stackTraceLimit','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','onopen','_undefined','Set','resolveGetters','Buffer','_setNodeId','then','unref','setter','Map','hasOwnProperty','remix','coverage','_socket','_numberRegExp','_allowedToSend','_connectToHostNow','error','_isUndefined','root_exp_id','boolean','_p_name','logger\\x20websocket\\x20error','join','props','prototype','Boolean','getPrototypeOf','index','cappedProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","kunsang","192.168.249.223"],'type','_maxConnectAttemptCount','onmessage','_sortProps','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','log','set','[object\\x20Date]','timeEnd','edge','performance','NEGATIVE_INFINITY','split','string','[object\\x20BigInt]','Error','76vwWpJq','time','[object\\x20Set]','perf_hooks','negativeInfinity','_webSocketErrorDocsLink','_HTMLAllCollection','_getOwnPropertySymbols','default','469jEKUdL','_WebSocket','cappedElements','_type','Symbol','_connected','_capIfString','_setNodePermissions','strLength','_inNextEdge','_dateToString','trace','data','__es'+'Module','push','remix','sortProps','_isSet','expId','onclose','includes','astro','_addFunctionsNode','sort','level','_hasSetOnItsPath','_hasMapOnItsPath','depth','[object\\x20Array]','_attemptToReconnectShortly','hits','warn','ws/index.js','isExpressionToEvaluate','_reconnectTimeout','versions','totalStrLength','elements','object','[object\\x20Map]','_setNodeQueryPath','\\x20server','host','gateway.docker.internal',"c:\\\\Users\\\\tenku\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.253\\\\node_modules",'_objectToString','env','autoExpandPropertyCount','enumerable','name','getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','_disposeWebsocket','valueOf','_additionalMetadata','_hasSymbolPropertyOnItsPath','_WebSocketClass','_regExpToString','_processTreeNodeResult','_connecting','length','parent','\\x20browser','current','noFunctions','_property','147400DBuRzW','13119430LmSdPQ','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nan','_isPrimitiveType','_ws','nuxt','_console_ninja','bind','constructor','replace','','catch','nodeModules','141123wPSfpa','send','1699507428337','_cleanNode','_propertyName','_getOwnPropertyDescriptor','onerror','NEXT_RUNTIME','defineProperty','unknown','_addLoadNode','autoExpand','1taVjFT','_consoleNinjaAllowedToStart','_isArray','root_exp','path','String','reload','getWebSocketClass','message','dockerizedApp','_addObjectProperty','symbol','test','127.0.0.1','_setNodeLabel','concat','function','_addProperty','_blacklistedProperty','array','capped','1.0.0','8518315xtXqbN','_setNodeExpressionPath','rootExpression','close','_console_ninja_session','elapsed','location','_connectAttemptCount','forEach','hostname','_inBrowser','3739746NRJjFt','node','stringify','3504718eJPojB','port','global','negativeZero','readyState','now','serialize','_p_','HTMLAllCollection'];_0x75fd=function(){return _0x58ded5;};return _0x75fd();}function b(_0x1dfc24,_0x18c669,_0x1c0314,_0x1daa5f,_0x8adc79,_0x14f83d){var _0x4cf54d=_0x1310fe;let _0x1e36e7=_0x1c0314[_0x4cf54d(0x13c)](',')['map'](_0x51b380=>{var _0x6810c=_0x4cf54d;try{_0x1dfc24['_console_ninja_session']||((_0x8adc79==='next.js'||_0x8adc79===_0x6810c(0x11b)||_0x8adc79===_0x6810c(0x15e))&&(_0x8adc79+=!_0x1dfc24['process']?.[_0x6810c(0x7c)]?.[_0x6810c(0xd7)]&&_0x1dfc24[_0x6810c(0xe6)]?.[_0x6810c(0x87)]?.[_0x6810c(0xb0)]!==_0x6810c(0x139)?_0x6810c(0x97):_0x6810c(0x82)),_0x1dfc24[_0x6810c(0xcf)]={'id':+new Date(),'tool':_0x8adc79});let _0x2dfc2d=new X(_0x1dfc24,_0x18c669,_0x51b380,_0x1daa5f,_0x14f83d);return _0x2dfc2d[_0x6810c(0xaa)][_0x6810c(0xa3)](_0x2dfc2d);}catch(_0x58ecc6){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x58ecc6&&_0x58ecc6[_0x6810c(0xbd)]),()=>{};}});return _0x12de53=>_0x1e36e7[_0x4cf54d(0xd3)](_0x56fed6=>_0x56fed6(_0x12de53));}function W(_0x39fcf8){var _0x40c9df=_0x1310fe;let _0x221143=function(_0x4079b3,_0x3a305d){return _0x3a305d-_0x4079b3;},_0x1cd98c;if(_0x39fcf8[_0x40c9df(0x13a)])_0x1cd98c=function(){var _0x1a95af=_0x40c9df;return _0x39fcf8[_0x1a95af(0x13a)]['now']();};else{if(_0x39fcf8[_0x40c9df(0xe6)]&&_0x39fcf8[_0x40c9df(0xe6)][_0x40c9df(0xfc)]&&_0x39fcf8[_0x40c9df(0xe6)]?.[_0x40c9df(0x87)]?.['NEXT_RUNTIME']!==_0x40c9df(0x139))_0x1cd98c=function(){var _0x448574=_0x40c9df;return _0x39fcf8[_0x448574(0xe6)][_0x448574(0xfc)]();},_0x221143=function(_0x29937a,_0x395034){return 0x3e8*(_0x395034[0x0]-_0x29937a[0x0])+(_0x395034[0x1]-_0x29937a[0x1])/0xf4240;};else try{let {performance:_0x4aed7b}=require(_0x40c9df(0x143));_0x1cd98c=function(){var _0x169ed8=_0x40c9df;return _0x4aed7b[_0x169ed8(0xde)]();};}catch{_0x1cd98c=function(){return+new Date();};}}return{'elapsed':_0x221143,'timeStamp':_0x1cd98c,'now':()=>Date[_0x40c9df(0xde)]()};}function _0x4a85(_0x1b7707,_0x40ffab){var _0x75fdec=_0x75fd();return _0x4a85=function(_0x4a8535,_0xefc67e){_0x4a8535=_0x4a8535-0x71;var _0x33db70=_0x75fdec[_0x4a8535];return _0x33db70;},_0x4a85(_0x1b7707,_0x40ffab);}function J(_0x39f597,_0x2004ce,_0x520f78){var _0x63d382=_0x1310fe;if(_0x39f597[_0x63d382(0xb6)]!==void 0x0)return _0x39f597[_0x63d382(0xb6)];let _0x788fd6=_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x7c)]?.[_0x63d382(0xd7)]||_0x39f597[_0x63d382(0xe6)]?.[_0x63d382(0x87)]?.['NEXT_RUNTIME']===_0x63d382(0x139);return _0x788fd6&&_0x520f78===_0x63d382(0xa1)?_0x39f597[_0x63d382(0xb6)]=!0x1:_0x39f597[_0x63d382(0xb6)]=_0x788fd6||!_0x2004ce||_0x39f597[_0x63d382(0xd1)]?.[_0x63d382(0xd4)]&&_0x2004ce[_0x63d382(0x15d)](_0x39f597['location'][_0x63d382(0xd4)]),_0x39f597[_0x63d382(0xb6)];}function Y(_0x156b9f,_0x286ba8,_0x5b1336,_0x39df15){var _0x5da58b=_0x1310fe;_0x156b9f=_0x156b9f,_0x286ba8=_0x286ba8,_0x5b1336=_0x5b1336,_0x39df15=_0x39df15;let _0x220152=W(_0x156b9f),_0x4cb6e3=_0x220152['elapsed'],_0x5b5c6d=_0x220152[_0x5da58b(0xeb)];class _0x570570{constructor(){var _0x54c7bd=_0x5da58b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x54c7bd(0x11e)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x54c7bd(0x111)]=_0x156b9f['undefined'],this['_HTMLAllCollection']=_0x156b9f['HTMLAllCollection'],this[_0x54c7bd(0xae)]=Object[_0x54c7bd(0x10e)],this[_0x54c7bd(0xef)]=Object[_0x54c7bd(0x8b)],this[_0x54c7bd(0xf4)]=_0x156b9f[_0x54c7bd(0x14d)],this[_0x54c7bd(0x92)]=RegExp[_0x54c7bd(0x129)][_0x54c7bd(0xe8)],this['_dateToString']=Date[_0x54c7bd(0x129)]['toString'];}[_0x5da58b(0xdf)](_0x221296,_0x226a8e,_0x4e7c19,_0x20e091){var _0x355b3e=_0x5da58b,_0x5ba343=this,_0x4c040a=_0x4e7c19['autoExpand'];function _0x1b4918(_0x2b74b6,_0x2f9418,_0x476fde){var _0x365cbe=_0x4a85;_0x2f9418[_0x365cbe(0x130)]=_0x365cbe(0xb2),_0x2f9418[_0x365cbe(0x121)]=_0x2b74b6[_0x365cbe(0xbd)],_0x355d37=_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)],_0x476fde[_0x365cbe(0xd7)][_0x365cbe(0x98)]=_0x2f9418,_0x5ba343['_treeNodePropertiesBeforeFullValue'](_0x2f9418,_0x476fde);}try{_0x4e7c19[_0x355b3e(0x71)]++,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)][_0x355b3e(0x157)](_0x226a8e);var _0x4158db,_0x164970,_0x23f004,_0x237bee,_0x185ed9=[],_0x6e02ca=[],_0x366463,_0x96f56f=this[_0x355b3e(0x14c)](_0x226a8e),_0x1b37a7=_0x96f56f===_0x355b3e(0xc8),_0x9b8850=!0x1,_0x1d3294=_0x96f56f===_0x355b3e(0xc5),_0x4fedcf=this[_0x355b3e(0x9f)](_0x96f56f),_0x49d4d5=this['_isPrimitiveWrapperType'](_0x96f56f),_0x316c56=_0x4fedcf||_0x49d4d5,_0x200809={},_0x1bf73c=0x0,_0x3fe784=!0x1,_0x355d37,_0x56036b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4e7c19[_0x355b3e(0x74)]){if(_0x1b37a7){if(_0x164970=_0x226a8e['length'],_0x164970>_0x4e7c19[_0x355b3e(0x7e)]){for(_0x23f004=0x0,_0x237bee=_0x4e7c19[_0x355b3e(0x7e)],_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca['push'](_0x5ba343[_0x355b3e(0xc6)](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));_0x221296[_0x355b3e(0x14b)]=!0x0;}else{for(_0x23f004=0x0,_0x237bee=_0x164970,_0x4158db=_0x23f004;_0x4158db<_0x237bee;_0x4158db++)_0x6e02ca[_0x355b3e(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,_0x96f56f,_0x4158db,_0x4e7c19));}_0x4e7c19[_0x355b3e(0x88)]+=_0x6e02ca[_0x355b3e(0x95)];}if(!(_0x96f56f==='null'||_0x96f56f===_0x355b3e(0xfd))&&!_0x4fedcf&&_0x96f56f!=='String'&&_0x96f56f!==_0x355b3e(0x114)&&_0x96f56f!==_0x355b3e(0xf2)){var _0x2d385a=_0x20e091['props']||_0x4e7c19[_0x355b3e(0x128)];if(this[_0x355b3e(0x15a)](_0x226a8e)?(_0x4158db=0x0,_0x226a8e[_0x355b3e(0xd3)](function(_0x485f70){var _0x39c034=_0x355b3e;if(_0x1bf73c++,_0x4e7c19['autoExpandPropertyCount']++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x39c034(0xb4)]&&_0x4e7c19['autoExpandPropertyCount']>_0x4e7c19[_0x39c034(0xe2)]){_0x3fe784=!0x0;return;}_0x6e02ca[_0x39c034(0x157)](_0x5ba343['_addProperty'](_0x185ed9,_0x226a8e,'Set',_0x4158db++,_0x4e7c19,function(_0x688b7d){return function(){return _0x688b7d;};}(_0x485f70)));})):this[_0x355b3e(0xf0)](_0x226a8e)&&_0x226a8e[_0x355b3e(0xd3)](function(_0x3a0f62,_0x2e6ce7){var _0x3a93fb=_0x355b3e;if(_0x1bf73c++,_0x4e7c19[_0x3a93fb(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;return;}if(!_0x4e7c19['isExpressionToEvaluate']&&_0x4e7c19[_0x3a93fb(0xb4)]&&_0x4e7c19[_0x3a93fb(0x88)]>_0x4e7c19[_0x3a93fb(0xe2)]){_0x3fe784=!0x0;return;}var _0x2e7ad6=_0x2e6ce7[_0x3a93fb(0xe8)]();_0x2e7ad6[_0x3a93fb(0x95)]>0x64&&(_0x2e7ad6=_0x2e7ad6['slice'](0x0,0x64)+'...'),_0x6e02ca['push'](_0x5ba343[_0x3a93fb(0xc6)](_0x185ed9,_0x226a8e,'Map',_0x2e7ad6,_0x4e7c19,function(_0x44f16b){return function(){return _0x44f16b;};}(_0x3a0f62)));}),!_0x9b8850){try{for(_0x366463 in _0x226a8e)if(!(_0x1b37a7&&_0x56036b[_0x355b3e(0xc1)](_0x366463))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19[_0x355b3e(0xe2)]){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}catch{}if(_0x200809['_p_length']=!0x0,_0x1d3294&&(_0x200809[_0x355b3e(0x125)]=!0x0),!_0x3fe784){var _0x4997fb=[][_0x355b3e(0xc4)](this[_0x355b3e(0xef)](_0x226a8e))['concat'](this[_0x355b3e(0x147)](_0x226a8e));for(_0x4158db=0x0,_0x164970=_0x4997fb[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)if(_0x366463=_0x4997fb[_0x4158db],!(_0x1b37a7&&_0x56036b['test'](_0x366463[_0x355b3e(0xe8)]()))&&!this[_0x355b3e(0xc7)](_0x226a8e,_0x366463,_0x4e7c19)&&!_0x200809[_0x355b3e(0xe0)+_0x366463[_0x355b3e(0xe8)]()]){if(_0x1bf73c++,_0x4e7c19[_0x355b3e(0x88)]++,_0x1bf73c>_0x2d385a){_0x3fe784=!0x0;break;}if(!_0x4e7c19[_0x355b3e(0x7a)]&&_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0x88)]>_0x4e7c19['autoExpandLimit']){_0x3fe784=!0x0;break;}_0x6e02ca[_0x355b3e(0x157)](_0x5ba343[_0x355b3e(0xbf)](_0x185ed9,_0x200809,_0x226a8e,_0x96f56f,_0x366463,_0x4e7c19));}}}}}if(_0x221296[_0x355b3e(0x130)]=_0x96f56f,_0x316c56?(_0x221296['value']=_0x226a8e[_0x355b3e(0x8e)](),this[_0x355b3e(0x14f)](_0x96f56f,_0x221296,_0x4e7c19,_0x20e091)):_0x96f56f===_0x355b3e(0xea)?_0x221296['value']=this[_0x355b3e(0x153)]['call'](_0x226a8e):_0x96f56f==='bigint'?_0x221296[_0x355b3e(0x104)]=_0x226a8e[_0x355b3e(0xe8)]():_0x96f56f===_0x355b3e(0xf7)?_0x221296['value']=this[_0x355b3e(0x92)][_0x355b3e(0xf3)](_0x226a8e):_0x96f56f===_0x355b3e(0xc0)&&this[_0x355b3e(0xf4)]?_0x221296['value']=this[_0x355b3e(0xf4)][_0x355b3e(0x129)]['toString']['call'](_0x226a8e):!_0x4e7c19[_0x355b3e(0x74)]&&!(_0x96f56f===_0x355b3e(0xfe)||_0x96f56f===_0x355b3e(0xfd))&&(delete _0x221296['value'],_0x221296[_0x355b3e(0xc9)]=!0x0),_0x3fe784&&(_0x221296[_0x355b3e(0x12d)]=!0x0),_0x355d37=_0x4e7c19['node'][_0x355b3e(0x98)],_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x221296,this[_0x355b3e(0x8c)](_0x221296,_0x4e7c19),_0x6e02ca['length']){for(_0x4158db=0x0,_0x164970=_0x6e02ca[_0x355b3e(0x95)];_0x4158db<_0x164970;_0x4158db++)_0x6e02ca[_0x4158db](_0x4158db);}_0x185ed9[_0x355b3e(0x95)]&&(_0x221296[_0x355b3e(0x128)]=_0x185ed9);}catch(_0x196713){_0x1b4918(_0x196713,_0x221296,_0x4e7c19);}return this[_0x355b3e(0x8f)](_0x226a8e,_0x221296),this[_0x355b3e(0x10f)](_0x221296,_0x4e7c19),_0x4e7c19[_0x355b3e(0xd7)][_0x355b3e(0x98)]=_0x355d37,_0x4e7c19['level']--,_0x4e7c19['autoExpand']=_0x4c040a,_0x4e7c19[_0x355b3e(0xb4)]&&_0x4e7c19[_0x355b3e(0xed)]['pop'](),_0x221296;}[_0x5da58b(0x147)](_0x113993){var _0x3c6b08=_0x5da58b;return Object['getOwnPropertySymbols']?Object[_0x3c6b08(0x109)](_0x113993):[];}['_isSet'](_0x17b4ca){var _0x36e89e=_0x5da58b;return!!(_0x17b4ca&&_0x156b9f['Set']&&this[_0x36e89e(0x86)](_0x17b4ca)===_0x36e89e(0x142)&&_0x17b4ca[_0x36e89e(0xd3)]);}['_blacklistedProperty'](_0x46c07b,_0xe4b604,_0xca8f92){var _0x1c16f6=_0x5da58b;return _0xca8f92[_0x1c16f6(0x99)]?typeof _0x46c07b[_0xe4b604]=='function':!0x1;}[_0x5da58b(0x14c)](_0x55e0ad){var _0x107872=_0x5da58b,_0x47d13a='';return _0x47d13a=typeof _0x55e0ad,_0x47d13a===_0x107872(0x7f)?this['_objectToString'](_0x55e0ad)===_0x107872(0x75)?_0x47d13a='array':this[_0x107872(0x86)](_0x55e0ad)===_0x107872(0x137)?_0x47d13a=_0x107872(0xea):this['_objectToString'](_0x55e0ad)===_0x107872(0x13e)?_0x47d13a='bigint':_0x55e0ad===null?_0x47d13a=_0x107872(0xfe):_0x55e0ad[_0x107872(0xa4)]&&(_0x47d13a=_0x55e0ad[_0x107872(0xa4)][_0x107872(0x8a)]||_0x47d13a):_0x47d13a===_0x107872(0xfd)&&this['_HTMLAllCollection']&&_0x55e0ad instanceof this[_0x107872(0x146)]&&(_0x47d13a=_0x107872(0xe1)),_0x47d13a;}[_0x5da58b(0x86)](_0x3d2323){var _0x19bd5e=_0x5da58b;return Object[_0x19bd5e(0x129)][_0x19bd5e(0xe8)][_0x19bd5e(0xf3)](_0x3d2323);}[_0x5da58b(0x9f)](_0xd07c0c){var _0x3570d8=_0x5da58b;return _0xd07c0c===_0x3570d8(0x124)||_0xd07c0c==='string'||_0xd07c0c===_0x3570d8(0x101);}[_0x5da58b(0x100)](_0x1fe8a4){var _0x2fd545=_0x5da58b;return _0x1fe8a4===_0x2fd545(0x12a)||_0x1fe8a4===_0x2fd545(0xba)||_0x1fe8a4==='Number';}[_0x5da58b(0xc6)](_0x3a52eb,_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0){var _0x3760c9=this;return function(_0x34a148){var _0x51bb28=_0x4a85,_0x3428f8=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x98)],_0x270a21=_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)],_0x32c2c9=_0xa076d1[_0x51bb28(0xd7)]['parent'];_0xa076d1[_0x51bb28(0xd7)]['parent']=_0x3428f8,_0xa076d1[_0x51bb28(0xd7)]['index']=typeof _0x12e823==_0x51bb28(0x101)?_0x12e823:_0x34a148,_0x3a52eb[_0x51bb28(0x157)](_0x3760c9[_0x51bb28(0x9a)](_0x230372,_0x366f0e,_0x12e823,_0xa076d1,_0xd25aa0)),_0xa076d1['node'][_0x51bb28(0x96)]=_0x32c2c9,_0xa076d1[_0x51bb28(0xd7)][_0x51bb28(0x12c)]=_0x270a21;};}[_0x5da58b(0xbf)](_0x1c48c6,_0x4c59a0,_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f){var _0x69723d=_0x5da58b,_0x54e99e=this;return _0x4c59a0[_0x69723d(0xe0)+_0x5926aa[_0x69723d(0xe8)]()]=!0x0,function(_0x1f30c2){var _0x9b7f7d=_0x69723d,_0xd2113=_0x31d5cd['node'][_0x9b7f7d(0x98)],_0x8f6d1f=_0x31d5cd[_0x9b7f7d(0xd7)]['index'],_0x22119b=_0x31d5cd[_0x9b7f7d(0xd7)]['parent'];_0x31d5cd[_0x9b7f7d(0xd7)]['parent']=_0xd2113,_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x12c)]=_0x1f30c2,_0x1c48c6[_0x9b7f7d(0x157)](_0x54e99e['_property'](_0x101345,_0x5f4e2a,_0x5926aa,_0x31d5cd,_0x6b782f)),_0x31d5cd[_0x9b7f7d(0xd7)][_0x9b7f7d(0x96)]=_0x22119b,_0x31d5cd[_0x9b7f7d(0xd7)]['index']=_0x8f6d1f;};}['_property'](_0x51dc3d,_0x5b5752,_0x599773,_0x4a5eb4,_0x32566f){var _0x257e2a=_0x5da58b,_0x21157d=this;_0x32566f||(_0x32566f=function(_0x4a84b4,_0x1549d9){return _0x4a84b4[_0x1549d9];});var _0x41a6f0=_0x599773[_0x257e2a(0xe8)](),_0x2ccfa7=_0x4a5eb4[_0x257e2a(0xff)]||{},_0x49a171=_0x4a5eb4[_0x257e2a(0x74)],_0x4a4f99=_0x4a5eb4[_0x257e2a(0x7a)];try{var _0x318064=this[_0x257e2a(0xf0)](_0x51dc3d),_0x3df7af=_0x41a6f0;_0x318064&&_0x3df7af[0x0]==='\\x27'&&(_0x3df7af=_0x3df7af['substr'](0x1,_0x3df7af[_0x257e2a(0x95)]-0x2));var _0x217f43=_0x4a5eb4['expressionsToEvaluate']=_0x2ccfa7[_0x257e2a(0xe0)+_0x3df7af];_0x217f43&&(_0x4a5eb4[_0x257e2a(0x74)]=_0x4a5eb4['depth']+0x1),_0x4a5eb4['isExpressionToEvaluate']=!!_0x217f43;var _0x5b9123=typeof _0x599773==_0x257e2a(0xc0),_0x41f536={'name':_0x5b9123||_0x318064?_0x41a6f0:this[_0x257e2a(0xad)](_0x41a6f0)};if(_0x5b9123&&(_0x41f536['symbol']=!0x0),!(_0x5b5752==='array'||_0x5b5752===_0x257e2a(0x13f))){var _0x509c30=this['_getOwnPropertyDescriptor'](_0x51dc3d,_0x599773);if(_0x509c30&&(_0x509c30[_0x257e2a(0x136)]&&(_0x41f536[_0x257e2a(0x118)]=!0x0),_0x509c30['get']&&!_0x217f43&&!_0x4a5eb4[_0x257e2a(0x113)]))return _0x41f536[_0x257e2a(0xe3)]=!0x0,this['_processTreeNodeResult'](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x5afc1d;try{_0x5afc1d=_0x32566f(_0x51dc3d,_0x599773);}catch(_0x5a141d){return _0x41f536={'name':_0x41a6f0,'type':_0x257e2a(0xb2),'error':_0x5a141d[_0x257e2a(0xbd)]},this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4),_0x41f536;}var _0x13a4ab=this['_type'](_0x5afc1d),_0x8ff484=this['_isPrimitiveType'](_0x13a4ab);if(_0x41f536['type']=_0x13a4ab,_0x8ff484)this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x283c8e=_0x257e2a;_0x41f536[_0x283c8e(0x104)]=_0x5afc1d[_0x283c8e(0x8e)](),!_0x217f43&&_0x21157d['_capIfString'](_0x13a4ab,_0x41f536,_0x4a5eb4,{});});else{var _0x354b28=_0x4a5eb4[_0x257e2a(0xb4)]&&_0x4a5eb4[_0x257e2a(0x71)]<_0x4a5eb4[_0x257e2a(0xe7)]&&_0x4a5eb4['autoExpandPreviousObjects'][_0x257e2a(0x106)](_0x5afc1d)<0x0&&_0x13a4ab!==_0x257e2a(0xc5)&&_0x4a5eb4[_0x257e2a(0x88)]<_0x4a5eb4['autoExpandLimit'];_0x354b28||_0x4a5eb4['level']<_0x49a171||_0x217f43?(this[_0x257e2a(0xdf)](_0x41f536,_0x5afc1d,_0x4a5eb4,_0x217f43||{}),this[_0x257e2a(0x8f)](_0x5afc1d,_0x41f536)):this[_0x257e2a(0x93)](_0x41f536,_0x4a5eb4,_0x5afc1d,function(){var _0x214cb1=_0x257e2a;_0x13a4ab===_0x214cb1(0xfe)||_0x13a4ab===_0x214cb1(0xfd)||(delete _0x41f536[_0x214cb1(0x104)],_0x41f536[_0x214cb1(0xc9)]=!0x0);});}return _0x41f536;}finally{_0x4a5eb4[_0x257e2a(0xff)]=_0x2ccfa7,_0x4a5eb4['depth']=_0x49a171,_0x4a5eb4[_0x257e2a(0x7a)]=_0x4a4f99;}}[_0x5da58b(0x14f)](_0x5db3c2,_0x453b34,_0x4b1c9b,_0x1619bc){var _0x1dfb5b=_0x5da58b,_0x58fb29=_0x1619bc['strLength']||_0x4b1c9b['strLength'];if((_0x5db3c2===_0x1dfb5b(0x13d)||_0x5db3c2===_0x1dfb5b(0xba))&&_0x453b34['value']){let _0x380d62=_0x453b34['value'][_0x1dfb5b(0x95)];_0x4b1c9b[_0x1dfb5b(0xfb)]+=_0x380d62,_0x4b1c9b[_0x1dfb5b(0xfb)]>_0x4b1c9b[_0x1dfb5b(0x7d)]?(_0x453b34[_0x1dfb5b(0xc9)]='',delete _0x453b34[_0x1dfb5b(0x104)]):_0x380d62>_0x58fb29&&(_0x453b34[_0x1dfb5b(0xc9)]=_0x453b34[_0x1dfb5b(0x104)][_0x1dfb5b(0x10a)](0x0,_0x58fb29),delete _0x453b34[_0x1dfb5b(0x104)]);}}[_0x5da58b(0xf0)](_0x1ee287){var _0x568b36=_0x5da58b;return!!(_0x1ee287&&_0x156b9f[_0x568b36(0x119)]&&this[_0x568b36(0x86)](_0x1ee287)===_0x568b36(0x80)&&_0x1ee287[_0x568b36(0xd3)]);}[_0x5da58b(0xad)](_0x5f3f7a){var _0x5147cd=_0x5da58b;if(_0x5f3f7a[_0x5147cd(0xf9)](/^\\d+$/))return _0x5f3f7a;var _0x1bb7b8;try{_0x1bb7b8=JSON[_0x5147cd(0xd8)](''+_0x5f3f7a);}catch{_0x1bb7b8='\\x22'+this[_0x5147cd(0x86)](_0x5f3f7a)+'\\x22';}return _0x1bb7b8[_0x5147cd(0xf9)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1bb7b8=_0x1bb7b8[_0x5147cd(0x10a)](0x1,_0x1bb7b8[_0x5147cd(0x95)]-0x2):_0x1bb7b8=_0x1bb7b8[_0x5147cd(0xa5)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x5147cd(0xa5)](/(^"|"$)/g,'\\x27'),_0x1bb7b8;}[_0x5da58b(0x93)](_0x372cf1,_0x2931a7,_0x453b04,_0xf2f845){var _0x47a4c5=_0x5da58b;this[_0x47a4c5(0x8c)](_0x372cf1,_0x2931a7),_0xf2f845&&_0xf2f845(),this[_0x47a4c5(0x8f)](_0x453b04,_0x372cf1),this[_0x47a4c5(0x10f)](_0x372cf1,_0x2931a7);}[_0x5da58b(0x8c)](_0x24ed93,_0x3a358b){var _0x19c5b0=_0x5da58b;this[_0x19c5b0(0x115)](_0x24ed93,_0x3a358b),this['_setNodeQueryPath'](_0x24ed93,_0x3a358b),this[_0x19c5b0(0xcc)](_0x24ed93,_0x3a358b),this['_setNodePermissions'](_0x24ed93,_0x3a358b);}[_0x5da58b(0x115)](_0xff815e,_0x4e3c1e){}[_0x5da58b(0x81)](_0x1e166c,_0x4b127d){}[_0x5da58b(0xc3)](_0x257b15,_0x4fc019){}[_0x5da58b(0x122)](_0x26e354){var _0x4b918e=_0x5da58b;return _0x26e354===this[_0x4b918e(0x111)];}['_treeNodePropertiesAfterFullValue'](_0xf4f77e,_0x319ac1){var _0xdf8832=_0x5da58b;this[_0xdf8832(0xc3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xec)](_0xf4f77e),_0x319ac1['sortProps']&&this['_sortProps'](_0xf4f77e),this[_0xdf8832(0x15f)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xb3)](_0xf4f77e,_0x319ac1),this[_0xdf8832(0xac)](_0xf4f77e);}[_0x5da58b(0x8f)](_0x4fbc71,_0x40ad23){var _0x6e2268=_0x5da58b;let _0x5addf2;try{_0x156b9f[_0x6e2268(0x10b)]&&(_0x5addf2=_0x156b9f[_0x6e2268(0x10b)]['error'],_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=function(){}),_0x4fbc71&&typeof _0x4fbc71[_0x6e2268(0x95)]==_0x6e2268(0x101)&&(_0x40ad23[_0x6e2268(0x95)]=_0x4fbc71[_0x6e2268(0x95)]);}catch{}finally{_0x5addf2&&(_0x156b9f[_0x6e2268(0x10b)][_0x6e2268(0x121)]=_0x5addf2);}if(_0x40ad23[_0x6e2268(0x130)]===_0x6e2268(0x101)||_0x40ad23[_0x6e2268(0x130)]==='Number'){if(isNaN(_0x40ad23[_0x6e2268(0x104)]))_0x40ad23[_0x6e2268(0x9e)]=!0x0,delete _0x40ad23['value'];else switch(_0x40ad23[_0x6e2268(0x104)]){case Number['POSITIVE_INFINITY']:_0x40ad23[_0x6e2268(0xf5)]=!0x0,delete _0x40ad23['value'];break;case Number[_0x6e2268(0x13b)]:_0x40ad23[_0x6e2268(0x144)]=!0x0,delete _0x40ad23['value'];break;case 0x0:this['_isNegativeZero'](_0x40ad23[_0x6e2268(0x104)])&&(_0x40ad23[_0x6e2268(0xdc)]=!0x0);break;}}else _0x40ad23[_0x6e2268(0x130)]==='function'&&typeof _0x4fbc71[_0x6e2268(0x8a)]==_0x6e2268(0x13d)&&_0x4fbc71['name']&&_0x40ad23[_0x6e2268(0x8a)]&&_0x4fbc71[_0x6e2268(0x8a)]!==_0x40ad23[_0x6e2268(0x8a)]&&(_0x40ad23['funcName']=_0x4fbc71[_0x6e2268(0x8a)]);}[_0x5da58b(0xf1)](_0x371a81){return 0x1/_0x371a81===Number['NEGATIVE_INFINITY'];}[_0x5da58b(0x133)](_0x35ea29){var _0x278f14=_0x5da58b;!_0x35ea29[_0x278f14(0x128)]||!_0x35ea29[_0x278f14(0x128)][_0x278f14(0x95)]||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0xc8)||_0x35ea29['type']==='Map'||_0x35ea29[_0x278f14(0x130)]===_0x278f14(0x112)||_0x35ea29['props'][_0x278f14(0x160)](function(_0xabb535,_0x240eed){var _0x4f8b38=_0x278f14,_0x25c351=_0xabb535[_0x4f8b38(0x8a)]['toLowerCase'](),_0xf2019b=_0x240eed[_0x4f8b38(0x8a)]['toLowerCase']();return _0x25c351<_0xf2019b?-0x1:_0x25c351>_0xf2019b?0x1:0x0;});}[_0x5da58b(0x15f)](_0x571a01,_0x81f15f){var _0x3f606a=_0x5da58b;if(!(_0x81f15f['noFunctions']||!_0x571a01[_0x3f606a(0x128)]||!_0x571a01[_0x3f606a(0x128)]['length'])){for(var _0x1d8884=[],_0x50c685=[],_0x441ae0=0x0,_0x52acf9=_0x571a01[_0x3f606a(0x128)][_0x3f606a(0x95)];_0x441ae0<_0x52acf9;_0x441ae0++){var _0x3a4da0=_0x571a01[_0x3f606a(0x128)][_0x441ae0];_0x3a4da0['type']==='function'?_0x1d8884[_0x3f606a(0x157)](_0x3a4da0):_0x50c685[_0x3f606a(0x157)](_0x3a4da0);}if(!(!_0x50c685[_0x3f606a(0x95)]||_0x1d8884[_0x3f606a(0x95)]<=0x1)){_0x571a01[_0x3f606a(0x128)]=_0x50c685;var _0x5a5468={'functionsNode':!0x0,'props':_0x1d8884};this[_0x3f606a(0x115)](_0x5a5468,_0x81f15f),this[_0x3f606a(0xc3)](_0x5a5468,_0x81f15f),this['_setNodeExpandableState'](_0x5a5468),this['_setNodePermissions'](_0x5a5468,_0x81f15f),_0x5a5468['id']+='\\x20f',_0x571a01['props'][_0x3f606a(0x107)](_0x5a5468);}}}[_0x5da58b(0xb3)](_0xc645b1,_0x13f08a){}[_0x5da58b(0xec)](_0x48a0db){}[_0x5da58b(0xb7)](_0x4b1fc){var _0x30f7fa=_0x5da58b;return Array['isArray'](_0x4b1fc)||typeof _0x4b1fc==_0x30f7fa(0x7f)&&this[_0x30f7fa(0x86)](_0x4b1fc)===_0x30f7fa(0x75);}[_0x5da58b(0x150)](_0xc637f8,_0x41eaa6){}[_0x5da58b(0xac)](_0x2f752e){var _0x80a15f=_0x5da58b;delete _0x2f752e[_0x80a15f(0x90)],delete _0x2f752e[_0x80a15f(0x72)],delete _0x2f752e[_0x80a15f(0x73)];}[_0x5da58b(0xcc)](_0x16e197,_0x90e55f){}}let _0x297bd1=new _0x570570(),_0x5e45ea={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x336ab4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x39878a(_0x52be6f,_0x4e39bd,_0x155528,_0x5a71f9,_0x10799c,_0x12352b){var _0x138c89=_0x5da58b;let _0x348017,_0x5bbc79;try{_0x5bbc79=_0x5b5c6d(),_0x348017=_0x5b1336[_0x4e39bd],!_0x348017||_0x5bbc79-_0x348017['ts']>0x1f4&&_0x348017[_0x138c89(0xe4)]&&_0x348017[_0x138c89(0x141)]/_0x348017['count']<0x64?(_0x5b1336[_0x4e39bd]=_0x348017={'count':0x0,'time':0x0,'ts':_0x5bbc79},_0x5b1336[_0x138c89(0x77)]={}):_0x5bbc79-_0x5b1336[_0x138c89(0x77)]['ts']>0x32&&_0x5b1336['hits']['count']&&_0x5b1336['hits'][_0x138c89(0x141)]/_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe4)]<0x64&&(_0x5b1336['hits']={});let _0x2aee37=[],_0x448640=_0x348017['reduceLimits']||_0x5b1336[_0x138c89(0x77)][_0x138c89(0xe5)]?_0x336ab4:_0x5e45ea,_0x2c2399=_0x3341ee=>{var _0x5024e7=_0x138c89;let _0x3eb894={};return _0x3eb894[_0x5024e7(0x128)]=_0x3341ee['props'],_0x3eb894[_0x5024e7(0x7e)]=_0x3341ee[_0x5024e7(0x7e)],_0x3eb894[_0x5024e7(0x151)]=_0x3341ee[_0x5024e7(0x151)],_0x3eb894[_0x5024e7(0x7d)]=_0x3341ee[_0x5024e7(0x7d)],_0x3eb894[_0x5024e7(0xe2)]=_0x3341ee[_0x5024e7(0xe2)],_0x3eb894[_0x5024e7(0xe7)]=_0x3341ee[_0x5024e7(0xe7)],_0x3eb894[_0x5024e7(0x159)]=!0x1,_0x3eb894[_0x5024e7(0x99)]=!_0x286ba8,_0x3eb894[_0x5024e7(0x74)]=0x1,_0x3eb894['level']=0x0,_0x3eb894[_0x5024e7(0x15b)]=_0x5024e7(0x123),_0x3eb894[_0x5024e7(0xcd)]=_0x5024e7(0xb8),_0x3eb894[_0x5024e7(0xb4)]=!0x0,_0x3eb894[_0x5024e7(0xed)]=[],_0x3eb894[_0x5024e7(0x88)]=0x0,_0x3eb894[_0x5024e7(0x113)]=!0x0,_0x3eb894[_0x5024e7(0xfb)]=0x0,_0x3eb894[_0x5024e7(0xd7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3eb894;};for(var _0x2beb3e=0x0;_0x2beb3e<_0x10799c['length'];_0x2beb3e++)_0x2aee37['push'](_0x297bd1[_0x138c89(0xdf)]({'timeNode':_0x52be6f===_0x138c89(0x141)||void 0x0},_0x10799c[_0x2beb3e],_0x2c2399(_0x448640),{}));if(_0x52be6f===_0x138c89(0x154)){let _0x448dc8=Error[_0x138c89(0x10d)];try{Error[_0x138c89(0x10d)]=0x1/0x0,_0x2aee37[_0x138c89(0x157)](_0x297bd1[_0x138c89(0xdf)]({'stackNode':!0x0},new Error()['stack'],_0x2c2399(_0x448640),{'strLength':0x1/0x0}));}finally{Error[_0x138c89(0x10d)]=_0x448dc8;}}return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':_0x2aee37,'id':_0x4e39bd,'context':_0x12352b}]};}catch(_0x18aed3){return{'method':_0x138c89(0x135),'version':_0x39df15,'args':[{'ts':_0x155528,'session':_0x5a71f9,'args':[{'type':_0x138c89(0xb2),'error':_0x18aed3&&_0x18aed3[_0x138c89(0xbd)]}],'id':_0x4e39bd,'context':_0x12352b}]};}finally{try{if(_0x348017&&_0x5bbc79){let _0x18f749=_0x5b5c6d();_0x348017[_0x138c89(0xe4)]++,_0x348017[_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x348017['ts']=_0x18f749,_0x5b1336[_0x138c89(0x77)]['count']++,_0x5b1336[_0x138c89(0x77)][_0x138c89(0x141)]+=_0x4cb6e3(_0x5bbc79,_0x18f749),_0x5b1336['hits']['ts']=_0x18f749,(_0x348017[_0x138c89(0xe4)]>0x32||_0x348017['time']>0x64)&&(_0x348017[_0x138c89(0xe5)]=!0x0),(_0x5b1336['hits'][_0x138c89(0xe4)]>0x3e8||_0x5b1336['hits'][_0x138c89(0x141)]>0x12c)&&(_0x5b1336[_0x138c89(0x77)]['reduceLimits']=!0x0);}}catch{}}}return _0x39878a;}((_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x598bb0,_0xb18e8b,_0x1dcb1a,_0x4751e7,_0x1a72f8)=>{var _0x51e818=_0x1310fe;if(_0x418e88[_0x51e818(0xa2)])return _0x418e88['_console_ninja'];if(!J(_0x418e88,_0x1dcb1a,_0x92866c))return _0x418e88[_0x51e818(0xa2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x418e88['_console_ninja'];let _0x5d29e0=W(_0x418e88),_0x1ed307=_0x5d29e0[_0x51e818(0xd0)],_0x4ea172=_0x5d29e0['timeStamp'],_0x3dcb55=_0x5d29e0[_0x51e818(0xde)],_0x4142e2={'hits':{},'ts':{}},_0x40d94c=Y(_0x418e88,_0x4751e7,_0x4142e2,_0x598bb0),_0x4756a3=_0x54dccf=>{_0x4142e2['ts'][_0x54dccf]=_0x4ea172();},_0x413e3e=(_0x5df344,_0x262d1d)=>{let _0x4a3324=_0x4142e2['ts'][_0x262d1d];if(delete _0x4142e2['ts'][_0x262d1d],_0x4a3324){let _0x3f1b62=_0x1ed307(_0x4a3324,_0x4ea172());_0x4f7e60(_0x40d94c('time',_0x5df344,_0x3dcb55(),_0xfe58e6,[_0x3f1b62],_0x262d1d));}},_0x597ac3=_0x660faf=>_0x2b5b1a=>{var _0x174c09=_0x51e818;try{_0x4756a3(_0x2b5b1a),_0x660faf(_0x2b5b1a);}finally{_0x418e88[_0x174c09(0x10b)][_0x174c09(0x141)]=_0x660faf;}},_0x2ba35e=_0x2fda20=>_0x512bf4=>{var _0x3df873=_0x51e818;try{let [_0x253efc,_0x103f03]=_0x512bf4[_0x3df873(0x13c)](':logPointId:');_0x413e3e(_0x103f03,_0x253efc),_0x2fda20(_0x253efc);}finally{_0x418e88[_0x3df873(0x10b)][_0x3df873(0x138)]=_0x2fda20;}};_0x418e88[_0x51e818(0xa2)]={'consoleLog':(_0x2beefb,_0x2380bb)=>{var _0x249beb=_0x51e818;_0x418e88[_0x249beb(0x10b)][_0x249beb(0x135)]['name']!=='disabledLog'&&_0x4f7e60(_0x40d94c(_0x249beb(0x135),_0x2beefb,_0x3dcb55(),_0xfe58e6,_0x2380bb));},'consoleTrace':(_0x534c6d,_0x1b8525)=>{var _0x4850d2=_0x51e818;_0x418e88[_0x4850d2(0x10b)][_0x4850d2(0x135)][_0x4850d2(0x8a)]!=='disabledTrace'&&_0x4f7e60(_0x40d94c(_0x4850d2(0x154),_0x534c6d,_0x3dcb55(),_0xfe58e6,_0x1b8525));},'consoleTime':()=>{var _0x36c84e=_0x51e818;_0x418e88['console'][_0x36c84e(0x141)]=_0x597ac3(_0x418e88[_0x36c84e(0x10b)][_0x36c84e(0x141)]);},'consoleTimeEnd':()=>{var _0x4b116a=_0x51e818;_0x418e88[_0x4b116a(0x10b)]['timeEnd']=_0x2ba35e(_0x418e88[_0x4b116a(0x10b)][_0x4b116a(0x138)]);},'autoLog':(_0x3ceab8,_0x4e2792)=>{var _0x58268a=_0x51e818;_0x4f7e60(_0x40d94c(_0x58268a(0x135),_0x4e2792,_0x3dcb55(),_0xfe58e6,[_0x3ceab8]));},'autoLogMany':(_0x52b390,_0x251cfc)=>{_0x4f7e60(_0x40d94c('log',_0x52b390,_0x3dcb55(),_0xfe58e6,_0x251cfc));},'autoTrace':(_0x1b34bb,_0x4b85c2)=>{var _0x1035ac=_0x51e818;_0x4f7e60(_0x40d94c(_0x1035ac(0x154),_0x4b85c2,_0x3dcb55(),_0xfe58e6,[_0x1b34bb]));},'autoTraceMany':(_0x18660f,_0x428d40)=>{var _0x184660=_0x51e818;_0x4f7e60(_0x40d94c(_0x184660(0x154),_0x18660f,_0x3dcb55(),_0xfe58e6,_0x428d40));},'autoTime':(_0x57695a,_0x391617,_0x135910)=>{_0x4756a3(_0x135910);},'autoTimeEnd':(_0x160a8d,_0x482dcb,_0x4e6790)=>{_0x413e3e(_0x482dcb,_0x4e6790);},'coverage':_0x3ea7df=>{var _0x4904ff=_0x51e818;_0x4f7e60({'method':_0x4904ff(0x11c),'version':_0x598bb0,'args':[{'id':_0x3ea7df}]});}};let _0x4f7e60=b(_0x418e88,_0x34fe36,_0xf36f24,_0x440739,_0x92866c,_0x1a72f8),_0xfe58e6=_0x418e88[_0x51e818(0xcf)];return _0x418e88[_0x51e818(0xa2)];})(globalThis,_0x1310fe(0xc2),_0x1310fe(0xe9),_0x1310fe(0x85),_0x1310fe(0x158),_0x1310fe(0xca),_0x1310fe(0xab),_0x1310fe(0x12f),_0x1310fe(0xee),_0x1310fe(0xa6));`);
  } catch {
  }
}
function oo_oo2(i, ...v) {
  try {
    oo_cm2().consoleLog(i, v);
  } catch {
  }
  return v;
}

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
var assets_manifest_default = { entry: { module: "/build/entry.client-VAYZZIPM.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-J4GLYRZ6.js", "/build/_shared/chunk-YJEIG4AS.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YJHH5DAV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-7KMWDYF2.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-CK2LANOW.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-NNSGB4IZ.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-CK2LANOW.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin.task": { id: "routes/admin.task", parentId: "routes/admin", path: "task", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.task-L2UTUAAN.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/admin.user": { id: "routes/admin.user", parentId: "routes/admin", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.user-KB775WHW.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "57658702", hmr: { runtime: "/build/_shared\\chunk-YJEIG4AS.js", timestamp: 1699508504133 }, url: "/build/manifest-57658702.js" };

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
