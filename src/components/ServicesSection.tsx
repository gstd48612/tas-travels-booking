import { Card, CardContent } from "@/components/ui/card";
import { Car, MapPin, Phone, Shield, Clock, Star } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Local Rides",
      description: "Quick and convenient rides within the city for all your daily needs"
    },
    {
      icon: MapPin,
      title: "Outstation Trips",
      description: "Comfortable long-distance travel to your favorite destinations"
    },
    {
      icon: Phone,
      title: "24×7 Support",
      description: "Round-the-clock customer support for any assistance you need"
    },
    {
      icon: Shield,
      title: "Safe & Verified Drivers",
      description: "All our drivers are background-checked and verified for your safety"
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "Punctual service that respects your time and schedule"
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Clean vehicles and professional service for a comfortable journey"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose TAS Travels?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide reliable, safe, and comfortable transportation services with a focus on customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};