import './globals.scss'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  style: ['normal'],
})

export const metadata: Metadata = {
  title: 'Информационный портал ИИТ РТУ МИРЭА',
  description: 'Информационный портал института информационных технологий РТУ МИРЭА',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body>{children}</body>
    </html>
  )
}
