import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary","warning", "override","tertiary"],
    },
    disabled: { control: { type: "boolean" } },
    pressed: {
      control: { type: "boolean" },
    },
    onclick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
    label: "Warning",
  },
};

export const Override: Story = {
  args: {
    variant: "override",
    label: "override",
  },
};

export const tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "tertiary",
  },
};
