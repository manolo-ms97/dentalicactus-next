"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Props {
  children: React.ReactNode
  navItems: { href: string; label: string }[]
  lang: "es" | "en"
  dictionary: any
}

export default function HeaderClient({ children, navItems }: Props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {children}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 border-t border-border animate-fade-in glass-card">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 px-4 text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-4 px-4">
            <Button className="w-full flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              686 104 7987
            </Button>
          </div>

        </nav>
      )}
    </>
  )
}

/* ---------------- ACTIVE NAV LINK ---------------- */

function NavLink({ href, children }: any) {

  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "nav-link",
        isActive && "nav-link-active"
      )}
    >
      {children}
    </Link>
  )
}

HeaderClient.NavLink = NavLink