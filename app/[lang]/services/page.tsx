import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";

import ServicesPageServer from "@/components/services/Services-server";
import ServicesPageSchema from "@/components/services/ServicesSchema";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang?.startsWith("en") ? "en" : "es";

  const dictionary = await getDictionary(lang);
  const t = dictionary.servicesPage ?? dictionary.services ?? {};

  const title =
    lang === "es"
      ? "Servicios Dentales | Dentali Cactus"
      : "Dental Services | Dentali Cactus";

  const description =
    lang === "es"
      ? "Conoce nuestros servicios dentales en Dentali Cactus: odontología general, estética dental, ortodoncia, implantes, endodoncia, odontopediatría, cirugía oral y periodoncia."
      : "Explore our dental services at Dentali Cactus: general dentistry, cosmetic dentistry, orthodontics, implants, endodontics, pediatric dentistry, oral surgery, and periodontics.";

  const url =
    lang === "es"
      ? "https://dentalicactus.com/es/servicios"
      : "https://dentalicactus.com/en/services";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "es-MX": "https://dentalicactus.com/es/servicios",
        "en-US": "https://dentalicactus.com/en/services"
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Dentali Cactus",
      locale: lang === "es" ? "es_MX" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function ServicesPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang?.startsWith("en") ? "en" : "es";

  const dictionary = await getDictionary(lang);

  return (
    <>
      <ServicesPageSchema lang={lang} dictionary={dictionary} />
      <ServicesPageServer lang={lang} dictionary={dictionary} />
    </>
  );
}