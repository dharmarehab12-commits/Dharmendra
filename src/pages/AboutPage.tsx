import { motion } from 'motion/react';
import { CheckCircle2, Award, BookOpen, Heart, ShieldCheck, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Dr Dharmendra Tomar" 
        description="Learn more about Dr Dharmendra Tomar, a leading physiotherapist in Shamli with 12+ years of experience in orthopaedic rehabilitation and sports therapy."
      />

      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div className="space-y-6" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Empowering Lives Through <span className="text-primary italic">Movement</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Meet Dr. Dharmendra Tomar, the founder and lead physiotherapist of Shamli's most trusted rehabilitation center. With a deep commitment to patient recovery, he combines years of clinical wisdom with state-of-the-art technology.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="p-4 bg-background rounded-2xl border shadow-sm">
                    <div className="text-3xl font-bold text-primary">12+</div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Years Experience</div>
                 </div>
                 <div className="p-4 bg-background rounded-2xl border shadow-sm">
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Happy Patients</div>
                 </div>
              </div>
            </motion.div>
            <motion.div className="relative" variants={fadeIn}>
              <div className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative z-10 aspect-[4/5] max-w-[450px] mx-auto">
                <img 
                   src="https://picsum.photos/seed/dr-profile/600/800"
                   alt="Dr Dharmendra Tomar"
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                 <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Education & Expertise</h2>
                 <p className="text-muted-foreground text-lg">
                    Dr. Tomar holds a Bachelor of Physiotherapy (B.P.T) and a Master of Physiotherapy (M.P.T) specializing in Orthopaedics. His academic excellence is matched only by his hands-on dedication to his craft.
                 </p>
              </div>
              
              <ul className="grid gap-6">
                 {[
                   { icon: <Award />, title: "Specialization", text: "Master of Physiotherapy (Orthopaedics) with clinical honors." },
                   { icon: <BookOpen />, title: "Ongoing Learning", text: "Regularly attends national seminars on Advanced Manual Therapy & Kinesio Taping." },
                   { icon: <ShieldCheck />, title: "Certified Excellence", text: "Recognized as a leading practitioner in local medical associations." }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-5 items-start">
                     <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary uppercase">
                       {item.icon}
                     </div>
                     <div>
                       <h4 className="font-bold text-lg">{item.title}</h4>
                       <p className="text-muted-foreground">{item.text}</p>
                     </div>
                   </li>
                 ))}
              </ul>
            </div>

            <div className="space-y-8">
               <div className="space-y-4">
                  <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Mission & Vision</h2>
                  <p className="text-muted-foreground text-lg">
                     Our clinic is more than just a medical facility; it's a place for healing and hope. We aim to bring global standards of physiotherapy to the local community in Shamli.
                  </p>
               </div>

               <div className="grid gap-4">
                  <Card className="rounded-3xl border-none shadow-sm bg-muted/50 overflow-hidden">
                    <CardContent className="p-8">
                       <div className="flex items-center gap-3 mb-4 text-primary">
                          <Target className="h-6 w-6" />
                          <h4 className="text-xl font-bold uppercase tracking-widest text-sm italic">Our Mission</h4>
                       </div>
                       <p className="text-muted-foreground leading-relaxed italic">
                          "To reduce pain and restore function through personalized evidence-based physiotherapy, making every patient's life healthier and more active."
                       </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="rounded-3xl border-none shadow-sm bg-muted/50 overflow-hidden">
                    <CardContent className="p-8">
                       <div className="flex items-center gap-3 mb-4 text-primary">
                          <Heart className="h-6 w-6" />
                          <h4 className="text-xl font-bold uppercase tracking-widest text-sm italic">Our Philosophy</h4>
                       </div>
                       <p className="text-muted-foreground leading-relaxed italic">
                          "We believe in a holistic approach, considering not just the injury but the person, ensuring long-term wellness over short-term fixes."
                       </p>
                    </CardContent>
                  </Card>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Patients Trust Us</h2>
              <p className="text-muted-foreground">Building relationships based on results and compassion.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Advanced Techniques", text: "We use the latest electrotherapy and manual therapy methods for effective results." },
                { title: "Personalized Care", text: "No one-size-fits-all treatments. Every patient gets a customized recovery roadmap." },
                { title: "Long-term Results", text: "We focus on teaching you self-management and strengthening to prevent recurrence." }
              ].map((reason, i) => (
                <div key={i} className="bg-background p-10 rounded-[2.5rem] shadow-sm border text-center space-y-4">
                   <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                   </div>
                   <h4 className="text-xl font-bold">{reason.title}</h4>
                   <p className="text-muted-foreground leading-relaxed">{reason.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
}
