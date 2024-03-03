import React from 'react'

interface WelcomeEmailProps {
  email: string
}

export const WelcomeEmail: React.FC<Readonly<WelcomeEmailProps>> = ({ email }) => (
  <div>
    <h1>Welcome, {email}!</h1>
  </div>
)
