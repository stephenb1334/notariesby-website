"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Check,
  Globe,
  Car,
  Briefcase,
  FileText,
  Users,
  Home,
  Heart,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  DollarSign,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ServiceCardProps {
  title: string
  description: string
  services: string[]
  detailedServices?: { name: string; description: string }[]
  pricing?: string
  serviceType: string
}

function ServiceCard({ title, description, services, detailedServices, pricing, serviceType }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border-2 border-neutral-200/20 h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="font-heading text-lg md:text-xl">{title}</CardTitle>
        <CardDescription className="text-sm md:text-base">{description}</CardDescription>
        {pricing && <div className="text-lg font-semibold text-black">{pricing}</div>}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <ul className="space-y-3 mb-4 flex-grow">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-4 w-4 md:h-5 md:w-5 text-black mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base leading-relaxed">{service}</span>
            </li>
          ))}
        </ul>

        {detailedServices && (
          <>
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full mb-4 border-neutral-200 text-black text-sm md:text-base py-2 md:py-3"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-2" />
                  Show Less Details
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Show More Details
                </>
              )}
            </Button>

            {isExpanded && (
              <div className="space-y-4 mb-4 p-3 md:p-4 bg-neutral-50 rounded-lg">
                <h4 className="font-semibold text-black text-sm md:text-base">Detailed Services:</h4>
                {detailedServices.map((service, index) => (
                  <div key={index} className="border-l-4 border-neutral-300 pl-3 md:pl-4">
                    <h5 className="font-medium text-black mb-1 text-sm md:text-base">{service.name}</h5>
                    <p className="text-xs md:text-sm text-slate-blue-700 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <Button
          asChild
          className="w-full bg-brand-charcoal-700 text-white border border-black mt-auto text-sm md:text-base py-2 md:py-3"
        >
          <Link href={`/schedule?service=${encodeURIComponent(serviceType)}`}>Book {title}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function ServicesPage() {
  const notaryServices = [
    "General document notarization",
    "Mobile notary services covering all 67 Florida counties",
    "Witnesses for document signing",
    "Extended hours notary services (with convenience fee)",
    "LegalZoom document notarization",
    "Apostille document authentication for international use",
  ]

  const notaryDetailed = [
    {
      name: "General Document Notarization",
      description:
        "Professional notarization of legal documents, contracts, affidavits, and personal papers with proper identification verification and record keeping.",
    },
    {
      name: "Mobile Notary Services",
      description:
        "Convenient on-site notarization at your location throughout all 67 Florida counties, including homes, offices, hospitals, and assisted living facilities.",
    },
    {
      name: "Witness Services",
      description:
        "Providing qualified witnesses for document signing when required by law, ensuring all legal requirements are met for document validity.",
    },
    {
      name: "Extended Hours Service",
      description:
        "After-hours and weekend notarization services available for urgent needs, with additional convenience fees applied.",
    },
    {
      name: "Apostille Services",
      description:
        "Complete apostille processing for international document authentication through the US State Department.",
    },
  ]

  const realEstateServices = [
    "Real estate document notarization and preparation",
    "Seller documents",
    "New home purchase documents",
    "Loan signing agent services (NNA and LSS Certified)",
  ]

  const realEstateDetailed = [
    {
      name: "Purchase Agreements",
      description:
        "Complete notarization of home purchase contracts, ensuring all parties are properly identified and documents are executed correctly.",
    },
    {
      name: "Refinancing Documents",
      description:
        "Professional handling of mortgage refinancing paperwork, including loan modifications and rate adjustments.",
    },
    {
      name: "Seller Document Packages",
      description:
        "Comprehensive notarization of all seller-required documents including deeds, disclosures, and transfer documents.",
    },
    {
      name: "Closing Services",
      description: "Full-service loan signing agent capabilities for real estate closings, certified by NNA and LSS.",
    },
  ]

  const estatePlanningServices = [
    "Last Will and Testament",
    "Living Will/Advance Healthcare Directive",
    "Durable Power of Attorney",
    "Full estate planning packages",
    "Testamentos, Directivas, Carta de Poder (Spanish services)",
  ]

  const estatePlanningDetailed = [
    {
      name: "Last Will and Testament",
      description:
        "Comprehensive will preparation and notarization, ensuring your final wishes are legally documented and properly executed.",
    },
    {
      name: "Healthcare Directives",
      description:
        "Living wills and advance healthcare directives to ensure your medical preferences are honored when you cannot speak for yourself.",
    },
    {
      name: "Power of Attorney Documents",
      description:
        "Durable and limited power of attorney documents for financial, legal, and healthcare decision-making authority.",
    },
    {
      name: "Bilingual Estate Services",
      description:
        "Complete estate planning services available in Spanish, including Testamentos, Directivas, and Carta de Poder.",
    },
  ]

  const apostilleServices = [
    "US State Department apostille processing",
    "International document authentication",
    "Document shipping to over 200 countries",
    "Expedited processing available",
  ]

  const apostilleDetailed = [
    {
      name: "Birth Certificate Apostilles",
      description:
        "Authentication of birth certificates for international use, including dual citizenship applications and overseas employment.",
    },
    {
      name: "Marriage License Apostilles",
      description:
        "Apostille services for marriage certificates needed for international recognition, immigration, and legal proceedings abroad.",
    },
    {
      name: "Educational Document Apostilles",
      description:
        "Authentication of diplomas, transcripts, and educational certificates for international study or employment opportunities.",
    },
    {
      name: "Business Document Apostilles",
      description:
        "Corporate document authentication for international business transactions, including articles of incorporation and business licenses.",
    },
  ]

  const vehicleServices = [
    "VIN verification",
    "Odometer verification",
    "Out-of-state vehicle registration assistance",
    "Trailer, RV, and motorcycle documentation",
  ]

  const vehicleDetailed = [
    {
      name: "VIN Verification Services",
      description:
        "Official vehicle identification number verification for title transfers, registration, and insurance purposes.",
    },
    {
      name: "Odometer Certification",
      description: "Legal odometer reading verification and certification for vehicle sales and transfers.",
    },
    {
      name: "Registration Assistance",
      description:
        "Complete assistance with out-of-state vehicle registration, including all required documentation and verification.",
    },
  ]

  const businessServices = [
    "I-9 Form verification (Employment Eligibility Verification)",
    "Authorized representative services for remote employee verification",
  ]

  const businessDetailed = [
    {
      name: "I-9 Employment Verification",
      description:
        "Complete I-9 form verification services for employers, ensuring compliance with federal employment eligibility requirements.",
    },
    {
      name: "Remote Employee Verification",
      description:
        "Authorized representative services for companies with remote employees, providing secure identity and document verification.",
    },
  ]

  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services%20banner.jpg-epBW9I30cqghyHv2MxcIPYmEgnkSXZ.jpeg"
          alt="Professional notary services - pen and document signing"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-brand-charcoal-700/90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-2xl font-bold tracking-tighter font-heading text-white sm:text-3xl md:text-4xl lg:text-5xl mb-4 drop-shadow-lg">
            Our Notary Services
          </h1>
          <p className="text-white text-sm md:text-lg lg:text-xl max-w-[600px] mx-auto drop-shadow-md px-4">
            We provide comprehensive notary and related services throughout Florida.
          </p>
        </div>
      </div>

      <div className="container px-4 py-8 md:py-12 lg:py-16">
        <Tabs defaultValue="all" className="max-w-6xl mx-auto mb-8 md:mb-12">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-7 mb-6 md:mb-8 text-xs md:text-sm overflow-x-auto">
            <TabsTrigger value="all" className="text-xs md:text-sm px-1 md:px-4 whitespace-nowrap">
              All
            </TabsTrigger>
            <TabsTrigger value="notary" className="text-xs md:text-sm px-1 md:px-4 whitespace-nowrap">
              Notary
            </TabsTrigger>
            <TabsTrigger value="real-estate" className="text-xs md:text-sm px-1 md:px-4 whitespace-nowrap">
              Real Estate
            </TabsTrigger>
            <TabsTrigger value="estate-planning" className="text-xs md:text-sm px-1 md:px-4 whitespace-nowrap">
              Estate Planning
            </TabsTrigger>
            <TabsTrigger value="vehicle" className="text-xs md:text-sm px-1 md:px-4 whitespace-nowrap md:block hidden">
              Vehicle
            </TabsTrigger>
            <TabsTrigger value="business" className="text-xs md:text-sm px-1 md:px-4 whitespace-nowrap md:block hidden">
              Business
            </TabsTrigger>
            <TabsTrigger
              value="apostille"
              className="text-xs md:text-sm px-1 md:px-4 whitespace-nowrap md:block hidden"
            >
              Apostille
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Document Services"
                description="Professional notarization and apostille services"
                services={notaryServices}
                detailedServices={notaryDetailed}
                serviceType="notary"
              />

              <ServiceCard
                title="Real Estate Services"
                description="Expert notarization for real estate transactions"
                services={realEstateServices}
                detailedServices={realEstateDetailed}
                serviceType="real-estate"
              />

              <ServiceCard
                title="Estate Planning"
                description="Secure your legacy with proper documentation"
                services={estatePlanningServices}
                detailedServices={estatePlanningDetailed}
                serviceType="estate-planning"
              />

              <ServiceCard
                title="Apostille Services"
                description="International document authentication through US State Department"
                services={apostilleServices}
                detailedServices={apostilleDetailed}
                pricing="$250 per document"
                serviceType="apostille"
              />

              <ServiceCard
                title="Vehicle Documentation"
                description="Vehicle-related verification and documentation"
                services={vehicleServices}
                detailedServices={vehicleDetailed}
                serviceType="vehicle"
              />

              <ServiceCard
                title="Business & Employment"
                description="Services for businesses and employers"
                services={businessServices}
                detailedServices={businessDetailed}
                serviceType="business"
              />
            </div>
          </TabsContent>

          <TabsContent value="notary">
            <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Document Services"
                description="Professional notarization and apostille services"
                services={notaryServices}
                detailedServices={notaryDetailed}
                serviceType="notary"
              />
            </div>
          </TabsContent>

          <TabsContent value="real-estate">
            <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Real Estate Services"
                description="Expert notarization for real estate transactions"
                services={realEstateServices}
                detailedServices={realEstateDetailed}
                serviceType="real-estate"
              />
            </div>
          </TabsContent>

          <TabsContent value="estate-planning">
            <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Estate Planning"
                description="Secure your legacy with proper documentation"
                services={estatePlanningServices}
                detailedServices={estatePlanningDetailed}
                serviceType="estate-planning"
              />
            </div>
          </TabsContent>

          <TabsContent value="vehicle">
            <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Vehicle Documentation"
                description="Vehicle-related verification and documentation"
                services={vehicleServices}
                detailedServices={vehicleDetailed}
                serviceType="vehicle"
              />
            </div>
          </TabsContent>

          <TabsContent value="business">
            <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Business & Employment"
                description="Services for businesses and employers"
                services={businessServices}
                detailedServices={businessDetailed}
                serviceType="business"
              />
            </div>
          </TabsContent>

          <TabsContent value="apostille">
            <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Apostille Services"
                description="International document authentication through US State Department"
                services={apostilleServices}
                detailedServices={apostilleDetailed}
                pricing="$250 per document"
                serviceType="apostille"
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Service Categories Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-100 rounded-lg p-4 md:p-6 lg:p-8 mb-8 md:mb-12">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold font-heading text-black mb-4 md:mb-6 text-center">
              Our Service Categories
            </h2>
            <div className="grid gap-3 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-neutral-200">
                    <FileText className="h-4 w-4 md:h-5 md:w-5 text-black" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-xs md:text-sm lg:text-base">Document Services</h3>
                <p className="text-xs text-neutral-600 mt-1 hidden md:block">
                  Professional notarization and apostille services
                </p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-neutral-200">
                    <Home className="h-4 w-4 md:h-5 md:w-5 text-black" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-xs md:text-sm lg:text-base">Real Estate</h3>
                <p className="text-xs text-neutral-600 mt-1 hidden md:block">
                  Expert notarization for real estate transactions
                </p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-neutral-200">
                    <FileText className="h-4 w-4 md:h-5 md:w-5 text-black" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-xs md:text-sm lg:text-base">Estate Planning</h3>
                <p className="text-xs text-neutral-600 mt-1 hidden md:block">
                  Secure your legacy with proper documentation
                </p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-neutral-200">
                    <Globe className="h-4 w-4 md:h-5 md:w-5 text-black" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-xs md:text-sm lg:text-base">Apostille Services</h3>
                <p className="text-xs text-neutral-600 mt-1 hidden md:block">International document authentication</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-neutral-200">
                    <Car className="h-4 w-4 md:h-5 md:w-5 text-black" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-xs md:text-sm lg:text-base">Vehicle Documentation</h3>
                <p className="text-xs text-neutral-600 mt-1 hidden md:block">
                  Vehicle-related verification and documentation
                </p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-neutral-200">
                    <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-black" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-xs md:text-sm lg:text-base">Business Services</h3>
                <p className="text-xs text-neutral-600 mt-1 hidden md:block">Services for businesses and employers</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-neutral-200">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-black" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-xs md:text-sm lg:text-base">Bilingual Services</h3>
                <p className="text-xs text-neutral-600 mt-1 hidden md:block">Services in English and Spanish</p>
              </div>

              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-neutral-200">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-black" />
                  </div>
                </div>
                <h3 className="font-medium font-heading text-xs md:text-sm lg:text-base">Wedding Officiant</h3>
                <p className="text-xs text-neutral-600 mt-1 hidden md:block">Elegant wedding ceremony services</p>
              </div>
            </div>
          </div>

          {/* Service Details Section */}
          <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-3 mb-8 md:mb-12">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-neutral-200">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-black" />
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Availability</h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">
                We offer flexible scheduling to accommodate your needs:
              </p>
              <ul className="text-xs md:text-sm text-neutral-600 space-y-1">
                <li>• Monday - Friday: 9AM - 7PM</li>
                <li>• Saturday: 10AM - 5PM</li>
                <li>• Sunday: By appointment</li>
                <li>• Extended hours available (fee applies)</li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-neutral-200">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-black" />
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Service Area</h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">We provide mobile notary services throughout:</p>
              <ul className="text-xs md:text-sm text-neutral-600 space-y-1">
                <li>• All 67 Florida counties</li>
                <li>• Tampa Bay area</li>
                <li>• St. Petersburg</li>
                <li>• Clearwater and surrounding areas</li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-neutral-200">
                  <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-black" />
                </div>
                <h3 className="font-medium font-heading text-sm md:text-base">Pricing</h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">Our competitive pricing structure:</p>
              <ul className="text-xs md:text-sm text-neutral-600 space-y-1">
                <li>• Standard notarization: $10/signature</li>
                <li>• Travel fees vary by location</li>
                <li>• Apostille services: $250 per document</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold font-heading text-black mb-4">
              Ready to Schedule a Notary Service?
            </h2>
            <p className="text-neutral-600 max-w-[600px] mx-auto mb-6 text-sm md:text-base px-4">
              Book an appointment today and experience our professional, convenient mobile notary services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button asChild size="lg" className="bg-brand-charcoal-700 text-white border border-black">
                <Link href="/schedule">Book an Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-neutral-300 text-black">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 md:mt-16 text-center space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tighter font-heading text-black">
            Service Areas
          </h2>
          <p className="text-neutral-600 text-sm md:text-base lg:text-lg max-w-[600px] mx-auto px-4">
            We provide mobile notary services throughout all 67 Florida counties, including:
          </p>
          <div className="grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-4xl mx-auto mt-6 px-4">
            <div className="bg-neutral-100 p-2 md:p-3 rounded-md text-xs md:text-sm">Tampa</div>
            <div className="bg-neutral-100 p-2 md:p-3 rounded-md text-xs md:text-sm">St. Petersburg</div>
            <div className="bg-neutral-100 p-2 md:p-3 rounded-md text-xs md:text-sm">Clearwater</div>
            <div className="bg-neutral-100 p-2 md:p-3 rounded-md text-xs md:text-sm">Largo</div>
            <div className="bg-neutral-100 p-2 md:p-3 rounded-md text-xs md:text-sm">Pinellas Park</div>
            <div className="bg-neutral-100 p-2 md:p-3 rounded-md text-xs md:text-sm">Seminole</div>
            <div className="bg-neutral-100 p-2 md:p-3 rounded-md text-xs md:text-sm">Palm Harbor</div>
            <div className="bg-neutral-100 p-2 md:p-3 rounded-md text-xs md:text-sm">Wesley Chapel</div>
          </div>
        </div>
      </div>
    </>
  )
}
