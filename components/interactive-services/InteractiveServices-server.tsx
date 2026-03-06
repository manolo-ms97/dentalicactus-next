import InteractiveServicesClient from "./InteractiveServices-client"

type IconName =
  | "ToothCheckIcon"
  | "ToothSparkleIcon"
  | "BracesIcon"
  | "ImplantIcon"
  | "ToothShieldIcon"
  | "BabyToothIcon"
  | "SurgeryIcon"
  | "ToothSearchIcon"

type Service = {
  id: string
  icon: IconName
  title: string
  desc: string
  details: string[]
}

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function InteractiveServices({ lang, dictionary }: Props) {

  const t = dictionary.services

  const services: Service[] = [
    {
      id: "general",
      icon: "ToothCheckIcon",
      title: t.general,
      desc: t.generalDesc,
      details: t.generalDetails
    },
    {
      id: "cosmetic",
      icon: "ToothSparkleIcon",
      title: t.cosmetic,
      desc: t.cosmeticDesc,
      details: t.cosmeticDetails
    },
    {
      id: "orthodontics",
      icon: "BracesIcon",
      title: t.orthodontics,
      desc: t.orthodonticsDesc,
      details: t.orthodonticsDetails
    },
    {
      id: "implants",
      icon: "ImplantIcon",
      title: t.implants,
      desc: t.implantsDesc,
      details: t.implantsDetails
    },
    {
      id: "endodontics",
      icon: "ToothShieldIcon",
      title: t.endodontics,
      desc: t.endodonticsDesc,
      details: t.endodonticsDetails
    },
    {
      id: "pediatric",
      icon: "BabyToothIcon",
      title: t.pediatric,
      desc: t.pediatricDesc,
      details: t.pediatricDetails
    },
    {
      id: "surgery",
      icon: "SurgeryIcon",
      title: t.surgery,
      desc: t.surgeryDesc,
      details: t.surgeryDetails
    },
    {
      id: "periodontics",
      icon: "ToothSearchIcon",
      title: t.periodontics,
      desc: t.periodonticsDesc,
      details: t.periodonticsDetails
    }
  ]

  return (
    <section className="section-padding bg-muted/30">

      <div className="container-custom">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>

          <p className="text-lg text-muted-foreground">
            {t.subtitle}
          </p>

        </div>

        <InteractiveServicesClient
          services={services}
          includesLabel={t.includes}
        />

      </div>

    </section>
  )
}