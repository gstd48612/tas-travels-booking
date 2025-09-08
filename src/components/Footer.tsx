import { Car, Shield, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">TAS Travels</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Trustworthy And Safe Travels
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Clock className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Local City Rides</li>
              <li>Outstation Travel</li>
              <li>Airport Transfers</li>
              <li>Corporate Bookings</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@tastravels.com</p>
              <p>Available 24×7</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2025 TAS Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};