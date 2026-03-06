"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  lang: "es" | "en"
  buttonText: string
}

export default function CTAButtons({ lang, buttonText }: Props) {

  const href = `/${lang}/contacto`

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >

      <Button
        size="lg"
        variant="secondary"
        className="text-base sm:text-lg px-6 sm:px-8"
        asChild
      >
        <Link href={href}>
          {buttonText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="text-base sm:text-lg px-6 sm:px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
        asChild
      >
        <a href="tel:6861047987">
          <Phone className="mr-2 w-5 h-5" />
          686 104 7987
        </a>
      </Button>

    </motion.div>
  )
}