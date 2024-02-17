import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className="w-full">
      <p className="font-mono text-stone-400">/newsletter</p>
      <div className="w-full rounded-lg border py-6">
        <div className="scrolling-text-container">
          <h2 className="scrolling-text">Join the newsletter!</h2>
          <h2 className="scrolling-text">Join the newsletter!</h2>
          <h2 className="scrolling-text">Join the newsletter!</h2>
          <h2 className="scrolling-text">Join the newsletter!</h2>
        </div>
        <div className="scrolling-text-container">
          <p className="scrolling-text-2">Stay up to date with new posts or projects. At most 1 email per month.</p>
          <p className="scrolling-text-2">Stay up to date with new posts or projects. At most 1 email per month.</p>
        </div>
        <div className="px-6 text-center">
          <input></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
