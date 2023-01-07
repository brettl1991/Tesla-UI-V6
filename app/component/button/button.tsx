import buttonStyle from "./style/button.css";

import type { LinksFunction } from "@remix-run/node";

const buttonLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: buttonStyle,
  },
];

const Button = ({ children }) => {
  return (
    <div>
      <button data-button="">{children}</button>
    </div>
  );
};

export { Button, buttonLink };
