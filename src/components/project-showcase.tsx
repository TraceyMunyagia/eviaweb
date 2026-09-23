import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import rentra from "@/assets/rentra-preview.jpg";
import eviaInvite from "@/assets/evia-invite-preview.jpg";
import recruitment from "@/assets/trasan-recruitment.webp.asset.json";
import education from "@/assets/trasan-education.webp.asset.json";

const projects = [
  { name: "Rentra", type: "Real Estate SaaS", image: rentra },
  { name: "Evia", type: "Digital Invitations", image: eviaInvite },
  { name: "Trasan Recruitment", type: "Recruitment Company", image: recruitment.url },
  { name: "Trasan Education", type: "International Education", image: education.url },
];
const views = ["top", "center", "bottom"] as const;

function ProjectCard({ project, priority = false }: { project: (typeof projects)[number]; priority?: boolean }) {
  const [active, setActive] = useState(0);
  useEffect(() => { const id = window.setInterval(() => setActive(x => (x + 1) % views.length), 4500); return () => window.clearInterval(id); }, []);
  const go = (delta: number) => setActive(x => (x + delta + views.length) % views.length);
  return <article className="group">
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <div className="flex h-9 items-center gap-1.5 border-b border-border bg-surface px-4" aria-hidden="true"><span className="size-2 rounded-full bg-gold"/><span className="size-2 rounded-full bg-border"/><span className="size-2 rounded-full bg-border"/></div>
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img src={project.image} alt={`${project.name} website preview`} width={1440} height={900} loading={priority ? "eager" : "lazy"} className="h-full w-full object-cover transition-[object-position,transform] duration-700 group-hover:scale-[1.015]" style={{ objectPosition: `center ${views[active]}` }} />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-primary/90 px-3 py-2 opacity-100 backdrop-blur-sm md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
          <Button variant="cream" size="icon" aria-label={`Previous ${project.name} page`} onClick={() => go(-1)}><ChevronLeft /></Button>
          <div className="flex gap-1.5">{views.map((_, i) => <button key={i} onClick={() => setActive(i)} aria-label={`View page ${i + 1}`} className={`size-2 rounded-full ${i === active ? "bg-gold" : "bg-primary-foreground/40"}`}/>)}</div>
          <Button variant="cream" size="icon" aria-label={`Next ${project.name} page`} onClick={() => go(1)}><ChevronRight /></Button>
        </div>
      </div>
    </div>
    <div className="mt-4 flex items-baseline justify-between gap-4"><h3 className="text-2xl text-primary">{project.name}</h3><p className="text-xs font-semibold uppercase text-muted-foreground">{project.type}</p></div>
  </article>;
}

export function ProjectGrid({ limit }: { limit?: number }) {
  return <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">{projects.slice(0, limit).map((p, i) => <ProjectCard key={p.name} project={p} priority={i === 0}/>)}</div>;
}