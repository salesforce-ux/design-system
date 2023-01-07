// https://docs.github.com/en/rest/reference/commits#create-a-commit-status
const { Octokit } = require("@octokit/rest");
const { createAppAuth } = require("@octokit/auth-app");

const batchesDataArg = process.env.batchesData || `{ "dev": null }`;
console.log(batchesDataArg);
const batchesData = JSON.parse(batchesDataArg);
console.log(batchesData);

const { owner, repo, sha } = {
  owner: "salesforce-ux",
  repo: "design-system-internal",
  sha: process.env.THE_SHA,
};

const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.GH_APP_ID,
    privateKey: process.env.GH_APP_PRIVATE_KEY,
    clientId: process.env.GH_APP_CLIENT_ID,
    clientSecret: process.env.GH_APP_CLIENT_SECRET,
    installationId: process.env.GH_APP_INSTALLATION_ID,
  },
});

// AFAIK this endpoint doesn't work with GitHub Apps
// (async () => {

// // Send requests as GitHub App
// const { slug, data: root } = await appOctokit.request("GET /user");
// console.log("authenticated as %s", slug);

// })();

(async () => {

  // Send requests as GitHub App
  const pullsResponse = await appOctokit.request(
    "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", {
      owner,
      repo,
      commit_sha: sha,
    }
  );
  console.log("pulls", pullsResponse);

})();

(async () => {
  const { id, failed, unresolved, new: vrtNew, passed } = batchesData;
  const checksPostResponse = await appOctokit.request(
    "POST /repos/{owner}/{repo}/statuses/{sha}",
    {
      owner,
      repo,
      sha,
      state: failed + unresolved + vrtNew === 0 ? "success" : "failure",
      target_url: `https://salesforceuxeyes.applitools.com/app/test-results/${id}`,
      description: `${failed} Failed / ${unresolved} Unresolved / ${vrtNew} New / ${passed} Passed`,
      context: "Applitools (VRT)",
    }
  );
  console.log("pulls", checksPostResponse);

})();
