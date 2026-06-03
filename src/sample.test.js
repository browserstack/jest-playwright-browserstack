const { chromium } = require('@playwright/test');

describe("BStack demo test", () => {
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
    "add product to cart",
    async () => {
      await page.goto("https://bstackdemo.com/");

      // locating product on webpage and getting name of the product
      const productText = await page.locator('//*[@id="1"]/p').innerText();

      // clicking the 'Add to cart' button
      await page.locator('//*[@id="1"]/div[4]').click();

      // waiting until the Cart pane has been displayed on the webpage
      await page.locator(".float-cart__content").waitFor();

      // locating product in cart and getting name of the product in cart
      const productCartText = await page
        .locator(
          '//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]'
        )
        .innerText();

      // checking whether product has been added to cart by comparing product name
      expect(productCartText).toBe(productText);
    },
    60 * 1000
  );
});
