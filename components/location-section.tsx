"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MapPin, Clock, Phone } from "lucide-react"
import Link from "next/link"

export function LocationSection() {
  const [activeView, setActiveView] = useState<"shop" | "map">("shop")
  const [isAnimating, setIsAnimating] = useState(false)

  const handleViewChange = (view: "shop" | "map") => {
    if (isAnimating || activeView === view) return

    setIsAnimating(true)
    setTimeout(() => {
      setActiveView(view)
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
    }, 300)
  }

  return (
    <section className="py-25 h-[1200px] sm:h-[1000px] md:h-[1000px] lg:h-[610px] xl:[610px] bg-white">
      <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light mb-6 tracking-tight">
        Visit Our <span className="font-normal">Store</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Discover our store
        </p>
      </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2 items-center min-h-[400px]">
            {/* Left Side - Store Image */}
            <div className="relative flex px-4 py-3 justify-center items-center">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
          <Image
          src="./shop.webp"
          alt="Ruchi Shoes"
          fill
          className="object-cover border border-black border-5 rounded-2xl"
          />
            </div>
          </div>

          {/* Right Side - Store Information */}
          <div className="p-8">
          <div className="space-y-6">
            <div>
            <h3 className="text-3xl font-bold mb-2 tracking-tight">Ruchi Shoes</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover our full range of footwear in a space designed for comfort and style.
            </p>
            </div>

            <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Shop No 22-23-24-25, Harihar Shopping Centre, Parekh Road, opposite The Mall, Malad, Mumbai, Maharashtra 400064</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Mon-Sat: 10AM-11PM, Sun: 10AM-10PM</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">+91-9029872387</span>
            </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Link href="https://www.google.com/maps/dir/19.1739767,72.8502591/Ruchi+Shoes,+Shop+No+22-23-24-25,+Harihar+Shopping+Centre,+Parekh+Road,+opposite+The+Mall,+Malad,+Mumbai,+Maharashtra+400064/@19.1805447,72.8435638,16z/data=!3m1!4b1!4m18!1m7!3m6!1s0x3be7b6e31584d1d9:0x1c3b65bce713771b!2sRuchi+Shoes!8m2!3d19.1872439!4d72.8474538!16s%2Fg%2F1tdmnj9m!4m9!1m1!4e1!1m5!1m1!1s0x3be7b6e31584d1d9:0x1c3b65bce713771b!2m2!1d72.8474556!2d19.1872407!3e2?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white px-6 py-3 text-base font-medium tracking-wide"
                >
                  Get Directions
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}
