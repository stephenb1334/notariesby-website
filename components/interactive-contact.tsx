"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export function InteractiveContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [activeContact, setActiveContact] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      id: "phone",
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      value: "727 710 5455",
      description: "Available 9AM-7PM, Monday-Saturday",
      action: "tel:+17277105455",
      actionText: "Call Now",
    },
    {
      id: "email",
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      value: "info@notariesby.com",
      description: "We'll respond within 24 hours",
      action: "mailto:info@notariesby.com",
      actionText: "Send Email",
    },
    {
      id: "location",
      icon: <MapPin className="h-6 w-6" />,
      title: "Service Area",
      value: "Tampa Bay, FL",
      description: "Mobile service - we come to you!",
      action: "/services",
      actionText: "View Service Area",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sand relative overflow-hidden">
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
            Get In <span className="text-sunrise-gold">Touch</span>
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            Have questions or need to schedule an appointment? We're here to help with all your notary needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold font-heading text-coastal-blue">Contact Information</h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    activeContact === method.id
                      ? "border-coastal-blue bg-coastal-blue/5 shadow-md"
                      : "border-transparent bg-white/80 hover:bg-white hover:shadow-sm"
                  }`}
                  onMouseEnter={() => setActiveContact(method.id)}
                  onMouseLeave={() => setActiveContact(null)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-coastal-blue/10 text-coastal-blue">{method.icon}</div>
                    <div>
                      <h4 className="font-medium font-heading">{method.title}</h4>
                      <p className="text-charcoal">{method.value}</p>
                      <p className="text-sm text-charcoal/70">{method.description}</p>
                      <a
                        href={method.action}
                        className="inline-flex items-center mt-2 text-sm font-medium text-coastal-blue hover:underline"
                      >
                        {method.actionText}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold font-heading text-coastal-blue mb-6">Send Us a Message</h3>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-md p-4 text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-green-100 rounded-full">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-medium text-green-800">Message Sent!</h4>
                  <p className="text-sm text-green-700">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-blue focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-blue focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-blue focus:border-transparent resize-none"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-coastal-blue hover:bg-coastal-light text-white font-medium py-2 px-4 rounded-md transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
