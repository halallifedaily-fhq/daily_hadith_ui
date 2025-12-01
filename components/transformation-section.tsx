"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function TransformationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const transformations = [
    "One day turns into a week…",
    "A week turns into a month…",
    "Your mind starts remembering Hadith automatically…",
    "Your heart becomes softer…",
    "Your relationship with Allah deepens…",
    "You start practicing what you learn…",
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-6">🌟 The Transformation</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance">
            What happens when Hadith becomes
            <span className="block mt-2 text-primary italic">a daily habit?</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {transformations.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`relative flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full" />

                {/* Content */}
                <div
                  className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
                >
                  <p className="text-xl md:text-2xl text-foreground font-light">{text}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">💬</span>
          </div>

          <blockquote className="text-xl md:text-2xl text-foreground font-light italic mb-6 leading-relaxed">
            ⭐⭐⭐⭐⭐
            <br />
            “For the first time in my life, I’m reading hadith every single day.” 
            <p className="text-muted-foreground">— Abdullah K.</p>
            <br />
            “This changed my morning routine.”
            <p className="text-muted-foreground">— Mariam S.</p>
            <br />
            “I love how effortless it is.”
            <p className="text-muted-foreground">— Imran H.</p>
          </blockquote>

          
        </motion.div>
      </div>
    </section>
  )
}
