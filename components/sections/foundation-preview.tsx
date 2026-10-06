"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Card, Chip, Tabs as HeroTabs } from "@heroui/react";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { toast } from "sonner";
import { company, brands, services } from "@/content/ast";
import { media } from "@/content/media";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BlurFade } from "@/components/magic/blur-fade";
import { BorderBeam } from "@/components/magic/border-beam";

const shades = [50,100,200,300,400,500,600,700,800,900,950];

export function FoundationPreview() {
  const reducedMotion = useReducedMotion();
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="preview-top">
      <div className="container-ast flex items-center justify-between gap-4">
        <Link href="/" aria-label="AST home" className="flex items-center gap-4">
          <span className="rounded-md bg-white px-2 py-1"><Image src={media.logo.src} alt={media.logo.alt} width={114} height={33} priority /></span>
          <span className="hidden border-l border-border pl-4 text-xs font-semibold tracking-wide md:inline">ADVANCED SPORTS<br />TECHNOLOGIES LLP</span>
        </Link>
        <div className="flex items-center gap-3"><span className="hidden text-xs text-muted-foreground sm:inline">Phase 01 / Design foundation</span><ThemeToggle /></div>
      </div>
    </header>
    <main id="main-content">
      <section className="container-ast preview-cover" aria-labelledby="intro-title" data-nav-theme="light">
        <div className="preview-copy">
          <p className="eyebrow section-label">{company.eyebrow}</p>
          <h1 id="intro-title" className="display preview-hero-title">Facilitating<br /><span className="text-brand">Excellence.</span></h1>
          <p className="max-w-md text-base text-muted-foreground">{company.introduction}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-7"><a href="#components">Explore the foundation <ArrowUpRight className="size-4" /></a></Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6"><a href={company.contact.phoneHref}><Phone className="size-4" />Contact AST</a></Button>
          </div>
          <p className="mt-10 max-w-md text-xs text-muted-foreground">A working design review. The full video hero, navigation and footer follow in Phase 2.</p>
        </div>
        <div className="preview-media">
          <Image src={media.track.src} alt={media.track.alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" />
          <div className="glass-dark preview-caption">
            <p className="eyebrow mb-2 text-white/80">AST / Our projects</p>
            <p className="display text-3xl">JRD Tata Sports Complex</p>
            <p className="mt-2 flex items-center gap-2 text-sm"><MapPin className="size-4" />Jamshedpur</p>
          </div>
        </div>
      </section>
      <div className="preview-band"><div className="container-ast flex flex-wrap items-center justify-between gap-5">
        <p className="eyebrow">Sports surfaces. Sports infrastructure.</p>
        <p className="text-sm">Polytan / Sport Group Germany <span className="mx-3 opacity-50">/</span> Panasonic Japan</p>
      </div></div>

      <section id="components" className="system-section" data-nav-theme="light">
        <div className="container-ast">
          <p className="eyebrow section-label">01 / Colour & typography</p>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6"><h2 className="display system-title">Built around<br />the AST red.</h2><p className="max-w-sm text-sm text-muted-foreground">Original maroon for the logo. A warmer red for interaction. Quiet neutrals give the sport room to speak.</p></div>
          <div className="token-scale" aria-label="AST red colour scale">{shades.map((shade) => <div key={shade} className="token-swatch" style={{ background: `var(--brand-${shade})`, color: shade >= 600 ? "white" : "#221515" }}>{shade}{shade === 600 && <span className="mt-8 block">BRAND</span>}</div>)}</div>
          <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
            <div><p className="eyebrow mb-4 text-muted-foreground">Display / Barlow Condensed</p><p className="display text-5xl md:text-6xl">Raise your game.</p></div>
            <div><p className="eyebrow mb-4 text-muted-foreground">Body / Manrope</p><p className="max-w-lg">{company.lighting}</p><p className="mt-4 text-sm text-muted-foreground">Fluid type, visible focus states, rounded media and a consistent twelve-column foundation.</p></div>
          </div>
        </div>
      </section>

      <section className="system-section" data-nav-theme="light">
        <div className="container-ast">
          <p className="eyebrow section-label">02 / Components in context</p>
          <h2 className="display system-title mb-10">One visual language.<br />Every interaction.</h2>
          <div className="system-grid">
            <div className="heroui-scope">
              <Card className="h-full rounded-3xl border border-border bg-card p-5">
                <div className="card-photo"><Image src={media.hockey.src} alt={media.hockey.alt} fill sizes="(max-width: 900px) 100vw, 33vw" className="object-cover" /></div>
                <Card.Header className="px-1 pt-5"><p className="eyebrow text-muted-foreground">Project card / HeroUI</p><Card.Title className="display mt-3 text-3xl">MP Sports College</Card.Title><Card.Description>Dehradun</Card.Description></Card.Header>
                <Card.Footer className="px-1"><Chip variant="soft" color="accent"><Chip.Label>Hockey</Chip.Label></Chip><Chip variant="secondary"><Chip.Label>[CONFIRM: completion year]</Chip.Label></Chip></Card.Footer>
              </Card>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7">
              <p className="eyebrow text-muted-foreground">Controls / shadcn & Radix</p><h3 className="display mt-5 text-3xl">Start a conversation.</h3>
              <div className="mt-8 flex flex-col items-start gap-4">
                <Button asChild className="h-12 rounded-full px-6"><a href={`mailto:${company.contact.email}`}>Email AST <ArrowUpRight className="size-4" /></a></Button>
                <Dialog><DialogTrigger asChild><Button variant="outline" className="h-12 rounded-full px-6">Contact details</Button></DialogTrigger>
                  <DialogContent className="rounded-3xl"><DialogHeader><DialogTitle>Contact AST</DialogTitle><DialogDescription>Advanced Sports Technologies LLP</DialogDescription></DialogHeader><address className="space-y-4 not-italic"><p>{company.contact.address}<br />{company.contact.city}</p><p><a className="underline underline-offset-4" href={company.contact.phoneHref}>{company.contact.phone}</a></p><p><a className="underline underline-offset-4" href={`mailto:${company.contact.email}`}>{company.contact.email}</a></p></address></DialogContent>
                </Dialog>
                <Button variant="ghost" className="rounded-full" onClick={() => toast("Design foundation ready", { description: "This preview checks notifications only. No enquiry has been submitted." })}>Preview notification</Button>
              </div>
              <p className="mt-10 text-sm text-muted-foreground">Keyboard navigation, focus management and accessible dialogs are part of the foundation.</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-[#171313] p-7 text-white">
              <p className="eyebrow text-white/65">Glass & motion / Magic UI</p>
              <h3 className="display mt-5 text-4xl">Predict<br />and prevent.</h3>
              <p className="mt-5 text-sm text-white/75">Cleaning & maintenance</p>
              <div className="glass mt-9 rounded-2xl p-5"><p className="eyebrow text-white/75">Original logo red</p><p className="mt-3 text-3xl font-semibold">#800000</p></div>
              <div className="glass-dark mt-4 rounded-2xl p-5"><p className="eyebrow text-white/75">Interaction red</p><p className="mt-3 text-sm">OKLCH 0.58 / 0.22 / 27</p></div>
              {!reducedMotion && <BorderBeam duration={8} colorFrom="#e34439" colorTo="#800000" size={150} />}
            </div>
          </div>
        </div>
      </section>

      <section className="system-section">
        <div className="container-ast grid gap-10 md:grid-cols-[.85fr_1.15fr]">
          <div><p className="eyebrow section-label">03 / Brand selector</p><h2 className="display system-title">World-renowned<br />sports surfaces.</h2><p className="mt-6 max-w-sm text-sm text-muted-foreground">AST’s existing brands, with HeroUI tabs and an animated selection indicator.</p></div>
          <div className="heroui-scope min-w-0 self-center">
            <HeroTabs className="brand-tabs" defaultSelectedKey="poligras">
              <HeroTabs.ListContainer><HeroTabs.List aria-label="AST product brands">{brands.map(brand => <HeroTabs.Tab id={brand.slug} key={brand.slug}>{brand.name}<HeroTabs.Indicator /></HeroTabs.Tab>)}</HeroTabs.List></HeroTabs.ListContainer>
              {brands.map(brand => <HeroTabs.Panel id={brand.slug} key={brand.slug}><div className="rounded-3xl border border-border bg-card p-8"><p className="eyebrow text-muted-foreground">{brand.application}</p><h3 className="display my-5 text-5xl">{brand.name}</h3><Chip color="accent" variant="soft"><Chip.Label>{brand.application}</Chip.Label></Chip></div></HeroTabs.Panel>)}
            </HeroTabs>
          </div>
        </div>
      </section>
      <section className="system-section">
        <div className="container-ast grid gap-10 md:grid-cols-[.85fr_1.15fr]">
          <div><p className="eyebrow section-label">04 / Content foundation</p><h2 className="display system-title">From concept<br />to maintenance.</h2><p className="mt-6 max-w-sm text-sm text-muted-foreground">AST’s eight services are prepared as typed local content. Detailed sections follow in the homepage phase.</p></div>
          <Accordion type="single" collapsible>{services.map((service,index) => <AccordionItem key={service.slug} value={service.slug}><AccordionTrigger className="py-5 text-left text-base"><span className="flex gap-5"><span className="text-brand">{String(index+1).padStart(2,"0")}</span>{service.name}</span></AccordionTrigger><AccordionContent className="text-muted-foreground">This service is listed on AST’s current website. Its full section will be implemented in Phase 3.</AccordionContent></AccordionItem>)}</Accordion>
        </div>
      </section>
      <section className="container-ast py-12">
        <BlurFade inView blur="0px" duration={reducedMotion ? 0 : .4}>
          <p className="eyebrow text-muted-foreground">Phase 01 / Ready for review</p><p className="mt-4 max-w-2xl text-sm text-muted-foreground">Next: the full-screen video hero, floating glass navigation, mega menus, mobile sheet and AST footer. Figures, dates, certifications and testimonials require confirmation before publication.</p>
        </BlurFade>
      </section>
    </main>
  </>;
}

