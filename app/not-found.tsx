import Link from "next/link";
import { OriginMark } from "@/components/origin-mark";

export default function NotFound() {
  return (
    <main className="not-found">
      <OriginMark size={64}/>
      <p className="eyebrow">ZEROTH / UNRESOLVED ROUTE</p>
      <h1>RETURN TO ORIGIN.</h1>
      <p>The requested protocol surface does not exist.</p>
      <Link className="button button-primary" href="/">Enter Zeroth</Link>
    </main>
  );
}
