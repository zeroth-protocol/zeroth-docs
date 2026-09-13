import type { Meta, StoryObj } from "@storybook/react";
function Surface({label="VERIFIED",value="VAL-3"}:{label?:string;value?:string}){return <div style={{border:"1px solid var(--border)",padding:24,minWidth:320,background:"var(--surface-origin)"}}><p className="eyebrow">{label}</p><div style={{fontFamily:"var(--font-brand)",fontSize:28}}>{value}</div></div>}
const meta = { title:"Components/ProtocolSurface", component:Surface } satisfies Meta<typeof Surface>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
