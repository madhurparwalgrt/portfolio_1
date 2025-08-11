import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    console.log('API route called');
    
    const { name, email, message } = await request.json();
    console.log('Received data:', { name, email, message: message?.substring(0, 50) + '...' });

    // Validate input
    if (!name || !email || !message) {
      console.log('Validation failed: missing fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Debug: Check environment variables
    console.log('Email configuration:', {
      user: process.env.EMAIL_USER ? 'Set' : 'Not set',
      pass: process.env.EMAIL_PASS ? 'Set' : 'Not set'
    });
    
    // Check if environment variables are actually loaded
    let emailUser, emailPass;
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Environment variables not loaded:', {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS ? '***' : 'Not set'
      });
      
      // Fallback to hardcoded values for testing
      console.log('Using fallback email configuration');
      emailUser = 'madhurparwal@gmail.com';
      emailPass = 'cwuf skug blhr tbve';
    } else {
      emailUser = process.env.EMAIL_USER;
      emailPass = process.env.EMAIL_PASS;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: emailUser,
        pass: emailPass, // Use app password for Gmail
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: emailUser, // Your email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              📧 New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #007bff; margin-bottom: 10px;">Contact Details:</h3>
              <p><strong>👤 Name:</strong> ${name}</p>
              <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #007bff; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              <p>📅 Sent on: ${new Date().toLocaleString()}</p>
              <p>🌐 Sent from your portfolio website</p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

Sent on: ${new Date().toLocaleString()}
Sent from your portfolio website
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    
    // More detailed error information for debugging
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 