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
    <div>
      <Text title>Tesla UI V6 - Proof Of Concept</Text>
      <Box display="flex" vertical gap>
        <Box display="grid">
          <Text title>Model X</Text>
          <Text>Order Online for</Text>
          <Text underline>Touchless Delivery</Text>
        </Box>
        <Box display="grid">
          <Text title>Solar Panels</Text>
          <Text>Lowest Cost Solar Panels in America</Text>
        </Box>
      </Box>
      <Box display="flex" gap vertical>
        <Button light>Model S</Button>
        <Button>Model Y</Button>
        <Button>Model Y</Button>
        <Button>Model Y</Button>
      </Box>
      <Box display="flex" gap>
        <Button>Model Y</Button>
        <Button>Model Y</Button>
      </Box>
      <Text underline>Tesla UI V6 - Proof Of Concept</Text>
      <Text title underline>
        Tesla UI V6 - Proof Of Concept
      </Text>
      <Chevron />

      <Button light>Model S</Button>
      <Button>Model S</Button>
    </div>
  );
};

export default TeslaUIPOCV6;
