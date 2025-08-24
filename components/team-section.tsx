"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional notary specialists dedicated to providing exceptional service throughout Tampa Bay
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Jill Munoz */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex flex-col items-center text-center">
                {/* Image Container */}
                <div className="w-48 h-48 mb-6 relative">
                  <img
                    src="/images/jill-headshot.png"
                    alt="Jill Munoz - Principal & Owner"
                    className="w-full h-full object-cover rounded-full border-4 border-neutral-300 shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Jill Munoz</h3>
                    <p className="text-steel-blue font-semibold text-lg">Principal & Owner</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    With over 20 years of experience in notary services and real estate, Jill brings unparalleled
                    expertise to every client interaction. As the founder of West Coast Notaries, she has built a
                    reputation for professionalism, reliability, and exceptional service throughout Florida.
                  </p>

                  {/* Contact Buttons */}
                  <div className="flex gap-3 justify-center pt-4">
                    <Button size="sm" className="bg-deep-charcoal-800 hover:bg-deep-charcoal-700 text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-neutral-300 text-black hover:bg-neutral-100"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Natalie Kolaxis */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex flex-col items-center text-center">
                {/* Image Container */}
                <div className="w-48 h-48 mb-6 relative">
                  <img
                    src="/images/natalie-jill-notary.jpg"
                    alt="Natalie Kolaxis - Senior Notary Specialist"
                    className="w-full h-full object-cover rounded-full border-4 border-steel-blue/20 shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Natalie Kolaxis</h3>
                    <p className="text-steel-blue font-semibold text-lg">Senior Notary Specialist</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    As a Senior Notary Specialist, Natalie brings years of hands-on notarial experience and a deep
                    commitment to providing precise, reliable, and client-focused services. She is passionate about
                    making the notarization process seamless and is strongly driven by customer service satisfaction.
                  </p>

                  {/* Contact Buttons */}
                  <div className="flex gap-3 justify-center pt-4">
                    <Button size="sm" className="bg-steel-blue hover:bg-steel-blue/90 text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-steel-blue text-steel-blue hover:bg-steel-blue/5"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-neutral-100 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Ready to Work with Our Team?</h3>
            <p className="text-gray-600 mb-6">Schedule an appointment with our professional notary specialists today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-deep-charcoal-800 hover:bg-deep-charcoal-700">
                <MapPin className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-neutral-300 text-black">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
