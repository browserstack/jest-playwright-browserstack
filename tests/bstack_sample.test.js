const { chromium } = require('playwright');

// Sample test: add the first product to the cart on bstackdemo.com and verify.
// Your code calls `chromium.launch()` as usual -- the BrowserStack SDK transparently
// routes the launch to the per-platform browser configured in browserstack.yml.
describe('BStackDemo cart', () => {
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

  test('add the first product to the cart', async () => {
    await page.goto('https://bstackdemo.com/');

    const firstProduct = page.locator('[id="1"]');
    const productTitle = await firstProduct.locator('.shelf-item__title').first().innerText();
    await firstProduct.getByText('Add to Cart').click();

    const quantity = await page.locator('.bag__quantity').innerText();
    expect(quantity).toBe('1');

    const cartTitle = await page.locator('.shelf-item__details .title').innerText();
    expect(cartTitle).toBe(productTitle);
  });
});
