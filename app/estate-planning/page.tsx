"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function EstatePlanningPage() {
  return (
    <div className="container px-4 py-12 md:py-16 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 mb-12"
      >
        <h1 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue sm:text-4xl md:text-5xl">
          Estate Planning Notarization
        </h1>
        <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
          Professional notarization services for all your estate planning documents.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold font-heading text-coastal-blue mb-6">Secure Your Legacy</h2>
          <p className="text-charcoal mb-6">
            Estate planning documents are crucial for ensuring your wishes are carried out and your loved ones are
            protected. Our professional notary services ensure these important documents are properly executed and
            legally valid.
          </p>
          <p className="text-charcoal mb-6">
            With over 20 years of experience in notarizing estate planning documents, we understand the importance of
            accuracy, attention to detail, and proper procedure in these sensitive matters.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <Check className="h-4 w-4 text-coastal-blue" />
              </div>
              <div>
                <h3 className="font-medium">Expert Guidance</h3>
                <p className="text-sm text-charcoal/80">
                  We&apos;ll guide you through the notarization process, ensuring all requirements are met.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <Check className="h-4 w-4 text-coastal-blue" />
              </div>
              <div>
                <h3 className="font-medium">Mobile Service</h3>
                <p className="text-sm text-charcoal/80">
                  We come to your home, office, or any convenient location throughout Florida.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-coastal-blue/10 mt-1">
                <Check className="h-4 w-4 text-coastal-blue" />
              </div>
              <div>
                <h3 className="font-medium">Witness Provision</h3>
                <p className="text-sm text-charcoal/80">
                  We can provide witnesses when required for document execution.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-coastal-blue/10 animate-pulse-gentle"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-sunrise-gold/10 animate-float"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/estate-signing-notary.png"
              alt="Estate planning document signing"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
