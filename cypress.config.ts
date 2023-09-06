import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    specPattern: "src/**/*.cy.ts",
    supportFile: "cypress/support/component.ts",
    devServer: {
      framework: "svelte",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
