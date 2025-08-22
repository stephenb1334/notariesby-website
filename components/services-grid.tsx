import { Briefcase, FileText, Home } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesGrid() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-sand">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue md:text-4xl">
            Our Core Services
          </h2>
          <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Professional notary solutions for all your needs in the Greater Tampa Bay area.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-t-4 border-t-coastal-blue">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-full bg-coastal-blue/10 flex items-center justify-center">
                <Home className="h-6 w-6 text-coastal-blue" />
              </div>
              <CardTitle className="font-heading">Mobile Notary Services</CardTitle>
              <CardDescription>Convenient notary services that come to you</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Available throughout Greater Tampa Bay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Convenient on-site service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Professional, punctual service</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-coastal-light">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-full bg-coastal-light/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-coastal-light" />
              </div>
              <CardTitle className="font-heading">Professional Notary Solutions</CardTitle>
              <CardDescription>Comprehensive notary services for all documents</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Loan Document Signing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Real Estate Closings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>General Notarization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Marriage Services</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-sunrise-gold">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-full bg-sunrise-gold/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-sunrise-gold" />
              </div>
              <CardTitle className="font-heading">Estate Planning Services</CardTitle>
              <CardDescription>Secure your legacy with proper documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Last Will and Testament</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Living Will</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Power of Attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunrise-gold font-bold">•</span>
                  <span>Healthcare Directives</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
