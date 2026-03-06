import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import HeroCarouselClient from "./Hero-client"

import heroSlide1 from "@/public/clinic-km57-1.jpg"
import heroSlide2 from "@/public/clinic-km57-2.jpg"
import heroSlide3 from "@/public/team-cactus.jpg"

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function HeroCarousel({ lang, dictionary }: Props) {

  const t = dictionary.hero

  const routes = {
    contact: lang === "es" ? "contacto" : "contact",
    services: lang === "es" ? "servicios" : "services",
  }

  const slides = [
    {
      image: heroSlide1,
      title: t.slide1Title,
      subtitle: t.slide1Subtitle,
      cta: t.cta,
      link: `/${lang}/${routes.contact}`,
    },
    {
      image: heroSlide2,
      title: t.slide2Title,
      subtitle: t.slide2Subtitle,
      cta: t.ctaSecondary,
      link: `/${lang}/${routes.services}`,
    },
    {
      image: heroSlide3,
      title: t.slide3Title,
      subtitle: t.slide3Subtitle,
      cta: t.cta,
      link: `/${lang}/${routes.contact}`,
    },
  ]

  return (
    <HeroCarouselClient slides={slides}>

      <section className="relative h-[75vh] sm:h-[80vh] md:h-[85vh] min-h-[500px] md:min-h-[600px] overflow-hidden">

        {slides.map((slide, index) => (
          <div
            key={index}
            data-slide={index}
            className="absolute inset-0 opacity-0 transition-opacity duration-1000"
          >

            {/* Background */}
            <div className="absolute inset-0">

              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

            </div>

            {/* Content */}

            <div className="container-custom relative z-20 h-full flex items-center">

              <div className="max-w-2xl space-y-4 md:space-y-6">

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  {slide.title}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-xl">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                  <Link
                    href={slide.link}
                    className="inline-flex items-center justify-center text-base sm:text-lg px-6 sm:px-8 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>

                </div>

              </div>

            </div>

          </div>
        ))}

      </section>

    </HeroCarouselClient>
  )
}