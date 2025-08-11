# Contact Form Email Setup Guide

## Overview
This portfolio website now includes a contact form that sends email notifications when someone submits a message.

## Setup Instructions

### 1. Email Configuration
The contact form uses Gmail SMTP to send emails. You need to:

1. **Enable 2-Step Verification** on your Google Account
2. **Generate an App Password**:
   - Go to your Google Account settings
   - Navigate to Security > App passwords
   - Select "Mail" as the app
   - Generate a new password
   - Use this password in your `.env.local` file

### 2. Environment Variables
Your `.env.local` file should contain:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Testing the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the notification

## How It Works

### Frontend (Contact.tsx)
- Form validation and user interface
- Sends POST request to `/api/contact` endpoint
- Handles success/error states

### Backend (api/contact/route.ts)
- Receives form data
- Validates input
- Sends email using nodemailer
- Returns success/error response

## Email Template
The email includes:
- Sender's name and email
- Message content
- Timestamp
- Professional HTML formatting

## Troubleshooting

### Common Issues:
1. **"Invalid login" error**: Make sure you're using an App Password, not your regular Gmail password
2. **"Less secure app" error**: Enable 2-Step Verification and use App Passwords
3. **Email not sending**: Check your `.env.local` file and ensure credentials are correct

### Security Notes:
- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- The API route includes input validation and error handling

## Customization
You can customize the email template in `src/app/api/contact/route.ts` by modifying the `mailOptions.html` content. 