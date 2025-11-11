import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import gsap from "gsap";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }
      );
    }

    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-charcoal rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimatedText className="text-5xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
              CONTACT US
            </AnimatedText>
            <p className="text-muted-foreground text-base lg:text-lg tracking-wide">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div ref={formRef}>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-foreground mb-8">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm tracking-wider font-medium mb-2 block">
                    NAME
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="h-12 luxury-transition focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm tracking-wider font-medium mb-2 block">
                    EMAIL
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="h-12 luxury-transition focus:ring-2 focus:ring-accent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm tracking-wider font-medium mb-2 block">
                    SUBJECT
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    className="h-12 luxury-transition focus:ring-2 focus:ring-accent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm tracking-wider font-medium mb-2 block">
                    MESSAGE
                  </Label>
                  <Textarea
                    id="message"
                    required
                    className="min-h-[180px] luxury-transition focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 tracking-wider shimmer luxury-transition-slow hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-10">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-foreground mb-6">
                  Get in touch
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-10">
                  Have a question about our products or need styling advice? Our team is here 
                  to help you find the perfect pieces for your wardrobe.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5 p-6 bg-muted/30 rounded-lg luxury-shadow-subtle hover:luxury-shadow-gold luxury-transition-slow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2 tracking-wider">EMAIL</h3>
                    <a
                      href="mailto:info@elitemenswear.com"
                      className="text-base text-muted-foreground hover:text-accent luxury-transition"
                    >
                      info@elitemenswear.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-muted/30 rounded-lg luxury-shadow-subtle hover:luxury-shadow-gold luxury-transition-slow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2 tracking-wider">PHONE</h3>
                    <a
                      href="tel:+11234567890"
                      className="text-base text-muted-foreground hover:text-accent luxury-transition"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-muted/30 rounded-lg luxury-shadow-subtle hover:luxury-shadow-gold luxury-transition-slow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2 tracking-wider">ADDRESS</h3>
                    <p className="text-base text-muted-foreground">
                      123 Fashion Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-muted/30 rounded-lg luxury-shadow-subtle hover:luxury-shadow-gold luxury-transition-slow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2 tracking-wider">BUSINESS HOURS</h3>
                    <div className="space-y-1 text-base text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
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
