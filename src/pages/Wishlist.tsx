import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, X } from "lucide-react";
import { toast } from "sonner";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import productBlazer1 from "@/assets/product-blazer-1.jpg";

const initialWishlistItems = [
  {
    id: "1",
    name: "Premium Black Shirt",
    price: 89.99,
    image: productShirt1,
    category: "Shirts",
  },
  {
    id: "2",
    name: "Navy Blazer",
    price: 249.99,
    image: productBlazer1,
    category: "Outerwear",
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const removeItem = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
    toast.success("Removed from wishlist");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <AnimatedText className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-3">
              MY WISHLIST
            </AnimatedText>
            <p className="text-muted-foreground text-base">
              {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"}
            </p>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <Heart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="text-3xl font-light text-foreground mb-4">
                Your wishlist is empty
              </h2>
              <p className="text-muted-foreground mb-8">
                Save your favorite items for later
              </p>
              <Link to="/shop">
                <Button size="lg" className="tracking-wider shimmer h-14 px-12">
                  DISCOVER PRODUCTS
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-border luxury-shadow hover:luxury-shadow-gold luxury-transition-slow group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 luxury-transition-slow"
                      />
                    </Link>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur rounded-full flex items-center justify-center text-foreground hover:bg-destructive hover:text-destructive-foreground luxury-transition z-10"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-accent tracking-widest mb-2">
                      {item.category.toUpperCase()}
                    </p>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-lg font-light text-foreground hover:text-accent luxury-transition mb-2">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xl font-light text-foreground mb-4">
                      ${item.price.toFixed(2)}
                    </p>
                    <Button
                      size="sm"
                      className="w-full gap-2 tracking-wider shimmer"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
