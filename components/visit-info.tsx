import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function VisitInfo() {
  return (
    <section id="visit" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">Visit</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light mt-4 tracking-tight">방문 안내</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map Placeholder */}
          <div className="relative aspect-square lg:aspect-auto bg-muted overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.5!2d127.0!3d37.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMwJzAwLjAiTiAxMjfCsDAwJzAwLjAiRQ!5e0!3m2!1sko!2skr!4v1"
              className="absolute inset-0 w-full h-full border-0 grayscale"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="갤러리바란 위치"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-10">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-2">주소</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  발한로 211-5<br />
                  발한지구 도시재생현장지원센터
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-2">운영 시간</h3>
                <div className="text-muted-foreground font-light space-y-1">
                  <p>화요일 — 일요일: 10:00 — 18:00</p>
                  <p>월요일 휴관</p>
                  <p className="text-sm">* 전시 기간에 따라 운영시간이 변경될 수 있습니다.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-2">연락처</h3>
                <p className="text-muted-foreground font-light">000-0000-0000</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-2">이메일</h3>
                <p className="text-muted-foreground font-light">contact@gallerybaran.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
