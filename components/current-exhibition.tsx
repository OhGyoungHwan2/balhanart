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
              src="/images/artwork-0.png"
              alt="2026 갑산의 봄"
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-3">2026.03.20(금) — 2026.04.12(일)</p>
              <h3 className="font-serif text-2xl md:text-3xl font-light tracking-tight mb-4">
                갑산의 봄
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                깁갑산
              </p>
            </div>

            <div className="space-y-4 border-t border-border pt-8">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">참여 작가</span>
                <span>김갑산</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">관람 시간</span>
                <span>월—일, 10:00—17:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">입장료</span>
                <span>무료</span>
              </div>
            </div>

            <a 
              href="https://blog.naver.com/balhan_jaesaeng" 
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 w-fit hover:opacity-70 transition-opacity"
            >
              문의 | balhan_jaesaeng@naver.com | 070-4150-3880
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
