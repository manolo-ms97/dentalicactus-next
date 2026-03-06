"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Props {
  categoryKey: string;
  count: number;
  dictionary: Record<string, string>;
}

export default function FAQsClient({
  categoryKey,
  count,
  dictionary,
}: Props) {
  const items = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((num) => (
        <AccordionItem
          key={num}
          value={`${categoryKey}-${num}`}
          className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50"
        >
          <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-5">
            {dictionary[`${categoryKey}.q${num}.question`]}
          </AccordionTrigger>

          <AccordionContent className="text-muted-foreground text-sm md:text-base pb-5 leading-relaxed">
            {dictionary[`${categoryKey}.q${num}.answer`]}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}