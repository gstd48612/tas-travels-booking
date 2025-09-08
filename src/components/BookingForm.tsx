import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, User, Phone } from "lucide-react";

interface BookingFormProps {
  onSubmit: (formData: BookingFormData) => void;
}

export interface BookingFormData {
  pickupLocation: string;
  dropoffLocation: string;
  userName: string;
  phoneNumber: string;
}

export const BookingForm = ({ onSubmit }: BookingFormProps) => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: "",
    dropoffLocation: "",
    userName: "",
    phoneNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl border-0 bg-card">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Book Your Cab</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="pickup" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Pickup Location
            </Label>
            <Input
              id="pickup"
              type="text"
              placeholder="Enter pickup city/location"
              value={formData.pickupLocation}
              onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dropoff" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-destructive" />
              Drop-off Location
            </Label>
            <Input
              id="dropoff"
              type="text"
              placeholder="Enter drop-off city/location"
              value={formData.dropoffLocation}
              onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              Your Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.userName}
              onChange={(e) => handleInputChange("userName", e.target.value)}
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              required
              className="h-12 text-base"
            />
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            size="lg" 
            className="w-full h-14 text-lg font-semibold"
          >
            Book Now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};