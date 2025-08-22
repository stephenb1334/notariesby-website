"use client"
import styles from "./smooth-carousel.module.css"

interface SmoothCarouselProps {
  direction?: "ltr" | "rtl"
  speed?: number
}

export function SmoothCarousel({ direction = "rtl", speed = 60 }: SmoothCarouselProps) {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jill%20headshot.PNG-R3RJpMsPDtNr3rNPhhMvBWlZ6zZkw2.png",
      alt: "Professional headshot",
    },
    { src: "/images/background-2.jpg", alt: "Signing documents" },
    { src: "/images/background-3.jpg", alt: "Legal documents" },
    { src: "/images/background-1.jpg", alt: "Notary stamp" },
    { src: "/images/office-2.jpg", alt: "Office environment" },
    { src: "/images/office-3.jpg", alt: "Professional workspace" },
    { src: "/images/sign-here-please.jpg", alt: "Document signing" },
    { src: "/images/background-4.jpg", alt: "Notary seal" },
  ]

  // Create three sets of images to ensure seamless looping
  const allImages = [...images, ...images, ...images]

  // Calculate animation duration based on speed (higher number = slower animation)
  const duration = speed

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselTrack}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "rtl" ? "normal" : "reverse",
        }}
      >
        {allImages.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className={styles.carouselImage} />
          </div>
        ))}
      </div>
    </div>
  )
}
