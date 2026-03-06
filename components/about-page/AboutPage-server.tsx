import Image from "next/image";
import AboutPageClient from "./AboutPage-client";
import CTASectionServer from "@/components/cta-section/CTA-server";

import {
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
  Award,
  Eye,
  Users,
  Target,
  Telescope,
  ScanLine,
  Pill,
  UserCheck,
  Heart,
  Building2,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";

import heroImage from "@/public/staff-smiling.jpg";
import leadDentistImage from "@/public/lead-dentist.jpg";
import childSmilingImage from "@/public/child-smiling.jpg";
import teamPhoto from "@/public/team-photo.jpg";

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function AboutPageServer({ lang, dictionary }: Props) {
  const t = dictionary.aboutPage;

  const timelineMilestones = [
    { year: t.story2021, desc: t.story2021Desc, icon: Calendar },
    { year: t.story2022, desc: t.story2022Desc, icon: MapPin },
    { year: t.story2023, desc: t.story2023Desc, icon: Building2, detail: t.km57Details },
    { year: t.storyMexicali, desc: t.storyMexicaliDesc, icon: Sparkles },
  ];

  const values = [
    { icon: ShieldCheck, title: t.value1Title, desc: t.value1Desc },
    { icon: GraduationCap, title: t.value2Title, desc: t.value2Desc },
    { icon: HeartHandshake, title: t.value3Title, desc: t.value3Desc },
    { icon: Award, title: t.value4Title, desc: t.value4Desc },
    { icon: Eye, title: t.value5Title, desc: t.value5Desc },
    { icon: Users, title: t.value6Title, desc: t.value6Desc },
  ];

  const features = [
    { icon: ScanLine, title: t.feature1Title, desc: t.feature1Desc },
    { icon: Pill, title: t.feature2Title, desc: t.feature2Desc },
    { icon: UserCheck, title: t.feature3Title, desc: t.feature3Desc },
  ];

  return (
    <>
      <AboutPageClient />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Dental Team"
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
              {t.heroTagline}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.storyTitle}
            </h2>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />

            <div className="grid grid-cols-4 gap-6">
              {timelineMilestones.map((milestone, index) => {
                const Icon = milestone.icon;

                return (
                  <div key={index} className="relative pt-14">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full hero-gradient border-4 border-background z-10" />

                    <div className="bg-card rounded-xl p-5 shadow-sm border border-border h-full timeline-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold text-primary">{milestone.year}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {milestone.desc}
                      </p>

                      {milestone.detail && (
                        <p className="text-xs text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border">
                          {milestone.detail}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            {timelineMilestones.map((milestone, index) => {
              const Icon = milestone.icon;

              return (
                <div key={index} className="relative mb-10 last:mb-0">
                  <div className="absolute left-6 w-4 h-4 rounded-full hero-gradient border-4 border-background -translate-x-1/2 mt-1 z-10" />

                  <div className="ml-14">
                    <div className="bg-card rounded-xl p-5 shadow-sm border border-border timeline-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold text-primary">{milestone.year}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {milestone.desc}
                      </p>

                      {milestone.detail && (
                        <p className="text-sm text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border">
                          {milestone.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continued growth paragraph */}
          <div className="max-w-3xl mx-auto mt-10 md:mt-14">
            <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed">
              {t.storyContinued}
            </p>
          </div>

          {/* Team Photo */}
          <div className="max-w-4xl mx-auto mt-10 md:mt-14">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={teamPhoto}
                alt="Equipo Dentali Cactus"
                className="w-full h-64 md:h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border reveal-up">
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {t.missionTitle}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {t.mission}
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border reveal-up">
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-5">
                <Telescope className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {t.visionTitle}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {t.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Dentist */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg reveal-up">
              <Image
                src={leadDentistImage}
                alt={t.founderName}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="text-center md:text-left reveal-up">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {t.founderName}
              </h2>
              <p className="text-primary font-semibold text-lg mb-4">
                {t.founderRole}
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {t.founderDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.valuesTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{t.valuesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm border border-border card-hover text-center reveal-up"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.featuresTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 md:p-8 reveal-up"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ejercito de Sonrisas */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="text-center md:text-left flex-1 reveal-up">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto md:mx-0 mb-6">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.ejercitoTitle}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.ejercitoDesc}
              </p>
            </div>

            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 reveal-up">
              <Image
                src={childSmilingImage}
                alt="Ejército de Sonrisas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.closingTitle}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t.closingDesc}
            </p>
          </div>
        </div>
      </section>

      <CTASectionServer lang={lang} dictionary={dictionary} />
    </>
  );
}