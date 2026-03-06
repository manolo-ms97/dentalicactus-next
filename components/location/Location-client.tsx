"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Location {
  id: string
  name: string
  address: string
  phone: string | null
  hours: string
  mapQuery: string
  mapUrl: string
}

interface Props {
  locations: Location[]
  noPhoneLabel: string
  directionsLabel: string
}

export default function LocationsSectionClient({
  locations,
  noPhoneLabel,
  directionsLabel,
}: Props) {

  const [activeLocation, setActiveLocation] = useState(locations[0].id)

  const activeLocationData = locations.find(
    (loc) => loc.id === activeLocation
  )!

  return (
    <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">

      {/* Cards */}
      <div className="lg:col-span-2 space-y-4">

        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => setActiveLocation(location.id)}
            className={cn(
              "w-full text-left rounded-2xl p-6 transition-all duration-300 border-2",
              activeLocation === location.id
                ? "bg-primary text-primary-foreground border-primary shadow-lg"
                : "bg-card border-border hover:border-primary/50 hover:shadow-md"
            )}
          >
            <h3
              className={cn(
                "text-lg font-semibold mb-3",
                activeLocation === location.id
                  ? "text-primary-foreground"
                  : "text-foreground"
              )}
            >
              {location.name}
            </h3>

            <div className="space-y-2">

              <div className="flex items-start gap-3">
                <MapPin
                  className={cn(
                    "w-4 h-4 mt-0.5 flex-shrink-0",
                    activeLocation === location.id
                      ? "text-secondary"
                      : "text-primary"
                  )}
                />
                <span
                  className={cn(
                    "text-sm",
                    activeLocation === location.id
                      ? "text-primary-foreground/90"
                      : "text-muted-foreground"
                  )}
                >
                  {location.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  className={cn(
                    "w-4 h-4 flex-shrink-0",
                    activeLocation === location.id
                      ? "text-secondary"
                      : "text-primary"
                  )}
                />

                {location.phone ? (
                  <span
                    className={cn(
                      "text-sm font-medium",
                      activeLocation === location.id
                        ? "text-primary-foreground"
                        : "text-foreground"
                    )}
                  >
                    {location.phone}
                  </span>
                ) : (
                  <span
                    className={cn(
                      "text-sm italic",
                      activeLocation === location.id
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {noPhoneLabel}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Clock
                  className={cn(
                    "w-4 h-4 flex-shrink-0",
                    activeLocation === location.id
                      ? "text-secondary"
                      : "text-primary"
                  )}
                />
                <span
                  className={cn(
                    "text-sm",
                    activeLocation === location.id
                      ? "text-primary-foreground/90"
                      : "text-muted-foreground"
                  )}
                >
                  {location.hours}
                </span>
              </div>

            </div>
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="lg:col-span-3">

        <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border h-full min-h-[400px] lg:min-h-[500px] flex flex-col">

          <div className="p-4 border-b border-border bg-muted/30">

            <div className="flex items-center justify-between">

              <div>
                <h4 className="font-semibold text-foreground">
                  {activeLocationData.name}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {activeLocationData.address}
                </p>
              </div>

              <Button variant="secondary" size="sm" asChild>
                <a
                  href={activeLocationData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {directionsLabel}
                  </span>
                </a>
              </Button>

            </div>
          </div>

          <div className="flex-1 relative">
            <iframe
              key={activeLocation}
              src={`https://www.google.com/maps?q=${activeLocationData.mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              loading="lazy"
              title={`Map of ${activeLocationData.name}`}
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>
      </div>
    </div>
  )
}