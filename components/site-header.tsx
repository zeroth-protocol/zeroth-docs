"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OriginMark } from "./origin-mark";
import { primaryNav } from "@/lib/site-data";

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Zeroth home"><OriginMark size={30}/><span>ZEROTH</span></Link>
      <nav className="desktop-nav" aria-label="Primary">
        {primaryNav.map(([label, href]) => <Link key={href} href={href} data-active={path === href}>{label}</Link>)}
        <Link href="/docs" data-active={path === "/docs"}>Docs</Link>
      </nav>
      <Link href="/developers" className="header-cta">Build on Zeroth</Link>
      <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "≡"}</button>
      {open && <div className="mobile-overlay" role="dialog" aria-modal="true">
        {[...primaryNav, ["Docs", "/docs"] as const, ["Blackpaper", "/blackpaper"] as const].map(([label, href], i) => (
          <Link key={href} href={href}><span>{String(i + 1).padStart(2,"0")}</span>{label}</Link>
        ))}
      </div>}
    </header>
  );
}
