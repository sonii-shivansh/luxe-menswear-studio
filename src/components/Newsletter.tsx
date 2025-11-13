import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Successfully subscribed!", {
        description: "You'll receive our latest updates and exclusive offers.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-accent/20 rounded-full flex items-center justify-center">
            <Mail className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            JOIN THE ÉLITE
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Subscribe to receive exclusive access to new collections, styling tips, and special offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-14 bg-primary-foreground text-primary flex-1 text-base"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-14 px-10 bg-accent text-accent-foreground hover:bg-accent/90 tracking-wider shimmer"
            >
              {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
            </Button>
          </form>
          
          <p className="text-sm text-primary-foreground/60 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
