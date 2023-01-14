import {
  Button,
  buttonLink,
  textLink,
  Text,
  chevronLink,
  Chevron,
  Box,
  boxLink,
  sectionList,
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
  console.log(sectionList);
  return (
    <>
      {sectionList.map((section) => {
        return (
          <div key={section}>
            <Box section={section} fullHeight display="flex" vertical gap>
              <Box display="grid">
                <Text title>{section}</Text>
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
          </div>
        );
      })}
    </>
  );
};

export default TeslaUIPOCV6;
