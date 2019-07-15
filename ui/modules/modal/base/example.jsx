import React from 'react';
import Modal from '../';
import Button from '../../button/';

export default (
  <Modal>
    <p>
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
      deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse
      quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation
      reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.
    </p>
  </Modal>
);

export let examples = [
  {
    id: 'has-header',
    label: 'Has header',
    element: (
      <Modal hasHeader>
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'has-header-tagline',
    label: 'Has header with tagline',
    element: (
      <Modal
        hasHeader
        tagline={[
          `Here’s a tagline if you need it. It is allowed to extend across mulitple lines, so I’m making up content to show that to you. It is allowed to `,
          <a href="#" key="tagline-link-01">
            contain links or be a link.
          </a>
        ]}
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'has-footer',
    label: 'Has Footer',
    element: (
      <Modal
        hasFooter
        footer={
          <React.Fragment>
            <Button variant="neutral">Cancel</Button>
            <Button variant="brand">Save</Button>
          </React.Fragment>
        }
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'is-directional-footer',
    label: 'Directional',
    element: (
      <Modal
        hasHeader
        hasFooter
        isDirectional
        footer={
          <React.Fragment>
            <Button variant="neutral">Skip This Step</Button>
            <Button variant="brand">Continue</Button>
          </React.Fragment>
        }
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'has-header-footer',
    label: 'Has Header + Footer',
    element: (
      <Modal
        hasHeader
        hasFooter
        footer={
          <React.Fragment>
            <Button variant="neutral">Cancel</Button>
            <Button variant="brand">Save</Button>
          </React.Fragment>
        }
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'has-header-footer-tagline',
    label: 'Has Header with tagline + Footer',
    element: (
      <Modal
        hasHeader
        tagline={[
          `Here’s a tagline if you need it. It is allowed to extend across mulitple lines, so I’m making up content to show that to you. It is allowed to `,
          <a href="#" key="tagline-link-02">
            contain links or be a link.
          </a>
        ]}
        hasFooter
        footer={
          <React.Fragment>
            <Button variant="neutral">Cancel</Button>
            <Button variant="brand">Save</Button>
          </React.Fragment>
        }
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'scrollable',
    label: 'Scrollable',
    element: (
      <Modal
        hasHeader
        title="The Barge of Defeat"
        tagline="Charles Skinner"
        hasFooter
        footer={
          <React.Fragment>
            <Button variant="brand">Share</Button>
          </React.Fragment>
        }
      >
        <p>
          Rappannock River, in Virginia, used to be vexed with shadowy craft
          that some of the populace affirmed to be no boats, but spirits in
          disguise. One of these apparitions was held in fear by the Democracy
          of Essex County, as it was believed to be a forerunner of Republican
          victory. The first recorded appearance of the vessel was shortly after
          the Civil War, on the night of a Democratic mass-meeting at
          Tappahannock. There were music, refreshments, and jollity, and it was
          in the middle of a rousing speech that a man in the crowd cried,
          "Look, fellows! What is that queer concern going down the river?"
        </p>
        <br />
        <p>
          The people moved to the shore, and by the light of their torches a
          hulk was seen drifting with the stream--a hulk of fantastic form
          unlike anything that sails there in the daytime. As it came opposite
          the throng, the torchlight showed gigantic negroes who danced on deck,
          showing horrible faces to the multitude. Not a sound came from the
          barge, the halloos of the spectators bringing no response, and some
          boatmen ventured into the stream, only to pull back in a hurry, for
          the craft had become so strangely enveloped in shadow that it seemed
          to melt into air.
        </p>
        <br />
        <p>
          Next day the Democracy was defeated at the polls, chiefly by the negro
          vote. In 1880 it reappeared, and, as before, the Republicans gained
          the day. Just before the election of 1886, Mr. Croxton, Democratic
          nominee for Congress, was haranguing the people, when the cry of "The
          Black Barge!" arose. Argument and derision were alike ineffectual with
          the populace. The meeting broke up in silence and gloom, and Mr.
          Croxton was defeated by a majority of two thousand.
        </p>
      </Modal>
    )
  },
  {
    id: 'size-xx-small',
    label: 'Size - Xx-Small',
    element: (
      <Modal size="xx-small">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'size-x-small',
    label: 'Size - X-Small',
    element: (
      <Modal size="x-small">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'size-small',
    label: 'Size - Small',
    element: (
      <Modal size="small">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'size-medium',
    label: 'Size - Medium',
    element: (
      <Modal size="medium">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'size-large',
    label: 'Size - Large',
    element: (
      <Modal size="large">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'size-full',
    label: 'Size - Full',
    element: (
      <Modal
        hasHeader
        hasFooter
        footer={
          <React.Fragment>
            <Button variant="neutral">Cancel</Button>
            <Button variant="brand">Save</Button>
          </React.Fragment>
        }
        size="full"
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'size-fixed',
    label: 'Size - Fixed',
    element: (
      <Modal
        hasHeader
        hasFooter
        footer={
          <React.Fragment>
            <Button variant="neutral">Cancel</Button>
            <Button variant="brand">Save</Button>
          </React.Fragment>
        }
        size="fixed"
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'alert',
    label: 'Alert',
    element: (
      <Modal
        size="xx-small"
        hasFooter
        footer={
          <React.Fragment>
            <Button variant="neutral">Cancel</Button>
            <Button variant="destructive">Discard</Button>
          </React.Fragment>
        }
      >
        Discard Draft?
      </Modal>
    )
  },
  {
    id: 'position-top',
    label: 'Position - Top',
    element: (
      <Modal position="top">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'position-top-left',
    label: 'Position - Top Left',
    element: (
      <Modal position="top-left">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'position-top-right',
    label: 'Position - Top Right',
    element: (
      <Modal position="top-right">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'position-bottom',
    label: 'Position - Bottom',
    element: (
      <Modal position="bottom">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'position-bottom-left',
    label: 'Position - Bottom Left',
    element: (
      <Modal position="bottom-left">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'position-bottom-right',
    label: 'Position - Bottom Right',
    element: (
      <Modal position="bottom-right">
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'no-backdrop',
    label: 'No Backdrop',
    element: (
      <Modal
        position="bottom-right"
        isPrompt
        hasCloseButton={false}
        hasBackdrop={false}
        hasFooter
        size="x-small"
        role="alertdialog"
        footer={
          <React.Fragment>
            <Button variant="neutral">Cancel</Button>
            <Button variant="brand">Agree</Button>
          </React.Fragment>
        }
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'prompt',
    label: 'Prompt - Blocking',
    element: (
      <Modal
        hasHeader
        hasCloseButton={false}
        title="Service Unavailable"
        hasFooter
        isPrompt
        role="alertdialog"
        tabIndex="0"
        footer={<Button variant="neutral">Oaky</Button>}
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  },
  {
    id: 'prompt-non-blocking',
    label: 'Prompt - Non-blocking',
    element: (
      <Modal
        position="bottom-right"
        isPrompt
        hasCloseButton={false}
        hasBackdrop={false}
        hasFooter
        size="x-small"
        role="alertdialog"
        footer={
          <React.Fragment>
            <Button variant="neutral">Cancel</Button>
            <Button variant="brand">Agree</Button>
          </React.Fragment>
        }
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna
          exercitation reprehenderit magna. Tempor cupidatat consequat elit
          dolor adipisicing.
        </p>
      </Modal>
    )
  }
];
