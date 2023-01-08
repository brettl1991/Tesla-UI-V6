import { Button, buttonLink, textLink, Text } from "~/component";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [...buttonLink(), ...textLink()];

const TeslaUIPOCV6 = () => {
  return (
    <div>
      <Text>Tesla UI V6 - Proof Of Concept</Text>

      <Button light>Model S light</Button>
      <Button>Model S</Button>
      <Button light>Model S</Button>
      <Button>Model S</Button>
    </div>
  );
};

export default TeslaUIPOCV6;
