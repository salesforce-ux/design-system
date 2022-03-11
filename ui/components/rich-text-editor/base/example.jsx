// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tooltip } from '../../tooltips/base/example';
import {
  RichTextEditor,
  RteToolbar,
  RteFormatColor,
  RteFormatFont,
  RteFormatText,
  RteFormatBody,
  RteClearFormatting,
  RteTextarea,
  RteAlignText,
  RteInsertContent,
  RteInsertUser,
  richTextEditorLabelId01
} from '../';

export let Demo = props => (
  <div
    className={classNames('demo-only', props.className)}
    style={{ minHeight: '180px' }}
    {...props}
  >
    {props.children}
  </div>
);

Demo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

let TextInputExample = props => (
  <div>
    <h1>Heading - h1</h1>
    <p>
      Lorem ipsum dolor sit amet, <strong>strong</strong> adipisicing elit, sed
      do <em>emphasis</em> tempor incididunt ut <u>underlined</u> et dolore{' '}
      <s>strikethrough</s> aliqua. Ut <sub>subscript</sub> ad{' '}
      <sup>superscript</sup> veniam, <abbr>quis</abbr> nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in <a href="#">link</a> in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <h2>Heading - h2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod{' '}
      <a href="#">veryVeryLongWordWithHyperlinkExample</a> tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
    <ul>
      <li>
        Unordered list item
        <ul>
          <li>
            Nested Unordered list item
            <ol>
              <li>Nested Ordered list item</li>
              <li>Nested Ordered list item</li>
            </ol>
          </li>
          <li>
            Nested Unordered list item
            <ul>
              <li>Nested Unordered list item</li>
              <li>Nested Unordered list item</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Unordered list item
        <ol>
          <li>Nested Ordered list item</li>
          <li>Nested Ordered list item</li>
        </ol>
      </li>
      <li>Unordered list item</li>
    </ul>
    <h3>Heading - h3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <ol>
      <li>
        Ordered list item
        <ul>
          <li>
            Nested Unordered list item
            <ol>
              <li>Nested Ordered list item</li>
              <li>Nested Ordered list item</li>
            </ol>
          </li>
          <li>
            Nested Unordered list item
            <ul>
              <li>Nested Unordered list item</li>
              <li>Nested Unordered list item</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Ordered list item
        <ol>
          <li>
            Nested Ordered list item
            <ol>
              <li>
                Nested Ordered list item
                <ol>
                  <li>Nested Ordered list item</li>
                  <li>Nested Ordered list item</li>
                </ol>
              </li>
              <li>Nested Ordered list item</li>
            </ol>
          </li>
          <li>Nested Ordered list item</li>
        </ol>
      </li>
      <li>Ordered list item</li>
    </ol>
    <ul>
      <li>
        <div>List Item with div</div>
      </li>
      <li>
        <div>List Item with div</div>
      </li>
    </ul>
    <ol>
      <li>
        <div>List Item with div</div>
      </li>
      <li>
        <div>List Item with div</div>
      </li>
    </ol>
    <h4>Heading - h4</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <dl>
      <dt>Description List - Term</dt>
      <dd>Description List - Description</dd>
      <dt>Description List - Term</dt>
      <dd>Description List - Description</dd>
    </dl>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <table>
      <thead>
        <tr>
          <th>Column</th>
          <th>Column</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row</td>
          <td>Row</td>
        </tr>
        <tr>
          <td>Row</td>
          <td>Row</td>
        </tr>
      </tbody>
    </table>
    <h5>Heading - h5</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <blockquote>
      Blockquote - incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation
    </blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <h6>Heading - h6</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam,{' '}
      <a href="#">
        https://url.com/document/d/1dSOGKlCQtSG73NcSJB7qCJVyjE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/edE52MdTjvjGNqc3L2Rw/ed
      </a>{' '}
      quis nostrud <ins>Content to be inserted.</ins> exercitation ullamco{' '}
      <del>Content to be deleted.</del> laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  </div>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." />
        </RichTextEditor>
      </Demo>
    )
  }
];

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <Demo>
        <RichTextEditor className="slds-has-focus">
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'filled-out',
    label: 'Filled Out',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea text={<TextInputExample />} />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <Demo>
        <RichTextEditor
          className="slds-has-error"
          inlineMessage="This field is required"
          hasError
          errorId="rte-error-01"
        >
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea
            placeholder="Compose text..."
            aria-describedby="rte-error-01"
          />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar disabledButtons disabledLabel="disabled">
            <RteFormatText tabIndexSetting="0" disabledButtons />
            <RteFormatBody disabledButtons />
            <RteClearFormatting disabledButtons />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." disabled />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" hasTooltip />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." />
          <Tooltip
            className="slds-nubbin_top-left"
            id="bold"
            style={{ position: 'absolute', top: '48px', left: '2px' }}
          >
            Bold <kbd>cmd+b</kbd>
          </Tooltip>
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'toolbar-only',
    label: 'Toolbar Only',
    element: (
      <Demo>
        <RichTextEditor isToolbarOnly>
          <RteToolbar isToolbarOnly>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
          </RteToolbar>
        </RichTextEditor>
      </Demo>
    )
  }
];

export let examples = [
  {
    id: 'bottom-toolbar',
    label: 'Bottom toolbar',
    element: (
      <Demo>
        <RichTextEditor>
          <RteTextarea placeholder="Compose text..." />

          <RteToolbar className="slds-rich-text-editor__toolbar_bottom">
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'with-label',
    label: 'With a Label',
    element: (
      <Demo>
        <RichTextEditor
          label="Details and Steps to Reproduce"
          labelId={richTextEditorLabelId01}
        >
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea
            placeholder="Compose text..."
            labelId={richTextEditorLabelId01}
          />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'email',
    label: 'Email',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea label="Compose email" placeholder="Compose Email..." />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'toolbar-narrow',
    label: 'Toolbar Narrow',
    element: (
      <Demo style={{ width: '294px' }} className="slds-region_narrow">
        <RichTextEditor>
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea label="Compose email" placeholder="Compose Email..." />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'feed',
    label: 'Feed',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteInsertUser />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea label="Post to feed" placeholder="Post to feed..." />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'note',
    label: 'Notes',
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea label="Compose note" placeholder="Compose Note..." />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'styling-hooks-rte-min-height',
    label: 'Styling Hooks - Base (Min Height)',
    demoStyles: `
        --sds-c-textarea-sizing-min-height: 3rem;
      `,
    storybookStyles: true,
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea placeholder="Compose text..." />
        </RichTextEditor>
      </Demo>
    )
  },
  {
    id: 'styling-hooks-rte-max-height',
    label: 'Styling Hooks - Base (Max Height)',
    demoStyles: `
        --sds-c-textarea-sizing-max-height: 10rem;
      `,
    storybookStyles: true,
    element: (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbar>
          <RteTextarea text={<TextInputExample />} />
        </RichTextEditor>
      </Demo>
    )
  }
];
