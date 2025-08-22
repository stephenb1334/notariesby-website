import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, service, location, notes, referralSource } = body

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !service || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // For testing purposes, we'll just log the appointment details
    const appointmentDetails = {
      clientInfo: {
        name,
        email,
        phone
      },
      appointmentDetails: {
        service,
        date: new Date(date).toLocaleDateString(),
        time,
        location,
        referralSource: referralSource || 'Not specified'
      },
      notes: notes || 'No additional notes',
      submittedAt: new Date().toISOString()
    }

    console.log('📧 NEW APPOINTMENT REQUEST:')
    console.log('==========================================')
    console.log(`👤 Client: ${name}`)
    console.log(`📧 Email: ${email}`)
    console.log(`📞 Phone: ${phone}`)
    console.log(`🏢 Service: ${service}`)
    console.log(`📅 Date: ${new Date(date).toLocaleDateString()}`)
    console.log(`🕒 Time: ${time}`)
    console.log(`📍 Location: ${location}`)
    console.log(`🔗 Referral: ${referralSource || 'Not specified'}`)
    console.log(`📝 Notes: ${notes || 'No additional notes'}`)
    console.log('==========================================')

    // Simulate email sending to stephen.boerner@gmail.com
    console.log(`📤 EMAIL WOULD BE SENT TO: stephen.boerner@gmail.com`)
    console.log(`📤 CONFIRMATION EMAIL WOULD BE SENT TO: ${email}`)

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Appointment request submitted successfully! We will contact you shortly to confirm the details.',
        appointmentId: `APPT-${Date.now()}`,
        data: appointmentDetails
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Error processing appointment request:', error)
    return NextResponse.json(
      { error: 'Failed to process appointment request. Please try again or contact us directly at 727 710 5455.' },
      { status: 500 }
    )
  }
}