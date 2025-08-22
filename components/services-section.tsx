"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Home, FileText, Briefcase, CheckCircle } from "lucide-react"
import { useState } from "react"

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: "loan-signing",
      icon: <Home className="h-6 w-6" />,
      title: "Loan Document Signings",
      shortTitle: "Loan Signings",
      description:
        "Expert notarization for mortgage refinances, purchases, and title company work. We ensure a smooth and compliant signing process.",
      features: ["Mortgage refinances", "Home purchases", "Title company work", "Experienced with all major lenders"],
      image: "/images/sign-here-please.jpg",
      bookingLink: "/book?service=real-estate",
      bookingText: "Book Loan Document Signing",
    },
    {
      id: "estate-planning",
      icon: <FileText className="h-6 w-6" />,
      title: "Estate Planning",
      shortTitle: "Estate Planning",
      description:
        "Professional notarization for all your estate planning documents, ensuring they're legally executed and valid.",
      features: ["Power of Attorney", "Living Wills", "Executive Directives", "Comprehensive document review"],
      image: "/images/office-2.jpg",
      bookingLink: "/book?service=estate-planning",
      bookingText: "Book Estate Planning Service",
    },
    {
      id: "general-notary",
      icon: <Briefcase className="h-6 w-6" />,
      title: "General Notary Work",
      shortTitle: "General Notary",
      description: "Notarization services for a variety of documents requiring an official notary seal.",
      features: ["Affidavits", "Deeds", "Certified copies", "Oaths and affirmations"],
      image: "/images/office-3.jpg",
      bookingLink: "/book?service=notary",
      bookingText: "Book General Notary Work",
    },
  ]

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Expert Notary Services for Your Most Important Transactions
            </h1>
            <p className="text-lg text-slate-300">
              We focus on high-value notary services with expertise in loan document signings and estate planning.
            </p>
          </motion.div>
        </div>

        {/* Mobile: Vertical Card Layout */}
        <div className="block md:hidden space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-700 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-400">{service.title}</h3>
              </div>

              <p className="text-slate-300 mb-4 text-sm leading-relaxed">{service.description}</p>

              <div className="mb-6">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href={service.bookingLink}>{service.bookingText}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Tab Layout */}
        <div className="hidden md:block">
          <Tabs defaultValue="loan-signing" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-12 bg-slate-700 text-slate-300 border-slate-600 h-auto">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex flex-col items-center gap-2 py-4 px-3 data-[state=active]:text-white data-[state=active]:bg-slate-600 text-center min-h-[80px]"
                >
                  <div className="flex items-center gap-2">
                    {service.icon}
                    <span className="text-sm font-medium leading-tight">{service.shortTitle}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">{service.title}</h3>
                    <p className="text-slate-300 mb-6">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-slate-200">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href={service.bookingLink}>{service.bookingText}</Link>
                    </Button>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
