import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function StickyCallButton() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t p-4 flex gap-4"
    >
      <a
        href="tel:+919876543210"
        className="flex-grow flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-bold transition-all active:scale-95"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <a
        href="/appointment"
        className="flex-grow flex items-center justify-center bg-secondary text-secondary-foreground py-3 rounded-xl font-bold border"
      >
        Book Appointment
      </a>
    </motion.div>
  );
}
