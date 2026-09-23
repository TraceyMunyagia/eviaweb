import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="border-b border-border bg-surface"><div className="section-shell py-16 md:py-24"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] text-primary md:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{text}</p></div></section>;
}

export function FinalCta() {
  return <section className="bg-primary"><div className="section-shell py-18 text-center md:py-24"><p className="eyebrow">Your next chapter</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl text-primary-foreground md:text-6xl">Ready to give your business a better online presence?</h2><Button variant="gold" size="lg" asChild className="mt-8"><Link to="/get-a-quote">Get a Quote <ArrowRight /></Link></Button></div></section>;
}

export type Package = { name: string; price: string; pages: string; revisions: string; timeline: string; popular?: boolean };
export const packages: Package[] = [
  { name: "Starter", price: "KSh 8,000", pages: "Up to 4 pages", revisions: "1 revision", timeline: "4–5 business days" },
  { name: "Growth", price: "KSh 16,000", pages: "Up to 7 pages", revisions: "2 revisions", timeline: "6–8 business days", popular: true },
  { name: "Premium", price: "KSh 32,000", pages: "7+ pages", revisions: "4 revisions", timeline: "10–14 business days" },
];
const common = ["Domain", "Hosting", "SSL", "Responsive design", "Basic SEO", "WhatsApp button", "Basic analytics", "Deployment"];
export function PackageCards({ compact = false }: { compact?: boolean }) {
  return <div className="grid gap-5 lg:grid-cols-3">{packages.map((p) => <article key={p.name} className={`relative rounded-lg border p-7 transition-transform hover:-translate-y-1 ${p.popular ? "border-gold bg-primary text-primary-foreground" : "border-border bg-card"}`}>
    {p.popular && <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold tracking-widest text-gold-foreground">MOST POPULAR</span>}
    <p className={`text-sm font-semibold ${p.popular ? "text-gold" : "text-muted-foreground"}`}>{p.name}</p><h3 className="mt-3 text-4xl">{p.price}</h3>
    {!compact && <ul className={`mt-7 space-y-3 text-sm ${p.popular ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{[p.pages, ...common, p.revisions, p.timeline].map(x => <li key={x} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-gold"/>{x}</li>)}</ul>}
    <Button variant={p.popular ? "gold" : "outline"} asChild className="mt-7 w-full"><Link to="/get-a-quote" search={{ package: p.name.toLowerCase() }}>Choose {p.name}</Link></Button>
  </article>)}</div>;
}