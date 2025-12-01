"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      name: "Seeker",
      description: "For Muslims beginning their journey of reconnecting with the Sunnah.",
      price: "6.99",
      period: "One Month",
      features: [
        "1 Hadith daily at 8am local time",
        "Sahih collections only",
        "Timezone-based delivery",
        "Multi Language Support",
      ],
      popular: false,
    },
    {
      name: "Dedicated",
      description: "For Muslims who want consistent, structured daily learning.",
      price: "9.99",
      period: "One Month",
      features: [
        "5 Hadith daily between 8am-8pm local time, once every 3 hours",
        "Sahih collections only",
        "Timezone-based delivery",
        "Multi Language Support",
      ],
      popular: true,
    },
    {
      name: "Steadfast",
      description: "For those committed to long-term spiritual growth.",
      price: "39.99",
      period: "One Year",
      features: [
        "1 Hadith daily at 8am local time",
        "Sahih collections only",
        "Timezone-based delivery",
        "Multi Language Support",
        "Priority support",
        "Save 50%",
      ],
      popular: true,
    },
    {
      name: "Devoted",
      description: "For serious learners building a deep connection to knowledge.",
      price: "59.99",
      period: "One Year",
      features: [
        "5 Hadith daily between 8am-8pm local time, once every 3 hours",
        "Sahih collections only",
        "Timezone-based delivery",
        "Multi Language Support",
        "Priority support",
        "Save 50%",
      ],
      popular: false,
    },
  ]

  const handleSubscribe = (planName: string) => {
    const message = encodeURIComponent(
      `Assalamu Alaikum! I would like to subscribe to the "${planName}" plan for daily Hadith messages.`,
    )
    window.open(`https://wa.me/?text=${message}`, "_blank")
  }

  return (
    <section ref={ref} id="pricing" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-widest mb-6">💳 Begin Your Journey</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Choose your path to
            <span className="text-primary italic"> spiritual growth</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every plan includes authentic Hadith from Sahih collections, delivered straight to your WhatsApp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative bg-background rounded-2xl p-6 lg:p-8 ${
                plan.popular ? "border-2 border-primary shadow-lg scale-105" : "border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-light text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
                onClick={() => handleSubscribe(plan.name)}
              >
                Start My Journey
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            Think of this not as a purchase, but as a revival of deen in your daily life <br />
            <span className="font-bold"> And whoever spends for the sake of guidance — Allah multiplies the reward beyond <span className="text-primary text-2xl">IMAGINATION</span></span>
          </p>
        </motion.div>


      </div>
    </section>
  )
}
