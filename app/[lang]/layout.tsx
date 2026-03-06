import type { Metadata } from "next"
import "../globals.css"

import { getDictionary } from "@/lib/get-dictionary"

import Header from "@/components/header/Header-server"
import Footer from "@/components/footer/Footer-server"

import LayoutSchema from "@/components/schemas/Layout-schema"

import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

/* ---------------- METADATA ---------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {

  const { lang: rawLang } = await params
  const lang = rawLang?.startsWith("es") ? "es" : "en"

  const baseUrl = "https://dentalicactus.com"
  const isEs = lang === "es"

  const descriptionEs =
    "Dentalicactus ofrece servicios odontológicos especializados con tecnología avanzada y atención profesional para cuidar tu sonrisa."

  const descriptionEn =
    "Dentalicactus provides specialized dental services using advanced technology and professional care to protect and improve your smile."

  const url = `${baseUrl}/${lang}`

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: isEs
        ? "Dentalicactus | Clínica Dental Especializada"
        : "Dentalicactus | Specialized Dental Clinic",
      template: "%s | Dentalicactus",
    },

    description: isEs ? descriptionEs : descriptionEn,

    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
      },
    },

    openGraph: {
      title: isEs
        ? "Dentalicactus | Clínica Dental Especializada"
        : "Dentalicactus | Specialized Dental Clinic",
      description: isEs ? descriptionEs : descriptionEn,
      url,
      siteName: "Dentalicactus",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isEs
            ? "Dentalicactus Clínica Dental"
            : "Dentalicactus Dental Clinic",
        },
      ],
      locale: isEs ? "es_MX" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: isEs
        ? "Dentalicactus | Clínica Dental Especializada"
        : "Dentalicactus | Specialized Dental Clinic",
      description: isEs ? descriptionEs : descriptionEn,
      images: [`${baseUrl}/og-image.jpg`],
    },
  }
}

/* ---------------- LAYOUT ---------------- */

export default async function RootLayout({
  children,
  params,
}: Props) {

  const { lang: rawLang } = await params
  const lang = rawLang?.startsWith("es") ? "es" : "en"

  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className={`${inter.variable} antialiased`}>

        {/* JSON-LD Structured Data */}
        <LayoutSchema lang={lang} />

        {/* Header */}
        <Header lang={lang} dictionary={dictionary} />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer lang={lang} dictionary={dictionary} />

      </body>
    </html>
  )
}