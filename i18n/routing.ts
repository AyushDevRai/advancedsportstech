import { defineRouting } from "next-intl/routing";

// English is live. Add Hindi only when AST supplies approved translations.
export const routing = defineRouting({ locales: ["en"], defaultLocale: "en", localePrefix: "as-needed" });
