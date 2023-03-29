import * as ListExamples from './example';
import { generateStories } from "../../../shared/helpers";
import Docs from "../docs.mdx";

const examples = [ListExamples];

const patternName = "Vertical Navigation";

generateStories(patternName, examples, ["default", "examples", "states"], Docs);

