# frontend-challenge

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run Unit Tests and check its code coverage

```sh
npm run test:coverage
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run dev
npm run test:e2e # or `npm run test:e2e:head` for headless testing
```

## Main features covered

Besides the application itself, below are the features that were also covered during this challenge:

1. **Responsiveness design**: desktop and mobile.
2. **Accessibility options**: implementation of two modes, _elder mode_ and _color blindness mode_. When the user activates the _elder mode_, the font-size of the application increases. While selecting _color blindness mode_ helps color-blind users to better identify text boxes.
3. **404 Page**: to illustrate the use of vue-router.
4. **Empty state page**: to give an indication to the user when there are no transcriptions created.
5. **Unit testing**.
6. **E2E testing with Cypress**.

## Notes

### Code coverage result

| File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| -------------------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files                        | 99.77   | 95.65    | 100     | 99.77   |
| components/accessibility-options | 100     | 100      | 100     | 100     |
| AccessibilityOptions.vue         | 100     | 100      | 100     | 100     |
| components/checkbox              | 100     | 100      | 100     | 100     |
| Checkbox.vue                     | 100     | 100      | 100     | 100     |
| components/content               | 100     | 100      | 100     | 100     |
| Content.vue                      | 100     | 100      | 100     | 100     |
| components/default-page          | 100     | 100      | 100     | 100     |
| DefaultPage.vue                  | 100     | 100      | 100     | 100     |
| components/icon-button           | 100     | 100      | 100     | 100     |
| IconButton.vue                   | 100     | 100      | 100     | 100     |
| components/input                 | 97.29   | 80       | 100     | 97.29   |
| Input.vue                        | 97.29   | 80       | 100     | 97.29   | 35-36             |
| components/layout                | 100     | 100      | 100     | 100     |
| Layout.vue                       | 100     | 100      | 100     | 100     |
| components/list-item             | 100     | 100      | 100     | 100     |
| Item.vue                         | 100     | 100      | 100     | 100     |
| components/list-item/item-body   | 100     | 100      | 100     | 100     |
| ItemBody.vue                     | 100     | 100      | 100     | 100     |
| components/list-item/item-title  | 100     | 100      | 100     | 100     |
| ItemTitle.vue                    | 100     | 100      | 100     | 100     |
| components/modal                 | 100     | 100      | 100     | 100     |
| Modal.vue                        | 100     | 100      | 100     | 100     |
| components/page-title            | 100     | 100      | 100     | 100     |
| PageTitle.vue                    | 100     | 100      | 100     | 100     |
| components/toggle-button         | 100     | 100      | 100     | 100     |
| ToggleButton.vue                 | 100     | 100      | 100     | 100     |
| components/top-bar               | 100     | 100      | 100     | 100     |
| TopBar.vue                       | 100     | 100      | 100     | 100     |
| shared/utils                     | 100     | 100      | 100     | 100     |
| accessibilityOptions.js          | 100     | 100      | 100     | 100     |
