import type { Metadata } from "next";
import ContactServer from "@/components/contact-page/Contact-server";
import ContactSchema from "@/components/contact-page/ContactSchema";
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
      ? "Contacto | Dentali Cactus"
      : "Contact | Dentali Cactus";

  const description = dict.contact.subtitle;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/contact`,
      languages: {
        es: `${BASE_URL}/es/contacto`,
        en: `${BASE_URL}/en/contact`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}/contact`,
      siteName: "Dentali Cactus",
      locale: lang === "es" ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <ContactSchema dictionary={dict} />
      <ContactServer lang={lang} dictionary={dict} />
    </>
  );
}