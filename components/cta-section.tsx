import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Book your appointment today and experience our professional notary services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-medium">
              <Link href="/schedule" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-medium border-white text-white hover:bg-white/10"
            >
              <Link href="/contact" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
