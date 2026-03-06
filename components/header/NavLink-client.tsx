"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface Props {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: Props) {

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