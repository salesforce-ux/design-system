# Commit Guidelines

Our commit guidelines originate from [Pivotal UI's Semantic Release guidelines](https://github.com/pivotal-cf/pivotal-ui/blob/25317715f00bcbb01e194ee59288e322258a0d9d/COMMIT_GUIDELINES.md).
Each commit should be "green" (i.e. it should not break any existing functionality). In addition, attempt to make each commit a complete idea. A single commit should not contain unrelated changes.
Characteristics of a commit message:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

The overall format of the commit should look like this:

```
`patchlevel(scope): description of commit

Additional information

[Finishes #issuenumber or W-ticketIDnumber]

Breaking change/deprecation warning`
```

### Patch level

Your message should include information about the patch level of the changes made. You may be wondering what major, minor, and patch mean in the context of CSS. Please follow these guidelines:

* **Major** - A breaking change which alters either *class names* or expected *HTML*. These commits can be labeled either as `feat():` or `fix():`, but must also contain a `BREAKING CHANGE:` followed by what kind of breaking change it is (e.g., class name, sass variable, html, style) in the body of the commit.
* **Minor** - Either an *additional feature* (e.g. a new component), or an update which changes *Sass variables*. These commits should be labeled as `feat():`.
* **Patch** - A *non-breaking change, bug fix, or design update* that any team should be able to upgrade to without changing their html. An example of this is updating the background color of the danger button or fixing the alignment of the horizontal tabs (as long as no html changes are required). These commits should be labeled as `fix():`.
* Sometimes you may have commits that do not modify a component (e.g. updating docs, gulp tasks, etc). Label these commits as a `chore():`.

## Patch

For example, for a patch, your commit might look like this:

```
`fix(table): headers are now capitalized by default

Some additional info about the change

[Finishes #12345678]`
```

## Feature

A feature might look like this:

```
`feat(notification): add an 'alert notification'

Some additional info about the change

[Finishes #12345678]`
```

## Breaking change

and example of a breaking change might look like this:

```
`feat(color): update oranges

Some additional info about the change

[Finishes #12345678]

BREAKING CHANGE: (sass variable) "orange-color" class is now named "light-orange"`
```

### Scope

The scope should be the component that is modified. It should match the name of the modified component. For example, a patch fix to CSS alerts would look like

```
`fix(alerts): ...`
```

The same scope is used for both utilities and components.
For `chore`s, use your best guess for the scope. E.g., if you're changing documentation, use `chore(documentation):`. If you're changing release tasks, use `chore(release):`

### Breaking Changes

Breaking changes must be **the last line** of the commit, and there can only be one breaking change per commit. The breaking change message should be a standalone sentence, illustrating what actually breaks and how to fix it. In addition, the breaking change message should include the type of change:

* **html** - e.g. "BREAKING CHANGE: (html) alert icons are no longer included by default"
* **sass variable** - e.g. "BREAKING CHANGE: (sass variable) `$yellow-1`/`$warn-1` are now `$yellow-2`/`$warn-2`"
* **css class** - e.g. "BREAKING CHANGE: (css class) `.with-tooltip` is now `.button-with-tooltip-wrapper`"
* **javascript** - e.g. "BREAKING CHANGE: (javascript) tooltips must be explicitly initialized"
* **design** - e.g. "BREAKING CHANGE: (design) progress indicator should be used instead of wizard"

**Note** - any story numbers should come **before** the breaking change message

### Deprecation Warnings

If your commit marks a component for deprecation, add a deprecation warning like so.

```
`feat(alerts): deprecate warning alert

[Finishes #12345678]

DEPRECATION WARNING: "orange-color" class is now named "highlight-2"`
```

**Note** - any story numbers should come **before** the deprecation warning
