const projects = [
  { name: "Trasan Recruitment", type: "Recruitment Company", url: "https://www.trasanrecruitment.com" },
  { name: "Trasan Education", type: "International Education", url: "https://www.trasaneducation.com" },
];

function ProjectCard({ project, priority = false }: { project: (typeof projects)[number]; priority?: boolean }) {
  return <article className="group">
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <div className="flex h-9 items-center gap-1.5 border-b border-border bg-surface px-4" aria-hidden="true"><span className="size-2 rounded-full bg-gold"/><span className="size-2 rounded-full bg-border"/><span className="size-2 rounded-full bg-border"/></div>
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <iframe src={project.url} title={`${project.name} home page preview`} loading={priority ? "eager" : "lazy"} className="h-full w-full border-0 bg-background" />
      </div>
    </div>
    <div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="text-2xl text-primary">{project.name}</h3><a href={project.url} target="_blank" rel="noreferrer" className="mt-1 block break-all text-sm text-muted-foreground hover:text-gold">{project.url}</a></div><p className="text-right text-xs font-semibold uppercase text-muted-foreground">{project.type}</p></div>
  </article>;
}

export function ProjectGrid({ limit }: { limit?: number }) {
  return <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">{projects.slice(0, limit).map((p, i) => <ProjectCard key={p.name} project={p} priority={i === 0}/>)}</div>;
}
