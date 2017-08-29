module.exports = code => {
  return `
    import Doc from '../../../shared/components/Doc'
    ${code.replace(
      /export default function/,
      'export const Content = function'
    )}
    export default props => <Doc><Content {...props} /></Doc>
  `;
};
