"use client"

import { useEffect } from "react"

export default function AboutClient() {

  useEffect(() => {
    const elements = document.querySelectorAll(".card-hover")

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        el.classList.add("scale-[1.02]")
      })

      el.addEventListener("mouseleave", () => {
        el.classList.remove("scale-[1.02]")
      })
    })
  }, [])

  return null
}