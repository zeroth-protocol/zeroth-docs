import type { MetadataRoute } from "next";
import { secondaryPages } from "@/lib/site-data";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://zerothprotocol.org"; return ["","/docs","/blackpaper",...secondaryPages.map(p=>`/${p.slug}`)].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:path===""?1:.8})); }
