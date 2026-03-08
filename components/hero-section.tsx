"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/exhibition-1.jpg"
          alt="갤러리바란 전시 공간"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-background tracking-tight mb-6">
          갤러리바란
        </h1>
        <p className="text-background/80 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
          지역의 예술이 살아나는 공간
        </p>
        <p className="text-background/60 text-sm mt-4 font-light">
          발한지구 도시재생현장지원센터
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <a href="#current" className="flex flex-col items-center gap-2 text-background/60 hover:text-background transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
