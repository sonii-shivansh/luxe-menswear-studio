import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Heart, Truck, RefreshCcw, Shield } from "lucide-react";
import { toast } from "sonner";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import productBlazer1 from "@/assets/product-blazer-1.jpg";
import productPants1 from "@/assets/product-pants-1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mock product data
const productData: Record<string, any> = {
  "1": {
    name: "Premium Black Shirt",
    price: 89.99,
    images: [productShirt1],
    category: "Shirts",
    description: "A sophisticated black shirt crafted from premium cotton blend. Features a modern slim fit with reinforced buttons and elegant collar design. Perfect for both formal occasions and smart casual wear.",
    details: [
      "100% premium cotton",
      "Slim fit design",
      "Machine washable",
      "Italian collar",
      "Mother of pearl buttons",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  "2": {
    name: "Navy Blazer",
    price: 249.99,
    images: [productBlazer1],
    category: "Outerwear",
    description: "An impeccably tailored navy blazer that embodies timeless sophistication. Made from premium wool blend with a refined structure that maintains its shape.",
    details: [
      "Wool blend fabric",
      "Fully lined",
      "Notch lapel",
      "Two-button closure",
      "Multiple pockets",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  "3": {
    name: "Gray Wool Trousers",
    price: 129.99,
    images: [productPants1],
    category: "Pants",
    description: "Classic gray wool trousers with a modern cut. Features a comfortable mid-rise waist and tailored leg for a refined silhouette.",
    details: [
      "Premium wool fabric",
      "Tailored fit",
      "Zip fly with hook closure",
      "Side and back pockets",
      "Dry clean only",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id || "1"] || productData["1"];
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      );
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    toast.success("Added to cart", {
      description: `${product.name} - Size ${selectedSize}`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Images */}
            <div ref={imageRef} className="space-y-6">
              <div className="aspect-[3/4] overflow-hidden bg-muted luxury-shadow group relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 luxury-transition-slow"
                />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              </div>
            </div>

            {/* Product Info */}
            <div ref={contentRef} className="space-y-8">
              <div>
                <p className="text-xs tracking-widest text-accent uppercase mb-3">
                  {product.category}
                </p>
                <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
                  {product.name}
                </h1>
                <p className="text-3xl lg:text-4xl font-light text-foreground">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <Separator className="bg-border/50" />

              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {product.description}
              </p>

              {/* Size Selection */}
              <div>
                <label className="text-sm tracking-wider text-foreground mb-4 block font-medium">
                  SELECT SIZE
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size: string) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className="min-w-[3.5rem] h-12 tracking-wider luxury-transition-slow hover:scale-105"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm tracking-wider text-foreground mb-4 block font-medium">
                  QUANTITY
                </label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 luxury-transition hover:bg-accent hover:text-accent-foreground hover:border-accent"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="text-xl font-medium w-16 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 luxury-transition hover:bg-accent hover:text-accent-foreground hover:border-accent"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 gap-2 tracking-wider h-14 shimmer hover:bg-accent luxury-transition-slow"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  ADD TO CART
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className={`gap-2 h-14 luxury-transition-slow hover:scale-105 ${
                    isWishlisted ? 'bg-accent text-accent-foreground border-accent' : ''
                  }`}
                  onClick={handleWishlist}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
              </div>

              <Separator className="bg-border/50" />

              {/* Product Details */}
              <div>
                <h3 className="text-sm tracking-wider text-foreground mb-4 font-medium">
                  PRODUCT DETAILS
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {product.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 bg-muted/30 p-6 rounded-lg">
                <div className="flex flex-col items-center text-center gap-3">
                  <Truck className="h-6 w-6 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $100</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <RefreshCcw className="h-6 w-6 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">30-day return policy</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <Shield className="h-6 w-6 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Secure Payment</p>
                    <p className="text-xs text-muted-foreground">100% protected</p>
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

export default ProductDetail;
