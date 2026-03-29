import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the demo work?",
    a: "Enter your phone number and Orbit AI will call you within seconds. You'll experience a live conversation just like your customers would.",
  },
  {
    q: "Can it answer after hours?",
    a: "Yes. Orbit AI runs 24/7. Nights, weekends, holidays — every call gets answered professionally.",
  },
  {
    q: "Can it be customized to my business?",
    a: "Absolutely. During setup we train the AI on your services, pricing, service area, and booking process so it sounds like a real part of your team.",
  },
  {
    q: "Does it book appointments?",
    a: "Yes. Orbit AI can capture lead information, check availability, and guide callers through the booking process.",
  },
  {
    q: "What kinds of businesses is this for?",
    a: "Orbit AI is designed for home service businesses — plumbing, HVAC, electrical, roofing, landscaping, pressure washing, and more.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-foreground font-heading font-semibold text-left hover:no-underline py-5 text-sm">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
