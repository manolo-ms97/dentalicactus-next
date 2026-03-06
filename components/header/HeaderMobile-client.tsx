"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function HeaderMobileButton() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <button
      className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>
  )
}