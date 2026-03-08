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
              2026 전시 공모
            </h2>
            <p className="text-background/80 font-light leading-relaxed mb-8 max-w-lg wrap-break-word">
              발한지구 도시재생사업으로 조성된 갤러리바란에서 거점공간 및 지역 예술 활성화를 위해
              「2026년도 갤러리 바란 전시 공모」를 다음과 같이 공고합니다.
            </p>

            <div className="space-y-4 border-t border-background/20 pt-8 mb-10">
              <div className="flex justify-between text-sm">
                <span className="text-background/60">모집 기간</span>
                <span>연중 상시 모집</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-background/60">대상</span>
                <span>개인, 단체, 기관 누구나 | 개인전, 그룹전, 팝업 등 모든 전시</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-background/60">지원 방법</span>
                <span>(방문)발한로 211-5 | (메일) balhan_jaesaeng@naver.com </span>
              </div>
            </div>

            <a 
              href="https://blog.naver.com/balhan_jaesaeng/224134789948" 
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
