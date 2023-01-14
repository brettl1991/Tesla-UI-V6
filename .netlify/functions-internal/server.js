var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default
});
var import_jsx_runtime3 = require("react/jsx-runtime"), C = () => {
}, contact_default = C;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  links: () => links
});

// app/component/button/style/button.css
var button_default = "/build/_assets/button-MGSOONEX.css";

// app/component/button/button.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), buttonLink = () => [
  {
    rel: "stylesheet",
    href: button_default
  }
], Button = ({ children, light }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { "data-button": !0, "data-light": light, children }) });

// app/component/text/style/text.css
var text_default = "/build/_assets/text-JEP35RVE.css";

// app/component/text/text.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), textLink = () => [
  {
    rel: "stylesheet",
    href: text_default
  }
], Text = ({ children, title, underline }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { "data-text": !0, "data-title": title, "data-underline": underline, children });

// app/component/chevron/style/chevron.css
var chevron_default = "/build/_assets/chevron-JID6WSXM.css";

// app/component/chevron/chevron.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), chevronLink = () => [
  {
    rel: "stylesheet",
    href: chevron_default
  }
], Chevron = ({ rotate }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { "data-chevron": !0, "data-rotate": rotate, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: "/chevron.svg", alt: "Arrow down", width: 24 }) });

// app/component/box/style/box.css
var box_default = "/build/_assets/box-XTOQRGML.css";

// app/component/box/box.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), boxLink = () => [
  {
    rel: "stylesheet",
    href: box_default
  }
], Box = ({
  children,
  display,
  gap,
  vertical,
  fullHeight,
  align,
  justify,
  section
}) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  "div",
  {
    "data-full-height": fullHeight,
    "data-vertical": vertical,
    "data-gap": gap,
    "data-section": section,
    id: section,
    "data-box": display,
    "data-align": align,
    "data-justify": justify,
    children
  }
);

// app/component/box/box.type.ts
var sectionList = [
  "model-3",
  "model-y",
  "model-s",
  "model-x",
  "solar-panels",
  "solar-roof",
  "accessories"
];

// app/component/global/how-it-looks-in-general.css
var how_it_looks_in_general_default = "/build/_assets/how-it-looks-in-general-MWED3B2D.css";

// app/component/global/global.ts
var globalLink = () => [
  {
    rel: "stylesheet",
    href: how_it_looks_in_general_default
  }
];

// app/routes/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime"), links = () => [
  ...buttonLink(),
  ...textLink(),
  ...globalLink(),
  ...chevronLink(),
  ...boxLink()
], missingDataMap = {
  "model-3": {
    title: "Model 3",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"]
  },
  "model-y": {
    title: "Model Y",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"]
  },
  "model-s": {
    title: "Model S",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"]
  },
  "model-x": {
    title: "Model X",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"]
  },
  "solar-panels": {
    title: "Solar Panels",
    text: "Lowest Cost Solar Panels in America",
    buttonList: ["ORDER NOW", "LEARN MORE"]
  },
  "solar-roof": {
    title: "Solar Roof",
    text: "Order Online for",
    buttonList: ["ORDER NOW", "LEARN MORE"]
  },
  accessories: {
    title: "Accessories",
    buttonList: ["SHOP NOW"]
  }
}, TeslaUIPOCV6 = () => (console.log(sectionList), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: sectionList.map((section, k) => {
  var _a, _b, _c;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    Box,
    {
      section,
      fullHeight: !0,
      display: "flex",
      vertical: !0,
      gap: !0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Box, { display: "grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Text, { title: !0, children: missingDataMap[section].title }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Text, { children: (_a = missingDataMap[section]) == null ? void 0 : _a.text }),
          ((_b = missingDataMap[section]) == null ? void 0 : _b.link) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Text, { underline: !0, children: (_c = missingDataMap[section]) == null ? void 0 : _c.link })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Box, { vertical: !0, display: "flex", gap: !0, align: "center", justify: "center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Box, { display: "flex", gap: !0, vertical: !0, children: missingDataMap[section].buttonList.map((buttonText, key) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { light: !!key, children: buttonText }, buttonText)) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "a",
            {
              href: `#${sectionList[k + 1 === sectionList.length ? 0 : k + 1]}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Chevron, { rotate: k + 1 === sectionList.length ? "180" : "0" })
            }
          )
        ] })
      ]
    },
    section
  );
}) })), routes_default = TeslaUIPOCV6;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8574e3ad", entry: { module: "/build/entry.client-6YO25U7V.js", imports: ["/build/_shared/chunk-3LPGR5PY.js", "/build/_shared/chunk-JKCUYFIB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WAJQZJB4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-YYHQIBIK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-QMYAGGI7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8574E3AD.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
