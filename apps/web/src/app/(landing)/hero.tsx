'use client'
import { BoxIcon, FlaskConicalIcon, Pyramid } from 'lucide-react'
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
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
          className="backdrop-blur-2xl text-sm flex items-center gap-2 text-muted-foreground font-medium mb-4 rounded-xl w-fit px-3 py-1  border-muted bg-white/5"
        >
          <BoxIcon size={16} />
          Early Development
        </motion.span>
        <h1 className="text-4xl font-normal text-muted-foreground">
          Make your projects
          <FlipWords words={flipWords} /> <br />
          with Orbits.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-muted-foreground mt-8"
        >
          The all-in-one platform for creating, managing and delivering your
          projects with ease.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Button className=" mt-8">Get Started</Button>
          <Button variant="outline" className="ml-4 mt-8 text-muted-foreground">
            Learn more
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
