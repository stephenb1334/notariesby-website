import { Award, CheckCircle, Clock, Shield } from "lucide-react"

export function CredentialsDisplay() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue md:text-4xl">
            Our Professional Credentials
          </h2>
          <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Licensed, insured, and committed to excellence in every notarization.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-coastal-blue/10">
              <Award className="h-6 w-6 text-coastal-blue" />
            </div>
            <h3 className="text-xl font-bold font-heading">State Certified</h3>
            <p className="text-charcoal">
              Licensed Florida Notary Public with all required state certifications and credentials.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-coastal-light/10">
              <Shield className="h-6 w-6 text-coastal-light" />
            </div>
            <h3 className="text-xl font-bold font-heading">Fully Insured</h3>
            <p className="text-charcoal">
              Comprehensive errors and omissions insurance coverage for your peace of mind.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-sunrise-gold/10">
              <Clock className="h-6 w-6 text-sunrise-gold" />
            </div>
            <h3 className="text-xl font-bold font-heading">15+ Years Experience</h3>
            <p className="text-charcoal">Extensive experience in real estate, loan signing, and general notary work.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-coastal-blue/10">
              <CheckCircle className="h-6 w-6 text-coastal-blue" />
            </div>
            <h3 className="text-xl font-bold font-heading">Service Guarantee</h3>
            <p className="text-charcoal">
              Commitment to professionalism, punctuality, and accuracy in every transaction.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold font-heading text-coastal-blue mb-4">Official Notary Commission</h3>
            <div className="flex justify-center">
              <img
                src="https://kagi.com/proxy/notary-commission-certificate-frame-8-11.jpg?c=W6nbceBOXRuFcwEgpo100_pbhtzx1jssg7CNp4Wiq0JDIRnPY_jqsCqQc5W_0oxIbAC4lupm_6zvdWFcoP2rjSyLhRWXkY93zWKPRh6kSdveWy3N4tpCpQ5czhaOiJdhcTlEEczmGIrVltT3zZjjgw%3D%3D"
                alt="Florida Notary Commission Certificate"
                className="max-w-full h-auto rounded-md shadow-sm"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold font-heading text-coastal-blue mb-4">Professional Memberships</h3>
            <div className="flex justify-center">
              <img
                src="https://kagi.com/proxy/notarycredentials-1024x299-1.png?c=e4bzmU6ptF9dt7lMCO3uEsYd7Qi0rozYoNrDjH51VT_YbSMh1tTWorNwcHKS-srLq6Ky-C5gOpZGTzRApR6MF9Z1r7B3aGbbrlErw11RxpBhAhbZalCRDmeuFQfLPO92h2JTS2iViTGInIMBlv44mg%3D%3D"
                alt="Notary Professional Credentials"
                className="max-w-full h-auto rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
