import ContactClient from "./Contact-client";
import heroImage from "@/public/staff-smiling.jpg";

import {
  MapPin,
  Phone,
  Clock,
  Mail,
} from "lucide-react";

interface Props {
  lang: "es" | "en";
  dictionary: any;
}

export default function ContactServer({ lang, dictionary }: Props) {
  const locations = [
    {
      name: dictionary.locations.tapiceros,
      address: dictionary.locations.tapicerosAddress,
      phone: "686 104 7987",
      hours: "Lun - Vie: 10:00 - 20:00 | Sáb - Dom: 10:00 - 14:00",
    },
    {
      name: dictionary.locations.guerrero,
      address: dictionary.locations.guerreroAddress,
      phone: "686 237 9269",
      hours: "Lun - Vie: 10:00 - 19:00 | Sáb: 10:00 - 14:00",
    },
    {
      name: dictionary.locations.coahuila,
      address: dictionary.locations.coahuilaAddress,
      phone: "653 596 0593",
      hours: "Lun - Vie: 8:00 - 20:00 | Sáb - Dom: 8:00 - 16:00",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt="Contact"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              {dictionary.contact.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {dictionary.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">

            <ContactClient lang={lang} dictionary={dictionary} />

            {/* LOCATIONS */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {dictionary.locations.title}
              </h2>

              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-sm border border-border"
                  >
                    <h3 className="text-lg font-semibold mb-4">
                      {location.name}
                    </h3>

                    <div className="space-y-3">

                      <div className="flex gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">
                          {location.address}
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <a
                          href={`tel:${location.phone.replace(/\s/g, "")}`}
                          className="hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>

                      <div className="flex gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">
                          {location.hours}
                        </span>
                      </div>

                    </div>
                  </div>
                ))}

                <div className="bg-muted rounded-2xl p-6">
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {lang === "es" ? "Correo electrónico" : "Email"}
                      </p>
                      <a
                        href="mailto:dentali.cactus@gmail.com"
                        className="text-lg font-medium hover:text-primary"
                      >
                        dentali.cactus@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}