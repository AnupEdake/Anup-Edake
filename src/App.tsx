/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AIChallenge } from "./components/AIChallenge";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProgressDashboard } from "./components/ProgressDashboard";
import { QuizModule } from "./components/QuizModule";
import { ProgressEntry } from "./types";
import { motion, AnimatePresence } from "motion/react";
import { LayoutDashboard, BookOpenCheck, Info } from "lucide-react";

const initialProgress: ProgressEntry[] = [
  {
    date: "01/04",
    score: 65,
    skills: { logicalDeduction: 60, patternRecognition: 70, analyticalSkills: 55, problemSolving: 65, creativity: 75 }
  },
  {
    date: "05/04",
    score: 72,
    skills: { logicalDeduction: 65, patternRecognition: 75, analyticalSkills: 60, problemSolving: 70, creativity: 78 }
  },
  {
    date: "10/04",
    score: 85,
    skills: { logicalDeduction: 80, patternRecognition: 85, analyticalSkills: 75, problemSolving: 82, creativity: 88 }
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "dashboard" | "quizzes">("home");
  const [progress, setProgress] = useState<ProgressEntry[]>(initialProgress);

  const handleProgressUpdate = (entry: ProgressEntry) => {
    setProgress(prev => [...prev, entry]);
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-secondary/30">
      <Header />
      
      {/* Navigation Tabs for App Features */}
      <div className="bg-white border-b border-brand-primary/10 sticky top-16 z-40">
        <div className="container mx-auto px-4 flex justify-center gap-4 py-3">
          <button 
            onClick={() => setActiveTab("home")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${activeTab === "home" ? "bg-brand-primary text-white" : "text-gray-500 hover:bg-brand-primary/5"}`}
          >
            मुख्य पान
          </button>
          <button 
            onClick={() => setActiveTab("quizzes")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${activeTab === "quizzes" ? "bg-brand-primary text-white" : "text-gray-500 hover:bg-brand-primary/5"}`}
          >
            <BookOpenCheck className="h-4 w-4" />
            कोडी आणि क्विझ
          </button>
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${activeTab === "dashboard" ? "bg-brand-primary text-white" : "text-gray-500 hover:bg-brand-primary/5"}`}
          >
            <LayoutDashboard className="h-4 w-4" />
            प्रगती अहवाल
          </button>
        </div>
      </div>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <Features />
              <AIChallenge />
              
              {/* Real-time Usage Guide Section */}
              <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-12 w-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                        <Info className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-brand-primary font-serif">हे ॲप रिअल-टाइममध्ये कसे वापरावे?</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-brand-primary font-serif">पालकांसाठी (For Parents)</h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex gap-3">
                            <span className="h-6 w-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 text-xs font-bold">१</span>
                            <span>दररोज 'कोडी आणि क्विझ' विभागात जाऊन मुलांकडून कोडी सोडवून घ्या.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="h-6 w-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 text-xs font-bold">२</span>
                            <span>'प्रगती अहवाल' मध्ये जाऊन मुलांच्या तार्किक आणि विश्लेषणात्मक कौशल्यांची प्रगती तपासा.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="h-6 w-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 text-xs font-bold">३</span>
                            <span>AI चॅलेंजचा वापर करून मुलांच्या कल्पनाशक्तीला चालना द्या.</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-brand-primary font-serif">शिक्षकांसाठी (For Teachers)</h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex gap-3">
                            <span className="h-6 w-6 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0 text-xs font-bold">१</span>
                            <span>वर्गात शिकवताना या ॲपमधील लॉजिक पझल्सचा 'वॉर्म-अप' म्हणून वापर करा.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="h-6 w-6 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0 text-xs font-bold">२</span>
                            <span>विद्यार्थ्यांच्या कमकुवत बाजू ओळखून (उदा. नमुना ओळख) त्यावर अधिक सराव द्या.</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="h-6 w-6 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0 text-xs font-bold">३</span>
                            <span>पालकांशी संवाद साधताना या ॲपमधील डेटाचा वापर करून अचूक प्रगती अहवाल सादर करा.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <Contact />
            </motion.div>
          )}

          {activeTab === "quizzes" && (
            <motion.div
              key="quizzes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="container mx-auto px-4 py-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-brand-primary mb-4 font-serif">कोडी आणि क्विझ</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  तुमच्या बुद्धीला चालना देणारी मजेदार कोडी सोडवा आणि नवीन गोष्टी शिका!
                </p>
              </div>
              <QuizModule onProgressUpdate={handleProgressUpdate} />
            </motion.div>
          )}

          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="container mx-auto px-4 py-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-brand-primary mb-4 font-serif">विद्यार्थी प्रगती अहवाल</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  केवळ गुणच नाही, तर तार्किक विचार आणि समस्या निवारण कौशल्यांचा मागोवा घ्या.
                </p>
              </div>
              <ProgressDashboard data={progress} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
