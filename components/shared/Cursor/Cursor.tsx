'use client'

import { useEffect, useRef } from 'react'
import './Cursor.css'

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  // let timeoutId: NodeJS.Timeout

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      cursorRef.current?.style.setProperty('left', `${x}px`)
      cursorRef.current?.style.setProperty('top', `${y}px`)
      // set display back to block
      cursorRef.current?.style.setProperty('display', 'block')

      // hide after mouse effects s750ms
      // clearTimeout(timeoutId)
      // timeoutId = setTimeout(() => cursorRef.current?.style.setProperty('display', 'none'), 750)
    }

    const onMouseOut = () => {
      if (cursorRef) {
        cursorRef.current?.style.setProperty('display', 'none')
      }
    }

    // global mousemove eventListener - follow cursor
    document.addEventListener('mousemove', onMouseMove)

    // global mouseout eventListener - hide mouse on out
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  return <div ref={cursorRef} className="cursor"></div>
}

export default Cursor
