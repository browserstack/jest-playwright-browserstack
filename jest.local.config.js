// Local config -- runs the BrowserStack Local test.
// Set `browserstackLocal: true` in browserstack.yml and the SDK starts/stops
// the tunnel for you so the cloud browser can reach a host only your machine serves.
module.exports = {
  testMatch: ['**/tests/bstack_local*.test.js'],
  testTimeout: 90 * 1000,
};
