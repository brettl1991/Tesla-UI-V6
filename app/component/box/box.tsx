import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import boxStyle from "./style/box.css";
import type * as T from "./box.type";

const boxLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: boxStyle,
  },
];

const Box = ({
  children,
  display,
  gap,
  vertical,
  fullHeight,
  align,
  justify,
  section,
}: T.boxType) => {
  return (
    <div
      data-full-height={fullHeight}
      data-vertical={vertical}
      data-gap={gap}
      data-section={section}
      data-box={display}
      data-align={align}
      data-justify={justify}
    >
      {children}
    </div>
  );
};

export { Box, boxLink };
