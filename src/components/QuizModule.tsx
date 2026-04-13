import { useState } from "react";
import { Quiz, ProgressEntry } from "../types";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, ArrowRight, Trophy, HelpCircle } from "lucide-react";

const sampleQuizzes: Quiz[] = [
  {
    id: "1",
    level: "LKG-UKG",
    question: "खालीलपैकी कोणता आकार वेगळा आहे? (वर्तुळ, त्रिकोण, चौरस, सफरचंद)",
    options: ["वर्तुळ", "त्रिकोण", "चौरस", "सफरचंद"],
    correctAnswer: 3,
    skillType: "patternRecognition",
    explanation: "सफरचंद हे फळ आहे, बाकी सर्व भूमितीय आकार आहेत."
  },
  {
    id: "2",
    level: "1st-2nd",
    question: "जर आज सोमवार असेल, तर परवा कोणता वार असेल?",
    options: ["मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार"],
    correctAnswer: 1,
    skillType: "logicalDeduction",
    explanation: "आज सोमवार, उद्या मंगळवार आणि परवा बुधवार."
  },
  {
    id: "3",
    level: "3rd-5th",
    question: "एका रांगेत १० मुले उभी आहेत. अजय डावीकडून ५ व्या क्रमांकावर आहे, तर तो उजवीकडून कितव्या क्रमांकावर असेल?",
    options: ["५ व्या", "६ व्या", "४ थ्या", "७ व्या"],
    correctAnswer: 1,
    skillType: "analyticalSkills",
    explanation: "एकूण १० मुले. अजय ५ व्या क्रमांकावर आहे, म्हणजे त्याच्या उजवीकडे ५ मुले आहेत. म्हणून तो उजवीकडून ६ व्या क्रमांकावर येईल."
  },
  {
    id: "4",
    level: "3rd-5th",
    question: "खालील संख्या मालिका पूर्ण करा: २, ४, ८, १६, ?",
    options: ["१८", "२०", "२४", "३२"],
    correctAnswer: 3,
    skillType: "patternRecognition",
    explanation: "प्रत्येक संख्या मागील संख्येच्या दुप्पट आहे. १६ x २ = ३२."
  },
  {
    id: "5",
    level: "1st-2nd",
    question: "एका झाडावर ५ पक्षी बसले होते. शिकारीने गोळी झाडली आणि १ पक्षी मेला. झाडावर किती पक्षी उरले?",
    options: ["४", "५", "०", "१"],
    correctAnswer: 2,
    skillType: "problemSolving",
    explanation: "गोळीच्या आवाजाने बाकीचे सर्व पक्षी उडून जातील, म्हणून झाडावर ० पक्षी उरतील."
  }
];

interface Props {
  onProgressUpdate: (entry: ProgressEntry) => void;
}

export function QuizModule({ onProgressUpdate }: Props) {
  const [currentLevel, setCurrentLevel] = useState<Quiz["level"] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const filteredQuizzes = sampleQuizzes.filter(q => q.level === currentLevel);

  const handleLevelSelect = (level: Quiz["level"]) => {
    setCurrentLevel(level);
    setCurrentIndex(0);
    setScore(0);
    setQuizComplete(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === filteredQuizzes[currentIndex].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < filteredQuizzes.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizComplete(true);
      // Generate a progress entry
      const entry: ProgressEntry = {
        date: new Date().toLocaleDateString('en-GB'),
        score: (score / filteredQuizzes.length) * 100,
        skills: {
          logicalDeduction: Math.min(100, 60 + score * 10),
          patternRecognition: Math.min(100, 55 + score * 12),
          analyticalSkills: Math.min(100, 50 + score * 15),
          problemSolving: Math.min(100, 65 + score * 8),
          creativity: Math.min(100, 70 + score * 5),
        }
      };
      onProgressUpdate(entry);
    }
  };

  if (!currentLevel) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-brand-primary mb-8 font-serif">तुमची इयत्ता निवडा</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {(["LKG-UKG", "1st-2nd", "3rd-5th"] as const).map(level => (
            <button
              key={level}
              onClick={() => handleLevelSelect(level)}
              className="p-8 rounded-3xl bg-white border-2 border-brand-primary/10 hover:border-brand-primary hover:shadow-lg transition-all group"
            >
              <div className="h-12 w-12 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary mx-auto mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <HelpCircle className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg">{level}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (quizComplete) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 bg-white rounded-[2.5rem] p-8 shadow-xl border border-brand-primary/5"
      >
        <div className="h-20 w-20 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mx-auto mb-6">
          <Trophy className="h-10 w-10" />
        </div>
        <h3 className="text-3xl font-bold text-brand-primary mb-2 font-serif">अभिनंदन!</h3>
        <p className="text-xl text-gray-600 mb-8">तुम्ही {filteredQuizzes.length} पैकी {score} प्रश्नांची अचूक उत्तरे दिली आहेत.</p>
        <Button onClick={() => setCurrentLevel(null)} size="lg">
          दुसरी लेव्हल निवडा
        </Button>
      </motion.div>
    );
  }

  const currentQuiz = filteredQuizzes[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <span className="text-sm font-bold text-brand-primary bg-brand-primary/10 px-4 py-1 rounded-full">
          प्रश्न {currentIndex + 1} / {filteredQuizzes.length}
        </span>
        <span className="text-sm font-bold text-brand-accent">
          लेव्हल: {currentLevel}
        </span>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-primary/5"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
          {currentQuiz.question}
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {currentQuiz.options.map((option, idx) => (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleAnswer(idx)}
              className={`p-5 rounded-2xl text-left font-medium transition-all flex items-center justify-between border-2 ${
                isAnswered
                  ? idx === currentQuiz.correctAnswer
                    ? "bg-green-50 border-green-500 text-green-700"
                    : idx === selectedOption
                    ? "bg-red-50 border-red-500 text-red-700"
                    : "bg-gray-50 border-gray-100 text-gray-400"
                  : "bg-white border-gray-100 hover:border-brand-primary hover:bg-brand-primary/5 text-gray-700"
              }`}
            >
              <span>{option}</span>
              {isAnswered && idx === currentQuiz.correctAnswer && <CheckCircle2 className="h-5 w-5" />}
              {isAnswered && idx === selectedOption && idx !== currentQuiz.correctAnswer && <XCircle className="h-5 w-5" />}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-8 p-6 rounded-2xl bg-brand-primary/5 border-l-4 border-brand-primary"
            >
              <p className="text-sm font-bold text-brand-primary mb-1">स्पष्टीकरण:</p>
              <p className="text-gray-700">{currentQuiz.explanation}</p>
              <Button onClick={nextQuestion} className="mt-6 w-full">
                पुढील प्रश्न <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
