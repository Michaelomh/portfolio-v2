import './Newsletter.css'
import { NewsletterActions } from './NewsletterActions'
import { ShineHeader } from '@/components/shared/headers/shineHeader/ShineHeader'

export default async function Newsletter() {
  return (
    <div className="w-full ">
      <ShineHeader title="newsletter" />
      <div className="w-full rounded-lg border-[2px] border-stone-700 bg-stone-800/50 p-8">
        {/* <div className="scrolling-text-container">
          <h2 className="scrolling-text">Join the newsletter!</h2>
          <h2 className="scrolling-text">Join the newsletter!</h2>
          <h2 className="scrolling-text">Join the newsletter!</h2>
          <h2 className="scrolling-text">Join the newsletter!</h2>
        </div>
        <div className="scrolling-text-container">
          <p className="scrolling-text-2">Stay up to date with new posts or projects. At most 1 email per month.</p>
          <p className="scrolling-text-2">Stay up to date with new posts or projects. At most 1 email per month.</p>
        </div> */}
        <h1 className="z-10 mb-4 bg-gradient-to-b from-stone-200 to-stone-800 bg-clip-text text-center font-heading text-xl font-extrabold text-transparent tablet:text-3xl">
          Join the Newsletter
        </h1>
        <p className="text-center font-sans text-lg tracking-[0.01em] text-stone-300 ">
          Stay up-to-date on the newest projects, articles, & code snippets. Subscribe now for fresh content! I
          won&apos;t spam you, I promise! 🤞
        </p>
        <NewsletterActions />
      </div>
    </div>
  )
}
