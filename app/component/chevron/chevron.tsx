import type { LinksFunction } from "@remix-run/react/dist/routeModules";

import chevronStyle from "./style/chevron.css";
import type * as T from "./chevron.type";

const chevronLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: chevronStyle,
  },
];

const Chevron = ({ rotate }: T.Chevron) => {
  return (
    <div data-chevron data-rotate={rotate}>
      <img src="/chevron.svg" alt="Arrow down" width={24} />
    </div>
  );
};

export { Chevron, chevronLink };
