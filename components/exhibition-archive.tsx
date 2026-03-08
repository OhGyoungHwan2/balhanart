"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const exhibitions = [
  {
    year: "2025",
    items: [
      {
        title: "봄의 서막",
        date: "2025.03.01 — 2025.04.30",
        artist: "김예술, 이창작, 박미래",
        image: "/images/artwork-1.jpg",
        current: true,
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "겨울 빛",
        date: "2024.12.01 — 2025.01.31",
        artist: "최빛나",
        image: "/images/exhibition-2.jpg",
        current: false,
      },
      {
        title: "도시의 기억",
        date: "2024.09.15 — 2024.11.15",
        artist: "정현대, 강미술",
        image: "/images/gallery-space.jpg",
        current: false,
      },
      {
        title: "첫 걸음",
        date: "2024.06.01 — 2024.08.31",
        artist: "발한 지역작가 10인",
        image: "/images/exhibition-1.jpg",
        current: false,
      },
    ],
  },
]

export function ExhibitionArchive() {
  const [openYear, setOpenYear] = useState<string | null>("2024")

  return (
    <section id="archive" className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">Exhibition Archive</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light mt-4 tracking-tight">지난 전시</h2>
        </div>

        {/* Archive List */}
        <div className="space-y-0">
          {exhibitions.map((yearGroup) => (
            <div key={yearGroup.year} className="border-t border-border">
              <button
                onClick={() => setOpenYear(openYear === yearGroup.year ? null : yearGroup.year)}
                className="w-full flex items-center justify-between py-6 text-left hover:opacity-70 transition-opacity"
              >
                <span className="font-serif text-2xl md:text-3xl font-light">{yearGroup.year}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${openYear === yearGroup.year ? "rotate-180" : ""}`} 
                />
              </button>

              {openYear === yearGroup.year && (
                <div className="pb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {yearGroup.items.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {item.current && (
                          <div className="absolute top-4 left-4 bg-foreground text-background text-xs px-3 py-1">
                            진행중
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                      <h3 className="font-serif text-lg font-light mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.artist}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
