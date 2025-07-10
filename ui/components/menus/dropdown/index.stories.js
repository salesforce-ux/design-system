import * as DropdownExamples from "./example";
import { generateStories } from "../../../shared/helpers";
import Docs from "../docs.mdx";

const examples = [DropdownExamples];

const patternName = "Menus/Dropdown";

generateStories(
  patternName,
  examples,
  ["default", "examples", "states"],
  Docs,
  {
    defaultDemoStyles: "height: 320px;",
  }
);
