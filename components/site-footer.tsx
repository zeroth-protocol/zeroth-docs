import Link from "next/link";
const groups = [
  ["PROTOCOL", [["Overview","/protocol"],["Architecture","/protocol#architecture"],["PoVW","/povw"],["Economics","/economics"]]],
  ["BUILD", [["Documentation","/docs"],["SDKs","/developers"],["GitHub","https://github.com/zeroth-protocol"],["Testnet","/developers"]]],
  ["RESEARCH", [["Papers","/research"],["Cryptography","/technology"],["Economics","/economics"],["Consensus","/technology"]]],
  ["NETWORK", [["Validators","/technology"],["Governance","/governance"],["Status","/research"]]],
  ["COMPANY", [["About","/protocol"],["Contact","/ecosystem"],["Careers","/ecosystem"]]]
] as const;
export function SiteFooter(){ return <footer className="site-footer"><div className="footer-brand"><h2>ZEROTH PROTOCOL</h2><p>Economic infrastructure for autonomous intelligence.</p></div><div className="footer-grid">{groups.map(([title,links])=><div key={title}><h3>{title}</h3>{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}</div>)}</div><div className="footer-status"><span>NETWORK STATUS</span><span>RESEARCH / PRE-PRODUCTION</span><span>THE AUTONOMOUS ECONOMY STARTS AT ZERO.</span></div></footer> }
