import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(254),
  mobile: z.string().trim().regex(/^\+?[\d\s()-]{7,20}$/, "Please enter a valid phone number."),
  subject: z.string().trim().min(2, "Please enter a subject.").max(160),
  message: z.string().trim().min(10, "Please tell us a little more about your project.").max(3000),
  website: z.string().max(0).optional(),
});
export type EnquiryValues = z.infer<typeof enquirySchema>;
export type EnquiryResult = { status: "sent" | "draft" | "error"; message: string; emailHref?: string; whatsappHref?: string };
