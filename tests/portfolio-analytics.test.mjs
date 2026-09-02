import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";


const analytics = await readFile(
  new URL("../public/analytics.js", import.meta.url),
  "utf8",
);


test("classifies every portfolio instrument as a project", () => {
  const projectList = analytics.match(/const PORTFOLIO_PROJECTS = \[(.*?)\]/s)?.[1] ?? "";

  for (const project of ["mantice", "glorb", "campana", "maresono"]) {
    assert.match(projectList, new RegExp(`['\"]${project}['\"]`));
  }
});


test("classifies project source and play destinations before profile links", () => {
  const projectBranch = analytics.indexOf("if (project)");
  const githubProfileBranch = analytics.indexOf("url.hostname === 'github.com'");

  assert.ok(projectBranch >= 0);
  assert.ok(githubProfileBranch > projectBranch);
  assert.match(
    analytics,
    /destination:\s*url\.hostname === 'github\.com' \? 'source' : 'play'/,
  );
});

test("tracks PayPal checkout intent without collecting amount or identity", () => {
  assert.match(analytics, /support_checkout_opened/);
  assert.match(analytics, /provider:\s*'paypal'/);
  assert.match(analytics, /cadence:\s*'one_time'/);
  assert.match(analytics, /source:\s*'support_page'/);
  assert.doesNotMatch(analytics, /support_checkout_opened[\s\S]{0,180}(amount|email|name):/);
});
