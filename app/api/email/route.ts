import { Resend } from 'resend'
import * as React from 'react'
import { WelcomeEmail } from '@/components/emailTemplates/WelcomeEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

// TEST EMAIL ROUTE
export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: WelcomeEmail({ firstName: 'John' }) as React.ReactElement,
    })

    if (error) {
      return Response.json({ error })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error })
  }
}
