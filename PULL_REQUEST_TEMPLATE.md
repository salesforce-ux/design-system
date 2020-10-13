Please refer to our [Commit Guidelines](CONTRIBUTING.md#commit-guidelines) for documenting changes.

**Changes proposed in this pull request:**

*

### Acceptance Criteria

#### General

* [ ] Tested on **desktop** (see [supported browsers](https://www.lightningdesignsystem.com/faq/#what-browsers-are-supported))
* [ ] Tested on **mobile** (for responsive or mobile-specific features)
* [ ] Confirm **Accessibility**
* [ ] Confirm **RTL**

#### Feature

* [ ] Reference User Story work item number in description
* [ ] Add usage examples
* [ ] Add documentation for new usage guidelines
* [ ] Add tests to test new components and implementation usage
* [ ] Add component specific Release notes mentioning the changes
* [ ] If feature requires the implementor to move to a new version, please provide a migration description in the component specific Release notes

#### Fix

* [ ] Reference Bug work item number in description
* [ ] Add tests to ensure bug does not happen again
* [ ] Add component specific Release notes mentioning the changes

#### Design Changes

* [ ] Add component specific Release notes mentioning the changes
* [ ] If change requires the implementor to move to a new version, please provide a migration description in the component specific Release notes

#### Deprecated

* [ ] If css selector is being deprecated, apply the `@deprecate` annotation to selector comment block


  > ```css
  >  /**
  >   * @selector .slds-bar
  >   * @deprecated
  >   */
  >  .slds-bar { ... }
  > ```

* [ ] If css selector is being deprecated, move deprecated code to `_deprecate.scss` file and wrap in `deprecate` mixin.
* [ ] Provide `deprecate` mixin with version code will become deprecated and a brief description for what the code is being deprecated for.

  > ```css
  >  @include deprecate('4.0.0', 'Please use slds-foo instead of slds-bar') {
  >     .slds-bar { ... }
  >  }
  > ```
