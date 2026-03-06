interface Props {
  lang: string;
  dictionary: any;
}

export default function ServicesPageSchema({ lang, dictionary }: Props) {
  const servicesPage = dictionary.servicesPage ?? {};
  const contact = dictionary.contact ?? {};

  const baseUrl = "https://dentalicactus.com";
  const pageUrl =
    lang === "es" ? `${baseUrl}/es/servicios` : `${baseUrl}/en/services`;

  const services = [
    servicesPage.general,
    servicesPage.cosmetic,
    servicesPage.orthodontics,
    servicesPage.implants,
    servicesPage.endodontics,
    servicesPage.pediatric,
    servicesPage.surgery,
    servicesPage.periodontics
  ].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: lang === "es" ? "Servicios Dentales" : "Dental Services",
    provider: {
      "@type": "Dentist",
      name: "Dentali Cactus",
      url: baseUrl
    },
    areaServed: {
      "@type": "Place",
      name: "Baja California, Mexico"
    },
    url: pageUrl,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "es" ? "Servicios Dentales" : "Dental Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}