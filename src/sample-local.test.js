const { chromium } = require('@playwright/test');

describe("BStack local test", () => {
  let browser;
  let page;

  beforeAll(async () => {
    // The BrowserStack Node SDK patches playwright.chromium.connect() at import
    // time, so launch() is transparently routed to the BrowserStack cloud.
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test(
    "local test",
    async () => {
      await page.goto("http://bs-local.com:45454/");

      expect(await page.title()).toBe("BrowserStack Local");
    },
    60 * 1000
  );
});
