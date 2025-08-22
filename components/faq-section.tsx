"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "What is a notary public?",
      answer:
        "A notary public is a state-appointed official who serves as an impartial witness to the signing of important documents, verifying the identity of signers and ensuring they're signing willingly.",
    },
    {
      question: "What ID do I need for notarization?",
      answer:
        "Florida law requires current, valid, government-issued photo ID such as a driver's license, passport, or state ID card for notarization.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our fees vary depending on the type of service, number of documents, and location. Please contact us for a quote based on your specific needs.",
    },
    {
      question: "How quickly can you schedule an appointment?",
      answer: "We can often accommodate same-day or next-day appointments. For urgent needs, please call us directly.",
    },
  ]

  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
            <p className="text-lg text-neutral-600">Answers to commonly asked questions about our notary services.</p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-neutral-200">
                  <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
