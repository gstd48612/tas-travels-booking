import { Button } from "@/components/ui/button";
import { Car, Shield, Clock, Users } from "lucide-react";
import heroTaxi from "@/assets/hero-taxi.jpg";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-b from-background to-accent min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">TAS Travels</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
                  Trustworthy And Safe Travels
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Your Partner for Local & Outstation Cabs
              </p>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Local Rides</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Verified Drivers</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">24×7 Support</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Outstation Trips</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={onBookNowClick}
                variant="hero" 
                size="lg" 
                className="text-xl px-12 py-6 h-auto"
              >
                Book Your Cab Now
              </Button>
              <p className="text-sm text-muted-foreground">
                Safe • Reliable • Affordable
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroTaxi} 
                alt="Professional taxi service"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-warning/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};