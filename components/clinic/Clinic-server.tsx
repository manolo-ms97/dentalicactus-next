import Image from "next/image"

import clinicImg1 from "@/public/treatment-doorway.jpg"
import clinicImg2 from "@/public/clinic-greeting.jpg"
import clinicImg3 from "@/public/xray-equipment.jpg"


interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function ClinicShowcase({ dictionary }: Props) {

  const t = dictionary.clinicShowcase

  const images = [
    {
      src: clinicImg1,
      alt: t.image1Alt,
    },
    {
      src: clinicImg2,
      alt: t.image2Alt,
    },
    {
      src: clinicImg3,
      alt: t.image3Alt,
    },
  ]

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>

          <p className="text-base md:text-lg text-muted-foreground">
            {t.subtitle}
          </p>

        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">

          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="w-full h-64 md:h-80 object-cover"
                priority={index === 0}
              />
            </div>
          ))}

        </div>

      </div>

      {/* animations only */}
    </section>
  )
}