import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              CONTACT US
            </h1>
            <p className="text-muted-foreground text-sm lg:text-base tracking-wide">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-foreground mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm tracking-wider">
                    NAME
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="mt-2"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm tracking-wider">
                    EMAIL
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm tracking-wider">
                    SUBJECT
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    className="mt-2"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm tracking-wider">
                    MESSAGE
                  </Label>
                  <Textarea
                    id="message"
                    required
                    className="mt-2 min-h-[150px]"
                    placeholder="Tell us more..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full tracking-wider">
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-foreground mb-6">
                  Get in touch
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-8">
                  Have a question about our products or need styling advice? Our team is here 
                  to help you find the perfect pieces for your wardrobe.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">EMAIL</h3>
                    <a
                      href="mailto:info@elitemenswear.com"
                      className="text-sm text-muted-foreground hover:text-accent luxury-transition"
                    >
                      info@elitemenswear.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">PHONE</h3>
                    <a
                      href="tel:+11234567890"
                      className="text-sm text-muted-foreground hover:text-accent luxury-transition"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">ADDRESS</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Fashion Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-sm font-medium text-foreground mb-3">BUSINESS HOURS</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
