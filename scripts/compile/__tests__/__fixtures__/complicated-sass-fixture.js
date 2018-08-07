// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const complicatedSassFixture = `
  // ================================================
  // NOTE: This is just some complex Sass for testing
  // ================================================

  // Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
  // Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

  /**
   * @name base
   * @selector .slds-path
   * @restrict div
   * @variant
   * @s1 false
   */
  .slds-path {
    /**
     * @summary Indicates the coaching section is expanded
     *
     * @selector .slds-is-expanded
     * @restrict .slds-path
     */
    &.slds-is-expanded {
      padding-bottom: $var-spacing-vertical-small;
      border-color: $color-border;
    }
  }

  // these mixins exist in order to alias selector assignment in the case
  // where state cannot be applied to the individual path step
  @mixin is-won() {

    .slds-path__link,
    &:hover .slds-path__link {
      border: 0;
      line-height: $line-height-salespath;
      color: $color-text-inverse;
      background-color: $color-background-path-won;
    }

    &:before,
    &:after,
    &:hover:before,
    &:hover:after {
      background-image: linear-gradient(225deg, $color-background-path-won, $color-background-path-won 1.125rem, transparent 1.125rem);
    }
  }

  /**
   * @summary Horizontal list of stages in path component
   *
   * @selector .slds-path__nav
   * @restrict .slds-path__scroller_inner ul
   */
  .slds-path__nav {
    display: flex;
    align-items: flex-start;
    overflow: hidden;

    /**
     * @summary Creates success stage of the path
     *
     * @selector .slds-is-won
     * @restrict .slds-path__item
     */
    .slds-is-won {
      @include is-won();
    }

    // sets right arrow for current step (overlaps :before of following element)
    &:after {
      right: ((($height-sales-path / 2) - 0.1875rem) * -1);
      background-size: calc(100% - 0.125rem) calc(100% - 0.125rem);
      background-position: bottom left;
      background-repeat: no-repeat;
      box-shadow: inset -0.125rem 0.125rem 0 0 $color-border-path-divider;
      z-index: 10;
    }
  }
`;

module.exports = complicatedSassFixture;
