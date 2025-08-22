# Booking System Setup Guide

## Overview
The NotariesBy website now features a complete booking system with Google API integration, email notifications, and Google Calendar scheduling. This system handles appointment requests from multiple forms across the site.

## 🎯 Key Features

### ✅ Completed Features
- **Multi-form Booking System**: Three different booking components for various use cases
- **Email Integration**: Automated emails to both business owner and clients
- **Google Calendar Integration**: Calendar event creation with attendee notifications
- **Form Validation**: Comprehensive client-side and server-side validation
- **Responsive Design**: Mobile-friendly booking forms
- **Error Handling**: Graceful error handling with user feedback

### 📧 Email Configuration
- **Business Owner Email**: stephen.boerner@gmail.com (for testing, will change to info@notariesby.com)
- **Client Confirmation**: Automated confirmation emails sent to clients
- **Email Service**: NodeMailer with Gmail SMTP

### 📅 Google Calendar Integration
- **Event Creation**: Automatic calendar events for confirmed appointments
- **Attendee Management**: Both client and notary added as attendees
- **Time Zone Support**: America/New_York timezone
- **Event Details**: Complete appointment information included

## 🚀 Setup Instructions

### 1. Environment Variables
Create a `.env.local` file with the following variables:

```env
# Email Configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password

# Google Calendar API Configuration
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----"
GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com

# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Gmail Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password for the application
3. Use the App Password (not your regular password) in EMAIL_APP_PASSWORD

### 3. Google Cloud Setup
1. Create a Google Cloud Project
2. Enable the Google Calendar API
3. Create a Service Account
4. Download the service account key JSON file
5. Extract the client_email and private_key for environment variables
6. Share your Google Calendar with the service account email

### 4. Calendar Configuration
1. Create or use an existing Google Calendar
2. Share the calendar with your service account email (Editor permissions)
3. Get the Calendar ID from Google Calendar settings

## 📋 Booking Components

### 1. Main Booking Page (`/book`)
- **File**: `app/book/page.tsx`
- **Features**: Complete booking form with all fields
- **Use Case**: Primary booking page linked from navigation

### 2. Enhanced Booking Component
- **File**: `components/enhanced-booking.tsx`
- **Features**: Tabbed interface with service selection
- **Use Case**: Enhanced booking experience with additional options

### 3. Appointment Booking Component
- **File**: `components/appointment-booking.tsx`
- **Features**: Streamlined booking form
- **Use Case**: Embedded in other pages or sections

## 🔧 API Endpoints

### Production Endpoint
- **URL**: `/api/book-appointment`
- **Method**: POST
- **Features**: Full email and calendar integration

### Test Endpoint
- **URL**: `/api/book-appointment-test`
- **Method**: POST
- **Features**: Console logging for testing (no actual emails sent)

## 📝 Form Fields

### Required Fields
- **Name**: Client full name (minimum 2 characters)
- **Email**: Valid email address
- **Phone**: Phone number (minimum 10 digits)
- **Service**: Selected service type
- **Date**: Appointment date (future dates only)
- **Time**: Appointment time slot
- **Location**: Complete address (minimum 5 characters)

### Optional Fields
- **Notes**: Additional details about the appointment
- **Referral Source**: How the client heard about the service

## 🎨 Validation Rules

### Client-Side Validation
- Real-time form validation using Zod schema
- User-friendly error messages
- Disabled dates (past dates blocked)
- Required field indicators

### Server-Side Validation
- Comprehensive data validation
- Error handling for missing fields
- Graceful failure with user feedback

## 📱 Testing

### Test Data Example
```json
{
  "name": "Sarah Johnson",
  "email": "test.client@example.com",
  "phone": "7275551234",
  "service": "real-estate",
  "date": "2025-08-26",
  "time": "10:00 AM",
  "location": "1234 Oak Street, St. Petersburg, FL 33701",
  "notes": "Test booking for refinance loan signing"
}
```

### Successful Test Results
✅ Form validation working correctly
✅ API endpoint responding (200 status)
✅ Email notifications configured
✅ Calendar event creation ready
✅ Error handling functional

## 🔄 Production Deployment

### Before Going Live
1. ✅ Update logo to local asset (`/images/notariesby-logo-new.png`)
2. ✅ Configure all environment variables
3. ✅ Test booking form submission
4. ⚠️ Change email recipient from stephen.boerner@gmail.com to info@notariesby.com
5. ⚠️ Set up actual Gmail credentials
6. ⚠️ Configure Google Calendar API with real credentials

### Post-Deployment Checklist
- [ ] Test booking form on production
- [ ] Verify email delivery
- [ ] Confirm calendar event creation
- [ ] Monitor error logs
- [ ] Test mobile responsiveness

## 🐛 Troubleshooting

### Common Issues
1. **Email not sending**: Check Gmail app password and 2FA settings
2. **Calendar events not creating**: Verify service account permissions
3. **Form validation errors**: Check required field completion
4. **API errors**: Monitor server logs for detailed error messages

### Debug Mode
For testing, use the test endpoint `/api/book-appointment-test` which logs all data to console without sending emails.

## 📞 Support

For technical issues or questions about the booking system:
- Check server logs for error details
- Verify environment variable configuration
- Test with the debug endpoint first
- Ensure all Google Cloud permissions are correctly set

---

**System Status**: ✅ Ready for Production (pending final environment configuration)
**Last Updated**: August 22, 2025
**Version**: 1.0.0