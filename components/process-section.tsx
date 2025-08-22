"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarCheck, FileText, UserCheck, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Preparation",
      description: "Review and prepare your documents with our guidance",
      color: "bg-primary text-white",
    },
    {
      icon: <CalendarCheck className="h-8 w-8" />,
      title: "Schedule Appointment",
      description: "Book a convenient time for our mobile notary to meet you",
      color: "bg-primary/80 text-white",
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Document Signing",
      description: "Sign your documents with proper witnessing and notarization",
      color: "bg-accent text-accent-foreground",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Completion",
      description: "Receive your properly executed and notarized documents",
      color: "bg-primary text-white",
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-lg text-foreground/70">
              Our streamlined process makes document notarization simple and stress-free.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${step.color} ${
                        activeStep === index ? "shadow-lg" : ""
                      }`}
                      whileHover={{ scale: 1.1 }}
                      animate={activeStep === index ? { y: [0, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="text-center">
                      <h3 className="font-bold font-heading text-primary mb-2">{step.title}</h3>
                      <p className="text-sm text-foreground/70">{step.description}</p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
