import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ClientHub() {
  return (
    <section className="py-12 md:py-16 bg-sand">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue md:text-4xl">
            Client Support Center
          </h2>
          <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Everything you need to know about our services and how we can assist you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Contact Information</CardTitle>
                <CardDescription>Reach out to us with any questions or to schedule an appointment.</CardDescription>
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
                  <Button asChild size="lg" className="w-full bg-coastal-blue hover:bg-coastal-light">
                    <Link href="/schedule">Schedule an Appointment</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-heading">Service Area</CardTitle>
                <CardDescription>We provide mobile notary services throughout the Tampa Bay area.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <img
                    src="https://kagi.com/proxy/1920x1080.jpg?c=dvsHBTu7WpagfxSkLuYhxWFfD3XANdsB0CFy5CttIYczwDEqulZMECObtzWt8aVyUSslQyLFxW3gLA03HDnGM1CDfmkwzalviH7GQxWIpvlZppigUrKk_YvCCUFHcO4Y"
                    alt="Tampa Bay service area map"
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="p-2 bg-coastal-blue/5 rounded text-center">Tampa</div>
                  <div className="p-2 bg-coastal-blue/5 rounded text-center">St. Petersburg</div>
                  <div className="p-2 bg-coastal-blue/5 rounded text-center">Clearwater</div>
                  <div className="p-2 bg-coastal-blue/5 rounded text-center">Brandon</div>
                  <div className="p-2 bg-coastal-blue/5 rounded text-center">Palm Harbor</div>
                  <div className="p-2 bg-coastal-blue/5 rounded text-center">Wesley Chapel</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions about our notary services.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium font-heading text-coastal-blue">What is a notary public?</h3>
                  <p className="text-charcoal">
                    A notary public is a state-appointed official who serves as an impartial witness to the signing of
                    important documents, verifying the identity of signers and ensuring they're signing willingly.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium font-heading text-coastal-blue">What ID do I need for notarization?</h3>
                  <p className="text-charcoal">
                    Florida law requires current, valid, government-issued photo ID such as a driver's license,
                    passport, or state ID card for notarization.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium font-heading text-coastal-blue">How much do your services cost?</h3>
                  <p className="text-charcoal">
                    Our fees vary depending on the type of service, number of documents, and location. Please contact us
                    for a quote based on your specific needs.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium font-heading text-coastal-blue">
                    How quickly can you schedule an appointment?
                  </h3>
                  <p className="text-charcoal">
                    We can often accommodate same-day or next-day appointments. For urgent needs, please call us
                    directly.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium font-heading text-coastal-blue">Do you offer weekend appointments?</h3>
                  <p className="text-charcoal">
                    Yes, we offer Saturday appointments and Sunday appointments by special arrangement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
