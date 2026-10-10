import type { Metadata } from "next";
import localFont from "next/font/local";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Providers } from "@/components/providers";
import { GlobalCursor } from "@/components/layout/global-cursor";
import "./globals.css";
const display = localFont({ src: "../public/fonts/barlow-condensed.woff2", variable: "--font-barlow", display: "swap", weight: "600" });
const body = localFont({ src: "../public/fonts/manrope.woff2", variable: "--font-manrope", display: "swap", weight: "400 800" });
export const metadata: Metadata = {
  title: { default: "AST — Facilitating Excellence", template: "%s | AST" },
  description: "Advanced Sports Technologies LLP — sports surfaces, sports infrastructure and LED sports lighting in India.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/ast-icon.png" },
};
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return <html lang={locale} suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
    <body>
      <NextIntlClientProvider>
        <Providers locale={locale}>
          <GlobalCursor />
          {children}
        </Providers>
      </NextIntlClientProvider>
    </body>
  </html>;
}
