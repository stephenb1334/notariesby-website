import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD, // Use App Password for Gmail
    },
  })
}

// Google Calendar setup
const getGoogleCalendar = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar'],
  })

  const calendar = google.calendar({ version: 'v3', auth })
  return calendar
}

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

    // Create email transporter
    const transporter = createTransporter()

    // Email content for the business owner
    const ownerEmailContent = `
      <h2>New Appointment Request</h2>
      <p><strong>Client Information:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      
      <p><strong>Appointment Details:</strong></p>
      <ul>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Location:</strong> ${location}</li>
        <li><strong>How they heard about us:</strong> ${referralSource || 'Not specified'}</li>
      </ul>
      
      ${notes ? `<p><strong>Additional Notes:</strong><br/>${notes}</p>` : ''}
      
      <hr/>
      <p><em>This appointment request was submitted through the Notaries By website.</em></p>
    `

    // Email content for the client
    const clientEmailContent = `
      <h2>Appointment Request Received</h2>
      <p>Dear ${name},</p>
      
      <p>Thank you for requesting an appointment with Notaries By. We have received your request and will contact you shortly to confirm the details.</p>
      
      <p><strong>Your requested appointment details:</strong></p>
      <ul>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Location:</strong> ${location}</li>
      </ul>
      
      <p>If you need to make any changes or have questions, please contact us at:</p>
      <ul>
        <li><strong>Phone:</strong> 727 710 5455</li>
        <li><strong>Email:</strong> info@notariesby.com</li>
      </ul>
      
      <p>We look forward to serving you!</p>
      
      <p>Best regards,<br/>
      The Notaries By Team</p>
      
      <hr/>
      <p><em>This is an automated confirmation. Please do not reply to this email.</em></p>
    `

    // Send email to business owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'stephen.boerner@gmail.com', // For testing - will change to info@notariesby.com later
      subject: `New Appointment Request - ${name}`,
      html: ownerEmailContent,
    })

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Request Confirmed - Notaries By',
      html: clientEmailContent,
    })

    // Create Google Calendar event (placeholder for now)
    try {
      const calendar = await getGoogleCalendar()
      
      const appointmentDateTime = new Date(`${date}T${convertTimeToISO(time)}`)
      const endDateTime = new Date(appointmentDateTime)
      endDateTime.setHours(endDateTime.getHours() + 1) // Default 1 hour appointment

      const event = {
        summary: `Notary Appointment - ${name}`,
        description: `
          Service: ${service}
          Client: ${name} (${email}, ${phone})
          Location: ${location}
          ${notes ? `Notes: ${notes}` : ''}
          Referral Source: ${referralSource || 'Not specified'}
        `,
        start: {
          dateTime: appointmentDateTime.toISOString(),
          timeZone: 'America/New_York',
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'America/New_York',
        },
        location: location,
        attendees: [
          { email: email },
          { email: 'stephen.boerner@gmail.com' }
        ],
      }

      const calendarResponse = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
        requestBody: event,
      })

      console.log('Calendar event created:', calendarResponse.data.id)
    } catch (calendarError) {
      console.error('Calendar creation failed:', calendarError)
      // Don't fail the whole request if calendar fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Appointment request submitted successfully. You will receive a confirmation email shortly.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing appointment request:', error)
    return NextResponse.json(
      { error: 'Failed to process appointment request. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}

// Helper function to convert time string to ISO format
function convertTimeToISO(timeString: string): string {
  const [time, period] = timeString.split(' ')
  const [hours, minutes] = time.split(':')
  let hour24 = parseInt(hours)
  
  if (period === 'PM' && hour24 !== 12) {
    hour24 += 12
  } else if (period === 'AM' && hour24 === 12) {
    hour24 = 0
  }
  
  return `${hour24.toString().padStart(2, '0')}:${minutes}:00`
}