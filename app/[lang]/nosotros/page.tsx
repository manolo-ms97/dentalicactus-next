import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";

import AboutServer from "@/components/about-page/AboutPage-server";
import AboutSchema from "@/components/about-page/AboutPageSchema";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang?.startsWith("en") ? "en" : "es";

  const title =
    lang === "es"
      ? "Nosotros | Dentali Cactus"
      : "About Us | Dentali Cactus";

  const description =
    lang === "es"
      ? "Conoce la historia, misión y valores de Dentali Cactus y el equipo que trabaja cada día para cuidar tu sonrisa."
      : "Learn about the story, mission and values of Dentali Cactus and the team dedicated to caring for your smile.";

  const url =
    lang === "es"
      ? "https://dentalicactus.com/es/nosotros"
      : "https://dentalicactus.com/en/about";

  return {
    title,
    description,
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

export default async function AboutPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang?.startsWith("en") ? "en" : "es";

  const dictionary = await getDictionary(lang);

  return (
    <>
      <AboutSchema lang={lang} dictionary={dictionary} />
      <AboutServer lang={lang} dictionary={dictionary} />
    </>
  );
}