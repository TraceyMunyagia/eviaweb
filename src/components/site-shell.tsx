import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["/", "Home"], ["/portfolio", "Portfolio"], ["/packages", "Packages"],
  ["/how-it-works", "How It Works"], ["/about", "About"], ["/contact", "Contact"],
] as const;

export function Logo() {
  return <Link to="/" className="font-display text-3xl text-primary" aria-label="Evia Web home">Evia<span className="text-gold">.</span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
    <div className="section-shell flex h-18 items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
        {nav.map(([to, label]) => <Link key={to} to={to} activeProps={{ className: "text-primary font-semibold" }} className="text-sm text-muted-foreground transition-colors hover:text-primary">{label}</Link>)}
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild className="hidden sm:inline-flex"><Link to="/get-a-quote">Get a Quote</Link></Button>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
      <div className="flex flex-col gap-1">{nav.map(([to,label]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium hover:bg-secondary">{label}</Link>)}
      <Button asChild className="mt-3 sm:hidden"><Link to="/get-a-quote" onClick={() => setOpen(false)}>Get a Quote</Link></Button></div>
    </nav>}
  </header>;
}

export function SiteFooter() {
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/eviaw.eb?stkn=MTFpb3YwZ3NtYnNwYw%3D%3D&utm_source=qr", icon: <Instagram className="size-5" /> },
    { label: "TikTok", href: "https://www.tiktok.com/@eviaweb?_r=1&_t=ZS-99zw1ollD9x", icon: <TikTokIcon /> },
    { label: "Facebook", href: "https://www.facebook.com/share/1F1vUNzZtq/?mibextid=wwXIfr", icon: <Facebook className="size-5" /> },
  ];
  return <footer className="bg-primary text-primary-foreground">
    <div className="section-shell grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><Logo /><p className="mt-4 max-w-sm text-sm leading-7 text-primary-foreground/70">Websites, SEO & digital presence for growing businesses.</p></div>
      <div><p className="eyebrow">Navigate</p><div className="mt-4 grid grid-cols-2 gap-3 text-sm">{nav.map(([to,label]) => <Link key={to} to={to} className="text-primary-foreground/70 hover:text-gold">{label}</Link>)}<Link to="/get-a-quote" className="text-gold">Get a Quote</Link></div></div>
      <div><p className="eyebrow">Contact</p><div className="mt-4 space-y-3 text-sm text-primary-foreground/70"><a href="tel:+254759976682">+254 759 976 682</a><br/><a href="https://wa.me/254759976682">WhatsApp</a><br/><a href="mailto:eviake@gmail.com">eviake@gmail.com</a><div className="flex gap-3 pt-2" aria-label="Evia Web social media">{socialLinks.map(({ label, href, icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Evia Web on ${label}`} className="transition-colors hover:text-gold">{icon}</a>)}</div></div></div>
    </div>
    <div className="border-t border-primary-foreground/15"><div className="section-shell flex flex-col gap-3 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:justify-between"><p>© 2026 Evia Web</p><div className="flex gap-5"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link></div></div></div>
  </footer>;
}

function TikTokIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M15.5 3c.3 1.8 1.3 3 3.5 3.2v2.8c-1.3 0-2.5-.4-3.5-1.1v5.7a5.4 5.4 0 1 1-4.7-5.35v2.9a2.6 2.6 0 1 0 1.9 2.45V3h2.8Z" /></svg>;
}
