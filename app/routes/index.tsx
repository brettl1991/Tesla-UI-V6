import {
  Button,
  buttonLink,
  textLink,
  Text,
  chevronLink,
  Chevron,
} from "~/component";

import type { LinksFunction } from "@remix-run/node";
import { globalLink } from "~/component/global/global";

export const links: LinksFunction = () => [
  ...buttonLink(),
  ...textLink(),
  ...globalLink(),
  ...chevronLink(),
];

const TeslaUIPOCV6 = () => {
  return (
    <div>
      <Text>Tesla UI V6 - Proof Of Concept</Text>
      <Text title>Tesla UI V6 - Proof Of Concept</Text>
      <Text underline>Tesla UI V6 - Proof Of Concept</Text>
      <Text title underline>
        Tesla UI V6 - Proof Of Concept
      </Text>

      <Button light>Model S light</Button>
      <Button>Model S</Button>
      <Button light>Model S</Button>
      <Button>Model S</Button>
      <Chevron />
    </div>
  );
};

export default TeslaUIPOCV6;
