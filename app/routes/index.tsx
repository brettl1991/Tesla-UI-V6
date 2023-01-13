import {
  Button,
  buttonLink,
  textLink,
  Text,
  chevronLink,
  Chevron,
  Box,
  boxLink,
} from "~/component";

import type { LinksFunction } from "@remix-run/node";
import { globalLink } from "~/component/global/global";

export const links: LinksFunction = () => [
  ...buttonLink(),
  ...textLink(),
  ...globalLink(),
  ...chevronLink(),
  ...boxLink(),
];

const TeslaUIPOCV6 = () => {
  return (
    <Box fullHeight display="flex" vertical gap>
      <Box display="grid">
        <Text title>Model S</Text>
        <Text>Order Online for</Text>
        <Text underline>Touchless Delivery</Text>
      </Box>

      <Box vertical display="flex" gap align="center" justify="center">
        <Box display="flex" gap vertical>
          <Button>CUSTOM ORDER</Button>
          <Button>EXISTING INVENTORY</Button>
        </Box>
        <Chevron />
      </Box>
    </Box>
  );
};

export default TeslaUIPOCV6;
