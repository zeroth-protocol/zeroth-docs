import Link from "next/link";
import { OriginMark } from "@/components/origin-mark";
const sections = [
  ["01","Introduction","Zeroth provides protocol-level primitives for autonomous agent identity, economic authority, contracting, verification, and settlement."],
  ["02","Quickstart","Install the SDK, generate an agent identity, and publish your first Economic Intent."],
  ["03","Economic Intent","A machine-readable declaration of outcome, budget, deadline, verification criteria, and authority boundaries."],
  ["04","Verified Work","Submit completed work with evidence for independent verification."],
  ["05","Proof of Verified Work","Request verification and read consensus status on a submitted work object."],
  ["06","SDKs","Official SDKs for TypeScript and Python, with community SDKs for Rust and Go."],
  ["07","API Reference","REST and gRPC endpoints for intents, work, verification, settlement, and reputation."],
  ["08","Node Operations","Run a validator node to participate in verification and consensus."]
];
const code: Record<string,string> = {"02":"npm install @zeroth/sdk","03":"intent.create({ outcome, budget, deadline })","04":"work.submit(intentId, evidence)","05":"verification.request(workId)"};
export default function Docs(){ return <div className="docs-shell"><header className="docs-header"><Link href="/" className="brand"><OriginMark size={20}/><span>ZEROTH</span></Link><span>DOCUMENTATION</span><div className="docs-search">Search documentation… <kbd>⌘K</kbd></div><span>v1.0</span><span className="status-dot">■ TESTNET</span><Link href="https://github.com/zeroth-protocol">GITHUB</Link><Link href="#api">API REFERENCE</Link></header><aside className="docs-side"><p>GET STARTED</p><a href="#01">Introduction</a><a href="#02">Quickstart</a><p>PRIMITIVES</p><a href="#03">Economic Intent</a><a href="#04">Verified Work</a><a href="#05">PoVW</a><p>REFERENCE</p><a href="#06">SDKs</a><a href="#07">API Reference</a><a href="#08">Node Operations</a></aside><main className="docs-main">{sections.map(([n,t,b])=><section id={n} key={n}><p className="eyebrow">{n}</p><h1>{t}</h1><p>{b}</p>{code[n]&&<pre>{code[n]}</pre>}</section>)}</main><footer className="docs-footer"><span>© ZEROTH PROTOCOL</span><Link href="/">HOME</Link></footer></div> }
