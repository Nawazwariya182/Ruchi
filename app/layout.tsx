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
    <html lang="en" className="scrollbar-hide">
      <head>
        {/* Early touch / coarse pointer flag so mobile CSS applies before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var h=document.documentElement;if(window.matchMedia('(pointer:coarse)').matches){h.classList.add('is-touch');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="scrollbar-hide">{children}</body>
    </html>
  )
}
