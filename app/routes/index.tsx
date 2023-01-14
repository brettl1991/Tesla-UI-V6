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

const missingDataMap = {
  "model-3": {
    title: "Model 3",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"],
  },
  "model-y": {
    title: "Model Y",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"],
  },
  "model-s": {
    title: "Model S",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"],
  },
  "model-x": {
    title: "Model X",
    text: "Order Online for",
    link: "Touchless Delivery",
    buttonList: ["CUSTOM ORDER", "EXISTING INVENTORY"],
  },
  "solar-panels": {
    title: "Solar Panels",
    text: "Lowest Cost Solar Panels in America",
    buttonList: ["ORDER NOW", "LEARN MORE"],
  },
  "solar-roof": {
    title: "Solar Roof",
    text: "Order Online for",
    buttonList: ["ORDER NOW", "LEARN MORE"],
  },
  accessories: {
    title: "Accessories",
    buttonList: ["SHOP NOW"],
  },
};

const TeslaUIPOCV6 = () => {
  // grab data

  console.log(sectionList);
  return (
    <>
      {sectionList.map((section, k) => {
        return (
          <Box
            key={section}
            section={section}
            fullHeight
            display="flex"
            vertical
            gap
          >
            <Box display="grid">
              <Text title>{missingDataMap[section].title}</Text>
              <Text>{missingDataMap[section]?.text}</Text>
              {missingDataMap[section]?.link && (
                <Text underline>{missingDataMap[section]?.link}</Text>
              )}
            </Box>

            <Box vertical display="flex" gap align="center" justify="center">
              <Box display="flex" gap vertical>
                {missingDataMap[section].buttonList.map((buttonText, key) => {
                  return (
                    <Button light={!!key} key={buttonText}>
                      {buttonText}
                    </Button>
                  );
                })}
              </Box>

              <a
                href={`#${
                  sectionList[k + 1 === sectionList.length ? 0 : k + 1]
                }`}
              >
                <Chevron rotate={k + 1 === sectionList.length ? "180" : "0"} />
              </a>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
export default TeslaUIPOCV6;
