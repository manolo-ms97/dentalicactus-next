import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ServicesPageClient from "./Services-client";
import CTASectionServer from "@/components/cta-section/CTA-server";
import { Button } from "@/components/ui/button";

import {
  ToothCheckIcon,
  ToothSparkleIcon,
  BracesIcon,
  ImplantIcon,
  ToothShieldIcon,
  BabyToothIcon,
  SurgeryIcon,
  ToothSearchIcon
} from "@/components/icons/DentalIcons";

import heroImage from "@/public/dentist-treating.jpg";

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function ServicesPageServer({ lang, dictionary }: Props) {
  const t = dictionary.servicesPage;
  const contact = dictionary.contact;

  const services = [
    {
      icon: ToothCheckIcon,
      title: t.general,
      description: t.generalDesc,
      details: t.generalDetails
    },
    {
      icon: ToothSparkleIcon,
      title: t.cosmetic,
      description: t.cosmeticDesc,
      details: t.cosmeticDetails
    },
    {
      icon: BracesIcon,
      title: t.orthodontics,
      description: t.orthodonticsDesc,
      details: t.orthodonticsDetails
    },
    {
      icon: ImplantIcon,
      title: t.implants,
      description: t.implantsDesc,
      details: t.implantsDetails
    },
    {
      icon: ToothShieldIcon,
      title: t.endodontics,
      description: t.endodonticsDesc,
      details: t.endodonticsDetails
    },
    {
      icon: BabyToothIcon,
      title: t.pediatric,
      description: t.pediatricDesc,
      details: t.pediatricDetails
    },
    {
      icon: SurgeryIcon,
      title: t.surgery,
      description: t.surgeryDesc,
      details: t.surgeryDetails
    },
    {
      icon: ToothSearchIcon,
      title: t.periodontics,
      description: t.periodonticsDesc,
      details: t.periodonticsDetails
    }
  ];

  const contactHref = lang === "es" ? "/es/contacto" : "/en/contact";

  return (
    <>
      <ServicesPageClient />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Dental Services"
            fill
            priority
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-4 md:space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-card rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-border card-hover reveal-up"
                >
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-start">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                      </div>

                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2 mt-3 md:mt-0">
                        {service.details.map((detail: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center reveal-up">
            <p className="text-lg text-muted-foreground mb-6">
              {t.moreInfo}
            </p>

            <Button size="lg" asChild>
              <Link href={contactHref}>
                {contact.schedule}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASectionServer lang={lang} dictionary={dictionary} />
    </>
  );
}