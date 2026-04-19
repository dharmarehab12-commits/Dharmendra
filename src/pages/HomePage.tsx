import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, CheckCircle2, Phone, Calendar, ArrowRight, Activity, Zap, Users, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

const services = [
  {
    title: "Back Pain Treatment",
    desc: "Advanced spinal care for chronic and acute back issues.",
    icon: <Activity className="h-6 w-6 text-primary" />,
    link: "/services#back-pain"
  },
  {
    title: "Neck Pain Relief",
    desc: "Specialized therapy for cervical pain and stiffness.",
    icon: <Zap className="h-6 w-6 text-primary" />,
    link: "/services#neck-pain"
  },
  {
    title: "Sports Injury Rehab",
    desc: "Swift recovery programs for athletes and sports enthusiasts.",
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    link: "/services#sports-injury"
  }
];

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Best Physiotherapy Clinic in Shamli" 
        description="Dr Dharmendra Tomar Advance Physiotherapy Center offers expert care for back pain, neck pain, and sports injuries in Shamli, UP. Book your appointment today."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="flex-1 space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border text-primary font-semibold text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now Serving Shamli & Nearby Areas
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Move Better. <br />
                <span className="text-primary">Live Pain-Free.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Expert Physiotherapy care by <span className="font-semibold text-foreground">Dr Dharmendra Tomar</span>. 
                Using advanced techniques to help you recover faster and return to your daily life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button asChild size="lg" className="rounded-full px-8 text-lg font-semibold py-7">
                  <Link to="/appointment">
                    Book Appointment <Calendar className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg font-semibold py-7">
                  <a href="tel:+919876543210">
                    Call Now <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                       <img src={`https://picsum.photos/seed/patient${i}/100/100`} alt="Patient" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-500 mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="font-medium text-muted-foreground">Trusted by 2,000+ Happy Patients</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-[500px] mx-auto">
                <img 
                  src="https://picsum.photos/seed/physio/800/1000" 
                  alt="Physiotherapy treatment" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                     <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold leading-none">12+ Years</div>
                    <div className="text-sm text-muted-foreground uppercase font-semibold">Experience</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                 <div className="text-center">
                    <div className="text-3xl font-bold leading-none">99%</div>
                    <div className="text-xs uppercase font-semibold mt-1 opacity-80">Recovery Rate</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Features */}
      <section className="py-20 bg-secondary/30 border-y">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex gap-5">
                 <div className="bg-white p-4 rounded-2xl shadow-sm border h-fit">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                 </div>
                 <div>
                    <h3 className="font-bold text-xl mb-2">Qualified Experts</h3>
                    <p className="text-muted-foreground">Certified professionals lead by Dr Dharmendra Tomar with years of clinical expertise.</p>
                 </div>
              </div>
              <div className="flex gap-5">
                 <div className="bg-white p-4 rounded-2xl shadow-sm border h-fit">
                    <Zap className="h-7 w-7 text-primary" />
                 </div>
                 <div>
                    <h3 className="font-bold text-xl mb-2">Advanced Equipment</h3>
                    <p className="text-muted-foreground">Latest electrotherapy and rehabilitation technology for precise and painless treatment.</p>
                 </div>
              </div>
              <div className="flex gap-5">
                 <div className="bg-white p-4 rounded-2xl shadow-sm border h-fit">
                    <HeartPulse className="h-7 w-7 text-primary" />
                 </div>
                 <div>
                    <h3 className="font-bold text-xl mb-2">Patient-First Care</h3>
                    <p className="text-muted-foreground">Personalized treatment plans tailored to your specific pain points and recovery goals.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm italic">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Our Core Services</h3>
            <p className="text-muted-foreground text-lg">Specialized treatments designed to restore mobility and eliminate pain.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-none bg-muted/50 overflow-hidden rounded-3xl">
                  <CardContent className="p-8">
                    <div className="mb-6 h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                    <p className="text-muted-foreground mb-8 line-clamp-2">{service.desc}</p>
                    <Link to={service.link} className="flex items-center text-primary font-bold group/link">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">View All Services <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Doctor Intro Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 max-w-md">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl relative group">
                <img 
                  src="https://picsum.photos/seed/doctor/600/800" 
                  alt="Dr Dharmendra Tomar" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm">The Expert Behind The Care</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Meet Dr. Dharmendra Tomar</h3>
              <p className="text-xl opacity-90 leading-relaxed font-light">
                "For over a decade, my mission has been simple: to provide accessible, high-quality physiotherapy care to the people of Shamli. I believe in movement as medicine and focus on root-cause elimination rather than just symptomatic relief."
              </p>
              <div className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-6 bg-primary-foreground/30 rounded-full" />
                  <span className="font-medium text-lg">B.P.T, M.P.T (Orthopaedics)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-6 bg-primary-foreground/30 rounded-full" />
                  <span className="font-medium text-lg">12+ Years Clinical Experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-6 bg-primary-foreground/30 rounded-full" />
                  <span className="font-medium text-lg">Specialist in Manual & Electrotherapy</span>
                </li>
              </div>
              <div className="pt-6">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                  <Link to="/about">More About Doctor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Common Questions</h2>
              <p className="text-muted-foreground mt-4">Understanding physiotherapy and your recovery journey.</p>
           </div>
           <div className="grid gap-6">
              {[
                { q: "How many sessions will I need?", a: "This depends on the severity of your condition. After an initial assessment, Dr. Tomar will provide a personalized recovery plan usually ranging from 3 to 10 sessions." },
                { q: "Is physiotherapy painful?", a: "While some techniques may feel intense, our goal is to improve your comfort. We use advanced electrotherapy to minimize pain during and after sessions." },
                { q: "Do I need a doctor's referral?", a: "No, you can directly book an appointment for an assessment. We also work closely with referring surgeons and GPs for post-surgery rehabilitation." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-muted/30 rounded-3xl border">
                  <h4 className="font-bold text-xl mb-4 text-primary">Q: {item.q}</h4>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mb-10">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080')] opacity-5 mix-blend-overlay" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Start Your Recovery Journey Today</h2>
              <p className="text-xl opacity-90">Don't let pain hold you back. Expert care is just a phone call away.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-12 py-8 text-xl font-bold">
                  <Link to="/appointment">Book Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-12 py-8 text-xl font-bold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="tel:+919876543210">Call: +91 98765 43210</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
