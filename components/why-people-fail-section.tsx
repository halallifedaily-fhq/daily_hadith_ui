"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function WhyPeopleFailSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stories = [
    {
      emoji: "👩‍👧",
      text: "A mother reading a quick Hadith while feeding her baby.",
    },
    {
      emoji: "🚌",
      text: "A student reading a Hadith at the bus stop.",
    },
    {
      emoji: "💼",
      text: "A worker finding a Hadith in the middle of a stressful day.",
    },
    {
      emoji: "📱",
      text: "A teenager learning Sunnah without ever opening an Islamic book.",
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-6">🔥 Why People Fail</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance">
            The problem isn't desire —<br />
            <span className="text-primary italic">it's design.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-background rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div className="space-y-4">
              <p className="text-muted-foreground">Humans avoid friction.</p>
              <p className="text-muted-foreground">
                Opening an app = <span className="text-foreground font-medium">effort</span>.
              </p>
              <p className="text-muted-foreground">
                Searching for Hadith = <span className="text-foreground font-medium">effort</span>.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-foreground font-medium">But opening WhatsApp?</p>
              <p className="text-primary text-xl">Effortless.</p>
              <p className="text-muted-foreground">We read messages automatically.</p>
            </div>
          </div>

          <div className="h-px bg-border my-8" />

          <p className="text-center text-xl text-foreground">
            You don’t need more apps <span className="text-primary font-medium">— you need knowledge delivered where you already are: WhatsApp.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-center text-muted-foreground mb-8 text-lg">Real moments, real impact:</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <span className="text-3xl mb-3 block">{story.emoji}</span>
                <p className="text-foreground">{story.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
