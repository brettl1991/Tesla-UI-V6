import { Button, buttonLink } from "~/component";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [...buttonLink()];

const TeslaUIPOCV6 = () => {
  return (
    <div>
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
