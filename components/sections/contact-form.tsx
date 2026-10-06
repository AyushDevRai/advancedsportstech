"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, LoaderCircle, Mail, MessageCircle } from "lucide-react";
import { enquirySchema, type EnquiryValues, type EnquiryResult } from "@/lib/enquiry";
import { prepareEnquiry } from "@/app/actions/enquiry";

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<EnquiryResult | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<EnquiryValues>({ resolver: zodResolver(enquirySchema), defaultValues: { name: "", email: "", mobile: "", subject: "", message: "", website: "" } });
  const fields = [{ name: "name", label: "Name", placeholder: "Your name", type: "text", autocomplete: "name" }, { name: "email", label: "Email", placeholder: "you@company.com", type: "email", autocomplete: "email" }, { name: "mobile", label: "Mobile", placeholder: "+91", type: "tel", autocomplete: "tel" }, { name: "subject", label: "Subject", placeholder: "Tell us what you have in mind", type: "text", autocomplete: "off" }] as const;
  return <form className="contact-form" noValidate onSubmit={handleSubmit((data) => { setResult(null); startTransition(async () => setResult(await prepareEnquiry(data))); })}>
    <div className="form-grid">{fields.map((field) => <div className="form-field" key={field.name}><label htmlFor={`contact-${field.name}`}>{field.label}<span aria-hidden="true"> *</span></label><input id={`contact-${field.name}`} type={field.type} autoComplete={field.autocomplete} placeholder={field.placeholder} required aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `error-${field.name}` : undefined} {...register(field.name)} />{errors[field.name] && <p className="form-error" id={`error-${field.name}`}>{errors[field.name]?.message}</p>}</div>)}</div>
    <div className="form-field"><label htmlFor="contact-message">Message<span aria-hidden="true"> *</span></label><textarea id="contact-message" rows={4} placeholder="Your location, sport, requirements and timeline…" required aria-invalid={!!errors.message} aria-describedby={errors.message ? "error-message" : undefined} {...register("message")} />{errors.message && <p id="error-message" className="form-error">{errors.message.message}</p>}</div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" tabIndex={-1} autoComplete="off" {...register("website")} /></div>
    <div className="form-submit-row"><p>Your details are used to respond<br />to your enquiry.</p><button className="ast-button ast-button-red" type="submit" disabled={pending}>{pending ? <><LoaderCircle className="animate-spin" size={18} />Preparing…</> : <>Send message <ArrowUpRight size={18} /></>}</button></div>
    {result && <div className={`form-result form-result-${result.status}`} role="status"><p>{result.message}</p>{result.emailHref && <div className="form-handoff"><a href={result.emailHref}><Mail size={16} />Open email draft</a><a href={result.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} />Send via WhatsApp</a></div>}</div>}
  </form>;
}
