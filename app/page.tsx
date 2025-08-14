"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { CustomCursor } from "@/components/custom-cursor"
import { SplashScreen } from "@/components/splash-screen"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import CurvedLoop from "@/components/CurvedLoop"
import { CreativeCommons } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamic (code-split) sections to reduce initial JS on mobile
const Features = dynamic(
  () => import("@/components/features").then(m => ({ default: m.Features })),
  { loading: () => <div className="py-12 text-center text-xs opacity-60">Loading features…</div> }
)
const LocationSection = dynamic(
  () => import("@/components/location-section").then(m => ({ default: m.LocationSection })),
  { loading: () => <div className="py-12 text-center text-xs opacity-60">Loading location…</div> }
)
const Products = dynamic(
  () => import("@/components/products").then(m => ({ default: m.Products })),
  { loading: () => <div className="py-16 text-center text-xs opacity-60">Loading products…</div> }
)

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Mobile detection
  useEffect(() => {
    const detect = () => {
      if (typeof window === "undefined") return
      const coarse = window.matchMedia("(pointer:coarse)").matches
      setIsMobile(coarse || window.innerWidth <= 768)
    }
    detect()
    window.addEventListener("resize", detect)
    return () => window.removeEventListener("resize", detect)
  }, [])

  // Adaptive splash duration (shorter on mobile)
  useEffect(() => {
    const duration = isMobile ? 1500 : 4000
    const timer = setTimeout(() => setShowSplash(false), duration)
    return () => clearTimeout(timer)
  }, [isMobile])

  // Lenis smooth scroll now enabled for all devices
  useEffect(() => {
    if (showSplash) return
    let lenis: any
    let rafId: number
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default
      lenis = new Lenis({
        duration: isMobile ? 1.0 : 1.05,
        smoothWheel: true,
        // smoothTouch removed: not in current LenisOptions (touch smoothing handled internally)
        wheelMultiplier: isMobile ? 0.8 : 0.9,
        touchMultiplier: isMobile ? 1.0 : 1.2
      })
      const raf = (time: number) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }
    initLenis()
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
    }
  }, [showSplash, isMobile])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Disable custom cursor on mobile */}
      {!isMobile && <CustomCursor />}
      <Header />
      <Hero />
      <CurvedLoop
        marqueeText="Be ✦ Unique ✦ With ✦ Ruchi ✦ Shoes ✦"
        speed={isMobile ? 1 : 2}
        curveAmount={isMobile ? 80 : 150}
        direction="left"
        interactive={false}
      />
      <Suspense fallback={<div className="py-12 text-center text-xs opacity-60">Loading…</div>}>
        <Features />
      </Suspense>
      <Suspense fallback={<div className="py-12 text-center text-xs opacity-60">Loading…</div>}>
        <LocationSection />
      </Suspense>
      <Suspense fallback={<div className="py-16 text-center text-xs opacity-60">Loading…</div>}>
        <Products />
      </Suspense>
      <Footer />

      {/* Fixed Credits Button */}
      <Link
        href="./credit/"
        className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
        aria-label="Open Credits"
      >
        <CreativeCommons className="w-6 h-6" />
      </Link>
    </div>
  )
}