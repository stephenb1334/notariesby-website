import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Review {
  name: string
  text: string
}

export function GoogleReviews() {
  const reviews: Review[] = [
    {
      name: "Pat",
      text: "We are very pleased with the very timely and excellent service we received. Jill is very knowledgeable and was able to advise us as to exactly what we needed to do to execute our Estate Trust Documents. Everything was done perfectly. We will use her company again and highly recommend her.",
    },
    {
      name: "John Roman",
      text: "Super helpful, professional, and knowledgeable notary. Came to our home, made us feel very comfortable to complete one of the most important transactions of our lives. She spent a lot of time and extra hours with us to help understand every document.",
    },
    {
      name: "Barbara Domingues",
      text: "Professional and fast service. I felt very comfortable having Jill help me.",
    },
    {
      name: "Paul D",
      text: "They were on time and very professional. Would use again.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-sand">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1">
            <Star className="h-6 w-6 fill-sunrise-gold text-sunrise-gold" />
            <Star className="h-6 w-6 fill-sunrise-gold text-sunrise-gold" />
            <Star className="h-6 w-6 fill-sunrise-gold text-sunrise-gold" />
            <Star className="h-6 w-6 fill-sunrise-gold text-sunrise-gold" />
            <Star className="h-6 w-6 fill-sunrise-gold text-sunrise-gold" />
            <span className="ml-2 text-lg font-medium">5.0 from 4 Google Reviews</span>
          </div>
          <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our notary services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-coastal-blue/10 flex items-center justify-center">
                    <span className="font-bold text-coastal-blue">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex mt-1">
                      <Star className="h-4 w-4 fill-sunrise-gold text-sunrise-gold" />
                      <Star className="h-4 w-4 fill-sunrise-gold text-sunrise-gold" />
                      <Star className="h-4 w-4 fill-sunrise-gold text-sunrise-gold" />
                      <Star className="h-4 w-4 fill-sunrise-gold text-sunrise-gold" />
                      <Star className="h-4 w-4 fill-sunrise-gold text-sunrise-gold" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=West+Coast+Notaries+LLC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-coastal-blue hover:text-coastal-light"
          >
            <span className="underline">See all reviews on Google</span>
            <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
