import { useState, useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingForm, BookingFormData } from "@/components/BookingForm";
import { ConfirmationMessage } from "@/components/ConfirmationMessage";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookingSubmit = async (formData: BookingFormData) => {
    try {
      // Here you would typically send data to your backend/email service
      // For now, we'll simulate the submission
      
      console.log("Booking submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmittedData(formData);
      setShowConfirmation(true);
      
      toast({
        title: "Booking Confirmed!",
        description: "We will contact you shortly to confirm your booking.",
        variant: "default",
      });

      // In a real app, you would send this data to your backend
      // Example: await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(formData) })
      
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleNewBooking = () => {
    setShowConfirmation(false);
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onBookNowClick={scrollToBooking} />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Booking Section */}
      <section ref={bookingRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Your Ride
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick and easy booking in just a few steps
            </p>
          </div>
          
          {showConfirmation ? (
            <ConfirmationMessage onNewBooking={handleNewBooking} />
          ) : (
            <BookingForm onSubmit={handleBookingSubmit} />
          )}
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
