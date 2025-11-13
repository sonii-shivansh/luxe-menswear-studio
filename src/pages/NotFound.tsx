import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";
import gsap from "gsap";

const NotFound = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-charcoal rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div ref={contentRef} className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl lg:text-[12rem] font-light tracking-tighter text-foreground/10 mb-4">
              404
            </h1>
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
              PAGE NOT FOUND
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="gap-2 tracking-wider h-14 px-10 shimmer w-full sm:w-auto">
                  <Home className="h-5 w-5" />
                  BACK TO HOME
                </Button>
              </Link>
              <Link to="/shop">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 tracking-wider h-14 px-10 hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition-slow w-full sm:w-auto"
                >
                  SHOP COLLECTION
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-16 pt-12 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">
                Popular categories
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/shop?category=shirts">
                  <Button variant="outline" size="sm" className="tracking-wider hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition">
                    Shirts
                  </Button>
                </Link>
                <Link to="/shop?category=pants">
                  <Button variant="outline" size="sm" className="tracking-wider hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition">
                    Pants
                  </Button>
                </Link>
                <Link to="/shop?category=outerwear">
                  <Button variant="outline" size="sm" className="tracking-wider hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition">
                    Outerwear
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
