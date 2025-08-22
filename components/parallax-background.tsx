"use client"

import { useEffect, useState } from "react"

interface ParallaxBackgroundProps {
  images: string[]
  opacity?: number
}

export function ParallaxBackground({ images, opacity = 0.15 }: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: opacity,
            transform: `translateY(${scrollY * (0.05 * (index + 1))}px)`,
            zIndex: -10 - index,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
    </div>
  )
}
