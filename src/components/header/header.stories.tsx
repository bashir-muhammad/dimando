import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => <Header {...args}></Header>,
};
