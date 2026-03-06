import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import HeroCarousel from "@/components/hero/Hero-server";
import InteractiveServices from "@/components/interactive-services/InteractiveServices-server";
import AboutSection from "@/components/about/About-server";
import ClinicShowcase from "@/components/clinic/Clinic-server";
import LocationsSection from "@/components/location/Location-server";
import FAQsHighlight from "@/components/faqs-highlights/FaqsHighlights-server";
import CTASectionServer from "@/components/cta-section/CTA-server";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: { params: any }) {
  const { lang: rawLang } = await params;
  const lang = rawLang?.startsWith("en") ? "en" : "es";

  const dictionary = await getDictionary(lang);

  return (
    <>
      <HeroCarousel lang={lang} dictionary={dictionary} />
      <InteractiveServices lang={lang} dictionary={dictionary} />
      <AboutSection lang={lang} dictionary={dictionary} />
      <ClinicShowcase lang={lang} dictionary={dictionary} />
      <LocationsSection lang={lang} dictionary={dictionary} />
      <FAQsHighlight lang={lang} dictionary={dictionary} />
      <CTASectionServer lang={lang} dictionary={dictionary} />
    </>
  );
}
