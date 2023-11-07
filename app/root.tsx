import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import styles from "./style/tailwind.css";
import globalstyles from "./style/global.css";

import { LinksFunction } from "@remix-run/node";
import React from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: globalstyles },
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
