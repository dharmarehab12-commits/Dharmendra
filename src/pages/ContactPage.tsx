import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ContactPage() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110196.44431805566!2d77.221585!3d29.444747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c29a8f4fffff7%3A0x7d94f9e1fc08c02!2sShamli%2C%20Uttar%20Pradesh%20247776!5e0!3m2!1sen!2sin!4v1713500000000!5m2!1sen!2sin";

  return (
    <>
      <SEO 
        title="Contact Us - Clinic in Shamli" 
        description="Find Dr Dharmendra Tomar Advance Physiotherapy Center in Shamli, UP. Address, phone number, and working hours for the best physio clinic in the area."
      />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary italic">Get In Touch</h1>
              <p className="text-xl text-muted-foreground">We are here to answer your questions and help you start your recovery journey.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <Card className="rounded-[2.5rem] p-4 border-none shadow-sm h-full">
                 <CardContent className="p-8 space-y-4 text-center">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                       <Phone className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-widest text-sm">Call Us</h3>
                    <p className="text-muted-foreground">Talk to our front desk for immediate booking.</p>
                    <a href="tel:+919876543210" className="block text-2xl font-bold text-primary font-mono">+91 98765 43210</a>
                 </CardContent>
              </Card>

              <Card className="rounded-[2.5rem] p-4 border-none shadow-sm h-full underline-offset-4">
                 <CardContent className="p-8 space-y-4 text-center">
                    <div className="h-16 w-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto text-[#25D366]">
                       <MessageSquare className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-widest text-sm">WhatsApp</h3>
                    <p className="text-muted-foreground">Send us a message for quick inquiries.</p>
                    <a href="https://wa.me/+919876543210" className="block text-2xl font-bold text-[#25D366] font-mono">Chat Now</a>
                 </CardContent>
              </Card>

              <Card className="rounded-[2.5rem] p-4 border-none shadow-sm h-full">
                 <CardContent className="p-8 space-y-4 text-center">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                       <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-widest text-sm">Email Us</h3>
                    <p className="text-muted-foreground">For detailed health records or collaboration.</p>
                    <a href="mailto:info@drtomarphysio.com" className="block text-lg font-bold text-primary break-all">info@drtomarphysio.com</a>
                 </CardContent>
              </Card>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
              <div className="lg:col-span-2 space-y-8">
                 <div className="bg-background p-10 rounded-[3rem] border shadow-sm space-y-8">
                    <div className="space-y-6">
                       <h3 className="text-2xl font-bold flex items-center gap-3">
                          <MapPin className="text-primary h-6 w-6" /> Location
                       </h3>
                       <p className="text-muted-foreground text-lg leading-relaxed">
                          Dr Dharmendra Tomar Advance Physiotherapy Center,<br />
                          Main Market, Near City Square,<br />
                          Shamli, Uttar Pradesh, 247776
                       </p>
                       <Button asChild variant="outline" className="rounded-full">
                          <a href="https://maps.google.com" target="_blank" rel="noreferrer">Open in Google Maps <ExternalLink className="ml-2 h-4 w-4" /></a>
                       </Button>
                    </div>

                    <div className="space-y-6 pt-6 border-t">
                       <h3 className="text-2xl font-bold flex items-center gap-3">
                          <Clock className="text-primary h-6 w-6" /> Working Hours
                       </h3>
                       <div className="space-y-3">
                          <div className="flex justify-between items-center text-lg">
                             <span className="font-medium">Monday - Saturday</span>
                             <span className="text-primary font-bold">9 AM - 8 PM</span>
                          </div>
                          <div className="flex justify-between items-center text-lg">
                             <span className="font-medium text-muted-foreground">Sunday</span>
                             <span className="bg-destructive/10 text-destructive px-3 py-1 rounded-full text-xs font-bold uppercase">Closed</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-3">
                 <div className="h-full min-h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative bg-muted animate-pulse group">
                    <iframe 
                       src={mapUrl}
                       className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                       allowFullScreen 
                       loading="lazy" 
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Clinic Location Map"
                    ></iframe>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-12 md:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
               <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to live pain-free?</h2>
               <p className="text-xl opacity-90">Schedule your consultation with Shamli's finest physiotherapist.</p>
               <div className="pt-4">
                  <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-16 text-xl font-bold shadow-xl shadow-black/20">
                     <a href="/appointment">Book Appointment Now</a>
                  </Button>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
