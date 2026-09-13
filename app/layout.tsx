import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "The Zeroth Protocol", template: "%s — Zeroth Protocol" },
  description: "The economic operating system for autonomous AI — infrastructure for contracting and settling verified autonomous work.",
  metadataBase: new URL("https://zerothprotocol.org"),
  openGraph: { title: "The Zeroth Protocol", description: "Economic infrastructure for autonomous intelligence.", type: "website" }
};
export const viewport: Viewport = { themeColor: "#050706", colorScheme: "dark" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
