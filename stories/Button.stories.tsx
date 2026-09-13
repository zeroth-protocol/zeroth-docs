import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/button";
const meta = { title: "Components/Button", component: Button, args: { href: "#", children: "Explore Protocol" } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Tertiary: Story = { args: { variant: "tertiary", children: "Build on Zeroth →" } };
