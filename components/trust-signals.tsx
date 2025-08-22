"use client"

import { motion } from "framer-motion"
import { Award, Shield, Clock, CheckCircle } from "lucide-react"

export function TrustSignals() {
  const signals = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "State Certified",
      description: "Licensed Florida Notary Public with all required state certifications",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fully Insured",
      description: "Comprehensive errors and omissions insurance coverage",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "20+ Years Experience",
      description: "Extensive experience in loan signing and estate planning",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "NNA Certified",
      description: "National Notary Association certified signing agent",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4">
                <div className="text-primary">{signal.icon}</div>
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">{signal.title}</h3>
              <p className="text-sm text-foreground/70">{signal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
