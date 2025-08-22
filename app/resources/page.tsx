import Link from "next/link"
import { Download, HelpCircle, Info, LinkIcon, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue sm:text-4xl md:text-5xl">
          Client Resources
        </h1>
        <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
          Helpful information and resources for our notary clients in Tampa Bay.
        </p>
      </div>

      <Tabs defaultValue="guides" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="links">Useful Links</TabsTrigger>
        </TabsList>

        <TabsContent value="guides">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Real Estate Closing Guide</CardTitle>
                <CardDescription>What to expect during your real estate closing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  This comprehensive guide walks you through the entire real estate closing process, from document
                  preparation to final signatures.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-coastal-blue hover:bg-coastal-light">
                  <Download className="mr-2 h-4 w-4" /> Download Guide
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Loan Signing Checklist</CardTitle>
                <CardDescription>Essential preparation for your loan signing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  Ensure your loan signing goes smoothly with our detailed checklist covering all required documents and
                  identification.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-coastal-blue hover:bg-coastal-light">
                  <Download className="mr-2 h-4 w-4" /> Download Checklist
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Power of Attorney Guide</CardTitle>
                <CardDescription>Understanding power of attorney documents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  Learn about the different types of power of attorney documents, their uses, and requirements for
                  proper notarization.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-coastal-blue hover:bg-coastal-light">
                  <Download className="mr-2 h-4 w-4" /> Download Guide
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Estate Planning Documents</CardTitle>
                <CardDescription>Guide to essential estate planning paperwork</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  An overview of important estate planning documents including wills, living trusts, and healthcare
                  directives.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-coastal-blue hover:bg-coastal-light">
                  <Download className="mr-2 h-4 w-4" /> Download Guide
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forms">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Notary Request Form</CardTitle>
                <CardDescription>Printable form to request notary services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  Use this form to provide all necessary details for your notary service request if you prefer not to
                  book online.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-coastal-blue hover:bg-coastal-light">
                  <Download className="mr-2 h-4 w-4" /> Download Form
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Document Checklist</CardTitle>
                <CardDescription>Prepare for your appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  A comprehensive checklist of documents and identification needed for different types of notarizations.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-coastal-blue hover:bg-coastal-light">
                  <Download className="mr-2 h-4 w-4" /> Download Checklist
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Witness Information Form</CardTitle>
                <CardDescription>For documents requiring witnesses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  Use this form to collect information from witnesses for documents that require witness signatures.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-coastal-blue hover:bg-coastal-light">
                  <Download className="mr-2 h-4 w-4" /> Download Form
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Service Feedback Form</CardTitle>
                <CardDescription>Help us improve our services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  We value your feedback! Use this form to let us know about your experience with our notary services.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-coastal-blue hover:bg-coastal-light">
                  <Download className="mr-2 h-4 w-4" /> Download Form
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about our notary services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium font-heading text-coastal-blue">What is a notary public?</h3>
                <p className="text-charcoal">
                  A notary public is a state-appointed official who serves as an impartial witness to the signing of
                  important documents. Notaries verify the identity of signers, confirm they're signing willingly, and
                  administer oaths when required.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium font-heading text-coastal-blue">
                  What identification do I need for notarization?
                </h3>
                <p className="text-charcoal">
                  Florida law requires current, valid, government-issued photo identification. Acceptable forms include
                  driver's licenses, state ID cards, passports, and military IDs. The ID must be unexpired and contain a
                  photograph, physical description, signature, and serial number.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium font-heading text-coastal-blue">How much do your services cost?</h3>
                <p className="text-charcoal">
                  Our fees vary depending on the type of service, number of documents, and location. Standard
                  notarizations start at $10 per signature, while loan signing packages start at $125. Travel fees may
                  apply depending on your location. Please contact us for a specific quote based on your needs.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium font-heading text-coastal-blue">
                  Do I need to schedule an appointment?
                </h3>
                <p className="text-charcoal">
                  Yes, we operate by appointment to ensure we can provide dedicated service at a time convenient for
                  you. We offer flexible scheduling, including evenings and weekends, and can often accommodate same-day
                  appointments for urgent needs.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium font-heading text-coastal-blue">What areas do you serve?</h3>
                <p className="text-charcoal">
                  We provide mobile notary services throughout the Tampa Bay area, including Tampa, St. Petersburg,
                  Clearwater, Brandon, Palm Harbor, Wesley Chapel, and surrounding communities. If you're unsure if we
                  serve your area, please contact us.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium font-heading text-coastal-blue">
                  Can you notarize documents from other states?
                </h3>
                <p className="text-charcoal">
                  Yes, as a Florida notary public, we can notarize documents from any state or country as long as the
                  signing takes place in Florida and all other requirements for notarization are met.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium font-heading text-coastal-blue">
                  Do you provide witnesses if needed?
                </h3>
                <p className="text-charcoal">
                  Yes, we can provide witnesses for documents that require them, such as wills or real estate
                  transactions. Please let us know in advance if witnesses will be needed so we can make appropriate
                  arrangements.
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-charcoal mb-4">Don't see your question answered here?</p>
                <Button asChild className="bg-coastal-blue hover:bg-coastal-light">
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" /> Contact Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="links">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Florida Notary Resources</CardTitle>
                <CardDescription>Official state resources for notaries and clients</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Florida Department of State - Notary Section</h4>
                    <p className="text-sm text-charcoal">
                      Official information about Florida notary laws and regulations
                    </p>
                    <a
                      href="https://dos.fl.gov/notary/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Florida Notary Laws</h4>
                    <p className="text-sm text-charcoal">Complete text of Florida's notary public laws</p>
                    <a
                      href="https://www.flsenate.gov/Laws/Statutes/2021/Chapter117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Florida Notary Education</h4>
                    <p className="text-sm text-charcoal">Educational resources for notaries and the public</p>
                    <a
                      href="https://www.flnotary.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Real Estate Resources</CardTitle>
                <CardDescription>Helpful links for real estate transactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Consumer Financial Protection Bureau</h4>
                    <p className="text-sm text-charcoal">Information about mortgages and closing processes</p>
                    <a
                      href="https://www.consumerfinance.gov/owning-a-home/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Pinellas County Property Appraiser</h4>
                    <p className="text-sm text-charcoal">Property information and records</p>
                    <a
                      href="https://www.pcpao.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Hillsborough County Property Appraiser</h4>
                    <p className="text-sm text-charcoal">Property information and records</p>
                    <a
                      href="https://www.hcpafl.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Estate Planning Resources</CardTitle>
                <CardDescription>Information about wills, trusts, and estate planning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Florida Bar - Estate Planning</h4>
                    <p className="text-sm text-charcoal">Information about estate planning in Florida</p>
                    <a
                      href="https://www.floridabar.org/public/consumer/pamphlet026/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Florida Health Care Directive Registry</h4>
                    <p className="text-sm text-charcoal">Register your advance directives</p>
                    <a
                      href="https://www.flhealthsource.gov/advance-directive/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">AARP Estate Planning Resources</h4>
                    <p className="text-sm text-charcoal">Guides and information about estate planning</p>
                    <a
                      href="https://www.aarp.org/money/investing/info-2022/complete-guide-to-estate-planning.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Business Resources</CardTitle>
                <CardDescription>Resources for business documents and notarization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Florida Division of Corporations</h4>
                    <p className="text-sm text-charcoal">Business registration and filing information</p>
                    <a
                      href="https://dos.myflorida.com/sunbiz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Small Business Administration</h4>
                    <p className="text-sm text-charcoal">Resources for small business owners</p>
                    <a
                      href="https://www.sba.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LinkIcon className="h-5 w-5 text-coastal-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Tampa Bay Chamber of Commerce</h4>
                    <p className="text-sm text-charcoal">Local business resources and networking</p>
                    <a
                      href="https://www.tampabaychamber.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coastal-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold font-heading text-coastal-blue mb-4">Need Additional Resources?</h2>
        <p className="text-charcoal max-w-[700px] mx-auto mb-6">
          Our team is here to help with any questions or specific resources you might need for your notary services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-coastal-blue hover:bg-coastal-light">
            <Link href="/contact">
              <HelpCircle className="mr-2 h-4 w-4" /> Ask a Question
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-coastal-blue text-coastal-blue hover:bg-coastal-blue/5">
            <Link href="/schedule">
              <Info className="mr-2 h-4 w-4" /> Request Information
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
