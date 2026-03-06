import type { Metadata } from "next";
import FAQsServer from "@/components/faqs-page/Faqs-server";
import FAQsSchema from "@/components/faqs-page/FaqsSchema";
import { getDictionary } from "@/lib/get-dictionary";

const BASE_URL = "https://dentalicactus.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title =
    lang === "es"
      ? "Preguntas Frecuentes | Dentali Cactus"
      : "Frequently Asked Questions | Dentali Cactus";

  const description = dict.faqsPage["heroSubtitle"];

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/faqs`,
      languages: {
        es: `${BASE_URL}/es/faqs`,
        en: `${BASE_URL}/en/faqs`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}/faqs`,
      siteName: "Dentali Cactus",
      locale: lang === "es" ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default async function FAQsPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <FAQsSchema lang={lang} faqs={dict.faqsPage} />
      <FAQsServer lang={lang} dictionary={dict.faqsPage} />
    </>
  );
}