"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CustomCursor } from "@/components/custom-cursor"
import { SplashScreen } from "@/components/splash-screen"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import CurvedLoop from "@/components/CurvedLoop"
import { CreativeCommons } from "lucide-react"
// import { CreditsSection } from "./credit/page"

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let lenis: any;

    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    if (!showSplash) {
      initLenis();
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Header />
      <Hero />
      <CurvedLoop
        marqueeText="Be ✦ Unique ✦ With ✦ Ruchi ✦ Shoes ✦"
        speed={2}
        curveAmount={150}
        direction="left"
        interactive={false} />
      <Features />
      <LocationSection />
      <Products />
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