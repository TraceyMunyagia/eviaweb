import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Search, MapPin, HeartHandshake, Smartphone, Gauge, Wrench, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PackageCards } from "@/components/page-parts";
import { ProjectGrid } from "@/components/project-showcase";
import rentra from "@/assets/rentra-preview.jpg";
import eviaInvite from "@/assets/evia-invite-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Evia Web — Websites for Growing Businesses" },
    { name: "description", content: "Professional websites, SEO and digital presence for small and growing businesses in Kenya." },
    { property: "og:title", content: "Evia Web — Websites for Growing Businesses" },
    { property: "og:description", content: "Professional websites, SEO and digital presence for small and growing businesses in Kenya." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", name: "Evia Web", email: "eviake@gmail.com", telephone: "+254759976682", areaServed: "Kenya", serviceType: ["Website design", "SEO", "Website care"] }) }] }),
  component: Home,
});

const services = [
  [Globe2, "Website Creation", "Modern, responsive websites designed around your business."],
  [Search, "SEO Optimization", "Help your website become easier to discover through search."],
  [MapPin, "Google Business Profile", "Establish and improve your presence on Google."],
  [HeartHandshake, "Website Care", "Hosting, maintenance, updates and ongoing technical support."],
];
const benefits = [[Sparkles,"Built for your business"],[Smartphone,"Mobile-first"],[Gauge,"SEO-ready"],[Wrench,"Fully managed"]];
const process = ["Get a Quote", "Consultation", "Design & Development", "Review", "Launch", "Website Care"];

function Home() { return <>
  <section className="overflow-hidden border-b border-border"><div className="section-shell grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_.9fr] lg:py-20">
    <div className="reveal"><p className="eyebrow">Web design · SEO · Care</p><h1 className="mt-5 max-w-3xl text-5xl leading-[.98] text-primary sm:text-6xl lg:text-7xl">Websites that make your business look as good as it works.</h1><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">We create polished, professional websites, improve your online visibility and handle the technical side—so you can focus on your business.</p><div className="mt-8 flex flex-wrap gap-3"><Button size="lg" asChild><Link to="/get-a-quote">Get a Quote <ArrowRight/></Link></Button><Button size="lg" variant="outline" asChild><Link to="/portfolio">View Our Work</Link></Button></div></div>
    <div className="relative mx-auto w-full max-w-xl pb-12 pt-8" aria-label="Evia Web project previews"><div className="absolute -right-4 top-0 rounded-md border border-gold/30 bg-card px-4 py-3 text-xs font-semibold shadow-md"><span className="text-gold">●</span> Built to be found</div><div className="overflow-hidden rounded-lg border border-border bg-card p-2 shadow-xl"><img src={rentra} alt="Rentra real estate platform designed by Evia Web" width={1440} height={900} className="aspect-[16/10] w-full rounded-md object-cover"/></div><div className="absolute -bottom-1 -left-3 w-2/5 overflow-hidden rounded-md border-4 border-background bg-card shadow-xl"><img src={eviaInvite} alt="Evia digital invitation website" width={1440} height={900} className="aspect-[4/3] w-full object-cover"/></div></div>
  </div></section>
  <section className="py-20 md:py-28"><div className="section-shell"><p className="eyebrow">What we do</p><div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="max-w-2xl text-4xl text-primary md:text-6xl">Everything your business needs online.</h2><p className="max-w-sm text-sm leading-7 text-muted-foreground">Clear strategy, thoughtful design and reliable support—all in one place.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{services.map(([Icon,title,text]) => <article key={title as string} className="bg-card p-7"><Icon className="size-6 text-gold"/><h3 className="mt-8 text-2xl">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p></article>)}</div></div></section>
  <section className="bg-primary py-18 text-primary-foreground md:py-24"><div className="section-shell"><p className="eyebrow">Why Evia Web</p><h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">Professional by design. Simple by process.</h2><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([Icon,t],i) => <div key={t as string} className="border-t border-primary-foreground/20 pt-5"><Icon className="size-5 text-gold"/><p className="mt-8 text-xs text-primary-foreground/50">0{i+1}</p><h3 className="mt-2 text-2xl">{t as string}</h3></div>)}</div></div></section>
  <section className="py-20 md:py-28"><div className="section-shell"><div className="mb-12 flex items-end justify-between gap-6"><div><p className="eyebrow">Selected work</p><h2 className="mt-4 text-4xl md:text-6xl">Made to move businesses forward.</h2></div><Button variant="outline" asChild className="hidden sm:inline-flex"><Link to="/portfolio">View All Work <ArrowRight/></Link></Button></div><ProjectGrid limit={4}/></div></section>
  <section className="bg-surface py-20 md:py-28"><div className="section-shell"><p className="eyebrow">Packages</p><h2 className="mt-4 mb-10 max-w-2xl text-4xl md:text-6xl">A strong online presence, at every stage.</h2><PackageCards compact/><div className="mt-8 text-center"><Button variant="outline" asChild><Link to="/packages">View Packages <ArrowRight/></Link></Button></div></div></section>
  <section className="py-20 md:py-28"><div className="section-shell"><p className="eyebrow">The process</p><h2 className="mt-4 text-4xl md:text-6xl">From first message to launch.</h2><ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{process.map((p,i)=><li key={p} className="bg-card p-6"><span className="text-xs font-bold text-gold">{String(i+1).padStart(2,"0")}</span><h3 className="mt-8 text-2xl">{p}</h3></li>)}</ol></div></section>
  <FinalCta />
</>; }
