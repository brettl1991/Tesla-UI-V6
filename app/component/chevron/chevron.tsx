import type { LinksFunction } from "@remix-run/react/dist/routeModules";

import chevronStyle from "./style/chevron.css";

const chevronLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: chevronStyle,
  },
];

const Chevron = () => {
  return (
    <>
      <div data-chevron>
        <img src="/chevron.svg" alt="Arrow down" width={24} />
      </div>
      {/* <div data-chevron data-rotate="180">
        <img src="/chevron.svg" alt="Arrow down" width={24} />
      </div> */}
    </>
  );
};

export { Chevron, chevronLink };
