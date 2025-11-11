import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import gsap from "gsap";
import { toast } from "sonner";

// Mock cart data
const initialCartItems = [
  {
    id: "1",
    name: "Premium Black Shirt",
    price: 89.99,
    image: productShirt1,
    size: "M",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const cartRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cartRef.current) {
      gsap.fromTo(
        cartRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }

    if (summaryRef.current) {
      gsap.fromTo(
        summaryRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }
  }, []);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <AnimatedText className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-3">
              SHOPPING CART
            </AnimatedText>
            <p className="text-muted-foreground text-base">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="text-3xl font-light text-foreground mb-4">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-8">
                Discover our collection and find your perfect pieces
              </p>
              <Link to="/shop">
                <Button size="lg" className="tracking-wider shimmer h-14 px-12">
                  CONTINUE SHOPPING
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Cart Items */}
              <div ref={cartRef} className="lg:col-span-2 space-y-6">
                {cartItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="bg-card border border-border p-6 sm:p-8 luxury-shadow hover:luxury-shadow-gold luxury-transition-slow"
                    style={{ 
                      animation: `fade-in 0.5s ease-out ${index * 0.1}s both` 
                    }}
                  >
                    <div className="flex gap-6 sm:gap-8">
                      <Link to={`/product/${item.id}`} className="flex-shrink-0 group">
                        <div className="w-28 sm:w-36 h-36 sm:h-44 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 luxury-transition-slow"
                          />
                        </div>
                      </Link>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <Link to={`/product/${item.id}`}>
                            <h3 className="text-lg sm:text-xl font-light text-foreground hover:text-accent luxury-transition mb-2">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mb-1">
                            Size: <span className="text-foreground font-medium">{item.size}</span>
                          </p>
                          <p className="text-xl sm:text-2xl font-light text-foreground mt-3">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <div className="flex items-center gap-4">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-10 w-10 luxury-transition hover:bg-accent hover:text-accent-foreground hover:border-accent"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-base font-medium w-10 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-10 w-10 luxury-transition hover:bg-accent hover:text-accent-foreground hover:border-accent"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10 h-10 w-10"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div ref={summaryRef} className="lg:col-span-1">
                <div className="bg-card border border-border p-8 sticky top-24 luxury-shadow">
                  <h2 className="text-2xl font-light tracking-tight text-foreground mb-8">
                    ORDER SUMMARY
                  </h2>

                  <div className="space-y-5">
                    <div className="flex justify-between text-base">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-base">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground font-medium">
                        {shipping === 0 ? (
                          <span className="text-accent">FREE</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>

                    {subtotal < 100 && (
                      <div className="bg-muted/30 p-4 rounded">
                        <p className="text-sm text-muted-foreground text-center">
                          Add <span className="text-accent font-medium">${(100 - subtotal).toFixed(2)}</span> more for free shipping
                        </p>
                      </div>
                    )}

                    <Separator className="my-6" />

                    <div className="flex justify-between text-lg font-medium">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground text-2xl">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full mt-8 tracking-wider h-14 shimmer hover:scale-105 luxury-transition-slow"
                  >
                    PROCEED TO CHECKOUT
                  </Button>

                  <Link to="/shop">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full mt-4 tracking-wider h-14 hover:bg-accent hover:text-accent-foreground hover:border-accent luxury-transition-slow"
                    >
                      CONTINUE SHOPPING
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
