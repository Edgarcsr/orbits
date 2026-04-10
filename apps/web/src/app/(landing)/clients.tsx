'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { clients } from './clients-data'

export default function Clients() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.55, ease: 'circOut' }}
      className="py-16 px-4"
    >
      <div className="flex flex-col items-center text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
          className="backdrop-blur-2xl text-sm flex items-center gap-2 text-muted-foreground font-medium mb-4 rounded-xl w-fit px-3 py-1 border-muted bg-white/5"
        >
          Trusted by teams
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.45, ease: 'easeOut' }}
          className="text-3xl font-semibold text-foreground"
        >
          Companies that trust Orbits
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5, ease: 'easeOut' }}
      >
        <Marquee
          className="overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
          autoFill
        >
          {clients.map((client) => (
            <a
              key={client.logo}
              href={client.url}
              className="mx-8 inline-flex items-center"
              aria-label={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={256}
                height={128}
                className="h-14 w-auto grayscale opacity-70 transition duration-200 hover:grayscale-0 hover:opacity-100"
              />
            </a>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  )
}
