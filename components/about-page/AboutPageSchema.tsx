interface Props {
  lang: string
  dictionary: any
}

export default function AboutSchema({ lang, dictionary }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dentali Cactus",
    description: dictionary.heroTagline,
    url: "https://dentalicactus.com",
    founder: {
      "@type": "Person",
      name: dictionary.founderName
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mexicali",
      addressCountry: "MX"
    },
    areaServed: {
      "@type": "Place",
      name: "Mexicali"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}