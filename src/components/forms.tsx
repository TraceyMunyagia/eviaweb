import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitQuote } from "@/lib/quote-submission";

const Field = ({ label, ...props }: React.ComponentProps<typeof Input> & { label: string }) => <label className="grid gap-2 text-sm font-semibold">{label}<Input required className="h-12 bg-card" {...props}/></label>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="rounded-lg border border-gold bg-card p-8 text-center"><CheckCircle2 className="mx-auto size-9 text-gold"/><h2 className="mt-4 text-3xl">Message ready</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Thanks for reaching out. Direct delivery will be connected soon; for now, please contact us on WhatsApp.</p><Button asChild className="mt-6"><a href="https://wa.me/254759976682">Continue on WhatsApp</a></Button></div>;
  return <form className="grid gap-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name"/><Field label="Email" name="email" type="email"/><Field label="Phone" name="phone" type="tel"/><Field label="Business name" name="business"/></div><label className="grid gap-2 text-sm font-semibold">Message<Textarea required name="message" className="min-h-36 bg-card"/></label><Button size="lg" type="submit">Send Message</Button></form>;
}

const businessCategories = ["Professional services", "Real estate", "Hospitality", "Healthcare", "Retail", "Education", "Other"];
export function QuoteForm({ initialPackage = "" }: { initialPackage?: string }) {
  const [step, setStep] = useState(1); const [sent, setSent] = useState(false); const [submitting, setSubmitting] = useState(false); const [error, setError] = useState(""); const [formValues, setFormValues] = useState<Record<string, string>>({});
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (step < 3) { setStep(step + 1); return; }

    const values = new FormData(e.currentTarget);
    const getValue = (name: string) => String(values.get(name) || formValues[name] || "");
    setSubmitting(true);
    try {
      await submitQuote({
        name: getValue("name"),
        businessName: getValue("business"),
        email: getValue("email"),
        phone: getValue("phone"),
        category: getValue("category"),
        description: getValue("description"),
        package: getValue("package"),
        pages: "",
      });
      setSent(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We couldn't submit your quote. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  if (sent) return <div className="rounded-lg border border-gold bg-card p-8 text-center"><CheckCircle2 className="mx-auto size-10 text-gold"/><p className="eyebrow mt-5">Next steps</p><h2 className="mt-3 text-4xl">Your request is ready.</h2><p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground">Quote Request → Consultation → Requirements → Final Quote</p></div>;
  return <form onSubmit={submit} onChange={(e) => { const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement; if (target.name) setFormValues((current) => ({ ...current, [target.name]: target.value })); }} className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-10">
    <div className="mb-10"><div className="flex justify-between text-xs font-bold text-muted-foreground"><span>STEP {step} OF 3</span><span>{Math.round(step/3*100)}%</span></div><div className="mt-3 h-1 overflow-hidden rounded-full bg-muted"><div className={`h-full bg-gold transition-all ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"}`}/></div></div>
    {step === 1 && <fieldset className="grid gap-5"><legend className="mb-6 font-display text-3xl">Your Details</legend><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name"/><Field label="Business name" name="business"/><Field label="Email" name="email" type="email"/><Field label="Phone / WhatsApp" name="phone" type="tel"/></div></fieldset>}
    {step === 2 && <fieldset className="grid gap-5"><legend className="mb-6 font-display text-3xl">Your Business</legend><label className="grid gap-2 text-sm font-semibold">Business category<select required name="category" className="h-12 rounded-md border border-input bg-card px-3 font-normal"> <option value="">Choose one</option>{businessCategories.map(x=><option key={x}>{x}</option>)}</select></label><label className="grid gap-2 text-sm font-semibold">Short business description<Textarea required name="description" className="min-h-36" placeholder="What does your business do, and who do you serve?"/></label></fieldset>}
    {step === 3 && <fieldset className="grid gap-5"><legend className="mb-6 font-display text-3xl">Your Website</legend><label className="grid gap-2 text-sm font-semibold">Preferred package<select required name="package" defaultValue={initialPackage} className="h-12 rounded-md border border-input bg-card px-3 font-normal"><option value="">Choose one</option><option value="starter">Starter</option><option value="growth">Growth</option><option value="premium">Premium</option><option value="unsure">Not sure yet</option></select></label></fieldset>}
    {error && <p role="alert" className="mt-6 text-sm text-red-700">{error}</p>}
    <div className="mt-10 flex justify-between">{step > 1 ? <Button type="button" variant="outline" onClick={() => setStep(step-1)} disabled={submitting}>Back</Button> : <span/>}<Button type="submit" disabled={submitting}>{submitting ? "Submitting…" : step === 3 ? "Submit Request" : "Continue"}</Button></div>
  </form>;
}
