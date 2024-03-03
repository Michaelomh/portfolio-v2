'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import './Newsletter.css'
import { validateEmail } from '@/lib/utils'
import { sendWelcomeEmail } from '@/lib/resend/resend'

const textVariant = {
  hide: { opacity: 0, transition: { duration: 0.4 } },
  show: { opacity: 1, transition: { duration: 1.2 } },
}

// const addUserToNewsleter = async (email: string) => {
//   await sendWelcomeEmail(email)
// }

export const NewsletterActions = () => {
  const [email, setEmail] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const [showError, setShowError] = useState(false)

  // TODO: Show error message when not valid email
  const handleKeyDown = async (evt: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO: On keydown something should appear

    // if not valid email, show error message
    if (evt.code === 'Enter') {
      // checking email

      console.log(email, validateEmail(email))
      if (validateEmail(email)) {
        await sendWelcomeEmail(email)
      } else {
        // setShowHelp(false)
        // setShowError(true)
      }
      // sending welcome email + add email to resend audience
    }
  }

  function handleFocus(_event: React.FocusEvent<HTMLInputElement, Element>): void {
    // TODO: on Focus, and there is an state, should show a icon to send.
    // TODO: after a while a text will appear below
    setTimeout(() => {
      setShowHelp(true)
    }, 1500)
  }

  function handleBlur(_event: React.FocusEvent<HTMLInputElement, Element>): void {
    setTimeout(() => {
      setShowHelp(false)
    }, 500)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center  py-8 tablet:px-4">
      <input
        className="focus-visible::ring-orange-400 w-full rounded-md border bg-transparent px-4 py-2 shadow-none"
        placeholder="Enter email"
        value={email}
        onBlur={handleBlur}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
      <div className="flex flex-col items-center pt-4">
        <motion.p
          animate={showHelp ? 'show' : 'hide'}
          className="font-sans text-xs text-stone-300 opacity-0"
          variants={textVariant}
        >
          Enter to join the newsletter
        </motion.p>
        <p className="font-sans text-xs text-red-500">Please enter a valid email</p>
      </div>
    </div>
  )
}
