import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, MessageSquare, CheckCircle2, Clock, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import SEO from '@/components/SEO';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: "Please enter a valid 10-digit mobile number." }),
  problem: z.string().min(5, { message: "Please briefly describe your pain/problem." }),
  date: z.string().min(1, { message: "Please select a preferred date." }),
  time: z.string().min(1, { message: "Please select a preferred time slot." }),
});

export default function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      problem: "",
      date: "",
      time: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Appointment request sent successfully!");
      
      // WhatsApp integration for the user
      const message = `Appointment Request:\nName: ${values.name}\nPhone: ${values.phone}\nProblem: ${values.problem}\nDate: ${values.date}\nTime: ${values.time}`;
      const waUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
      
      setTimeout(() => {
        if (confirm("Would you like to send this request via WhatsApp for faster confirmation?")) {
           window.open(waUrl, '_blank');
        }
      }, 500);
    }, 1500);
  }

  return (
    <>
      <SEO 
        title="Book Appointment" 
        description="Schedule your physiotherapy session with Dr Dharmendra Tomar in Shamli. Fast recovery starts with a single step."
      />

      <section className="py-20 bg-muted/30 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Info Column */}
            <div className="flex-1 space-y-10 lg:sticky lg:top-32">
               <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Request an <span className="text-primary italic">Appointment</span></h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Fill out the form and our team will get back to you within 2-4 business hours to confirm your slot.
                  </p>
               </div>

               <div className="grid gap-6">
                  <div className="flex gap-5 items-start p-6 bg-background rounded-3xl border shadow-sm">
                     <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">Call Directly</h4>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                     </div>
                  </div>
                  <div className="flex gap-5 items-start p-6 bg-background rounded-3xl border shadow-sm">
                     <div className="bg-[#25D366]/10 p-3 rounded-full shrink-0">
                        <MessageSquare className="h-6 w-6 text-[#25D366]" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">WhatsApp Booking</h4>
                        <p className="text-muted-foreground">Available 24/7 for inquiries.</p>
                     </div>
                  </div>
                  <div className="flex gap-5 items-start p-6 bg-background rounded-3xl border shadow-sm">
                     <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">Working Hours</h4>
                        <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form Column */}
            <div className="flex-1 w-full relative">
               <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                       <Card className="rounded-[2.5rem] overflow-hidden shadow-2xl border-none">
                          <CardContent className="p-8 md:p-12">
                             <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                   <FormField
                                      control={form.control}
                                      name="name"
                                      render={({ field }) => (
                                         <FormItem>
                                            <FormLabel className="text-md font-semibold">Patient Name</FormLabel>
                                            <FormControl>
                                               <Input placeholder="Enter Full Name" {...field} className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                                            </FormControl>
                                            <FormMessage />
                                         </FormItem>
                                      )}
                                   />
                                   
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <FormField
                                         control={form.control}
                                         name="phone"
                                         render={({ field }) => (
                                            <FormItem>
                                               <FormLabel className="text-md font-semibold">Phone Number</FormLabel>
                                               <FormControl>
                                                  <Input placeholder="10-digit Mobile No." {...field} className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                                               </FormControl>
                                               <FormMessage />
                                            </FormItem>
                                         )}
                                      />
                                      <FormField
                                         control={form.control}
                                         name="date"
                                         render={({ field }) => (
                                            <FormItem>
                                               <FormLabel className="text-md font-semibold">Preferred Date</FormLabel>
                                               <FormControl>
                                                  <Input type="date" {...field} className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                                               </FormControl>
                                               <FormMessage />
                                            </FormItem>
                                         )}
                                      />
                                   </div>

                                   <FormField
                                      control={form.control}
                                      name="time"
                                      render={({ field }) => (
                                         <FormItem>
                                            <FormLabel className="text-md font-semibold">Preferred Time Slot</FormLabel>
                                            <FormControl>
                                               <select {...field} className="w-full rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-primary px-3 text-sm font-medium">
                                                  <option value="">Select Time Slot</option>
                                                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                                                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                                                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                                               </select>
                                            </FormControl>
                                            <FormMessage />
                                         </FormItem>
                                      )}
                                   />

                                   <FormField
                                      control={form.control}
                                      name="problem"
                                      render={({ field }) => (
                                         <FormItem>
                                            <FormLabel className="text-md font-semibold">Describe Your Condition</FormLabel>
                                            <FormControl>
                                               <Textarea 
                                                 placeholder="E.g. I have severe lower back pain since 3 days." 
                                                 className="rounded-xl min-h-[120px] bg-muted/30 border-none focus-visible:ring-primary"
                                                 {...field} 
                                               />
                                            </FormControl>
                                            <FormMessage />
                                         </FormItem>
                                      )}
                                   />

                                   <Button 
                                      type="submit" 
                                      className="w-full h-14 rounded-full text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]"
                                      disabled={isSubmitting}
                                   >
                                      {isSubmitting ? (
                                         <>Submitting... <Loader2 className="ml-2 h-5 w-5 animate-spin" /></>
                                      ) : (
                                         <>Request Appointment <ArrowRight className="ml-2 h-5 w-5" /></>
                                      )}
                                   </Button>
                                </form>
                             </Form>
                          </CardContent>
                       </Card>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-8 bg-white p-12 md:p-24 rounded-[3rem] shadow-2xl border"
                    >
                       <div className="h-24 w-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                          <CheckCircle2 className="h-14 w-14 text-green-500" />
                       </div>
                       <h2 className="text-4xl font-bold tracking-tight">Request Received!</h2>
                       <p className="text-xl text-muted-foreground leading-relaxed">
                          Thank you for choosing Dr. Dharmendra Tomar. We have received your request and will call you shortly to confirm the exact time.
                       </p>
                       <div className="pt-8">
                          <Button 
                            variant="outline" 
                            size="lg" 
                            className="rounded-full px-12 h-14 font-bold"
                            onClick={() => setIsSubmitted(false)}
                          >
                             Request Another Appointment
                          </Button>
                       </div>
                    </motion.div>
                  )}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20">
         <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
                <MapPin className="h-10 w-10 text-primary opacity-50" />
                <h3 className="text-2xl font-bold italic text-muted-foreground">"Healing starts with the right diagnosis and a compassionate touch. Let's get you back on your feet."</h3>
                <div className="font-bold uppercase tracking-[0.2em] text-sm">- Dr. Dharmendra Tomar</div>
            </div>
         </div>
      </section>
    </>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
