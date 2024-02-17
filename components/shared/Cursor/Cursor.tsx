'use client'

import { useRef } from 'react'
import './Cursor.css'

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  // let timeoutId: NodeJS.Timeout

  // global mousemove eventListener - follow cursor
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY
    cursorRef.current?.style.setProperty('left', `${x}px`)
    cursorRef.current?.style.setProperty('top', `${y}px`)
    // set display back to block
    cursorRef.current?.style.setProperty('display', 'block')

    // hide after mouse effects s750ms
    // clearTimeout(timeoutId)
    // timeoutId = setTimeout(() => cursorRef.current?.style.setProperty('display', 'none'), 750)
  })

  // global mouseout eventListener - hide mouse on out
  document.addEventListener('mouseout', () => {
    if (cursorRef) {
      cursorRef.current?.style.setProperty('display', 'none')
    }
  })

  return <div ref={cursorRef} className="cursor"></div>
}

export default Cursor
