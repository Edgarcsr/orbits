'use client'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'

export default function Hero() {
  const flipWords = [
    'More organized',
    'Safer',
    'More agile',
    'Simpler',
    'More productive',
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'circOut', duration: 0.5 }}
      className="text-4xl h-96"
    >
      <div className="h-[40rem] flex flex-col text-left justify-center px-4">
        <div className="text-4xl font-normal">
          Make your projects
          <FlipWords words={flipWords} className="!text-amber-400" /> <br />
          with Orbits.
        </div>
        <p className="text-lg text-muted-foreground mt-8">
          The all-in-one platform for creating, managing and delivering your
          projects with ease.
        </p>
        <div>
          <Button className="bg-amber-400 hover:bg-amber-300 mt-8">
            Open account
          </Button>
          <Button variant="outline" className="ml-4 mt-8">
            Learn more
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
