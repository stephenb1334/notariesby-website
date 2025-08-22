"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  text: string
  initial: string
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Pat",
      text: "We are very pleased with the very timely and excellent service we received. Jill is very knowledgeable and was able to advise us as to exactly what we needed to do to execute our Estate Trust Documents. Everything was done perfectly. We will use her company again and highly recommend her.",
      initial: "P",
    },
    {
      id: 2,
      name: "John Roman",
      text: "Super helpful, professional, and knowledgeable notary. Came to our home, made us feel very comfortable to complete one of the most important transactions of our lives. She spent a lot of time and extra hours with us to help understand every document.",
      initial: "J",
    },
    {
      id: 3,
      name: "Barbara Domingues",
      text: "Professional and fast service. I felt very comfortable having Jill help me.",
      initial: "B",
    },
    {
      id: 4,
      name: "Paul D",
      text: "They were on time and very professional. Would use again.",
      initial: "P",
    },
  ]

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  }

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg text-neutral-600">5.0 from 4 Google Reviews</p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px]">
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
                <div className="bg-white rounded-xl shadow-lg p-8 relative border border-neutral-200">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                        {testimonials[activeIndex].initial}
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-lg text-neutral-700 italic mb-4">"{testimonials[activeIndex].text}"</p>
                      <p className="font-bold text-primary">— {testimonials[activeIndex].name}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
