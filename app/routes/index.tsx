import { Button, buttonLink, textLink, Text } from "~/component";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [...buttonLink(), ...textLink()];

const TeslaUIPOCV6 = () => {
  return (
    <div>
      <Text>Tesla UI V6 - Proof Of Concept</Text>
      <h1>Tesla Project</h1>
      <p>Agnes fun solution</p>

      <Button>Click Me Now or else</Button>
      <Button>sunny day</Button>
      <Button>windy day</Button>
      <Button>rainy day</Button>
    </div>
  );
};

export default TeslaUIPOCV6;
