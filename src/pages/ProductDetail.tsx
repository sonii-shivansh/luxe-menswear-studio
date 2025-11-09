import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Heart, Truck, RefreshCcw } from "lucide-react";
import { toast } from "sonner";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import productBlazer1 from "@/assets/product-blazer-1.jpg";
import productPants1 from "@/assets/product-pants-1.jpg";

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

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    toast.success("Added to cart");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl lg:text-3xl font-medium text-foreground">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <Separator />

              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                {product.description}
              </p>

              {/* Size Selection */}
              <div>
                <label className="text-sm tracking-wider text-foreground mb-3 block">
                  SELECT SIZE
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className="min-w-[3rem] tracking-wider"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm tracking-wider text-foreground mb-3 block">
                  QUANTITY
                </label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 gap-2 tracking-wider"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  ADD TO CART
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <Separator />

              {/* Product Details */}
              <div>
                <h3 className="text-sm tracking-wider text-foreground mb-3">
                  PRODUCT DETAILS
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.details.map((detail: string, index: number) => (
                    <li key={index}>• {detail}</li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <Truck className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $100</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <RefreshCcw className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">30-day return policy</p>
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
