import { GraduationCap, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-brand-secondary border-t border-brand-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-brand-primary font-serif">
              श्री क्लासेस
            </span>
          </div>
          
          <p className="text-sm text-gray-500 flex items-center gap-1">
            विद्यार्थ्यांच्या उज्ज्वल भविष्यासाठी <Heart className="h-4 w-4 text-red-500 fill-red-500" /> श्री क्लासेस
          </p>
          
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} श्री क्लासेस. सर्व हक्क राखीव.
          </div>
        </div>
      </div>
    </footer>
  );
}
