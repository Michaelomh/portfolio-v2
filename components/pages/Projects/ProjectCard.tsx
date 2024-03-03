'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import './Projects.css'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const variants = {
  initial: {
    backgroundPosition: '0 0',
  },
  animate: {
    backgroundPosition: ['0, 0', '200% 0%'],
  },
}

export const BackgroundGradient = ({
  className,
  containerClassName,
  onMouseEnter,
  onMouseLeave,
  children,
}: React.PropsWithChildren<{
  className?: string
  containerClassName?: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}>) => {
  const [isHover, setHover] = useState(false)

  return (
    <motion.div
      animate="initial"
      className={cn('relative cursor-pointer p-1', containerClassName)}
      initial="initial"
      whileHover="animate"
      onMouseEnter={() => {
        setHover(true)
        onMouseEnter()
      }}
      onMouseLeave={() => {
        setHover(false)
        onMouseLeave()
      }}
    >
      {/* BLUR EFFECT */}
      <motion.div
        className={cn('absolute inset-0 rounded-lg bg-[length:300%] blur-[40px]', isHover && 'project-card')}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.1,
          duration: 10,
        }}
        variants={variants}
      />
      {/* BORDER EFFECT */}
      <motion.div
        className={cn('absolute inset-0 rounded-lg bg-[length:300%] blur-[10px]', isHover && 'project-card')}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.1,
          duration: 10,
        }}
        variants={variants}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </motion.div>
  )
}

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

  return (
    <BackgroundGradient
      className="h-full w-full cursor-pointer overflow-hidden rounded-lg bg-stone-950"
      containerClassName="h-[400px] w-[350px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[230px]">
        <div className="absolute flex h-[220px] w-[342px] items-start overflow-hidden rounded-sm">
          <Image
            ref={thumbnailRef}
            alt="project 1"
            className="absolute z-10 w-full rounded-sm"
            fill={true}
            src="/projects/thumbnails/project1.png"
          />
          <video ref={videoRef} loop muted className="absolute h-full w-full rounded-sm object-cover" preload="auto">
            <source src="/projects/videos/Project1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="px-2">
        <p className="cursor-pointer font-mono text-lg font-semibold uppercase tracking-[0.06em] text-[#f4b432]">
          Project 1
        </p>
        <p className="line-clamp-3 cursor-pointer font-sans text-xs font-normal tracking-[0.03em] text-white">
          Ris sit exercitation labore pariatur eiusmod amet exercitation enim nisi sint occaecat exercitation deserunt
          ut culpa sunt ex ullamco. Quis cillum pariatur exercitation laborum enim dolore exercitation cillum sed ut
        </p>
        <p className="cursor-pointer font-mono text-xs font-normal tracking-[-0.03em] text-stone-500">exclaimation!</p>
      </div>
    </BackgroundGradient>
  )
}
