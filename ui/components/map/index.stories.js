import * as BaseExamples from './base/example';
import { generateStories } from '../../shared/helpers';
import Docs from './docs.mdx';

const examples = [BaseExamples];

const patternName = 'Map';

const storyOptions = {
  defaultDemoStyles: 'min-height: 500px;',
  isFullBleed: true,
  eyes: {
    ignoreRegions: [
      { selector: '.slds-map' }
    ]
  }
};

export const DynamicText = () => {
  return (
    <div>
      This text is dynamic and should be ignored:{" "}
      <span style={{ color: "red" }} className="ignore-this">
        {Date.now()}
      </span>
    </div>
  );
};

DynamicText.story = {
  name: "Dynamic text with ignore region",
  parameters: {
    eyes: {
      ignoreRegions: [
        {
          selector: ".ignore-this",
        },
      ],
      scriptHooks: {
        beforeCaptureScreenshot:
          "document.querySelector('[data-testid=cancel-the-cancel] .eldyear3').style.overflow = 'visible';document.querySelector('[data-testid=cancel-the-cancel]').style.maxHeight = 'calc(100% - 16px)'",
      },
    },
  },
};

generateStories(
  patternName,
  examples,
  ['default', 'examples', 'states'],
  Docs,
  storyOptions
);
