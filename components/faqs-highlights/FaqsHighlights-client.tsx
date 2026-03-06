"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQ {
  question: string
  answer: string
}

interface Props {
  faqs: FAQ[]
}

export default function FAQsHighlightClient({ faqs }: Props) {

  return (
    <Accordion type="single" collapsible className="space-y-3">

      {faqs.map((faq, idx) => (

        <AccordionItem
          key={idx}
          value={`highlight-${idx}`}
          className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50"
        >

          <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-5">
            {faq.question}
          </AccordionTrigger>

          <AccordionContent className="text-muted-foreground text-sm md:text-base pb-5 leading-relaxed">
            {faq.answer}
          </AccordionContent>

        </AccordionItem>

      ))}

    </Accordion>
  )
}