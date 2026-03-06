interface Props {
  lang: "es" | "en"
  faqs: Record<string, string>
}

export default function FAQsSchema({ faqs }: Props) {
  const questions = [
    "clinic.q1",
    "clinic.q2",
    "clinic.q3",
    "clinic.q4",
    "team.q1",
    "team.q2",
    "team.q3",
    "treatments.q1",
    "treatments.q2",
    "treatments.q3",
    "technology.q1",
    "technology.q2",
    "technology.q3",
    "payments.q1",
    "payments.q2",
    "payments.q3",
    "prevention.q1",
    "prevention.q2",
    "prevention.q3",
    "prevention.q4",
  ]

  const mainEntity = questions.map((q) => ({
    "@type": "Question",
    name: faqs[`faqs.${q}.question`],
    acceptedAnswer: {
      "@type": "Answer",
      text: faqs[`faqs.${q}.answer`],
    },
  }))

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
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