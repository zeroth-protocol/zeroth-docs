import type { Meta, StoryObj } from "@storybook/react";
import { OriginMark } from "@/components/origin-mark";
const meta = { title: "Foundations/OriginMark", component: OriginMark, args: { size: 120 } } satisfies Meta<typeof OriginMark>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Canonical: Story = {};
