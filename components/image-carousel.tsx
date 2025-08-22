"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface ImageCarouselProps {
  direction?: "ltr" | "rtl"
  speed?: number
}

export function ImageCarousel({ direction = "rtl", speed = 20 }: ImageCarouselProps) {
  const images = [
    { src: "/images/jill-munoz.png", alt: "Professional headshot" },
    { src: "/images/background-2.jpg", alt: "Signing documents" },
    { src: "/images/background-3.jpg", alt: "Legal documents" },
    { src: "/images/background-1.jpg", alt: "Notary stamp" },
    { src: "/images/office-2.jpg", alt: "Office environment" },
    { src: "/images/office-3.jpg", alt: "Professional workspace" },
    { src: "/images/sign-here-please.jpg", alt: "Document signing" },
    { src: "/images/background-4.jpg", alt: "Notary seal" },
  ]

  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Calculate the width of the carousel container
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  // Create a duplicate set of images to ensure seamless looping
  const duplicatedImages = [...images, ...images, ...images]

  return (
    <div className="overflow-hidden relative">
      <motion.div
        ref={carouselRef}
        className="flex"
        animate={{
          x: direction === "rtl" ? -width / 2 : width / 2,
        }}
        transition={{
          x: {
            duration: 40 / speed,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {duplicatedImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 p-0.5 relative">
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            {/* Gray and white overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 to-white/30 pointer-events-none"></div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
