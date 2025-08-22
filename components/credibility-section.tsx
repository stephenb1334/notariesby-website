"use client"

import { motion } from "framer-motion"

export function CredibilitySection() {
  const certifications = [
    {
      name: "LSS Association",
      image: "/images/certification-1.png",
      alt: "LSS Association Certified",
    },
    {
      name: "NNA Certified",
      image: "/images/certification-2.png",
      alt: "National Notary Association Certified",
    },
    {
      name: "Professional Certification",
      image: "/images/certification-3.png",
      alt: "Professional Industry Certification",
    },
    {
      name: "Loan Signing System",
      image: "/images/certification-4.png",
      alt: "Loan Signing System Certified",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-black mb-4">
            Certified & Trusted Professional
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our certifications and memberships ensure you receive the highest quality notary services.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 p-2">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
