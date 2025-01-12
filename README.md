# multiple
a repository testing the search and result features of www.google.com

## Testplan
- Test search shows 1 or more results
- Test Google Rules
- Test translate
- Test weather

## How To Run:

  "scripts": {
    "start": "playwright test",
    "startUi": "playwright test --ui",
    "report":  "playwright show-report"

`npm run start`
- to run scripts in cli

`npm run startUi`
- to run scripts in test runner

`npm run report`
- to generate report of last run
