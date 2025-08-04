"use client"

import { CustomCursor } from "@/components/custom-cursor"
import Link from "next/link"

export default function CreditsPage() {
  return (
    <>
      <CustomCursor />
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
              Website crafted by{" "}
              <span className="font-semibold text-white">Nawaz Wariya</span>.
            </p>
            <Link
              href="https://nawazwariya.contentify-ai.live/"
              className="text-blue-400 hover:underline transition-colors"
            >
              View Portfolio / Contact
            </Link>
          </div>

          {/* 3D Model Credit */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white mb-4">3D Model Credit</h3>
            <p>
              <span className="font-semibold text-white">New Balance 997</span> 3D model by{" "}
              <span className="font-semibold text-white">Isaiah</span>, used under CC Attribution 4.0 license
              from Sketchfab. Model created in 3ds Max with textures in Substance Painter.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
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
            
            {/* 3D Model Legal Notices */}
            <div className="text-sm text-gray-500 space-y-2 pt-2 border-t border-gray-800">
              <p><strong>Copyright:</strong> © Isaiah. All rights reserved to original creator.</p>
              <p><strong>License:</strong> Used under Creative Commons Attribution 4.0 International License.</p>
              <p><strong>Disclaimer:</strong> Model used for Commercial purposes only. No warranty provided.</p>
            </div>
          </div>

          {/* Images & Icons */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white mb-4">Images & Icons</h3>
            <p>
              Images used are from{" "}
              <span className="font-semibold text-white">Google from Photos</span> and{" "}
              <span className="font-semibold text-white">Lucide React</span>, under their respective licenses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://share.google/B1e285wDC72YCmwyP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline transition-colors"
              >
                Google Photos
              </Link>
              <Link
                href="https://lucide.dev/license"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline transition-colors"
              >
                Lucide React Icons
              </Link>
            </div>
          </div>

          {/* Fonts Used */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white mb-4">Fonts Used</h3>
            <p>
              Fonts &apos;Geist Sans&apos; sourced from{" "}
              <span className="font-semibold text-white">Google Fonts</span>.
            </p>
            <p className="text-sm text-gray-500">Licensed under SIL Open Font License.</p>
            <Link
              href="https://fonts.google.com/specimen/Geist/license?query=Geist+Sans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline transition-colors"
            >
              Geist Sans Font
            </Link>
          </div>

          {/* Open Source Libraries */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-medium text-white mb-4">Open Source Libraries</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Link
                  href="https://vercel.com/oss?utm_source=next-site&utm_medium=footer&utm_campaign=learn"
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
                  href="https://github.com/darkroomengineering/lenis/blob/63936d105fd9bb58697a25d0a66c8556a4d601af/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline transition-colors"
                >
                  Lenis
                </Link>{" "}
                (MIT License)
              </li>
            </ul>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-800 mt-16 pt-12 text-center space-y-4">
          <p className="text-gray-500">© 2025 Ruchi Shoes Owned By Rahim Sarvaiya. All rights reserved.</p>
        </div>
      </div>
    </section>
    </>
  )
}
