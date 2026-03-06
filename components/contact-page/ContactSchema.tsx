interface Props {
  dictionary: any;
}

export default function ContactSchema({ dictionary }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dentali Cactus",
    email: "dentali.cactus@gmail.com",
    telephone: "6861047987",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mexicali",
      addressRegion: "BC",
      addressCountry: "MX",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}