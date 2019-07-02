import React from 'react';
import CodeView from '../../../../shared/components/CodeView';

const ModalDemo = props => (
  <CodeView
    style={`
      --lwc-c-modal-position: absolute;
      position: relative;
      width: 100%;
      height: 420px;
      background: linear-gradient(
          45deg,
          rgba(43, 40, 38, 0.1) 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, rgba(43, 40, 38, 0.1) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(43, 40, 38, 0.1) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(43, 40, 38, 0.1) 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
      ${props.extraStyles}
    `}
  >
    {props.children}
  </CodeView>
);

export default ModalDemo;
