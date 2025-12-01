"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { IslamicPattern } from "@/components/islamic-pattern"

export function ImportanceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="importance"
      className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <IslamicPattern />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-primary-foreground/70 text-sm uppercase tracking-widest mb-6">
            🕌 The Weight of These Words
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 text-balance">
            Hadith is not just information —<br />
            <span className="italic">it is guidance, healing, and clarity.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8 mb-16"
        >
          <p className="text-xl text-primary-foreground/80 text-center">
            Without Hadith, we cannot understand the Sunnah.
          </p>
          <p className="text-xl text-primary-foreground/80 text-center">
            The Prophet ﷺ encouraged spreading his words.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              text: "May Allah brighten the face of the one who hears my words and conveys them.",
              source: "Tirmidhi",
            },
            {
              text: "Whoever travels a path seeking knowledge, Allah will make easy for him a path to Paradise.",
              source: "Muslim",
            },
          ].map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
            >
              <p className="text-lg md:text-xl font-light italic mb-4 leading-relaxed">"{quote.text}"</p>
              <p className="text-primary-foreground/60 text-sm">— {quote.source}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-accent/20 backdrop-blur-sm rounded-xl px-6 py-4">
            <p className="text-primary-foreground/80 text-lg">
              🔥{" "}
              <span className="italic">
                Neglecting Hadith means neglecting the teachings of the one we claim to love.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
