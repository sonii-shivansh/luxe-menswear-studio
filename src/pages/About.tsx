import { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedText } from "@/components/AnimatedText";
import heroBanner from "@/assets/hero-banner.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Heart, Leaf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero parallax
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // Content fade-in animations
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[50vh] lg:h-[70vh] overflow-hidden">
          <img
            ref={heroImageRef}
            src={heroBanner}
            alt="About ÉLITE"
            className="w-full h-[120%] object-cover"
            style={{ transform: 'translateY(-10%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center">
            <AnimatedText className="text-5xl lg:text-7xl font-light tracking-tight text-white">
              ABOUT ÉLITE
            </AnimatedText>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto space-y-16">
              <div ref={addToRefs}>
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-8">
                  Our Story
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-6">
                  Founded with a vision to redefine men's fashion, ÉLITE represents the perfect 
                  intersection of timeless elegance and contemporary style. Since our inception, 
                  we've been committed to crafting pieces that transcend fleeting trends and become 
                  essential elements of a gentleman's wardrobe.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  Every garment tells a story of meticulous craftsmanship, from the selection of 
                  premium fabrics to the final stitch. We believe that true luxury lies not in excess, 
                  but in the perfect balance of quality, comfort, and style.
                </p>
              </div>

              <div ref={addToRefs}>
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-8">
                  Our Philosophy
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-6">
                  We embrace the philosophy that clothing should empower and inspire confidence. 
                  Each piece in our collection is designed with the modern gentleman in mind—one who 
                  values quality, appreciates fine details, and understands that true style is timeless.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  Our commitment extends beyond aesthetics. We believe in creating garments that respect 
                  both the wearer and the environment, ensuring that luxury and responsibility go hand in hand.
                </p>
              </div>

              <div ref={addToRefs}>
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-8">
                  Craftsmanship
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  Our commitment to excellence is reflected in every aspect of our production process. 
                  We partner with skilled artisans and use only the finest materials sourced from around 
                  the world. From Italian fabrics to precision tailoring, every detail is carefully 
                  considered to ensure uncompromising quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-32 bg-muted relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={addToRefs} className="mb-16">
              <AnimatedText className="text-4xl lg:text-5xl font-light tracking-tight text-foreground text-center">
                Our Values
              </AnimatedText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
              <div ref={addToRefs} className="text-center space-y-6 group">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 luxury-transition-slow">
                  <Award className="h-10 w-10 text-accent group-hover:text-accent-foreground luxury-transition-slow" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-light tracking-wide text-foreground">
                  Quality
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We never compromise on the quality of our materials or craftsmanship, 
                  ensuring each piece meets our exacting standards.
                </p>
              </div>
              <div ref={addToRefs} className="text-center space-y-6 group">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 luxury-transition-slow">
                  <Leaf className="h-10 w-10 text-accent group-hover:text-accent-foreground luxury-transition-slow" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-light tracking-wide text-foreground">
                  Sustainability
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We're committed to responsible practices that respect both people and 
                  the planet, from ethical sourcing to sustainable production.
                </p>
              </div>
              <div ref={addToRefs} className="text-center space-y-6 group">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 luxury-transition-slow">
                  <Heart className="h-10 w-10 text-accent group-hover:text-accent-foreground luxury-transition-slow" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-light tracking-wide text-foreground">
                  Integrity
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Transparency and honesty guide everything we do, from our business 
                  practices to our relationships with customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
