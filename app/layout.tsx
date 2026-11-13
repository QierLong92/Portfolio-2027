import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { sitePath } from '@/lib/site-path'

export const metadata: Metadata = {
  title: 'Qier Long — Design Portfolio',
  description:
    'Qier Long’s personal design portfolio spanning graphic, information, UI/UX design and more.',
  icons: {
    icon: sitePath('/icon.png'),
    apple: sitePath('/icon.png'),
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className="antialiased font-sans">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
