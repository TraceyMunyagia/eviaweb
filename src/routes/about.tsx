import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PageIntro } from "@/components/page-parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Evia Web" },
      { name: "description", content: "Meet Evia Web, a practical website partner for small and growing businesses." },
      { property: "og:title", content: "About Evia Web" },
      { property: "og:description", content: "Professional websites made simpler for small and growing businesses." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return <>
    <PageIntro eyebrow="About Evia Web" title="A better online presence should feel within reach." text="Evia Web helps small and growing businesses show up online with clarity, confidence and a website they can be proud of." />
    <section className="py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <div>
          <p className="eyebrow">Why we exist</p>
          <h2 className="mt-4 max-w-2xl text-4xl text-primary md:text-6xl">The technical side should not stand between you and your next customer.</h2>
          <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground">
            <p>Evia Web was created for business owners who need a professional website without the jargon, guesswork or agency-sized price tag.</p>
            <p>We combine thoughtful design, dependable development and practical SEO to create a digital home that works for your business today—and can grow with it.</p>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-1">
          {[[Lightbulb, "Clear thinking", "Every page has a job."], [HeartHandshake, "Personal support", "A real partner from first message to launch."], [ShieldCheck, "Ongoing care", "Your website stays looked after."]].map(([Icon, title, text]) => <article key={title as string} className="bg-card p-6"><Icon className="size-6 text-gold" /><h3 className="mt-6 text-2xl">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text as string}</p></article>)}
        </div>
      </div>
    </section>
    <section className="bg-surface py-20 md:py-24"><div className="section-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow">Let’s build something useful</p><h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Your business deserves a website that works as hard as you do.</h2></div><Button size="lg" asChild><Link to="/get-a-quote">Let's Build Your Website <ArrowRight /></Link></Button></div></section>
    <FinalCta />
  </>;
}
