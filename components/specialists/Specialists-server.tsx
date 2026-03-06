import Image from "next/image"
import SpecialistsClient from "./Specialists-client"
import CTASectionServer from "@/components/cta-section/CTA-server"
import heroImage from "@/public/dentist-xray.jpg"

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function SpecialistsServer({ lang, dictionary }: Props) {

  const t = dictionary.specialistsPage

  const specialists = [
    {
      id: "ortho",
      icon: "braces",
      title: t.ortho.title,
      intro: t.ortho.intro,
      sections: [
        {
          title: t.ortho.malocclusionTitle,
          items: [
            t.ortho.malocclusion1,
            t.ortho.malocclusion2,
            t.ortho.malocclusion3,
            t.ortho.malocclusion4
          ]
        },
        {
          title: t.ortho.diagnosisTitle,
          icon: "search",
          items: [
            t.ortho.diagnosis1,
            t.ortho.diagnosis2,
            t.ortho.diagnosis3
          ]
        },
        {
          title: t.ortho.treatmentTitle,
          icon: "wrench",
          items: [
            t.ortho.treatment1,
            t.ortho.treatment2,
            t.ortho.treatment3
          ]
        },
        {
          title: t.ortho.objectivesTitle,
          icon: "target",
          items: [
            t.ortho.objective1,
            t.ortho.objective2,
            t.ortho.objective3,
            t.ortho.objective4
          ]
        },
        {
          title: t.ortho.interdisciplinaryTitle,
          icon: "handshake",
          items: [
            t.ortho.interdisciplinary1,
            t.ortho.interdisciplinary2
          ]
        }
      ],
      summary: t.ortho.summary
    },

    {
      id: "endo",
      icon: "toothshield",
      title: t.endo.title,
      intro: t.endo.intro,
      sections: [
        {
          title: t.endo.whatDoTitle,
          items: [
            t.endo.whatDo1,
            t.endo.whatDo2,
            t.endo.whatDo3,
            t.endo.whatDo4,
            t.endo.whatDo5,
            t.endo.whatDo6
          ]
        },
        {
          title: t.endo.whyTitle,
          items: [
            t.endo.why1,
            t.endo.why2,
            t.endo.why3,
            t.endo.why4
          ]
        }
      ],
      summary: t.endo.summary
    },

    {
      id: "pedo",
      icon: "babytooth",
      title: t.pedo.title,
      intro: t.pedo.intro,
      sections: [
        {
          title: t.pedo.whatDoTitle,
          items: [
            t.pedo.whatDo1,
            t.pedo.whatDo2,
            t.pedo.whatDo3,
            t.pedo.whatDo4,
            t.pedo.whatDo5,
            t.pedo.whatDo6
          ]
        },
        {
          title: t.pedo.whyTitle,
          items: [
            t.pedo.why1,
            t.pedo.why2,
            t.pedo.why3,
            t.pedo.why4
          ]
        }
      ],
      summary: t.pedo.summary
    },

    {
      id: "surgery",
      icon: "surgery",
      title: t.surgery.title,
      intro: t.surgery.intro,
      sections: [
        {
          title: t.surgery.whatDoTitle,
          items: [
            t.surgery.whatDo1,
            t.surgery.whatDo2,
            t.surgery.whatDo3,
            t.surgery.whatDo4,
            t.surgery.whatDo5,
            t.surgery.whatDo6
          ]
        },
        {
          title: t.surgery.whyTitle,
          items: [
            t.surgery.why1,
            t.surgery.why2,
            t.surgery.why3,
            t.surgery.why4
          ]
        }
      ],
      summary: t.surgery.summary
    },

    {
      id: "perio",
      icon: "perio",
      title: t.perio.title,
      intro: t.perio.intro,
      sections: [
        {
          title: t.perio.whatDoTitle,
          items: [
            t.perio.whatDo1,
            t.perio.whatDo2,
            t.perio.whatDo3,
            t.perio.whatDo4,
            t.perio.whatDo5,
            t.perio.whatDo6
          ]
        },
        {
          title: t.perio.whyTitle,
          items: [
            t.perio.why1,
            t.perio.why2,
            t.perio.why3,
            t.perio.why4
          ]
        }
      ],
      summary: t.perio.summary
    }
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">

        <Image
          src={heroImage}
          alt="Dental Specialists"
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />

        <div className="container-custom relative z-10 py-24">

          <h1 className="text-5xl font-bold mb-4">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl">
            {t.heroSubtitle}
          </p>

        </div>

      </section>

      {/* ACCORDION */}
      <section className="py-20">

        <div className="container-custom max-w-4xl">

          <SpecialistsClient specialists={specialists} />

        </div>

      </section>

      <CTASectionServer lang={lang} dictionary={dictionary} />

    </>
  )
}