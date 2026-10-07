import { redirect } from "next/navigation";

export default async function SportsLightingAliasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/products/sports-lighting`);
}
