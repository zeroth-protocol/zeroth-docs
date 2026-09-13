import { notFound } from "next/navigation";
import { ReferencePage } from "@/components/reference-page";
import { getSecondaryPage, secondaryPages } from "@/lib/site-data";

export function generateStaticParams(){ return secondaryPages.map(({slug})=>({slug})); }
export default async function Page({ params }: { params: Promise<{slug:string}> }) {
  const {slug}=await params;
  const page=getSecondaryPage(slug);
  if(!page) notFound();
  return <ReferencePage page={page}/>;
}
