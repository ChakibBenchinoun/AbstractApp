import {motion} from 'framer-motion'
import React from 'react'

const firstPathVariants = {
  open: {rotate: -45, y: 6.3},
  close: {rotate: 0, y: 0},
}

const secondPathVariants = {
  open: {rotate: 45, y: -6.3},
  close: {rotate: 0, y: 0},
}

const middlePathVariants = {
  open: {opacity: 0},
  close: {opacity: 1},
}

export default function MenuIcon({
  className,
  isOpen,
}: {
  className?: string
  isOpen: boolean
}) {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <motion.path
        variants={firstPathVariants}
        animate={isOpen ? `open` : `close`}
        transition={{duration: 0.4, ease: 'easeOut'}}
        initial={`close`}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M4.75 5.75H19.25"
      />
      <motion.path
        variants={middlePathVariants}
        animate={isOpen ? `open` : `close`}
        transition={{duration: 0.4, ease: 'easeOut'}}
        initial={`close`}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M4.75 12H19.25"
      />
      <motion.path
        variants={secondPathVariants}
        animate={isOpen ? `open` : `close`}
        transition={{duration: 0.4, ease: 'easeOut'}}
        initial={`close`}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M4.75 18.25H19.25"
      />
    </svg>
  )
}
