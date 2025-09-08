import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ConfirmationMessageProps {
  onNewBooking: () => void;
}

export const ConfirmationMessage = ({ onNewBooking }: ConfirmationMessageProps) => {
  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl border-0 bg-card">
      <CardContent className="p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h3>
          <p className="text-muted-foreground text-lg">
            Thank you! We will contact you shortly to confirm your booking.
          </p>
        </div>
        
        <div className="bg-accent p-4 rounded-lg mb-6">
          <p className="text-sm text-accent-foreground">
            Our team will reach out within <strong>15 minutes</strong> to confirm your ride details and provide the driver information.
          </p>
        </div>

        <Button 
          onClick={onNewBooking}
          variant="outline" 
          size="lg" 
          className="w-full"
        >
          Book Another Ride
        </Button>
      </CardContent>
    </Card>
  );
};