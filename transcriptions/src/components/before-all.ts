
export const specHelpers = (): void => {
  // TODO: Vue 3 class component seems to have issues, should learn more about composition api
  console.warn = jest.fn(); // disables a warning, regarding properties created on the base component
};