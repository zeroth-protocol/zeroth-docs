import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import type { SecondaryPage } from "@/lib/site-data";

export function ReferencePage({ page }: { page: SecondaryPage }) {
  return <><SiteHeader/><main className="reference-page">
    <section className="reference-hero"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="lead">{page.intro}</p></section>
    <div className="reference-sections">{page.sections.map((s,i)=><section className={`reference-card ${s.accent ? "is-accent" : ""}`} key={`${s.label}-${i}`}><p className="eyebrow">{s.label}</p><h2>{s.title}</h2><p>{s.body}</p></section>)}</div>
  </main><SiteFooter/></>;
}
