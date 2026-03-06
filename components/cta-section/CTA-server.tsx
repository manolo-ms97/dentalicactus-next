import CTAButtons from "./CTA-client"

type Props = {
  dictionary: any
  lang: "es" | "en"
}

export default function CTASectionServer({ dictionary, lang }: Props) {

  const t = dictionary.cta

  return (
    <section className="relative py-16 md:py-24 hero-gradient overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 md:right-20 w-48 md:w-64 h-48 md:h-64 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 md:left-20 w-32 md:w-48 h-32 md:h-48 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 md:mb-8">
            {t.subtitle}
          </p>

          <CTAButtons
            lang={lang}
            buttonText={t.button}
          />

        </div>
      </div>

    </section>
  )
}