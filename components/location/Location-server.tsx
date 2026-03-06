import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import LocationsSectionClient from "./Location-client"

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function LocationsSection({ lang, dictionary }: Props) {

  const t = dictionary.locations

  const locations = [
    {
      id: "tapiceros",
      name: t.tapiceros,
      address: t.tapicerosAddress,
      phone: "686 104 7987",
      hours: t.tapicerosHours,
      mapQuery: "Carroceros+Sur+1699,+21010+Mexicali,+B.C.",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Carroceros+Sur+1699,+21010+Mexicali,+B.C.",
    },
    {
      id: "guerrero",
      name: t.guerrero,
      address: t.guerreroAddress,
      phone: "686 237 9269",
      hours: t.guerreroHours,
      mapQuery: "Av+Vicente+Guerrero+6,+21720+Guadalupe+Victoria,+B.C.",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Av+Vicente+Guerrero+6,+21720+Guadalupe+Victoria,+B.C.",
    },
    {
      id: "coahuila",
      name: t.coahuila,
      address: t.coahuilaAddress,
      phone: "653 596 0593",
      hours: t.coahuilaHours,
      mapQuery: "Av+Bolivia+y+calle+3ra+53,+21800+Ciudad+Coahuila,+B.C.",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Av+Bolivia+y+calle+3ra+53,+21800+Ciudad+Coahuila,+B.C.",
    },
  ]

  return (
    <section className="section-padding bg-background">
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

        {/* Client handles switching logic */}
        <LocationsSectionClient
          locations={locations}
          noPhoneLabel={t.noPhone}
          directionsLabel={t.directions}
        />

      </div>
    </section>
  )
}