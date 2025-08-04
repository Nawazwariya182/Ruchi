import Spline from "@splinetool/react-spline"
import { useState } from "react"

export function Hero() {
  const [splineLoaded, setSplineLoaded] = useState(false)

  return (
    <section className="relative pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Spline 3D Component - Second layer */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="w-full h-full max-w-6xl pointer-events-none z-20">
          <Spline
            scene="https://prod.spline.design/sx5tFWtqZQP905eC/scene.splinecode"
            style={{ background: 'transparent' }}
            onLoad={() => setSplineLoaded(true)}
          />
        </div>

        {/* Color Block - Third layer */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30">
          <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 w-full h-20"></div>
        </div>

        {/* Transparent Scrollable Overlay - Bottom layer */}
        <div className="absolute inset-0 bg-transparent z-0"></div>

        {/* Overlay Text - Top layer */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40 lg:z-40 xl:z-10 md:z-40 sm:z-40">
          <div className="text-center space-y-10">
            {/* Premium Text */}
            <div className="absolute top-2 left-4 pointer-events-none">
              <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold text-white tracking-[0.1em] md:tracking-[0.1em] uppercase z-10" style={{ WebkitTextStroke: window.innerWidth >= 768 ? '2px black' : 'none' }}>
                Premium
              </h1>
            </div>

            {/* Footwear Text */}
            <div className="absolute bottom-[140px] left-1/2 transform -translate-x-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 md:left-auto md:transform-none md:right-1 lg:bottom-[120px] lg:right-1 xl:bottom-[120px] xl:right-5 pointer-events-none z-1">
              <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white tracking-[0.1em] md:tracking-[0.1em] uppercase" style={{ WebkitTextStroke: window.innerWidth >= 768 ? '1px black' : 'none' }}>
                Footwear
              </h2>
              <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-px bg-black/40 mx-auto mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8"></div>
              <p className="flex text-xl
               justify-center sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white tracking-[0.05em] md:tracking-[0.1em] font-medium max-w-sm sm:max-w-sm md:max-w-md lg:max-w-md mx-auto px-2 sm:px-3 md:px-4 z-10" style={{ WebkitTextStroke: window.innerWidth >= 768 ? '0.6px black' : 'none' }}>
                Excellence in every step—no compromises.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-600 tracking-wider uppercase font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent z-50"></div>
        </div>
      </div>

    </section>
  )
}