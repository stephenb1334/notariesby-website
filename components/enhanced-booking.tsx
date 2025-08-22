"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, Clock, CheckCircle, Home, FileText, Briefcase } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  time: z.string({
    required_error: "Please select a time.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  location: z.string().min(5, {
    message: "Please enter your address.",
  }),
  notes: z.string().optional(),
  referralSource: z.string().optional(),
})

export function EnhancedBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      notes: "",
      referralSource: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast({
          title: "Appointment Requested",
          description: result.message || "We'll contact you shortly to confirm your appointment.",
        })
      } else {
        throw new Error(result.error || 'Failed to submit appointment request')
      }
    } catch (error) {
      console.error('Error submitting appointment:', error)
      toast({
        title: "Error",
        description: "Failed to submit appointment request. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ]

  const handleServiceChange = (value: string) => {
    setSelectedService(value)
    form.setValue("service", value)
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto text-center py-12"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center"
          >
            <CheckCircle className="h-12 w-12 text-green-600" />
          </motion.div>
        </div>
        <h1 className="text-2xl font-bold tracking-tighter font-heading text-coastal-blue sm:text-3xl mb-4">
          Appointment Request Received!
        </h1>
        <p className="text-charcoal mb-6">
          Thank you for scheduling with West Coast Notaries. We'll contact you shortly to confirm your appointment
          details.
        </p>
        <Button onClick={() => setIsSuccess(false)} className="bg-coastal-blue hover:bg-coastal-light">
          Schedule Another Appointment
        </Button>
      </motion.div>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter font-heading text-coastal-blue md:text-4xl">
            Schedule an Appointment
          </h2>
          <p className="text-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
            Book a convenient time for our mobile notary to meet you in Florida.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="appointment" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="appointment">Book Appointment</TabsTrigger>
              <TabsTrigger value="info">Appointment Information</TabsTrigger>
            </TabsList>

            <TabsContent value="appointment">
              <Card className="border-2 border-coastal-blue/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading">Request an Appointment</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll contact you to confirm your appointment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Select Service Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedService === "loan-signing"
                            ? "border-coastal-blue bg-coastal-blue/5"
                            : "border-gray-200 hover:border-coastal-blue/30"
                        }`}
                        onClick={() => handleServiceChange("loan-signing")}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="p-3 rounded-full bg-coastal-blue/10 mb-3">
                            <Home className="h-6 w-6 text-coastal-blue" />
                          </div>
                          <h4 className="font-medium">Loan Document Signing</h4>
                          <p className="text-xs text-gray-500 mt-1">Mortgage refinances, purchases</p>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedService === "estate-planning"
                            ? "border-coastal-blue bg-coastal-blue/5"
                            : "border-gray-200 hover:border-coastal-blue/30"
                        }`}
                        onClick={() => handleServiceChange("estate-planning")}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="p-3 rounded-full bg-coastal-blue/10 mb-3">
                            <FileText className="h-6 w-6 text-coastal-blue" />
                          </div>
                          <h4 className="font-medium">Estate Planning</h4>
                          <p className="text-xs text-gray-500 mt-1">POA, Living Wills, Directives</p>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedService === "general-notary"
                            ? "border-coastal-blue bg-coastal-blue/5"
                            : "border-gray-200 hover:border-coastal-blue/30"
                        }`}
                        onClick={() => handleServiceChange("general-notary")}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="p-3 rounded-full bg-coastal-blue/10 mb-3">
                            <Briefcase className="h-6 w-6 text-coastal-blue" />
                          </div>
                          <h4 className="font-medium">General Notary Work</h4>
                          <p className="text-xs text-gray-500 mt-1">Affidavits, Deeds, etc.</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="727 710 5455" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem className="hidden">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value ? "text-muted-foreground" : "",
                                      )}
                                    >
                                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date()}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a time" />
                                    <Clock className="h-4 w-4 opacity-50" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St, Tampa, FL 33602" {...field} />
                            </FormControl>
                            <FormDescription>Where would you like our notary to meet you?</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="referralSource"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How did you hear about us?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="google">Google Search</SelectItem>
                                <SelectItem value="referral">Referral</SelectItem>
                                <SelectItem value="social">Social Media</SelectItem>
                                <SelectItem value="title-company">Title Company</SelectItem>
                                <SelectItem value="joint-venture">Joint Venture Partner</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide any additional details about your notary needs."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          className="w-full bg-coastal-blue hover:bg-coastal-light"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                              <span>Submitting...</span>
                            </div>
                          ) : (
                            "Request Appointment"
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="info">
              <Card className="border-2 border-coastal-blue/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading">Appointment Information</CardTitle>
                  <CardDescription>
                    Important details about our notary services and appointment process.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium font-heading text-coastal-blue mb-2">What to Expect</h3>
                    <p className="text-charcoal">
                      After submitting your appointment request, we'll contact you within 2 hours during business hours
                      to confirm your appointment. Our mobile notary will arrive at your specified location at the
                      scheduled time with all necessary supplies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium font-heading text-coastal-blue mb-2">Required Documents</h3>
                    <p className="text-charcoal mb-2">Please have the following ready for your appointment:</p>
                    <ul className="list-disc pl-5 space-y-1 text-charcoal">
                      <li>Valid government-issued photo ID (driver's license, passport, etc.)</li>
                      <li>All documents requiring notarization</li>
                      <li>Any supporting documentation mentioned by your lender or attorney</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium font-heading text-coastal-blue mb-2">Military Discount</h3>
                    <p className="text-charcoal">
                      We proudly offer a 10% discount on all our services for active duty military personnel and
                      veterans. Please mention your service when booking your appointment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium font-heading text-coastal-blue mb-2">Cancellation Policy</h3>
                    <p className="text-charcoal">
                      We understand that plans change. Please provide at least 2 hours notice for cancellations or
                      rescheduling to avoid a $25 cancellation fee.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
