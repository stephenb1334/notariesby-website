"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ScheduleSection() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Notary Appointment Today</h2>
            <p className="text-lg text-neutral-600 mb-6">
              Our mobile notary service comes to you at your convenience. Book an appointment today and experience our
              professional, reliable service.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
              <Link href="/schedule">Book Now</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/images/office-3.jpg"
              alt="Professional notary office"
              className="w-full h-auto object-cover aspect-video"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
