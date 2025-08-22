"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image" // Import Next.js Image component
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(formData)
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="container px-4 py-12 md:py-16 pt-20 md:pt-24">
        {" "}
        {/* Adjusted padding */}
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tighter font-heading text-coastal-blue sm:text-3xl mb-4">
            Message Sent Successfully!
          </h1>
          <p className="text-charcoal mb-6">
            Thank you for contacting West Coast Notaries. We'll get back to you as soon as possible.
          </p>
          <Button onClick={() => setIsSuccess(false)}>Send Another Message</Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="relative w-full h-[250px] md:h-[350px]">
        <Image
          src="/images/banner-scholar-6.jpg" // Example banner
          alt="Contact West Coast Notaries"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-3xl font-bold tracking-tighter font-heading text-white sm:text-4xl md:text-5xl drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto mt-2 drop-shadow-md">
            Have questions or need to schedule an appointment? Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="container px-4 py-12 md:py-16">
        {" "}
        {/* Main content container */}
        {/* Removed original title and subtitle as they are now in the banner */}
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          {" "}
          {/* Added mt-8 for spacing below banner text */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Get In Touch</CardTitle>
                <CardDescription>We're here to help with all your notary needs in Tampa Bay.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-coastal-blue/10">
                    <Phone className="h-6 w-6 text-coastal-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium font-heading">Phone</h3>
                    <p className="text-charcoal">727 710 5455</p>
                    <p className="text-sm text-charcoal/70 mt-1">Available 9AM-7PM, Monday-Saturday</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-coastal-blue/10">
                    <Mail className="h-6 w-6 text-coastal-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium font-heading">Email</h3>
                    <p className="text-charcoal">info@notariesby.com</p>
                    <p className="text-sm text-charcoal/70 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-coastal-blue/10">
                    <MapPin className="h-6 w-6 text-coastal-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium font-heading">Service Area</h3>
                    <p className="text-charcoal">Tampa Bay, FL and surrounding areas</p>
                    <p className="text-sm text-charcoal/70 mt-1">Mobile service - we come to you!</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/schedule">Book an Appointment</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold font-heading text-coastal-blue">Business Hours</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-gray-50 rounded-md">
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-charcoal">9:00 AM - 7:00 PM</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                  <p className="font-medium">Saturday</p>
                  <p className="text-charcoal">10:00 AM - 5:00 PM</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-md col-span-2">
                  <p className="font-medium">Sunday</p>
                  <p className="text-charcoal">By appointment only</p>
                </div>
              </div>
              <p className="text-sm text-charcoal">Evening and weekend appointments available upon request.</p>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="727 710 5455"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="appointment">Appointment Question</SelectItem>
                        <SelectItem value="services">Services Information</SelectItem>
                        <SelectItem value="pricing">Pricing Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[120px]"
                      placeholder="Tell us about your notary needs..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold font-heading text-coastal-blue text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-medium font-heading text-coastal-blue">What is a notary public?</h3>
              <p className="text-charcoal">
                A notary public is a state-appointed official who serves as an impartial witness to the signing of
                important documents, verifying the identity of signers and ensuring they're signing willingly.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium font-heading text-coastal-blue">What documents do you notarize?</h3>
              <p className="text-charcoal">
                We notarize a wide range of documents including real estate closings, loan documents, powers of
                attorney, affidavits, wills, and more. See our services page for a complete list.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium font-heading text-coastal-blue">How much do your services cost?</h3>
              <p className="text-charcoal">
                Our fees vary depending on the type of service, number of documents, and location. Please contact us for
                a quote based on your specific needs.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium font-heading text-coastal-blue">What ID do I need for notarization?</h3>
              <p className="text-charcoal">
                Florida law requires current, valid, government-issued photo ID such as a driver's license, passport, or
                state ID card for notarization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
