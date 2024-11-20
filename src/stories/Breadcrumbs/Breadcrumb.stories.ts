import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "top-left",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object", // Allows dynamic editing in the Storybook Controls panel
      description: "The breadcrumb data (array of label-path objects).",
      defaultValue: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
      ],
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ],
  },
};

export const SingleLevel: Story = {
  args: {
    data: [{ label: "Home", path: "/" }],
  },
};

export const MultiLevel: Story = {
  args: {
    data: [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Electronics", path: "/products/electronics" },
      { label: "Smartphones", path: "/products/electronics/smartphones" },
    ],
  },
};
