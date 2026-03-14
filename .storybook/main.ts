import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: "@storybook/nextjs",
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y"],
  staticDirs: ["../public"],
  webpackFinal(config) {
    if (!config.module?.rules) return config;

    // Debug: log all rules to see exact structure
    console.log("Webpack rules:", JSON.stringify(config.module.rules, null, 2));

    // Remove any rule that references next-image-loader-stub anywhere
    config.module.rules = config.module.rules
      .filter((rule) => {
        const ruleStr = JSON.stringify(rule ?? "");
        return !ruleStr.includes("next-image-loader-stub");
      })
      .filter(Boolean);

    // Add SVGR rule
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            exportType: "default",
          },
        },
      ],
    });

    return config;
  },
};
export default config;
