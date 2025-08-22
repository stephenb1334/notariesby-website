"use client"

import { motion } from "framer-motion"

const images = [
  { src: "/images/background-1.jpg", alt: "Notary stamp" },
  { src: "/images/background-2.jpg", alt: "Signing documents" },
  { src: "/images/background-3.jpg", alt: "Legal documents" },
  { src: "/images/background-4.jpg", alt: "Notary seal" },
  { src: "/images/office-2.jpg", alt: "Office environment" },
  { src: "/images/office-3.jpg", alt: "Professional workspace" },
]

export function ImageGrid() {
  return (
    <section className="py-12 bg-neutral-50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
