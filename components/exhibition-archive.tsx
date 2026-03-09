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
      {
        title: "나의 음악 이야기",
        date: "2025.4.1 — 2025.4.19",
        artist: "황윤규",
        image: "/images/artwork-10.jpg",
        current: false,
      },
      {
        title: "화기애애",
        date: "2025.3.1 — 2025.3.21",
        artist: "김영민 외 작가진",
        image: "/images/artwork-11.jpg",
        current: false,
      },
      {
        title: "묵호",
        date: "2025.2.3 — 2025.2.22",
        artist: "배민호",
        image: "/images/artwork-12.jpg",
        current: false,
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "무엇이 피어날지",
        date: "2024.12.16 — 2024.12.28",
        artist: "김미송",
        image: "/images/artwork-13.jpg",
        current: false,
      },
      {
        title: "무채색탐구(동해이야기)",
        date: "2024.12.7 — 2024.12.14",
        artist: "",
        image: "/images/artwork-14.jpg",
        current: false,
      },
      {
        title: "느낌",
        date: "2024.11.25 — 2024.12.7",
        artist: "지현",
        image: "/images/artwork-15.jpg",
        current: false,
      },
      {
        title: "내 인생의 기념품들",
        date: "2024.9.30 — 2024.10.31",
        artist: "미부 최미영",
        image: "/images/artwork-16.jpg",
        current: false,
      },
      {
        title: "소소한 행복 전시",
        date: "2024.9.2 — 2024.9.7",
        artist: "동해 정신건강복지센터, 까치밥",
        image: "/images/artwork-17.png",
        current: false,
      },
      {
        title: "튀어나와요! 그림책 숲",
        date: "2024.8.1 — 2024.8.11",
        artist: "망상 해뜰책뜰 누리봉사단",
        image: "/images/artwork-18.jpg",
        current: false,
      },
      {
        title: "나의 히어로",
        date: "2024.2.13 — 2024.5.6",
        artist: "김태훈",
        image: "/images/artwork-19.jpg",
        current: false,
      },
    ],
  },
]

export function ExhibitionArchive() {
  const [openYear, setOpenYear] = useState<string | null>("2026")

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
