import Image from "next/image"
import { CheckCircle } from "lucide-react"
import heroImage from "@/public/staff-smiling.jpg"
import AboutPulseDot from "./AboutPulseDot-client"

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function AboutSection({ lang, dictionary }: Props) {
  const about = dictionary.about

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt="Dental Care Team"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
              <AboutPulseDot />
              {about.title}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {about.heading}
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-base md:text-lg leading-relaxed">
                {about.description1}
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                {about.description2}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4">
              {about.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}