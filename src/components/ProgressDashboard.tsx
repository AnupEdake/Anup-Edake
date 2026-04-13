import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { ProgressEntry, SkillMetrics } from '../types';
import { motion } from 'motion/react';
import { TrendingUp, Award, Target, AlertCircle } from 'lucide-react';

interface Props {
  data: ProgressEntry[];
}

export function ProgressDashboard({ data }: Props) {
  const latestEntry = data[data.length - 1];
  
  const radarData = [
    { subject: 'तार्किक विचार', A: latestEntry.skills.logicalDeduction, fullMark: 100 },
    { subject: 'नमुना ओळख', A: latestEntry.skills.patternRecognition, fullMark: 100 },
    { subject: 'विश्लेषण', A: latestEntry.skills.analyticalSkills, fullMark: 100 },
    { subject: 'समस्या निवारण', A: latestEntry.skills.problemSolving, fullMark: 100 },
    { subject: 'सर्जनशीलता', A: latestEntry.skills.creativity, fullMark: 100 },
  ];

  const getInsights = () => {
    const skills = latestEntry.skills;
    const sortedSkills = Object.entries(skills).sort(([, a], [, b]) => b - a);
    const strength = sortedSkills[0][0];
    const improvement = sortedSkills[sortedSkills.length - 1][0];

    const skillNames: Record<string, string> = {
      logicalDeduction: 'तार्किक विचार',
      patternRecognition: 'नमुना ओळख',
      analyticalSkills: 'विश्लेषणात्मक कौशल्य',
      problemSolving: 'समस्या निवारण',
      creativity: 'सर्जनशीलता'
    };

    return {
      strength: skillNames[strength],
      improvement: skillNames[improvement]
    };
  };

  const insights = getInsights();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Radar Chart for Skill Balance */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-6 rounded-[2rem] shadow-sm border border-brand-primary/5"
        >
          <h3 className="text-xl font-bold text-brand-primary mb-6 font-serif">कौशल्य विश्लेषण (Skill Analysis)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="प्रगती"
                  dataKey="A"
                  stroke="#5A5A40"
                  fill="#5A5A40"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Line Chart for Progress Over Time */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-[2rem] shadow-sm border border-brand-primary/5"
        >
          <h3 className="text-xl font-bold text-brand-primary mb-6 font-serif">प्रगतीचा आलेख (Progress Trend)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#D4AF37" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#D4AF37' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-brand-primary/5 p-5 rounded-2xl border border-brand-primary/10">
          <div className="flex items-center gap-3 mb-2 text-brand-primary">
            <Award className="h-5 w-5" />
            <span className="font-bold font-serif">सर्वात मोठी ताकद</span>
          </div>
          <p className="text-lg font-medium">{insights.strength}</p>
        </div>

        <div className="bg-brand-accent/5 p-5 rounded-2xl border border-brand-accent/10">
          <div className="flex items-center gap-3 mb-2 text-brand-accent">
            <AlertCircle className="h-5 w-5" />
            <span className="font-bold font-serif">सुधारणेची गरज</span>
          </div>
          <p className="text-lg font-medium">{insights.improvement}</p>
        </div>

        <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
          <div className="flex items-center gap-3 mb-2 text-green-600">
            <TrendingUp className="h-5 w-5" />
            <span className="font-bold font-serif">सरासरी गुण</span>
          </div>
          <p className="text-2xl font-bold">{Math.round(data.reduce((acc, curr) => acc + curr.score, 0) / data.length)}%</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
          <div className="flex items-center gap-3 mb-2 text-blue-600">
            <Target className="h-5 w-5" />
            <span className="font-bold font-serif">पूर्ण केलेली कोडी</span>
          </div>
          <p className="text-2xl font-bold">{data.length * 5}</p>
        </div>
      </div>
    </div>
  );
}
