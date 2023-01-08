import buttonStyle from "./style/button.css";

import type { LinksFunction } from "@remix-run/node";
import type { buttonType } from "./button.type";

const buttonLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: buttonStyle,
  },
];

const Button = ({ children, light }: buttonType) => {
  return (
    <div>
      <button data-button data-light={light}>
        {children}
      </button>
    </div>
  );
};

export { Button, buttonLink };
