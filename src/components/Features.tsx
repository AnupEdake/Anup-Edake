import { CheckCircle2, Star, Target, Zap } from "lucide-react";
import { motion } from "motion/react";

const whyChooseUs = [
  "प्रत्येक विद्यार्थ्यावर वैयक्तिक लक्ष",
  "अनुभवी व तज्ज्ञ शिक्षकवर्ग",
  "शैक्षणिक प्रगतीचा नियमित आढावा",
  "खेळत-खेळत शिकवण्याची पद्धत",
  "लहान बॅचेस – अधिक लक्ष",
];

const advantages = [
  "मजबूत पायाभरणीवर भर",
  "नियमित टेस्ट व प्रगती अहवाल",
  "मुलांच्या आत्मविश्वासात वाढ",
  "संकल्पना स्पष्ट करून शिकवणे",
  "पालकांशी नियमित संवाद",
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-serif">
            का निवडावे ‘श्री क्लासेस’?
          </h2>
          <div className="h-1.5 w-24 bg-brand-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-8 w-8 text-brand-accent fill-brand-accent" />
              <h3 className="text-2xl font-bold text-brand-primary font-serif">मुख्य वैशिष्ट्ये</h3>
            </div>
            <ul className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Target className="h-8 w-8 text-brand-primary" />
              <h3 className="text-2xl font-bold text-brand-primary font-serif">फायदे (Advantages)</h3>
            </div>
            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <Zap className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
