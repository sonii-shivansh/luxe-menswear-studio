import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import gsap from "gsap";

const NotFound = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-charcoal rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div ref={containerRef} className="text-center px-4 relative z-10">
        <div className="mb-8">
          <h1 className="text-[150px] sm:text-[200px] lg:text-[250px] font-light tracking-tighter text-foreground leading-none">
            404
          </h1>
        </div>
        
        <div ref={textRef} className="space-y-6 max-w-lg mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
            PAGE NOT FOUND
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed px-4">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/">
              <Button 
                size="lg" 
                className="gap-2 tracking-wider h-14 px-8 shimmer hover:scale-105 luxury-transition-slow w-full sm:w-auto"
              >
                <Home className="h-5 w-5" />
                GO HOME
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="gap-2 tracking-wider h-14 px-8 hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition-slow w-full sm:w-auto"
            >
              <ArrowLeft className="h-5 w-5" />
              GO BACK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
