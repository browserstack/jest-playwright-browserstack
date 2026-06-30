const { chromium } = require('@playwright/test');

// Local test: with `browserstackLocal: true` in browserstack.yml the SDK opens a
// tunnel, so the cloud browser can reach http://bs-local.com:<port>/ -- a host that
// only your machine serves. bs-local.com is resolved to your machine by the tunnel.
describe('BStackLocalSample', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    if (browser) await browser.close();
  });

  beforeEach(async () => {
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterEach(async () => {
    if (context) await context.close();
  });

  test('reach a private host via BrowserStack Local', async () => {
    await page.goto('http://bs-local.com:45454/');
    const title = await page.title();
    expect(title).toContain('BrowserStack Local');
  });
});
