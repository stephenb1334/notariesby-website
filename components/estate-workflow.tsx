"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Users, PenTool, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EstateWorkflow() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Preparation",
      description: "Review and prepare your estate planning documents with our guidance",
      color: "bg-coastal-blue text-white",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Schedule Appointment",
      description: "Book a convenient time for our mobile notary to meet you",
      color: "bg-coastal-light text-white",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Document Signing",
      description: "Sign your documents with proper witnessing and notarization",
      color: "bg-sunrise-gold text-coastal-blue",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Completion",
      description: "Receive your properly executed and notarized documents",
      color: "bg-coastal-blue text-white",
    },
  ]

  return (
    <section className="py-20 bg-sand relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-coastal-blue/5 animate-pulse-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-sunrise-gold/5 animate-pulse-gentle"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-coastal-blue">
            Estate Planning <span className="text-sunrise-gold">Workflow</span>
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            Our streamlined process makes estate planning document notarization simple and stress-free.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-coastal-blue/20 -translate-y-1/2 hidden md:block"></div>

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
                      <h3 className="font-bold font-heading text-coastal-blue mb-2">{step.title}</h3>
                      <p className="text-sm text-charcoal/80">{step.description}</p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-sunrise-gold text-white flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild className="bg-coastal-blue hover:bg-coastal-light">
              <Link href="/estate-planning">Learn More About Estate Planning</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
