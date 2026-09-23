import { createFileRoute, useSearch } from "@tanstack/react-router";
import { QuoteForm } from "@/components/forms";
import { PageIntro } from "@/components/page-parts";

export const Route = createFileRoute("/get-a-quote")({
  validateSearch: (search: Record<string, unknown>) => ({ package: typeof search.package === "string" ? search.package : "" }),
  head: () => ({ meta: [{ title: "Get a Website Quote — Evia Web" }, { name: "description", content: "Tell Evia Web about your business and get started on a professional website." }], links: [{ rel: "canonical", href: "/get-a-quote" }] }),
  component: GetAQuote,
});

function GetAQuote() {
  const { package: selectedPackage } = useSearch({ from: "/get-a-quote" });
  return <>
    <PageIntro eyebrow="Start your project" title="Let’s build your website." text="A few details are all we need to understand where you’re starting. We’ll follow up with a consultation and a clear final quote." />
    <section className="py-20 md:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start"><div><p className="eyebrow">No pressure, just a clear next step</p><h2 className="mt-4 text-4xl text-primary md:text-5xl">Good websites start with a good conversation.</h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Tell us what your business does, what you need and what you’d like your website to achieve. The more technical questions can be handled during the consultation.</p><ol className="mt-8 space-y-4 text-sm"><li><span className="mr-3 font-bold text-gold">01</span>Quote request</li><li><span className="mr-3 font-bold text-gold">02</span>Consultation</li><li><span className="mr-3 font-bold text-gold">03</span>Requirements and final quote</li></ol></div><QuoteForm initialPackage={selectedPackage} /></div></section>
  </>;
}
