'use server'
/* eslint-disable no-console */

import { Resend } from 'resend'
import { WelcomeEmail } from './templates/WelcomeEmail'

const resend = new Resend(process.env.RESEND_API_KEY!)
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || ''

export async function sendWelcomeEmail(email: string) {
  const emailTemplate = WelcomeEmail({ email }) as React.ReactElement
  console.log('sending email to', email)
  try {
    addEmailToAudience(email)

    // Send the email using the Resend API
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email as string,
      subject: 'Welcome to BidClub!',
      react: emailTemplate,
    })
    console.log('email sent!')
  } catch (error) {
    console.error('[RESEND] error:', error)
    throw error
  }
}

export async function addEmailToAudience(email: string) {
  console.log('adding email to audience', email)
  try {
    // Add Email Address to Resend Audience
    await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    })
  } catch (error) {
    console.error('[RESEND] error:', error)
    throw error
  }
}
