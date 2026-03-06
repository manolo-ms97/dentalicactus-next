import type { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import SpecialistsServer from "@/components/specialists/Specialists-server";
import SpecialistsSchema from "@/components/specialists/SpecialistsSchema";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang?.startsWith("en") ? "en" : "es";

  const title =
    lang === "es"
      ? "Especialistas Dentales | Dentali Cactus"
      : "Dental Specialists | Dentali Cactus";

  const description =
    lang === "es"
      ? "Conoce a nuestros especialistas en ortodoncia, endodoncia, odontopediatría, cirugía oral y periodoncia en Dentali Cactus."
      : "Meet our dental specialists in orthodontics, endodontics, pediatric dentistry, oral surgery and periodontics at Dentali Cactus.";

  const url =
    lang === "es"
      ? "https://dentalicactus.com/es/especialistas"
      : "https://dentalicactus.com/en/specialists";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "es-MX": "https://dentalicactus.com/es/especialistas",
        "en-US": "https://dentalicactus.com/en/specialists"
      }
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Dentali Cactus"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang?.startsWith("en") ? "en" : "es";

  const dictionary = await getDictionary(lang);

  return (
    <>
      <SpecialistsSchema lang={lang} dictionary={dictionary} />
      <SpecialistsServer lang={lang} dictionary={dictionary} />
    </>
  );
}