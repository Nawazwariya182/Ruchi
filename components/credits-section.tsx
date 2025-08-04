"use client"

import Link from "next/link"

export function CreditsSection() {
  return (
    <section className="py-24 bg-gray-950 text-gray-300 animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-6 tracking-tight text-white">
            Website <span className="font-normal">Credits</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Acknowledging the tools, assets, and talent behind this experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-lg">
          {/* Made By */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white mb-4">Made By</h3>
            <p>
              Website crafted by <span className="font-semibold text-white">Nawaz Wariya</span>.
            </p>
            <Link href="https://nawazwariya.contentify-ai.live/" className="text-blue-400 hover:underline transition-colors">
              View Portfolio / Contact
            </Link>
          </div>

          {/* 3D Model Credit */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white mb-4">3D Model Credit</h3>
            <p>
              <span className="font-semibold text-white">New Balance 997</span> 3D model by <span className="font-semibold text-white">Isaiah</span>, used under CC Attribution 4.0 license from Sketchfab.
              Model created in 3ds Max with textures in Substance Painter By <span className="font-semibold text-white">Isaiah</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.artstation.com/artwork/x83ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline transition-colors"
              >
                View on ArtStation
              </Link>
              <Link
                href="https://skfb.ly/6AJES"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline transition-colors"
              >
                Sketchfab
              </Link>
            </div>
          </div>

          {/* Images & Icons */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white mb-4">Images & Icons</h3>
            <p>
              Images used are from <span className="font-semibold text-white">Unsplash</span> and{" "}
              <span className="font-semibold text-white">Iconify</span>, under their respective licenses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://unsplash.com/license"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline transition-colors"
              >
                Unsplash License
              </Link>
              <Link
                href="https://icon-sets.iconify.design/license/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline transition-colors"
              >
                Iconify License
              </Link>
            </div>
          </div>

          {/* Fonts Used */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white mb-4">Fonts Used</h3>
            <p>
              Fonts &apos;Inter&apos; and &apos;Roboto&apos; sourced from{" "}
              <span className="font-semibold text-white">Google Fonts</span>.
            </p>
            <p className="text-sm text-gray-500">Licensed under SIL Open Font License.</p>
            <Link
              href="https://fonts.google.com/specimen/Inter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline transition-colors"
            >
              Inter Font
            </Link>
            <Link
              href="https://fonts.google.com/specimen/Roboto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline transition-colors ml-4"
            >
              Roboto Font
            </Link>
          </div>

          {/* Open Source Libraries */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-medium text-white mb-4">Open Source Libraries</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Link
                  href="https://react.dev/license"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline transition-colors"
                >
                  React
                </Link>{" "}
                (MIT License)
              </li>
              <li>
                <Link
                  href="https://github.com/vercel/next.js/blob/canary/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline transition-colors"
                >
                  Next.js
                </Link>{" "}
                (MIT License)
              </li>
              <li>
                <Link
                  href="https://swiperjs.com/license"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline transition-colors"
                >
                  SwiperJS
                </Link>{" "}
                (MIT License)
              </li>
              <li>
                <Link
                  href="https://github.com/studio-freight/lenis/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline transition-colors"
                >
                  Lenis
                </Link>{" "}
                (MIT License)
              </li>
              <li>
                <Link
                  href="https://github.com/shadcn-ui/ui/blob/main/LICENSE.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline transition-colors"
                >
                  shadcn/ui
                </Link>{" "}
                (MIT License)
              </li>
            </ul>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-800 mt-16 pt-12 text-center space-y-4">
          <p className="text-gray-500">© 2025 STRIDE. All rights reserved.</p>
          <Link
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline transition-colors"
          >
            Official Company Site
          </Link>
        </div>
      </div>
    </section>
  )
}
