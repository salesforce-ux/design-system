# Salesforce Lightning Design System

Welcome to the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com) brought to you by [Salesforce UX](https://twitter.com/salesforceux).

* Tailored for building Salesforce apps: Using the Lightning Design System markup and CSS framework results in UIs that reflect the Salesforce Lightning look and feel.
* Continuously updated: As long as you’re using the latest version of the Lightning Design System, your pages are always up to date with Salesforce UI changes.

## Search

Handled by Algolia.
This process decribes indexing as a standalone process. Search indexing can also be done at time of site build by passing `--make-index` to the script: `sh ./release.sh --make-index`

To crawl and update the index, use the [Docker method](https://docsearch.algolia.com/docs/legacy/run-your-own/#run-the-crawl-from-the-docker-image).

First, create the `.env` file.:
```
echo APPLICATION_ID=XXXXXX >> .env
echo API_KEY=0123456789 >> .env
```
Access the Algolia account, or ask someone who has access, to get the correct values.

Then install Docker Desktop as described [here](https://stackoverflow.com/a/44719239/390866):
`brew install --cask docker`

Then launch the Docker app. Click next. It will ask for privileged access. Confirm. A whale icon should appear in the top bar. Click it, and wait for "Docker is running" to appear.

Then in terminal in the `design-system-internal` directory:

`docker run -it --env-file=.env -e "CONFIG=$(cat ./searchconfig.json | jq -r tostring)" algolia/docsearch-scraper`
