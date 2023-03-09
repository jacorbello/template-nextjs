module.exports = {
  extends: ["next/core-web-vitals", "plugin:storybook/recommended", "prettier"],
  rules: {
    // TODO: Remove the 'react/jsx-key' bypass when global issue is fixed:
    //    Similar to: https://github.com/jsx-eslint/eslint-plugin-react/issues/3215
    //    Triggering on `/src/pages/index.tsx` on declaration of `commands` array.
    "react/jsx-key": "off",
  },
};
