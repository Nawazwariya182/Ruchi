"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 z-200">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo on left */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-full border border-gray-100 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                className="object-contain rounded-full border border-gray-300"
                width={192}
                height={192}
              />
            </div>
            <span className="font-bold text-3xl tracking-normal">Ruchi Shoes</span>
            </div>

          {/* Golden line separator */}
          <div className="flex-1 flex justify-center"></div>

          {/* Maps icon on right */}
          <div className="flex items-center">
            <Link href="https://www.google.com/maps/dir//Shop+No+22-23-24-25,+Harihar+Shopping+Centre,+Parekh+Road,+opposite+The+Mall,+Malad,+Mumbai,+Maharashtra+400064/@19.1872255,72.7650521,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7b6e31584d1d9:0x1c3b65bce713771b!2m2!1d72.8474556!2d19.1872407?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 22 23">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Maps
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Golden fading line */}
      <div className="fixed top-20 w-full z-40 h-1">
        <div
          className="w-full h-full bg-gradient-to-r from-transparent via-black to-transparent"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 20%, rgba(0, 0, 0, 1) 50%, transparent 80%, transparent 100%)'
          }}
        />
      </div>
    </>
  )
}
