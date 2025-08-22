import { Check, Globe, FileText, Clock, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ApostilleServices() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src="/images/lady-justice-teal.jpeg" alt="Lady Justice" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-blue-600/20"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter text-black md:text-4xl">Florida Apostille Services</h1>
          <p className="text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Efficient, Professional Authentication for International Documents
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start mb-12">
          <div>
            <Card className="border-2 border-slate-200 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Globe className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl text-blue-800">Professional Apostille Services</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <DollarSign className="h-4 w-4 text-slate-500" />
                      <span className="text-lg font-semibold text-slate-700">$250 per Apostille document</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6">
                  NotariesBy provides streamlined Apostille services across Tampa Bay, working directly with the US
                  Department of State and appropriate governmental agencies to facilitate the authentication of
                  essential documents.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-blue-800 mb-3">Documents We Authenticate:</h3>
                  <p className="text-slate-700 mb-4">
                    Common State issued documents include Birth Certificates, Death Certificates, Marriage Certificates,
                    Divorce Certificates, Translations, State background Checks, plus more.
                  </p>
                  <p className="text-slate-700 mb-4">
                    We offer the apostille service to help expedite and simplify the process for individuals that
                    require a Florida Apostille.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Birth certificates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Marriage licenses and divorce decrees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Powers of attorney</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">State background checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Document translations</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/book?service=apostille">Book Apostille Service</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-slate-200 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <h3 className="font-heading text-lg text-blue-800 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  What is an Apostille?
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  An Apostille certifies documents for acceptance in foreign countries under the Hague Apostille
                  Convention.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <h3 className="font-heading text-lg text-blue-800 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Key Information Needed
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Originating state or agency of the document</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Destination country for document usage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
