"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, FileText, Home, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  image?: string
}

export function RotatingServices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const services: Service[] = [
    {
      id: 1,
      title: "Loan Document Signings",
      description:
        "Expert notarization for mortgage refinances, purchases, and title company work. We ensure a smooth and compliant signing process.",
      icon: <Home className="h-8 w-8" />,
      color: "bg-coastal-blue text-white",
      features: ["Mortgage refinances", "Home purchases", "Title company work", "Experienced with all major lenders"],
      image: "/images/sign-here-please.jpg",
    },
    {
      id: 2,
      title: "Estate Planning",
      description:
        "Professional notarization for all your estate planning documents, ensuring they're legally executed and valid.",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-coastal-light text-white",
      features: ["Power of Attorney", "Living Wills", "Executive Directives", "Comprehensive document review"],
    },
    {
      id: 3,
      title: "General Notary Work",
      description: "Notarization services for a variety of documents requiring an official notary seal.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "bg-sunrise-gold text-coastal-blue",
      features: ["Affidavits", "Deeds", "Certified copies", "Oaths and affirmations"],
    },
  ]

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setDirection(1)
        setActiveIndex((prev) => (prev + 1) % services.length)
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, services.length])

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % services.length)
  }

  const handlePrev = () => {
    setAutoplay(false)
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleDotClick = (index: number) => {
    setAutoplay(false)
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-coastal-blue/5 animate-pulse-gentle"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-sunrise-gold/5 animate-pulse-gentle"></div>
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
            Our <span className="text-sunrise-gold">Specialized Services</span>
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            We focus on high-value notary services with expertise in loan document signings and estate planning.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div
                    className={`rounded-2xl p-8 aspect-square flex flex-col items-center justify-center text-center ${services[activeIndex].color}`}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10"></div>
                      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/10"></div>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="relative z-10 mb-6 p-4 rounded-full bg-white/20"
                    >
                      {services[activeIndex].icon}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold font-heading mb-4 relative z-10"
                    >
                      {services[activeIndex].title}
                    </motion.h3>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "40%" }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="h-1 bg-white/50 mb-4 mx-auto"
                    ></motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="relative z-10"
                    >
                      {services[activeIndex].description}
                    </motion.p>
                  </div>

                  <div className="space-y-6">
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold font-heading text-coastal-blue"
                    >
                      {services[activeIndex].title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-charcoal/80"
                    >
                      {services[activeIndex].description}
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-3"
                    >
                      {services[activeIndex].features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                            <svg className="w-3 h-3 text-coastal-blue" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <span className="text-sm text-charcoal/80">{feature}</span>
                        </li>
                      ))}
                    </motion.ul>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Button asChild className="bg-coastal-blue hover:bg-coastal-light">
                        <Link href="/services">Learn More</Link>
                      </Button>
                    </motion.div>
                    {services[activeIndex].image && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-6"
                      >
                        <img
                          src={services[activeIndex].image || "/placeholder.svg"}
                          alt={services[activeIndex].title}
                          className="rounded-lg shadow-md w-full h-auto"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-coastal-blue scale-125" : "bg-coastal-blue/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-coastal-blue/10 hover:bg-coastal-blue/20 transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-6 w-6 text-coastal-blue" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-coastal-blue/10 hover:bg-coastal-blue/20 transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="h-6 w-6 text-coastal-blue" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
