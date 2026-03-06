import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"

import FooterClient from "./Footer-client"

import logoLight from "@/public/logo-light.png"

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function Footer({ lang, dictionary }: Props) {

  const t = dictionary.footer

  const routes = {
    about: lang === "es" ? "nosotros" : "about",
    services: lang === "es" ? "servicios" : "services",
    contact: lang === "es" ? "contacto" : "contact",
  }

  return (
    <FooterClient>
      <footer className="bg-foreground text-background">

        <div className="container-custom py-12 md:py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand */}
            <div className="space-y-4">

              <Link href={`/${lang}`} className="inline-block">
                <Image
                  src={logoLight}
                  alt="Dentalicactus"
                  className="h-12 w-auto"
                  priority
                />
              </Link>

              <p className="text-background/70 text-sm leading-relaxed">
                {t.description}
              </p>

              <div className="flex items-center gap-3">

                <a
                  href="https://www.facebook.com/dentalicactus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/dentali_cactus?igsh=MTBoY3FyZzNoNXp3NQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>

              </div>
            </div>

            {/* Quick Links */}
            <div>

              <h4 className="font-semibold text-lg mb-4">
                {t.linksTitle}
              </h4>

              <ul className="space-y-2">

                <li>
                  <Link
                    href={`/${lang}`}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {t.links.home}
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/${lang}/${routes.about}`}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {t.links.about}
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/${lang}/${routes.services}`}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {t.links.services}
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/${lang}/${routes.contact}`}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {t.links.contact}
                  </Link>
                </li>

              </ul>

            </div>

            {/* Locations */}
            <div>

              <h4 className="font-semibold text-lg mb-4">
                {t.locations.title}
              </h4>

              <ul className="space-y-3">

                <li className="flex items-start gap-2 text-sm text-background/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{t.locations.tapicerosAddress}</span>
                </li>

                <li className="flex items-start gap-2 text-sm text-background/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{t.locations.guerreroAddress}</span>
                </li>

                <li className="flex items-start gap-2 text-sm text-background/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{t.locations.coahuilaAddress}</span>
                </li>

              </ul>

            </div>

            {/* Contact */}
            <div>

              <h4 className="font-semibold text-lg mb-4">
                {t.contact.title}
              </h4>

              <ul className="space-y-3">

                <li className="flex items-center gap-2 text-sm text-background/70">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:6861047987"
                    className="hover:text-background transition-colors"
                  >
                    686 104 7987
                  </a>
                </li>

                <li className="flex items-center gap-2 text-sm text-background/70">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:6862379269"
                    className="hover:text-background transition-colors"
                  >
                    686 237 9269
                  </a>
                </li>

                <li className="flex items-center gap-2 text-sm text-background/70">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:6535960593"
                    className="hover:text-background transition-colors"
                  >
                    653 596 0593
                  </a>
                </li>

                <li className="flex items-center gap-2 text-sm text-background/70">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:dentali.cactus@gmail.com"
                    className="hover:text-background transition-colors"
                  >
                    dentali.cactus@gmail.com
                  </a>
                </li>

              </ul>

            </div>

          </div>

          {/* Bottom Bar */}

          <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Dentalicactus. {t.bottom.rights}
            </p>

            <div className="flex items-center gap-6 text-sm">

            </div>

          </div>

        </div>

      </footer>
    </FooterClient>
  )
}