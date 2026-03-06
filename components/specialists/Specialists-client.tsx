"use client"

import { useState } from "react"

import {
  Search,
  Wrench,
  Target,
  Handshake,
  Quote
} from "lucide-react"

import {
  BracesIcon,
  ToothShieldIcon,
  BabyToothIcon,
  SurgeryIcon,
  ToothSearchIcon
} from "@/components/icons/DentalIcons"


type Section = {
  title: string
  icon?: string
  items: string[]
}

type Specialist = {
  id: string
  icon: string
  title: string
  intro: string
  sections: Section[]
  summary: string
}

interface Props {
  specialists: Specialist[]
}


const iconMap: Record<string, any> = {
  braces: BracesIcon,
  toothshield: ToothShieldIcon,
  babytooth: BabyToothIcon,
  surgery: SurgeryIcon,
  perio: ToothSearchIcon,

  search: Search,
  wrench: Wrench,
  target: Target,
  handshake: Handshake
}


export default function SpecialistsClient({ specialists }: Props) {

  const [open, setOpen] = useState<string>("ortho")

  function toggle(id: string) {
    setOpen(prev => prev === id ? prev : id)
  }

  return (

    <div className="space-y-6">

      {specialists.map(spec => {

        const Icon = iconMap[spec.icon]
        const isOpen = open === spec.id

        return (

          <div
            key={spec.id}
            className="border border-border rounded-xl p-8 bg-card"
          >

            <button
              onClick={() => toggle(spec.id)}
              className="flex items-center gap-4 w-full text-left"
            >

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold">
                {spec.title}
              </h3>

            </button>


            {isOpen && (

              <div className="mt-6 space-y-6">

                <p className="text-muted-foreground">
                  {spec.intro}
                </p>


                {spec.sections.map((section, i) => {

                  const SectionIcon = section.icon
                    ? iconMap[section.icon]
                    : null

                  return (

                    <div key={i}>

                      <h4 className="font-semibold mb-3 flex items-center gap-2">

                        {SectionIcon && (
                          <SectionIcon className="w-5 h-5 text-primary" />
                        )}

                        {section.title}

                      </h4>

                      <ul className="space-y-2 ml-4">

                        {section.items.map((item, j) => (

                          <li
                            key={j}
                            className="flex items-start gap-2 text-muted-foreground"
                          >

                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>

                            {item}

                          </li>

                        ))}

                      </ul>

                    </div>

                  )

                })}


                <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 flex gap-3 mt-6">

                  <Quote className="w-5 h-5 text-primary mt-1" />

                  <p className="italic font-medium">
                    {spec.summary}
                  </p>

                </div>

              </div>

            )}

          </div>

        )

      })}

    </div>

  )

}