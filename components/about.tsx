import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="opencall" className="py-24 md:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/gallery-outside.png"
              alt="갤러리바란 전시 공간"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute right-0 lg:right-1/8 lg:relative text-right flex flex-col items-end bg-inherit">
            <span className="text-xs tracking-widest text-background/60 uppercase">About</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 tracking-tight mb-8">
              ...갤러리바란은
            </h2>
            <p className="text-background/80 font-light leading-relaxed mb-8 max-w-lg wrap-break-word">
              오랜시간 묵호항을 지켜온 구 묵호검역소 건물을<br/>
              리모델링한 전시문화예술 체험 공간입니다.<br/>
              <br/>
              역사의 숨결 위에 문화의 빛을 더해,<br/>
              일상에서 예술을 만나고 감성을 깨우는<br/>
              특별한 공간으로 시민과 함께하고 있습니다.<br/>
              <br/>
              다양한 전시와 체험프로그램을 통해<br/>
              지역과 사람을 이어주고,<br/>
              삶을 풍요롭게 만드는 시민문화의 장.<br/>
              <br/>
              갤러리바란은 예술·일상, 과거·현재가 만나는 곳에서<br/>
              지역의 이야기를 새롭게 펼쳐가고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
