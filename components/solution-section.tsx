"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { WhatsAppMockup } from "@/components/whatsapp-mockup"

export function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const imaginings = [
    "Imagine waking up… and the first thing you read is a Hadith.",
    "Imagine your day paused by wisdom instead of distraction.",
    "Imagine your heart softening… one message at a time.",
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-6">🌿 The Turning Point</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance">
            What if the words of Rasulullah ﷺ<span className="block mt-2 text-primary italic">came to you?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">WhatsApp</span> is the app we open the most.
              </p>
              <p>We read messages instinctively — without thinking.</p>
              <p>
                What if a <span className="text-foreground font-medium">daily Hadith</span> arrived like a gentle
                reminder?
              </p>
              <p>Delivered in the same place we already communicate.</p>
              <p className="text-foreground font-medium">Slowly transforming our mindset… every single day.</p>
            </div>

            <div className="h-px w-full bg-border" />

            <div className="space-y-6">
              {imaginings.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  className="text-xl md:text-2xl text-foreground font-light italic"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right: WhatsApp Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <WhatsAppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
