import { Award, Clock, MapPin, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image" // Import Next.js Image component
import { GoogleReviews } from "@/components/google-reviews"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <>
      <div className="relative w-full h-[250px] md:h-[350px]">
        <Image
          src="/images/banner-palm-trees-2.jpg"
          alt="Scenic view of palm trees in Tampa Bay"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-3xl font-bold tracking-tighter font-heading text-white sm:text-4xl md:text-5xl drop-shadow-lg">
            About West Coast Notaries
          </h1>
          <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto mt-2 drop-shadow-md">
            Your trusted mobile notary service in Tampa Bay, Florida.
          </p>
        </div>
      </div>

      <div className="container px-4 py-12 md:py-16">
        {" "}
        {/* Removed pt-32, banner is above */}
        <div className="text-center space-y-4 mb-12">
          {/* Title moved to banner, this can be a subtitle or removed */}
          <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Professional mobile notary services for real estate transactions and more.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/office-2.jpg"
                alt="Professional notary office setting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading text-black">Our Story</h2>
            <p className="text-charcoal">
              With over 20 years of experience in real estate and notary services, we founded West Coast Notaries to
              provide convenient, professional notarization for the Tampa Bay community.
            </p>
            <p className="text-charcoal">
              As longtime residents of Florida, we understand the local real estate market and the importance of
              reliable notary services for smooth transactions. Our mission is to make the notarization process as
              convenient and stress-free as possible.
            </p>
            <p className="text-charcoal">
              We're proud to serve individuals, real estate professionals, lenders, title companies, and attorneys
              throughout Tampa Bay and surrounding areas with our mobile notary services.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* New Team Section */}
        <div className="my-20">
          <TeamSection />
        </div>
        {/* Google Reviews */}
        <div className="my-20">
          <GoogleReviews />
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center font-heading text-black mb-12">Why Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-neutral-200">
                <Clock className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold font-heading">Convenience</h3>
              <p className="text-charcoal">
                We come to your location, saving you time and hassle. Evening and weekend appointments available.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-steel-blue/10">
                <Award className="h-6 w-6 text-steel-blue" />
              </div>
              <h3 className="text-xl font-bold font-heading">Experience</h3>
              <p className="text-charcoal">
                Over 20 years of experience in real estate and notary services in the Tampa Bay area.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-slate-blue/10">
                <Shield className="h-6 w-6 text-slate-blue" />
              </div>
              <h3 className="text-xl font-bold font-heading">Reliability</h3>
              <p className="text-charcoal">
                Licensed, bonded, and insured Florida notary public with a commitment to professionalism.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-neutral-200">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold font-heading">Local Knowledge</h3>
              <p className="text-charcoal">
                Deep understanding of the Tampa Bay real estate market and local requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center font-heading text-black mb-12">Our Office</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-4 rounded-lg shadow-md aspect-video relative">
              <Image
                src="/images/office-1.jpg"
                alt="West Coast Notaries Office Interior"
                fill
                className="rounded-md shadow-sm object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md aspect-video relative">
              <Image
                src="/images/office-2.jpg"
                alt="West Coast Notaries Meeting Room"
                fill
                className="rounded-md shadow-sm object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md aspect-video relative">
              <Image
                src="/images/office-3.jpg"
                alt="West Coast Notaries Reception Area"
                fill
                className="rounded-md shadow-sm object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold font-heading text-black mb-6">Ready to Work With Us?</h2>
          <p className="text-charcoal max-w-[700px] mx-auto mb-8">
            Schedule an appointment today and experience our professional notary services in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/schedule">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
