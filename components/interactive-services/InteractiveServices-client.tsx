"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

import {
  ToothCheckIcon,
  ToothSparkleIcon,
  BracesIcon,
  ImplantIcon,
  ToothShieldIcon,
  BabyToothIcon,
  SurgeryIcon,
  ToothSearchIcon
} from "@/components/icons/DentalIcons"

/* ---------- TYPES ---------- */

type IconName =
  | "ToothCheckIcon"
  | "ToothSparkleIcon"
  | "BracesIcon"
  | "ImplantIcon"
  | "ToothShieldIcon"
  | "BabyToothIcon"
  | "SurgeryIcon"
  | "ToothSearchIcon"

type Service = {
  id: string
  icon: IconName
  title: string
  desc: string
  details: string[]
}

interface Props {
  services: Service[]
  includesLabel: string
}

/* ---------- ICON MAP ---------- */

const iconMap = {
  ToothCheckIcon,
  ToothSparkleIcon,
  BracesIcon,
  ImplantIcon,
  ToothShieldIcon,
  BabyToothIcon,
  SurgeryIcon,
  ToothSearchIcon
}

/* ---------- COMPONENT ---------- */

export default function InteractiveServicesClient({ services, includesLabel }: Props) {

  const [activeService, setActiveService] = useState<string>(services[0].id)

  const activeServiceData = services.find(s => s.id === activeService)!

  const ActiveIcon = iconMap[activeServiceData.icon]

  return (
    <>
      {/* Icons Row */}

      <div className="grid grid-cols-4 md:grid-cols-8 gap-x-4 gap-y-6 md:gap-8 mb-12 max-w-5xl mx-auto">

        {services.map(service => {

          const Icon = iconMap[service.icon]

          return (

            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={cn(
                "group flex flex-col items-center gap-3 transition-all duration-300 min-w-0",
                activeService === service.id
                  ? "scale-110"
                  : "opacity-70 hover:opacity-100"
              )}
            >

              <div
                className={cn(
                  "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 flex-shrink-0",
                  activeService === service.id
                    ? "bg-primary border-secondary shadow-lg shadow-primary/30"
                    : "bg-card border-border hover:border-primary/50"
                )}
              >

                <Icon
                  className={cn(
                    "w-6 h-6 md:w-7 md:h-7 transition-colors",
                    activeService === service.id
                      ? "text-primary-foreground"
                      : "text-primary"
                  )}
                />

              </div>

              <span
                className={cn(
                  "text-[10px] md:text-xs font-medium text-center leading-tight transition-colors line-clamp-2",
                  activeService === service.id
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {service.title}
              </span>

            </button>

          )
        })}

      </div>

      {/* Active Service */}

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border">

        <div className="relative">

          <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">

            <ActiveIcon className="w-32 h-32 md:w-40 md:h-40 text-primary-foreground/90" />

          </div>

          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-2xl blur-xl" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-2xl blur-xl" />

        </div>

        <div className="space-y-6">

          <div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {activeServiceData.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {activeServiceData.desc}
            </p>

          </div>

          <div>

            <h4 className="font-semibold text-foreground mb-4">
              {includesLabel}
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {activeServiceData.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  {detail}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>
    </>
  )
}