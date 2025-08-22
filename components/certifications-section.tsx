"use client"

import { motion } from "framer-motion"
import { Award, Shield, CheckCircle, Star } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: "Certified Notary Signing Agent",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "National Notary Association Member",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
      title: "Background Screened",
    },
    {
      icon: <Star className="h-10 w-10 text-blue-600" />,
      title: "5-Star Rated",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Our Certifications and Professional Affiliations
            </h2>
            <p className="text-lg text-neutral-600">
              We maintain the highest standards of professionalism and expertise in the notary industry.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 border border-slate-200">
                {cert.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-700">{cert.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
