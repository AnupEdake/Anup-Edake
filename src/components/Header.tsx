import { GraduationCap } from "lucide-react";
import { Button } from "./ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-primary/10 bg-brand-secondary/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-primary font-serif">
            श्री क्लासेस
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-brand-primary transition-colors">आमच्याबद्दल</a>
          <a href="#features" className="hover:text-brand-primary transition-colors">वैशिष्ट्ये</a>
          <a href="#ai-challenge" className="hover:text-brand-primary transition-colors">अभ्यास कोडे</a>
          <a href="#contact" className="hover:text-brand-primary transition-colors">संपर्क</a>
        </nav>
        <Button size="sm" className="hidden sm:inline-flex">
          प्रवेश घ्या
        </Button>
      </div>
    </header>
  );
}
