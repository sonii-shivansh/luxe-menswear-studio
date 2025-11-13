import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "James Anderson",
    role: "CEO, Tech Corp",
    content: "The quality and attention to detail in every piece is exceptional. ÉLITE has become my go-to for professional attire.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Fashion Blogger",
    content: "Outstanding craftsmanship and timeless designs. The fit is perfect and the fabrics are luxurious.",
    rating: 5,
  },
  {
    name: "David Martinez",
    role: "Entrepreneur",
    content: "Finally found a brand that understands modern elegance. Every purchase has exceeded my expectations.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
            WHAT THEY SAY
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg tracking-wide">
            Trusted by discerning gentlemen worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-card p-8 lg:p-10 luxury-shadow hover:luxury-shadow-gold luxury-transition-slow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-8 text-base lg:text-lg">
                "{testimonial.content}"
              </p>
              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground tracking-wide">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
