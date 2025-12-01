"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function PainSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const painPoints = [
    "We download Islamic apps… but we don't open them.",
    "We bookmark Hadith sites… but we forget about them.",
    "We tell ourselves we'll learn more 'tomorrow'… but tomorrow never comes.",
    "“The Prophet ﷺ warned that knowledge will be lifted… not because books disappear, but because hearts forget.” (Bukhari)"
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-6 text-center">💔 The Quiet Decline</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center text-foreground mb-16 leading-relaxed text-balance">
            We have more access to Islamic knowledge than any generation before us.
            <span className="block mt-4 text-muted-foreground italic">Yet we struggle to open a single book.</span>
          </h2>
        </motion.div>

        <div className="space-y-8 mb-16">
          {painPoints.map((point, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground text-center"
            >
              {point}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-2xl md:text-3xl text-foreground font-light mb-6 italic">
            "Our hearts were not created to survive without guidance."
          </p>

          <div className="h-px w-24 bg-border mx-auto mb-6" />

          <blockquote className="text-muted-foreground">
            <p className="text-lg mb-2">"A time will come when knowledge will be taken away…"</p>
            <cite className="text-sm text-accent">— Sahih Bukhari</cite>
          </blockquote>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center text-muted-foreground mt-12 text-lg"
        >
          “Days pass, weeks pass… and we don’t remember a single hadith.—<br />
          <span className="text-foreground">On the Day of Judgment, will we be among those who neglected the words of our Prophet ﷺ?” </span>
        </motion.p>
      </div>
    </section>
  )
}
