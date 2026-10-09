export * from "./certificates-data";

// Legacy fallback for any legacy consumers
export const certificationImages = [
  { name: "Kalinga Hockey Stadium – Pitch 1", image: "/certificates/previews/bhubaneswar-kalinga-stadium-pitch-1-world-cup-2023.png", alt: "Kalinga Stadium World Cup 2023 Certificate", certificate: true },
  { name: "Major Dhyan Chand National Stadium", image: "/certificates/previews/major-dhyan-chand-national-stadium-fop-1-compressed.png", alt: "Major Dhyan Chand National Stadium Certificate", certificate: true },
  { name: "Mayor Radhakrishnan Hockey Stadium", image: "/certificates/previews/chennai-mayor-radhakrishnan-hockey-stadium.png", alt: "Mayor Radhakrishnan Hockey Stadium Certificate", certificate: true },
  { name: "SAI NSSC Bangalore Track", image: "/certificates/previews/bangalore-sai-nssc-bangalore-1.png", alt: "SAI NSSC Bangalore Athletics Track Certificate", certificate: true },
  { name: "SAI Regional Centre Lucknow Track", image: "/certificates/previews/lucknow-sai-centre-class-2.png", alt: "SAI Lucknow Class-2 Track Certificate", certificate: true },
] as const;
