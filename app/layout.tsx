import type { Metadata, Viewport } from 'next'
import { Noto_Serif_KR, Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerifKr = Noto_Serif_KR({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-serif'
});

const notoSansKr = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: '갤러리바란 | Gallery Baran',
  description: '발한지구 도시재생현장지원센터에 위치한 갤러리바란. 전시 일정, 작가 모집, 방문 정보를 확인하세요.',
  generator: 'v0.app',
  keywords: ['갤러리바란', 'Gallery Baran', '전시', '현대미술', '발한', '도시재생'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f8f6f3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} ${notoSerifKr.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
