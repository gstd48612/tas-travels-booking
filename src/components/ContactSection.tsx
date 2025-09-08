import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919876543210?text=Hi, I would like to book a cab", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+919876543210", "_self");
  };

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Need immediate assistance? Contact us directly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <Button 
                variant="link" 
                onClick={handlePhoneClick}
                className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
              >
                +91 98765 43210
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-success/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <Button 
                variant="link" 
                onClick={handleWhatsAppClick}
                className="text-success hover:text-success/80 p-0 h-auto font-medium"
              >
                Chat Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-destructive/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <Button 
                variant="link" 
                onClick={() => window.open("mailto:info@tastravels.com", "_self")}
                className="text-destructive hover:text-destructive/80 p-0 h-auto font-medium text-sm"
              >
                info@tastravels.com
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-warning/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                Serving All Major Cities
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Available 24/7 for your convenience
          </p>
        </div>
      </div>
    </section>
  );
};