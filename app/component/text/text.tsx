import textStyle from "./style/text.css";

import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import type { ReactNode } from "react";
import type { textType } from "./text.type";

const textLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: textStyle,
  },
];

const Text = ({ children, title, underline }: textType) => {
  return (
    <span data-text data-title={title} data-underline={underline}>
      {children}
    </span>
  );
};

export { Text, textLink };
