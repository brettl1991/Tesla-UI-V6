import textStyle from "./style/text.css";

import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import type { ReactNode } from "react";
import { textType } from "./text.type";

const textLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: textStyle,
  },
];

const Text = ({ children }: textType) => {
  return <span data-text>{children}</span>;
};

export { Text, textLink };
