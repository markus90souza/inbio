import '@/styles/globals.css'
import type { FC, ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}

export default RootLayout
