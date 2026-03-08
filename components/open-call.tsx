import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function OpenCall() {
  return (
    <section id="opencall" className="py-24 md:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-xs tracking-widest text-background/60 uppercase">Open Call</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light mt-4 tracking-tight mb-8">
              작가 모집
            </h2>
            <p className="text-background/80 font-light leading-relaxed mb-8 max-w-lg">
              갤러리바란은 새로운 시각과 목소리를 가진 작가를 찾습니다. 
              회화, 조각, 설치, 미디어아트 등 장르에 상관없이 
              여러분의 작품을 보여주세요.
            </p>

            <div className="space-y-4 border-t border-background/20 pt-8 mb-10">
              <div className="flex justify-between text-sm">
                <span className="text-background/60">모집 기간</span>
                <span>상시 모집</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-background/60">대상</span>
                <span>장르 무관, 신진·중진 작가</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-background/60">지원 방법</span>
                <span>이메일 접수</span>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-background text-foreground px-6 py-3 hover:bg-background/90 transition-colors"
            >
              <span className="text-sm font-medium">지원하기</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/gallery-space.jpg"
              alt="갤러리바란 전시 공간"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
