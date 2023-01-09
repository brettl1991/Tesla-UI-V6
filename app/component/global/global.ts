import type { LinksFunction } from "@remix-run/node";

import globalStyle from "./how-it-looks-in-general.css";

export const globalLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalStyle,
  },
];
