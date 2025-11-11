import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Product3DCard } from "@/components/Product3DCard";
import { Hero3D } from "@/components/Hero3D";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedText } from "@/components/AnimatedText";
import heroBanner from "@/assets/hero-banner.jpg";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import productBlazer1 from "@/assets/product-blazer-1.jpg";
import productPants1 from "@/assets/product-pants-1.jpg";
import productShirt2 from "@/assets/product-shirt-2.jpg";
import productCoat1 from "@/assets/product-coat-1.jpg";
import productJacket1 from "@/assets/product-jacket-1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  { id: "1", name: "Premium Black Shirt", price: 89.99, image: productShirt1, category: "Shirts" },
  { id: "2", name: "Navy Blazer", price: 249.99, image: productBlazer1, category: "Outerwear" },
  { id: "3", name: "Gray Wool Trousers", price: 129.99, image: productPants1, category: "Pants" },
  { id: "4", name: "Classic White Shirt", price: 79.99, image: productShirt2, category: "Shirts" },
  { id: "5", name: "Camel Wool Coat", price: 399.99, image: productCoat1, category: "Outerwear" },
  { id: "6", name: "Leather Jacket", price: 449.99, image: productJacket1, category: "Outerwear" },
];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero parallax and zoom animation
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        scale: 1.2,
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // Hero content fade out
    if (heroContentRef.current) {
      gsap.to(heroContentRef.current, {
        opacity: 0,
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section with 3D */}
      <section ref={heroRef} className="relative h-[100vh] overflow-hidden">
        <Hero3D />
        <img
          ref={heroImageRef}
          src={heroBanner}
          alt="ÉLITE Fashion"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transformOrigin: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
          <div ref={heroContentRef} className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-primary-foreground">
              <AnimatedText className="text-5xl sm:text-6xl lg:text-8xl font-light tracking-tight mb-6">
                TIMELESS ELEGANCE
              </AnimatedText>
              <p className="text-base sm:text-lg lg:text-xl mb-8 text-primary-foreground/90 max-w-lg leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                Discover the essence of refined menswear. Crafted for those who appreciate the finer details.
              </p>
              <Link to="/shop">
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground luxury-transition-slow text-sm sm:text-base tracking-wider px-8 py-6 shimmer opacity-0 animate-fade-in"
                  style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
                >
                  EXPLORE COLLECTION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 lg:mb-24">
            <AnimatedText className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              FEATURED COLLECTION
            </AnimatedText>
            <p className="text-muted-foreground text-sm lg:text-base tracking-wide">
              Curated pieces for the distinguished gentleman
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProducts.map((product, index) => (
              <Product3DCard key={product.id} {...product} index={index} />
            ))}
          </div>

          <div className="text-center mt-16 lg:mt-24">
            <Link to="/shop">
              <Button 
                variant="outline" 
                size="lg"
                className="tracking-wider hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition-slow shimmer px-12 py-6"
              >
                VIEW ALL PRODUCTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-32 bg-muted relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <Link to="/shop?category=shirts" className="group perspective-1000">
              <div className="relative h-[500px] overflow-hidden bg-card luxury-shadow group-hover:luxury-shadow-gold luxury-transition-slow" style={{ transformStyle: 'preserve-3d' }}>
                <img
                  src={productShirt1}
                  alt="Shirts"
                  className="w-full h-full object-cover group-hover:scale-110 luxury-transition-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end group-hover:from-black/90 luxury-transition-slow">
                  <div className="p-8 lg:p-10 w-full">
                    <h3 className="text-3xl lg:text-4xl font-light tracking-wider text-white mb-2 transform group-hover:translate-x-2 luxury-transition-slow">
                      SHIRTS
                    </h3>
                    <div className="h-0.5 bg-accent w-0 group-hover:w-20 luxury-transition-slow" />
                  </div>
                </div>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              </div>
            </Link>

            <Link to="/shop?category=pants" className="group perspective-1000">
              <div className="relative h-[500px] overflow-hidden bg-card luxury-shadow group-hover:luxury-shadow-gold luxury-transition-slow" style={{ transformStyle: 'preserve-3d' }}>
                <img
                  src={productPants1}
                  alt="Pants"
                  className="w-full h-full object-cover group-hover:scale-110 luxury-transition-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end group-hover:from-black/90 luxury-transition-slow">
                  <div className="p-8 lg:p-10 w-full">
                    <h3 className="text-3xl lg:text-4xl font-light tracking-wider text-white mb-2 transform group-hover:translate-x-2 luxury-transition-slow">
                      PANTS
                    </h3>
                    <div className="h-0.5 bg-accent w-0 group-hover:w-20 luxury-transition-slow" />
                  </div>
                </div>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              </div>
            </Link>

            <Link to="/shop?category=outerwear" className="group perspective-1000">
              <div className="relative h-[500px] overflow-hidden bg-card luxury-shadow group-hover:luxury-shadow-gold luxury-transition-slow" style={{ transformStyle: 'preserve-3d' }}>
                <img
                  src={productCoat1}
                  alt="Outerwear"
                  className="w-full h-full object-cover group-hover:scale-110 luxury-transition-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end group-hover:from-black/90 luxury-transition-slow">
                  <div className="p-8 lg:p-10 w-full">
                    <h3 className="text-3xl lg:text-4xl font-light tracking-wider text-white mb-2 transform group-hover:translate-x-2 luxury-transition-slow">
                      OUTERWEAR
                    </h3>
                    <div className="h-0.5 bg-accent w-0 group-hover:w-20 luxury-transition-slow" />
                  </div>
                </div>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-charcoal rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-8">
              CRAFTED FOR EXCELLENCE
            </AnimatedText>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-10 max-w-2xl mx-auto">
              Each piece in our collection is thoughtfully designed and meticulously crafted using the finest materials. 
              We believe in creating timeless garments that transcend seasonal trends and become essential elements of your wardrobe.
            </p>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="tracking-widest hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition-slow shimmer px-12 py-6"
              >
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
