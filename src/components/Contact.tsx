import { MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "./ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
              आजच संपर्क करा!
            </h2>
            <p className="text-xl text-white/80 mb-12">
              प्रवेश सुरू आहे! तुमच्या पाल्याच्या उज्वल भविष्यासाठी श्री क्लासेसमध्ये आजच नाव नोंदवा.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 font-serif">पत्ता</h4>
                  <p className="text-white/70">श्री क्लासेस, KNP नगर, रोड नं. ५, उरण इस्लामपूर</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 font-serif">संपर्क</h4>
                  <p className="text-white/70">७७५६०२५७६७</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-gray-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 font-serif text-brand-primary">चौकशी करा</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">विद्यार्थ्याचे नाव</label>
                  <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none" placeholder="नाव लिहा" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">इयत्ता</label>
                  <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none" placeholder="उदा. ४ थी" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">मोबाईल नंबर</label>
                <input type="tel" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none" placeholder="नंबर लिहा" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">संदेश</label>
                <textarea className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none min-h-[100px]" placeholder="तुमचा संदेश..." />
              </div>
              <Button className="w-full py-4 text-lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                संदेश पाठवा
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
