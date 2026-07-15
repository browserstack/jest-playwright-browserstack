// Sample config -- runs the public bstackdemo test.
// The BrowserStack SDK (invoked via `browserstack-node-sdk jest`) reads
// browserstack.yml, fans this run out across the platforms declared there,
// and routes each Playwright `chromium.launch()` to BrowserStack.
module.exports = {
  testMatch: ['**/tests/bstack_sample*.test.js'],
  testTimeout: 90 * 1000,
};
