# Contributing to SLDS

Do you ❤️ the Salesforce Lightning Design System and want to get involved? We would love your help! We are always looking for both internal and external contributors of Salesforce and there are plenty of ways you can help!

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Bug Reports

A bug is a *demonstrable problem* that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

See the <a href="guidelines/BUG_REPORTS.md">bug reports guide</a>.

## Feature Requests

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to *you* to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

## Pull Requests

Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

*External contributors are required to sign a Contributor’s License Agreement. You will be prompted to sign it when you open a pull request.*

Before starting down the long journey of any significant pull request, **please ask first** if someone else is working on the same feature or ask a core developer if your feature is in-scope for SLDS. Before starting your project, please open a new issue or point to a related issue with discussions for whatever you are adding. That way, we can also offer suggestions or let you know if there is already an effort in progress.

This will help reduce the risk of spending a lot of time working on something where in the end conflicts with someone else's changes or developers determine it does not want to be merged. Salesforce has a very large ecosystem and the design system has a lot of touch-points within that ecosystem. A small change can have a large-scale effect (which is AWESOME but we have to be aware about what we are changing).

If you are changing CSS, please adhere to the [Sass coding conventions](guidelines/SASS_CONVENTIONS.md). This will help expedite the review process as well as keeping code quality high.

Following these steps is the best way to get your work included into the project:

1. [Fork the project](https://help.github.com/articles/fork-a-repo/), [clone your fork](https://help.github.com/articles/cloning-a-repository/), and configure the remotes:
```sh
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/design-system.git

# Navigate to the newly cloned directory
cd design-system

# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/salesforce-ux/design-system.git
```
2. Make sure you have the latest changes from the upstream:
```sh
git checkout master
git pull upstream master
```
3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:
```sh
git checkout -b <topic-branch-name>
```
4. Commit your changes in logical chunks. This project follows [Semantic Release Guidelines](guidelines/COMMIT_GUIDELINES.md). Please read and adhere to our commit guidelines before committing. This will expedite the review process and success rate of a PR getting merged. Use Git's [interactive rebase](https://help.github.com/articles/about-git-rebase/) feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:
```sh
git pull [--rebase] upstream master
```
6. Push your branch up to your fork:
```sh
git push origin <topic-branch-name>
```
7. Open a [Pull Request](https://help.github.com/articles/about-pull-requests/) with a clear title and description that follows our [Semantic Release Guidelines](guidelines/COMMIT_GUIDELINES.md).

## Setting up a local copy

Follow the ['Quick Start' instructions](README.md#quick-start) in our README.

## Annotations

See the <a href="guidelines/ANNOTATIONS.md">annotations guide</a>.

## Blueprint Documentation

See the <a href="guidelines/BLUEPRINT_DOCUMENTATION.md">blueprint documentation guide</a>.

## Commit Guidelines

See the <a href="guidelines/COMMIT_GUIDELINES.md">commit guidelines guide</a>.

## Testing

See the <a href="guidelines/TESTING.md">testing guidelines guide</a>.

* * *
*Thank you to HTML5 Boilerplate and Create React App* *for the inspiration with this contributing guide*
