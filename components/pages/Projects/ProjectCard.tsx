'use client'

import { useRef } from 'react'
import Image from 'next/image'
import './Projects.css'

export const ProjectCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const thumbnailRef = useRef<HTMLImageElement>(null)

  // when mouseenter, play video, hide thumbnail
  const handleMouseEnter = () => {
    videoRef.current?.play()
    videoRef.current?.style
    videoRef.current?.style.setProperty('opacity', '1')
    thumbnailRef.current?.style.setProperty('opacity', '0')
  }

  // when mouseLeave, pause + reset video, show thumbnail
  const handleMouseLeave = () => {
    videoRef.current?.pause()
    videoRef.current?.load()
    videoRef.current?.style.setProperty('opacity', '0')
    thumbnailRef.current?.style.setProperty('opacity', '1')
  }

  {
    /* TODO: Add some glow effect to the card. */
  }

  return (
    <div className="flex items-start">
      <div
        className="h-fit w-[350px] overflow-hidden rounded-lg border-2 border-stone-600 p-2 hover:border-[#f4b432]/50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-[230px]">
          <div className="absolute flex h-[300px] w-[350px] items-start overflow-hidden">
            <Image
              ref={thumbnailRef}
              alt="project 1"
              className="absolute z-10 w-full"
              height={230}
              src="/projects/thumbnails/project1.png"
              width={330}
            />
            <video ref={videoRef} loop muted className="absolute w-full" height="230" preload="auto" width="330">
              <source src="/projects/videos/Project1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div>
          <p className="font-mono text-lg font-semibold uppercase tracking-[0.06em] text-[#f4b432]">Project 1</p>
          <p className="line-clamp-3 font-sans text-xs font-normal tracking-[0.03em] text-white">
            Ris sit exercitation labore pariatur eiusmod amet exercitation enim nisi sint occaecat exercitation deserunt
            ut culpa sunt ex ullamco. Quis cillum pariatur exercitation laborum enim dolore exercitation cillum sed ut
          </p>
          <p className="font-mono text-xs font-normal tracking-[-0.03em] text-stone-500">exclaimation!</p>
        </div>
      </div>
    </div>
  )
}
