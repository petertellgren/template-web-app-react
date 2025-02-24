import type { StorybookConfig } from "@storybook/react-vite";
import type { UserConfig } from "vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  features: {
    storyStoreV7: true,
  },
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@storybook/addon-viewport",
  ],
  docs: {
    defaultName: "Docs",
  },
  refs: {
    "shared-ui": {
      title: "Common Components",
      url: process.env.NODE_ENV === "development" ? "http://localhost:6006/" : "shared-ui/",
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: "./",
      plugins: [tsconfigPaths()],
      // Add storybook-specific dependencies to pre-optimization
      optimizeDeps: {
        include: [
          "@storybook/addon-a11y",
          "@storybook/addon-interactions",
          "@storybook/addon-styling",
          "@storybook/addon-viewport",
        ],
      },
    } satisfies UserConfig);
  },
};

export default config;
