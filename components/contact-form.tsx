"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-muted/50">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-6">
            문의가 접수되었습니다
          </h2>
          <p className="text-muted-foreground font-light">
            빠른 시일 내에 답변드리겠습니다. 감사합니다.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">Contact</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light mt-4 tracking-tight">문의하기</h2>
          <p className="text-muted-foreground font-light mt-4 max-w-md mx-auto">
            전시 문의, 작품 문의, 협업 제안 등 편하게 연락주세요.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-light">이름 *</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="홍길동"
                className="bg-background border-border focus:ring-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-light">이메일 *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="hello@example.com"
                className="bg-background border-border focus:ring-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-light">연락처</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="010-0000-0000"
              className="bg-background border-border focus:ring-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-light">문의 유형 *</Label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full h-10 px-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
            >
              <option value="">선택해주세요</option>
              <option value="exhibition">전시 문의</option>
              <option value="artwork">작품 문의</option>
              <option value="opencall">작가 지원</option>
              <option value="collaboration">협업 제안</option>
              <option value="other">기타</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-light">문의 내용 *</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="문의하실 내용을 자세히 적어주세요."
              className="bg-background border-border focus:ring-foreground resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-foreground text-background hover:bg-foreground/90 h-12"
          >
            {isSubmitting ? "전송 중..." : "문의하기"}
          </Button>
        </form>
      </div>
    </section>
  )
}
