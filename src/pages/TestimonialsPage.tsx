import { motion } from 'motion/react';
import { Star, Quote, Heart, CheckCircle2, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Kandhla, Shamli",
    treatment: "Chronic Back Pain",
    text: "I was suffering from lower back pain for 5 years. I tried many treatments but nothing worked. After 10 sessions with Dr. Tomar, I am almost 90% pain-free. He is very patient and explains everything clearly.",
    rating: 5
  },
  {
    name: "Suman Devi",
    location: "Shamli City",
    treatment: "Cervical Pain",
    text: "सर्वाइकल के दर्द की वजह से सर चकराता था। डॉक्टर तोमर की फिजियो और मशीनों से मुझे बहुत आराम मिला। अब मैं अपना घर का काम बिना किसी दर्द के कर सकती हूँ।",
    rating: 5
  },
  {
    name: "Amit Panwar",
    location: "Thana Bhawan",
    treatment: "Sports Injury (Knee)",
    text: "Recovered from a ligament injury in record time. Dr. Tomar's guidance on functional exercises helped me get back to my cricket coaching faster than expected.",
    rating: 5
  },
  {
    name: "Dr. Vinay Gupta",
    location: "Shamli",
    treatment: "Post-Surgery Rehab",
    text: "As a fellow medical professional, I highly recommend Dr. Dharmendra. His clinical approach to post-op rehabilitation is methodical and yields excellent results.",
    rating: 5
  },
  {
    name: "Mohit Malik",
    location: "Jalalabad",
    treatment: "Shoulder Stiffness",
    text: "Excellent experience. The clinic is very clean and the machines are very modern. Dr. Tomar is a true professional.",
    rating: 5
  },
  {
    name: "Karan Singh",
    location: "Nanauta",
    treatment: "Sciatica Relief",
    text: "शाशिका (Sciatica) के भारी दर्द से परेशान था। 15 दिन के कोर्स के बाद अब पैरों में भारीपन और झनझनाहट बंद हो गयी है। धन्यवाद डॉक्टर साहब।",
    rating: 4
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <SEO 
        title="Patient Testimonials - Patient Feedback" 
        description="See what our patients say about their recovery at Dr Dharmendra Tomar Advance Physiotherapy Center in Shamli. Reviews for back pain, neck pain, and more."
      />

      {/* Hero */}
      <section className="py-24 bg-muted/30 border-b overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">Real Results for <span className="text-primary italic">Real People</span></h1>
              <p className="text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                 Nothing makes us happier than seeing our patients return to their active lives. Here are some of their stories.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                  { val: "2000+", label: "Total Patients" },
                  { val: "99%", label: "Satisfaction" },
                  { val: "4.9/5", label: "Google Rating" },
                  { val: "12+", label: "Years Impact" }
               ].map((stat, i) => (
                  <div key={i} className="text-center space-y-1">
                     <div className="text-3xl md:text-4xl font-bold text-primary">{stat.val}</div>
                     <div className="text-xs uppercase font-bold tracking-widest text-muted-foreground">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
           <motion.div 
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
             variants={stagger}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
           >
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeIn}>
                   <Card className="h-full rounded-[2.5rem] border hover:shadow-xl transition-all duration-500 overflow-hidden group">
                      <CardContent className="p-10 flex flex-col h-full bg-gradient-to-b from-transparent to-muted/20">
                         <div className="flex text-yellow-500 mb-6">
                            {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                         </div>
                         <div className="relative mb-8">
                            <Quote className="h-10 w-10 text-primary opacity-10 absolute -top-4 -left-4" />
                            <p className="text-lg text-foreground italic leading-relaxed relative z-10">"{t.text}"</p>
                         </div>
                         <div className="mt-auto flex items-center gap-4 pt-8 border-t border-muted">
                            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                               <User className="h-7 w-7" />
                            </div>
                            <div>
                               <h4 className="font-bold text-lg">{t.name}</h4>
                               <p className="text-sm text-primary font-semibold">{t.treatment}</p>
                               <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{t.location}</p>
                            </div>
                         </div>
                      </CardContent>
                   </Card>
                </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* Extra Trust */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
         <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
               <Heart className="h-10 w-10 text-white fill-current" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">"We don't just treat the pain, we rehabilitate the spirit."</h2>
            <div className="flex flex-wrap justify-center gap-8">
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 opacity-50" />
                  <span className="font-semibold">Local Trust</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 opacity-50" />
                  <span className="font-semibold">Expert Ethics</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 opacity-50" />
                  <span className="font-semibold">Scientific Methods</span>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">Want to share your recovery story?</h3>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 font-bold border-primary text-primary hover:bg-primary/5">
                <a href="/contact">Leave a Review</a>
            </Button>
         </div>
      </section>
    </>
  );
}
