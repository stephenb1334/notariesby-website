"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FounderSection() {
  return (
    <section className="py-20 bg-neutral-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Founder</h2>
            <p className="text-lg mb-6">
              Jill Munoz brings over 20 years of experience in notary services and real estate to West Coast Notaries.
              Her dedication to professionalism and client satisfaction has made her one of the most trusted notaries in
              Florida.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm">5.0 from 4 Google Reviews</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-white shadow-xl relative">
              <Image
                src="/images/founder-jill-munoz-36452D62.png"
                alt="Jill Munoz - Founder of West Coast Notaries"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 256px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
