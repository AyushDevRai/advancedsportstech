import { redirect } from "next/navigation";

export default async function WirelessTimingGateAliasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/wireless-timing-gate-system`);
}
