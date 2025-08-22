"use client"

import { motion } from "framer-motion"

export function CredentialsSection() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Credentials</h2>
            <p className="text-lg">Licensed, insured, and committed to excellence in every notarization.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Notary Commission</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src="/images/background-1.jpg" alt="Notary Commission" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">NNA Certification</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src="/images/background-2.jpg" alt="NNA Certification" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">E&O Insurance</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src="/images/background-3.jpg" alt="E&O Insurance" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
