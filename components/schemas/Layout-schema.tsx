interface Props {
  lang: "es" | "en"
}

export default function LayoutSchema({ lang }: Props) {

  const baseUrl = "https://dentalicactus.com"

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dentalicactus",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      "https://facebook.com/dentalicactus",
      "https://instagram.com/dentalicactus"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+52-686-104-7987",
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["Spanish", "English"]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}