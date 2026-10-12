"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, AlertCircle, LoaderCircle } from "lucide-react";
import { enquirySchema, type EnquiryValues, type EnquiryResult } from "@/lib/enquiry";
import { prepareEnquiry } from "@/app/actions/enquiry";
import { triggerMascotReaction } from "@/lib/mascot-events";

interface ContactFormProps {
  idPrefix?: string;
  onSuccess?: () => void;
  inModal?: boolean;
}

export function ContactForm({ idPrefix = "contact", onSuccess, inModal = false }: ContactFormProps) {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<EnquiryResult | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
      website: ""
    }
  });

  const fields = [
    { name: "name", label: "Name", placeholder: "Your name", type: "text", autocomplete: "name" },
    { name: "email", label: "Email", placeholder: "you@company.com", type: "email", autocomplete: "email" },
    { name: "mobile", label: "Mobile", placeholder: "+91", type: "tel", autocomplete: "tel" },
    { name: "subject", label: "Department", placeholder: "e.g. Athletic Tracks, Sports Infrastructure, Procurement", type: "text", autocomplete: "off" }
  ] as const;

  const onSubmit = (data: EnquiryValues) => {
    setResult(null);
    startTransition(async () => {
      const res = await prepareEnquiry(data);
      setResult(res);
      if (res.status === "sent") {
        triggerMascotReaction("celebrate", "Enquiry sent! We'll get back to you shortly! 🎉");
        reset();
        if (onSuccess) {
          onSuccess();
        }
      } else {
        triggerMascotReaction("confused", "Submission error. Please check your details and try again! ⚠️");
      }
    });
  };

  const onInvalid = () => {
    triggerMascotReaction("confused", "Please fill in the required fields correctly! 🤔");
  };

  return (
    <form
      className={`contact-form ${inModal ? "contact-form-modal" : ""}`}
      noValidate
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <div className="form-grid">
        {fields.map((field) => (
          <div className="form-field" key={field.name}>
            <label htmlFor={`${idPrefix}-${field.name}`}>
              {field.label}
              <span aria-hidden="true"> *</span>
            </label>
            <input
              id={`${idPrefix}-${field.name}`}
              type={field.type}
              autoComplete={field.autocomplete}
              placeholder={field.placeholder}
              required
              aria-invalid={!!errors[field.name]}
              aria-describedby={errors[field.name] ? `${idPrefix}-error-${field.name}` : undefined}
              {...register(field.name)}
            />
            {errors[field.name] && (
              <p className="form-error" id={`${idPrefix}-error-${field.name}`}>
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="form-field">
        <label htmlFor={`${idPrefix}-message`}>
          Message<span aria-hidden="true"> *</span>
        </label>
        <textarea
          id={`${idPrefix}-message`}
          rows={inModal ? 3 : 4}
          placeholder="Your location, sport, requirements and timeline…"
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${idPrefix}-error-message` : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id={`${idPrefix}-error-message`} className="form-error">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot field for anti-spam bot trap */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input
          id={`${idPrefix}-website`}
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {inModal ? (
        <div className="modal-submit-row">
          <button
            className="ast-button ast-button-red modal-submit-btn"
            data-mascot-cta="excited"
            type="submit"
            disabled={pending}
            aria-busy={pending}
          >
            {pending ? (
              <>
                <LoaderCircle className="animate-spin" size={18} />
                Sending...
              </>
            ) : (
              <>
                Send Enquiry <ArrowUpRight size={18} />
              </>
            )}
          </button>
          <p className="modal-privacy-text">
            🔒 Your details are strictly confidential and used only to respond to this enquiry.
          </p>
        </div>
      ) : (
        <div className="form-submit-row">
          <p>
            Your details are used to respond
            <br />
            to your enquiry.
          </p>
          <button
            className="ast-button ast-button-red"
            data-mascot-cta="excited"
            type="submit"
            disabled={pending}
            aria-busy={pending}
          >
            {pending ? (
              <>
                <LoaderCircle className="animate-spin" size={18} />
                Sending...
              </>
            ) : (
              <>
                Send Enquiry <ArrowUpRight size={18} />
              </>
            )}
          </button>
        </div>
      )}

      {result && (
        <div
          className={`form-result form-result-${result.status}`}
          role="status"
          aria-live="polite"
        >
          {result.status === "sent" ? (
            <CheckCircle2 size={18} className="result-status-icon text-green-600 flex-shrink-0" />
          ) : (
            <AlertCircle size={18} className="result-status-icon text-red-600 flex-shrink-0" />
          )}
          <p>{result.message}</p>
        </div>
      )}
    </form>
  );
}
