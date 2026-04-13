import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { Brain, Loader2, RefreshCw, Send } from "lucide-react";
import { Button } from "./ui/Button";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "motion/react";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function AIChallenge() {
  const [challenge, setChallenge] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);

  const generateChallenge = async () => {
    setLoading(true);
    setFeedback(null);
    setUserAnswer("");
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-latest",
        config: {
          systemInstruction: "You are an expert educator for primary school students (LKG to 5th grade). Your goal is to develop critical thinking and problem-solving skills. Generate a fun, age-appropriate logic puzzle or critical thinking question in Marathi. Keep it simple and engaging.",
        },
        contents: "Generate a daily critical thinking challenge for a 3rd to 5th grade student in Marathi.",
      });
      setChallenge(response.text || "कोडे लोड होऊ शकले नाही. कृपया पुन्हा प्रयत्न करा.");
    } catch (error) {
      console.error("Error generating challenge:", error);
      setChallenge("कोडे लोड करताना त्रुटी आली.");
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = async () => {
    if (!userAnswer.trim()) return;
    setFeedbackLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-latest",
        config: {
          systemInstruction: "You are a supportive teacher. Review the student's answer to the logic puzzle. Provide encouraging feedback in Marathi. If the answer is correct, praise them. If not, give a gentle hint without revealing the full answer immediately.",
        },
        contents: `Challenge: ${challenge}\nStudent Answer: ${userAnswer}`,
      });
      setFeedback(response.text || "प्रतिसाद मिळू शकला नाही.");
    } catch (error) {
      console.error("Error checking answer:", error);
      setFeedback("प्रतिसाद तपासताना त्रुटी आली.");
    } finally {
      setFeedbackLoading(false);
    }
  };

  return (
    <section id="ai-challenge" className="py-24 bg-brand-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary text-white mb-6 shadow-lg shadow-brand-primary/20">
              <Brain className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4 font-serif">
              आजचे वैचारिक कोडे (Daily Thinking Challenge)
            </h2>
            <p className="text-gray-600">
              मुलांच्या विचार करण्याच्या क्षमतेत वाढ करण्यासाठी दररोज एक नवीन कोडे सोडवा.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-brand-primary/5 border border-brand-primary/5">
            {!challenge ? (
              <div className="text-center py-12">
                <Button onClick={generateChallenge} disabled={loading} size="lg">
                  {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <RefreshCw className="mr-2 h-5 w-5" />}
                  आजचे कोडे मिळवा
                </Button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="prose prose-brand max-w-none bg-brand-primary/5 p-6 rounded-2xl border-l-4 border-brand-primary">
                  <ReactMarkdown>{challenge}</ReactMarkdown>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">तुमचे उत्तर लिहा:</label>
                  <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="येथे तुमचे उत्तर लिहा..."
                    className="w-full min-h-[120px] p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                  />
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={checkAnswer} 
                      disabled={feedbackLoading || !userAnswer.trim()} 
                      className="flex-1"
                    >
                      {feedbackLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
                      उत्तर तपासा
                    </Button>
                    <Button variant="outline" onClick={generateChallenge} disabled={loading}>
                      <RefreshCw className="mr-2 h-5 w-5" />
                      दुसरे कोडे
                    </Button>
                  </div>
                </div>

                <AnimatePresence>
                  {feedback && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-brand-accent/10 p-6 rounded-2xl border-l-4 border-brand-accent"
                    >
                      <h4 className="font-bold text-brand-accent mb-2 font-serif">शिक्षकांचा अभिप्राय:</h4>
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown>{feedback}</ReactMarkdown>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
