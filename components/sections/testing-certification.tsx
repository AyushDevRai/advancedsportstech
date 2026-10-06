"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { certificationImages } from "@/content/certifications";
import { homepageServices } from "@/content/homepage";

const testing = homepageServices.find(service => service.slug === "testing-certification")!;

export function TestingCertification() {
  const [selected, setSelected] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const image = selected === null ? null : certificationImages[selected];

  return <section id="products" className="section-pad products-section certification-section" data-nav-theme="light" aria-labelledby="certification-title">
    <div id="testing-certification" className="page-container">
      <div className="section-heading"><div><p className="eyebrow"><span className="red-rule" />TESTING & CERTIFICATION</p><h2 id="certification-title">TESTING &<br /><span className="quiet-text">CERTIFICATION.</span></h2></div><p>{testing.tagline}</p></div>
      <p className="certification-introduction">{testing.description}</p>
      <div className="brand-grid certification-grid">
        {certificationImages.map((item, index) => <article className={`brand-card certification-card ${item.certificate ? "is-certificate" : ""}`} key={item.name}>
          <button type="button" className="certification-preview-button" aria-label={`View ${item.name}`} onClick={event => { trigger.current = event.currentTarget; setSelected(index); }}>
            <div className="certification-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 45vw, (max-width: 900px) 30vw, 18vw" />{item.certificate && <span className="certificate-badge">CERTIFICATE</span>}</div>
            <div className="brand-card-meta"><span>0{index + 1}</span><h3>{item.name}</h3><Expand size={19} aria-hidden="true" /></div>
          </button>
        </article>)}
      </div>
      <Dialog open={image !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        <DialogContent className="certification-dialog" showCloseButton={false} onCloseAutoFocus={event => { event.preventDefault(); trigger.current?.focus(); }}>
          {image && <><DialogHeader><DialogTitle>{image.name}</DialogTitle><DialogDescription>{image.certificate ? "Certificate image placeholder · Preview only" : "Testing & Certification · Preview image"}</DialogDescription></DialogHeader>
            <button type="button" className="certification-dialog-close" aria-label="Close image preview" onClick={() => setSelected(null)}><X size={21} /></button>
            <div className={`certification-dialog-image ${image.certificate ? "is-certificate" : ""}`}><Image src={image.image} alt={image.alt} fill sizes="(max-width: 640px) 90vw, 850px" /></div>
            <div className="certification-dialog-controls"><button type="button" aria-label="Previous image" onClick={() => setSelected(((selected ?? 0) - 1 + certificationImages.length) % certificationImages.length)}><ChevronLeft size={20} /></button><span>{(selected ?? 0) + 1} / {certificationImages.length}</span><button type="button" aria-label="Next image" onClick={() => setSelected(((selected ?? 0) + 1) % certificationImages.length)}><ChevronRight size={20} /></button></div>
          </>}
        </DialogContent>
      </Dialog>
    </div>
  </section>;
}
