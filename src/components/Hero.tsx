import { motion } from "motion/react";
import { Button } from "./ui/Button";
import { Award, BookOpen, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-brand-accent/10 px-4 py-1.5 text-sm font-medium text-brand-accent mb-6"
          >
            विद्यार्थ्यांच्या उज्ज्वल भविष्यासाठी...
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-brand-primary mb-6 font-serif"
          >
            श्री क्लासेस
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
          >
            इयत्ता: L.K.G. ते ५ वी (CBSE | राज्य मंडळ) <br />
            मराठी माध्यम – सर्वांगीण विकासासाठी मार्गदर्शन
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button size="lg" className="shadow-lg shadow-brand-primary/20">
              प्रवेश सुरू आहे! आजच संपर्क करा!
            </Button>
            <Button size="lg" variant="outline">
              अधिक माहिती
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
          >
            <div className="flex flex-col items-center p-6 rounded-3xl bg-white shadow-sm border border-brand-primary/5">
              <div className="h-12 w-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-1 font-serif">२० वर्षांचा अनुभव</h3>
              <p className="text-sm text-gray-500 text-center">दीर्घकालीन अध्यापन अनुभव</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-3xl bg-white shadow-sm border border-brand-primary/5">
              <div className="h-12 w-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-1 font-serif">संचालिका</h3>
              <p className="text-sm text-gray-500 text-center">रुपाली सुहास वाटेगांवकर</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-3xl bg-white shadow-sm border border-brand-primary/5">
              <div className="h-12 w-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-1 font-serif">मजबूत पायाभरणी</h3>
              <p className="text-sm text-gray-500 text-center">संकल्पना स्पष्ट करून शिकवणे</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
