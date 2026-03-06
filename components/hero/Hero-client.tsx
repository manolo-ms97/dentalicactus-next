"use client"

import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  image: any
  title: string
  subtitle: string
  cta: string
  link: string
}

interface Props {
  children: React.ReactNode
  slides: Slide[]
}

export default function HeroCarouselClient({ children, slides }: Props) {

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  useEffect(() => {

    const elements = document.querySelectorAll("[data-slide]")

    elements.forEach((el, index) => {
      if (index === currentSlide) {
        el.classList.add("opacity-100", "z-10")
        el.classList.remove("opacity-0")
      } else {
        el.classList.remove("opacity-100", "z-10")
        el.classList.add("opacity-0")
      }
    })

  }, [currentSlide])

  return (
    <div className="relative">

      {children}

      {/* Arrows */}

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
      </button>

      {/* Dots */}

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary w-6 sm:w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
          />
        ))}

      </div>

    </div>
  )
}