import Link from "next/link"
import { House, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="font-serif text-xl font-medium tracking-tight">
              갤러리바란
            </Link>
            <p className="text-sm text-muted-foreground font-light mt-4 leading-relaxed">
              예술과 삶이 만나는 공간,<br />
              갤러리바란입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4">바로가기</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#current" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                현재 전시
              </Link>
              <Link href="#archive" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                지난 전시
              </Link>
              <Link href="#visit" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                방문 안내
              </Link>
              <Link href="#opencall" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                작가 모집
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-medium mb-4">연락처</h4>
            <div className="text-sm text-muted-foreground font-light space-y-2">
              <p>발한로 211-5</p>
              <p>발한지구 도시재생현장지원센터</p>
              <p>balhan_jaesaeng@naver.com</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://blog.naver.com/balhan_jaesaeng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <House className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/balhanjaesaeng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/balhan_jaesaeng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 갤러리바란. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
