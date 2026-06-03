# Jest with Playwright with BrowserStack

Run Playwright tests authored with the Jest test runner on the BrowserStack
cloud using the [BrowserStack Node SDK](https://www.browserstack.com/docs/automate/selenium/sdk-overview).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) and npm installed.
- A [BrowserStack](https://www.browserstack.com/) account. Grab your
  `Username` and `Access Key` from your
  [account settings](https://www.browserstack.com/accounts/settings).

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/browserstack/jest-playwright-browserstack.git
   cd jest-playwright-browserstack
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Provide your BrowserStack credentials either by exporting them as
   environment variables:

   ```bash
   export BROWSERSTACK_USERNAME="YOUR_USERNAME"
   export BROWSERSTACK_ACCESS_KEY="YOUR_ACCESS_KEY"
   ```

   or by editing `userName` and `accessKey` directly in `browserstack.yml`.

## Run Sample Test

```bash
npx browserstack-node-sdk jest src/sample.test.js
```

## Run Local Test

```bash
npx browserstack-node-sdk jest src/sample-local.test.js
```

## Notes

- View your test runs on the [BrowserStack Automate dashboard](https://automate.browserstack.com/).
- The Local test uses [BrowserStack Local](https://www.browserstack.com/docs/automate/selenium/local-testing-introduction)
  (`browserstackLocal: true` in `browserstack.yml`) to reach
  `bs-local.com:45454` from the cloud.
