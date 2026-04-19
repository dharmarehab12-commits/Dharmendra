import { motion } from 'motion/react';
import { Activity, Zap, CheckCircle2, ChevronDown, ListCheck, Sparkles, Wind } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const serviceDetails = [
  {
    id: "back-pain",
    title: "Back Pain Treatment",
    hindi: "कमर दर्द का इलाज",
    icon: <Activity />,
    symptoms: ["Chronic dull ache", "Sharp pain when lifting", "Radiating pain to legs (Sciatica)", "Inability to stand straight"],
    approach: "We use a combination of spinal mobilisation, core strengthening exercises, and advanced heat therapy (SWD/IFT) to release nerve compression and relax muscles.",
    benefits: ["Instant relief from stiffness", "Improved spinal posture", "Long-term core stability", "Avoidance of invasive surgery"]
  },
  {
    id: "neck-pain",
    title: "Neck Pain & Cervical",
    hindi: "गर्दन और सर्वाइकल का दर्द",
    icon: <Zap />,
    symptoms: ["Numbness in arms", "Frequent headaches", "Shoulder stiffness", "Dizziness while moving neck"],
    approach: "Individualized cervical mobilization and ergonomic advice. We use TENS and Ultrasound therapy to reduce inflammation around neck muscles.",
    benefits: ["Reduced frequent headaches", "Better range of motion", "Painless overhead movements", "Enhanced sleep quality"]
  },
  {
    id: "knee-pain",
    title: "Knee & Joint Care",
    hindi: "घुटनों और जोड़ों का दर्द",
    icon: <Sparkles />,
    symptoms: ["Pain while walking/climbing stairs", "Swelling or redness", "Grinding sensation", "Weakness in leg muscles"],
    approach: "Focus on joint alignment and quadriceps strengthening. We utilize laser therapy and manual cartilage decompression for arthritis patients.",
    benefits: ["Easy walking without support", "Postponed need for knee replacement", "Reduced inflammation", "Better mobility for seniors"]
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehab",
    hindi: "खेल की चोटें",
    icon: <Wind />,
    symptoms: ["Ligament tears (ACL/MCL)", "Muscle pulls/strains", "Tennis Elbow", "Fracture rehabilitation"],
    approach: "Phase-wise recovery starting from pain management to sport-specific functional training and agility drills.",
    benefits: ["Faster return to sports", "Prevent future injury recurrence", "Enhanced muscular endurance", "Full return of strength"]
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Physio",
    hindi: "सर्जरी के बाद फिजियोथेरेपी",
    icon: <ChevronDown />,
    symptoms: ["Inability to move after surgery", "Muscle atrophy", "Post-op swelling", "Scar tissue tightness"],
    approach: "Gentle passive movements progressing to active resistance training. Close monitoring of surgical site healing.",
    benefits: ["Restored full independence", "Minimized scar tissue impact", "Complete functional recovery", "Reduced risk of post-op complications"]
  },
  {
    id: "electrotherapy",
    title: "Advanced Electrotherapy",
    hindi: "इलेक्ट्रोथेरेपी",
    icon: <ListCheck />,
    symptoms: ["Deep rooted chronic pain", "Slow healing wounds", "Nerve damage", "Acute inflammation"],
    approach: "Using state-of-the-art machines like IFT, TENS, Ultrasound, and Class 4 Laser for deep tissue healing.",
    benefits: ["Deep tissue circulation", "Painless pain management", "Accelerated natural healing", "Non-invasive cell repair"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Physiotherapy Services in Shamli" 
        description="Comprehensive physiotherapy treatments in Shamli including Back Pain, Neck Pain, Knee Pain, Sports Injuries, and Post-Surgery Rehabilitation."
      />

      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Our Specializations</h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90">Advanced protocols and compassionate care for every condition.</p>
           </motion.div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid gap-16">
              {serviceDetails.map((service, index) => (
                <motion.div 
                  key={service.id} 
                  id={service.id} 
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                >
                   <div className="flex-1 w-full relative">
                      <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-xl border">
                         <img src={`https://picsum.photos/seed/${service.id}/800/600`} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-3xl shadow-lg border hidden md:block">
                         <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                            {service.icon}
                         </div>
                      </div>
                   </div>

                   <div className="flex-1 space-y-6">
                      <div className="space-y-1">
                        <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                        <p className="text-primary font-hindi text-lg font-medium">{service.hindi}</p>
                      </div>
                      
                      <div className="space-y-4">
                         <div>
                            <h4 className="font-bold flex items-center gap-2 text-foreground/80 mb-2">
                               <CheckCircle2 className="h-4 w-4 text-primary" /> Symptoms (लक्षण)
                            </h4>
                            <div className="flex flex-wrap gap-2">
                               {service.symptoms.map(s => (
                                 <span key={s} className="px-3 py-1 bg-secondary rounded-full text-xs font-semibold text-secondary-foreground">{s}</span>
                               ))}
                            </div>
                         </div>

                         <div>
                            <h4 className="font-bold flex items-center gap-2 text-foreground/80 mb-2">
                               <CheckCircle2 className="h-4 w-4 text-primary" /> Treatment Approach (उपचार)
                            </h4>
                            <p className="text-muted-foreground leading-relaxed italic">{service.approach}</p>
                         </div>

                         <div>
                            <h4 className="font-bold flex items-center gap-2 text-foreground/80 mb-2">
                               <CheckCircle2 className="h-4 w-4 text-primary" /> Key Benefits (लाभ)
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                               {service.benefits.map(b => (
                                 <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                                    {b}
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Advanced Techniques FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Advanced Techniques We Use</h2>
              <p className="text-muted-foreground">Learn about the science behind our effective recovery protocols.</p>
           </div>
           
           <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { title: "Manual Therapy (हाथों से उपचार)", desc: "A specialized physical treatment used by physiotherapists to modulate pain and improve joint range of motion." },
                { title: "Interferential Therapy - IFT (धारा उपचार)", desc: "Uses mid-frequency electrical stimulation for pain relief and promotion of healing in deep tissues." },
                { title: "TENS Therapy", desc: "Transcutaneous Electrical Nerve Stimulation is used consistently for non-invasive chronic pain management." },
                { title: "Clinical Exercise Therapy", desc: "Specific planned physical activities to reduce pain, improve function, or maintain health." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-background px-6 rounded-2xl border">
                  <AccordionTrigger className="text-lg font-bold hover:no-underline">{faq.title}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
           </Accordion>
        </div>
      </section>

      {/* Book Now Banner */}
      <section className="py-20 mb-10">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Unsure which treatment is right for you?</h2>
              <p className="text-muted-foreground text-lg italic">"A consultation is the first step toward understanding your body's needs. Let's find your path to recovery together."</p>
              <div className="flex justify-center gap-4">
                 <button className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                    Free Consultation Call
                 </button>
              </div>
           </div>
        </div>
      </section>
    </>
  );
}
