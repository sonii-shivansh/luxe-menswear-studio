import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Product3DCard } from "@/components/Product3DCard";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import productBlazer1 from "@/assets/product-blazer-1.jpg";
import productPants1 from "@/assets/product-pants-1.jpg";
import productShirt2 from "@/assets/product-shirt-2.jpg";
import productCoat1 from "@/assets/product-coat-1.jpg";
import productJacket1 from "@/assets/product-jacket-1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const allProducts = [
  { id: "1", name: "Premium Black Shirt", price: 89.99, image: productShirt1, category: "Shirts" },
  { id: "2", name: "Navy Blazer", price: 249.99, image: productBlazer1, category: "Outerwear" },
  { id: "3", name: "Gray Wool Trousers", price: 129.99, image: productPants1, category: "Pants" },
  { id: "4", name: "Classic White Shirt", price: 79.99, image: productShirt2, category: "Shirts" },
  { id: "5", name: "Camel Wool Coat", price: 399.99, image: productCoat1, category: "Outerwear" },
  { id: "6", name: "Leather Jacket", price: 449.99, image: productJacket1, category: "Outerwear" },
  { id: "7", name: "Slim Fit Black Shirt", price: 94.99, image: productShirt1, category: "Shirts" },
  { id: "8", name: "Charcoal Suit Pants", price: 139.99, image: productPants1, category: "Pants" },
];

const categories = ["All", "Shirts", "Pants", "Outerwear"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-luxury-charcoal rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16 lg:mb-20">
            <AnimatedText className="text-5xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
              SHOP
            </AnimatedText>
            <p className="text-muted-foreground text-base lg:text-lg tracking-wide">
              Explore our complete collection
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 lg:mb-16 gap-4">
            <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="tracking-wider luxury-transition-slow hover:scale-105 px-6"
                >
                  {category.toUpperCase()}
                </Button>
              ))}
            </div>

            <Button variant="outline" className="gap-2 tracking-wider hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition-slow px-6">
              <SlidersHorizontal className="h-4 w-4" />
              FILTERS
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {filteredProducts.map((product, index) => (
              <Product3DCard key={product.id} {...product} index={index} />
            ))}
          </div>

          {/* Load More */}
          {filteredProducts.length >= 8 && (
            <div className="text-center mt-16 lg:mt-20">
              <Button 
                variant="outline" 
                size="lg"
                className="tracking-wider hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition-slow shimmer px-12 py-6"
              >
                LOAD MORE
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
