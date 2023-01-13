import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import boxStyle from "./style/box.css";
import type * as T from "./box.type";

const boxLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: boxStyle,
  },
];

const Box = ({ children, display, gap, vertical }: T.boxType) => {
  return (
    <div data-vertical={vertical} data-gap={gap} data-box={display}>
      {children}
    </div>
  );
};

export { Box, boxLink };
