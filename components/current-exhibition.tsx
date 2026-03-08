import Image from "next/image"

export function CurrentExhibition() {
  return (
    <section id="current" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">Current Exhibition</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light mt-4 tracking-tight">현재 전시</h2>
        </div>

        {/* Exhibition Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
              src="/images/artwork-1.jpg"
              alt="2025 봄 기획전"
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-3">2025.03.01 — 2025.04.30</p>
              <h3 className="font-serif text-2xl md:text-3xl font-light tracking-tight mb-4">
                봄의 서막
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                새로운 시작을 알리는 봄, 갤러리바란에서 준비한 첫 기획전입니다. 
                지역 작가들의 신작을 중심으로 자연과 도시, 그리고 그 사이에서 
                피어나는 예술적 영감을 담았습니다.
              </p>
            </div>

            <div className="space-y-4 border-t border-border pt-8">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">참여 작가</span>
                <span>김예술, 이창작, 박미래</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">관람 시간</span>
                <span>화—일, 10:00—18:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">입장료</span>
                <span>무료</span>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 w-fit hover:opacity-70 transition-opacity"
            >
              전시 문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
