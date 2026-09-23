import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms";
import { PageIntro } from "@/components/page-parts";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Evia Web" }, { name: "description", content: "Contact Evia Web about your next website, SEO or digital presence project." }], links: [{ rel: "canonical", href: "/contact" }] }),
  component: Contact,
});

function Contact() {
  return <>
    <PageIntro eyebrow="Contact us" title="Tell us what you’re building." text="Have a question, an idea or a project in mind? Send a message and we’ll get back to you with the clearest next step." />
    <section className="py-20 md:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
      <aside><p className="eyebrow">Reach out directly</p><h2 className="mt-4 text-4xl text-primary">We’re easy to find.</h2><div className="mt-8 space-y-5 text-sm text-muted-foreground"><a className="flex items-center gap-4 hover:text-primary" href="tel:+254796675566"><Phone className="size-5 text-gold" />+254 796 675 566</a><a className="flex items-center gap-4 hover:text-primary" href="https://wa.me/254796675566"><MessageCircle className="size-5 text-gold" />WhatsApp</a><a className="flex items-center gap-4 hover:text-primary" href="mailto:eviake@gmail.com"><Mail className="size-5 text-gold" />eviake@gmail.com</a></div><div className="mt-10 rounded-lg border border-border bg-surface p-6"><p className="text-sm font-semibold text-primary">Prefer to get started?</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Share a few details and we’ll help you choose the right starting point.</p><Button asChild className="mt-5"><Link to="/get-a-quote">Get a Quote <ArrowRight /></Link></Button></div></aside>
      <div className="rounded-lg border border-border bg-surface p-6 md:p-10"><ContactForm /></div>
    </div></section>
  </>;
}
