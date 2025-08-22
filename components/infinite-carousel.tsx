"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"

interface InfiniteCarouselProps {
  direction?: "ltr" | "rtl"
  speed?: number
}

export function InfiniteCarousel({ direction = "rtl", speed = 20 }: InfiniteCarouselProps) {
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

  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    if (!containerRef.current) return

    // Get the width of a single set of images
    const containerWidth = containerRef.current.scrollWidth / 2

    // Animate from 0 to -containerWidth (for rtl) or containerWidth (for ltr)
    const initialX = 0
    const targetX = direction === "rtl" ? -containerWidth : containerWidth

    // Start the animation
    controls.start({
      x: [initialX, targetX],
      transition: {
        duration: 30 / speed,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    })

    return () => {
      controls.stop()
    }
  }, [controls, direction, speed])

  // Create two sets of images to ensure seamless looping
  const duplicatedImages = [...images, ...images]

  return (
    <div className="overflow-hidden">
      <motion.div ref={containerRef} className="flex" animate={controls}>
        {duplicatedImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 p-0.5">
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
