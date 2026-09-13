import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "tertiary"; className?: string };
export function Button({ href, children, variant = "primary", className = "" }: Props) {
  return <Link href={href} className={`button button-${variant} ${className}`.trim()}>{children}</Link>;
}
