interface Props {
  lang: string;
  dictionary: any;
}

export default function SpecialistsSchema({ lang }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dentali Cactus",
    medicalSpecialty: [
      "Orthodontics",
      "Endodontics",
      "Pediatric Dentistry",
      "Oral Surgery",
      "Periodontics"
    ],
    url:
      lang === "es"
        ? "https://dentalicactus.com/es/especialistas"
        : "https://dentalicactus.com/en/specialists"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}