"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: "Are the Hadith authentic?",
      answer:
        "Yes, absolutely. We only use narrations from Sahih collections — primarily Sahih Bukhari and Sahih Muslim. Every Hadith includes its source reference so you can verify it yourself.",
    },
    {
      question: "What if I'm too busy to read?",
      answer:
        "That's exactly why this works. Unlike apps you have to remember to open, WhatsApp is already part of your daily routine. The Hadith comes to you — no extra effort required.",
    },
    {
      question: "Which languages are supported?",
      answer:
        `We currently support English, Arabic, French, Indonesian, Russian, Turkish, Urdu, and Bengali. More languages are coming soon. You can change your language preference at any time.`,
    },
    {
      question: "When will I receive messages?",
      answer:
        "Messages are delivered based on your timezone. Everyday between 8am-8pm.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no questions asked. We want you to stay because the service benefits you, not because you're locked in.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply choose a plan, enter your WhatsApp number, and you'll receive your first Hadith within 24 hours. It takes less than 2 minutes to set up.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-6">❓ Questions</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Everything you need to know
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg text-foreground font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96" : "max-h-0"}`}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
