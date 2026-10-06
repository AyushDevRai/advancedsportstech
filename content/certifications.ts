// Replace the preview paths with AST's certificate scans when available.
export const certificationImages = [
  { name: "Certificate 01", image: "/certifications/certificate-placeholder.svg", alt: "Certificate 01 image placeholder", certificate: true },
  { name: "Certificate 02", image: "/certifications/certificate-placeholder.svg", alt: "Certificate 02 image placeholder", certificate: true },
  { name: "Certificate 03", image: "/certifications/certificate-placeholder.svg", alt: "Certificate 03 image placeholder", certificate: true },
  { name: "Testing & Inspection", image: "/services/testing.png", alt: "AST testing and inspection preview", certificate: false },
  { name: "Site Survey", image: "/services/survey.png", alt: "AST site survey preview", certificate: false },
] as const;
