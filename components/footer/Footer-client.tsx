"use client"

import { useEffect, useState } from "react"

interface Props {
  children: React.ReactNode
}

export default function FooterClient({ children }: Props) {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}