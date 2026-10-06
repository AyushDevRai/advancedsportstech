import type { Metadata } from "next";
import { FoundationPreview } from "@/components/sections/foundation-preview";
export const metadata: Metadata = { title: "Design foundation" };
export default function DesignSystem() { return <FoundationPreview />; }
