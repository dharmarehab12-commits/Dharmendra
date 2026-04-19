import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, HeartPulse, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Clinic Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <HeartPulse className="text-primary-foreground h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Dr Tomar's Physio</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing expert physiotherapy care in Shamli. Dedicated to your recovery, pain relief, and better health through advanced techniques.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors border shadow-sm">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors border shadow-sm">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors border shadow-sm">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Dr</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm">Patient Reviews</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Our Specialities</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Back Pain Treatment</li>
              <li className="text-muted-foreground text-sm">Neck Pain Relief</li>
              <li className="text-muted-foreground text-sm">Sports Injury Rehab</li>
              <li className="text-muted-foreground text-sm">Post-Surgery recovery</li>
              <li className="text-muted-foreground text-sm">Knee & Joint Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Dr Dharmendra Tomar Center, Main Market, Shamli, Uttar Pradesh, 247776
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">info@drtomarphysio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Dr Dharmendra Tomar Advance Physiotherapy Center. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-primary underline-offset-4 hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
