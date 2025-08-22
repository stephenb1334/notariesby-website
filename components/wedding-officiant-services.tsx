import { Heart, MapPin, FileText, Users } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WeddingOfficiantServices() {
  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
            Elegant Wedding Officiant Services
          </h1>
          <p className="text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Serving Tampa Bay and Surrounding Areas
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div>
            <div className="space-y-6">
              <Card className="border-2 border-slate-700 bg-slate-900">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-blue-900/50">
                      <Heart className="h-6 w-6 text-blue-400" />
                    </div>
                    <h2 className="font-heading text-xl text-blue-400">Personalized Wedding Ceremonies</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-6">
                    Your wedding day is a cherished milestone deserving of a meaningful, personalized ceremony. As your
                    dedicated officiant, I expertly craft ceremonies tailored to your unique love story.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-700 bg-slate-900">
                <CardHeader>
                  <h3 className="font-heading text-lg text-blue-400 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    Legal Credentials
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 font-medium">
                    Commissioned State of Florida Notary Public fully authorized to officiate weddings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card className="border-2 border-slate-700 bg-slate-900">
              <CardHeader>
                <h3 className="font-heading text-lg text-blue-400 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  Wedding Services Include
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Traditional wedding ceremonies",
                    "Intimate elopements",
                    "Non-denominational ceremonies",
                    "Personalized vow writing assistance",
                    "Marriage license guidance",
                    "Ceremony rehearsal coordination",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Heart className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="font-medium text-blue-400">Service Area</span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Tampa Bay, Pasco County, Hillsborough County, and surrounding areas throughout Florida
                  </p>
                </div>

                <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/book?service=wedding-officiant">Schedule Wedding Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
