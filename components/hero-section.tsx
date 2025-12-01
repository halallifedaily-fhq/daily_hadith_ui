"use client"

import { Button } from "@/components/ui/button"
import { IslamicPattern } from "@/components/islamic-pattern"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <IslamicPattern />
      </div>

      {/* Soft radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Story intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-muted-foreground text-lg tracking-wide uppercase mb-6">A story of the modern Muslim</p>

          {/* Visual story cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Wakes up… checks WhatsApp first",
              "Scrolls through notifications",
              "Not a single message about Allah",
              "Goes through the day — work, noise, stress",
              "Wants to learn Hadith…",
              "But forgets. Procrastinates. Gets distracted.",
            ].map((text, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="px-4 py-2 bg-card rounded-full text-sm text-muted-foreground border border-border"
              >
                {text}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-6 text-balance"
        >
          Somewhere between work, notifications, and endless scrolling…
          <span className="block mt-4 text-primary font-medium italic">we lost the words of our Prophet ﷺ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-muted-foreground my-8 max-w-3xl mx-auto"
        >
          Receive authentic Sahih Hadith daily — delivered directly to your WhatsApp<br /> <span className="font-bold">IN YOUR PREFERED LANGUAGE</span>
        </motion.p>
        

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("pricing")}
          >
            Start My Hadith Journey
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-full border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
            onClick={() => scrollToSection("importance")}
          >
            Why this matters
          </Button>
        </motion.div>

        <div className="my-4 flex justify-center items-center gap-4 text-sm text-primary font-bold">
          <span>✓ Authentic Sahih Hadith</span>
          <span>✓ Timezone-based delivery</span>
          <span>✓ Cancel anytime</span>
        </div>

        

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2"
            />
          </div>
        </motion.div>

        

      </div>
    </section>
  )
}
