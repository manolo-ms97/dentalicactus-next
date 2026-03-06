import FAQsClient from "./Faqs-client";

import heroImage from "@/public/dentist-xray.jpg";

import {
  Building2,
  Users,
  ClipboardList,
  Monitor,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const icons = {
  clinic: Building2,
  team: Users,
  treatments: ClipboardList,
  technology: Monitor,
  payments: CreditCard,
  prevention: ShieldCheck,
};

interface Props {
  lang: "es" | "en";
  dictionary: Record<string, string>;
}

const faqCategories = [
  { key: "clinic", icon: Building2, count: 4 },
  { key: "team", icon: Users, count: 3 },
  { key: "treatments", icon: ClipboardList, count: 3 },
  { key: "technology", icon: Monitor, count: 3 },
  { key: "payments", icon: CreditCard, count: 3 },
  { key: "prevention", icon: ShieldCheck, count: 4 },
];

export default function FAQsServer({ lang, dictionary }: Props) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt="FAQs"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              {dictionary["heroTitle"]}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
              {dictionary["heroSubtitle"]}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
{faqCategories.map((category) => {
  const Icon = icons[category.key as keyof typeof icons];

  return (
    <div key={category.key}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          {dictionary[`cat.${category.key}`]}
        </h2>
      </div>

      <FAQsClient
        categoryKey={category.key}
        count={category.count}
        dictionary={dictionary}
      />
    </div>
  );
})}
          </div>
        </div>
      </section>

      {/* CTA */}
    </>
  );
}