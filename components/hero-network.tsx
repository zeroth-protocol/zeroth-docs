"use client";
import { useEffect, useRef } from "react";

export function HeroNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let frame = 0; let raf = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) { canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
      ctx.clearRect(0,0,w,h);
      ctx.strokeStyle = "rgba(52,61,53,.42)"; ctx.lineWidth = 1;
      for (let x=28;x<w;x+=64){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
      for (let y=40;y<h;y+=56){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
      const pts = [[.12,.75],[.26,.64],[.39,.71],[.53,.5],[.67,.44],[.81,.31],[.9,.2]];
      ctx.strokeStyle = "#BEFF8B"; ctx.lineWidth = 1.25; ctx.beginPath();
      pts.forEach(([px,py],i)=>{ const drift = reduced ? 0 : Math.sin((frame+i*17)/70)*3; const x=px*w, y=py*h+drift; if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y); }); ctx.stroke();
      pts.forEach(([px,py],i)=>{ const drift = reduced ? 0 : Math.sin((frame+i*17)/70)*3; ctx.fillStyle=i===pts.length-1?"#BEFF8B":"#F4F6F2";ctx.fillRect(px*w-3,py*h+drift-3,6,6); });
      frame++; if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => draw(); window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <div className="network-wrap"><div className="network-label">ORIGIN / Z0</div><canvas ref={ref} className="network-canvas"/><div className="network-caption">PROTOCOL SIMULATION — ILLUSTRATIVE</div></div>;
}
