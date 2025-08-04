import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Ruchi Shoes",
  description: "Created by Nawaz Wariya",
  icons: '/logo.png',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scrollbar-hide lenis">
      <head>
      </head>
      <body className="scrollbar-hide">{children}</body>
    </html>
  )
}
