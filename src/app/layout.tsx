import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'André Eriksson',
  description: 'Portfolio of André Eriksson',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${archivo.variable} ${archivo.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
