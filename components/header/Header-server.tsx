import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

import HeaderClient from "./Header-client"
import HeaderMobileButton from "./HeaderMobile-client"
import NavLink from "./NavLink-client"

import logoDark from "@/public/logo-dark.png"

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function Header({ lang, dictionary }: Props) {

  const routes = {
    home: "",
    about: lang === "es" ? "nosotros" : "about",
    services: lang === "es" ? "servicios" : "services",
    specialists: lang === "es" ? "especialistas" : "specialists",
    faqs: "faqs",
    contact: lang === "es" ? "contacto" : "contact",
  }

  const navItems = [
    { href: `/${lang}`, label: dictionary.nav.home },
    { href: `/${lang}/${routes.about}`, label: dictionary.nav.about },
    { href: `/${lang}/${routes.services}`, label: dictionary.nav.services },
    { href: `/${lang}/${routes.specialists}`, label: dictionary.nav.specialists },
    { href: `/${lang}/${routes.faqs}`, label: dictionary.nav.faqs },
    { href: `/${lang}/${routes.contact}`, label: dictionary.nav.contact },
  ]

  return (
    <HeaderClient navItems={navItems} lang={lang} dictionary={dictionary}>

      <header className="fixed top-0 left-0 right-0 z-50 glass-card">

        <div className="container-custom">

          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href={`/${lang}`} className="flex items-center gap-2">
              <Image
                src={logoDark}
                alt="Dentalicactus"
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">

              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </NavLink>
              ))}

            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">

              {/* Language Toggle */}
              <Link
                href={lang === "es" ? "/en" : "/es"}
                className="px-3 py-1.5 text-sm font-medium rounded-full border border-border hover:bg-muted transition-colors"
              >
                {lang === "es" ? "EN" : "ES"}
              </Link>

              {/* CTA Button */}
              <Button className="hidden sm:flex items-center gap-2" size="sm">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">686 104 7987</span>
              </Button>

              {/* Mobile Menu Toggle */}
              <HeaderMobileButton />

            </div>

          </div>

        </div>

      </header>

    </HeaderClient>
  )
}