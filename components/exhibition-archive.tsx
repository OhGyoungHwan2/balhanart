"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const exhibitions = [
  {
    year: "2026",
    items: [
      {
        title: "조명진 사진전;묵호사진관",
        date: "2026.2.20 — 2026.3.8",
        artist: "조명진",
        image: "/images/artwork-1.jpg",
        current: false,
      },
      {
        title: "언제라도 동해",
        date: "2025.12.5 — 2026.1.31",
        artist: "조성중, 채지형",
        image: "/images/artwork-2.png",
        current: false,
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "사부작사부작 도예전 '온기'",
        date: "2025.11.21 — 2025.11.28",
        artist: "",
        image: "/images/artwork-3.png",
        current: false,
      },
      {
        title: "신구상회 영동선 스케치전",
        date: "2025.10.25 — 2025.11.8",
        artist: "신구상회",
        image: "/images/artwork-4.jpg",
        current: false,
      },
      {
        title: "묵호, 그림으로 만나다",
        date: "2025.9.1 — 2025.9.27",
        artist: "여행과 드로잉",
        image: "/images/artwork-5.jpg",
        current: false,
      },
      {
        title: "지역소멸에 관한 담론",
        date: "2025.8.4 — 2025.8.24",
        artist: "동해사진바다 동호회",
        image: "/images/artwork-6.jpg",
        current: false,
      },
      {
        title: "아름다운 동행 서각전",
        date: "2025.7.16 — 2025.7.30",
        artist: "소암 강양희",
        image: "/images/artwork-7.jpg",
        current: false,
      },
      {
        title: "산전(散錢) 창작예술 화폐작품전시회",
        date: "2025.6.28 — 2025.7.2",
        artist: "김호원",
        image: "/images/artwork-8.jpg",
        current: false,
      },
      {
        title: "아홉 번째 치유 이야기",
        date: "2025.5.12 — 2025.5.23",
        artist: "윤지숙",
        image: "/images/artwork-9.jpg",
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
