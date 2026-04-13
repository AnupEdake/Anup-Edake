export interface SkillMetrics {
  logicalDeduction: number;
  patternRecognition: number;
  analyticalSkills: number;
  problemSolving: number;
  creativity: number;
}

export interface ProgressEntry {
  date: string;
  score: number;
  skills: SkillMetrics;
}

export interface Quiz {
  id: string;
  level: "LKG-UKG" | "1st-2nd" | "3rd-5th";
  question: string;
  options: string[];
  correctAnswer: number;
  skillType: keyof SkillMetrics;
  explanation: string;
}

export interface StudentProfile {
  name: string;
  grade: string;
  progress: ProgressEntry[];
}
