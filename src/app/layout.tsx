import '@/styles/globals.css'
import type { FC, ReactNode } from 'react'
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className={`${redHatDisplay.className} bg-background-primary text-content-body antialiased`}>{children}</body>
    </html>
  )
}

export default RootLayout
