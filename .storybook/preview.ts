import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: { default: "origin" },
    layout: "centered",
    options: { storySort: { order: ["Foundations", "Components"] } }
  }
};
export default preview;
