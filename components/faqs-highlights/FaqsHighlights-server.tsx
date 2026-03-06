import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import FAQsHighlightClient from "./FaqsHighlights-client"

interface Props {
  lang: "es" | "en"
  dictionary: any
}

export default function FAQsHighlight({ lang, dictionary }: Props) {

  const t = dictionary.faqs

  const highlightedFAQs = [
    {
      question: t.clinic.q1.question,
      answer: t.clinic.q1.answer
    },
    {
      question: t.clinic.q4.question,
      answer: t.clinic.q4.answer
    },
    {
      question: t.team.q2.question,
      answer: t.team.q2.answer
    },
    {
      question: t.payments.q1.question,
      answer: t.payments.q1.answer
    },
    {
      question: t.prevention.q1.question,
      answer: t.prevention.q1.answer
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">

      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.highlightTitle}
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t.highlightSubtitle}
          </p>

        </div>

        <div className="max-w-3xl mx-auto">

          {/* Accordion handled in client */}
          <FAQsHighlightClient faqs={highlightedFAQs} />

          {/* CTA */}
          <div className="text-center mt-10">

            <Button asChild variant="outline" size="lg">

              <Link
                href={lang === "es" ? "/es/faqs" : "/en/faqs"}
                className="inline-flex items-center gap-2"
              >
                {t.viewAll}
                <ArrowRight className="w-4 h-4" />
              </Link>

            </Button>

          </div>

        </div>

      </div>

    </section>
  )
}