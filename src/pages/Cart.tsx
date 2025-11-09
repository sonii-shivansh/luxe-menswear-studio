import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus } from "lucide-react";
import productShirt1 from "@/assets/product-shirt-1.jpg";

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
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-3xl lg:text-5xl font-light tracking-tight text-foreground mb-2">
              SHOPPING CART
            </h1>
            <p className="text-muted-foreground text-sm">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-light text-foreground mb-4">
                Your cart is empty
              </h2>
              <Link to="/shop">
                <Button size="lg" className="tracking-wider">
                  CONTINUE SHOPPING
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-card border border-border p-4 sm:p-6">
                    <div className="flex gap-4 sm:gap-6">
                      <Link to={`/product/${item.id}`} className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 sm:w-32 h-32 sm:h-40 object-cover"
                        />
                      </Link>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <Link to={`/product/${item.id}`}>
                            <h3 className="text-base sm:text-lg font-light text-foreground hover:text-accent luxury-transition">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            Size: {item.size}
                          </p>
                          <p className="text-base sm:text-lg font-medium text-foreground mt-2">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border p-6 sticky top-24">
                  <h2 className="text-xl font-light tracking-tight text-foreground mb-6">
                    ORDER SUMMARY
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">
                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    {subtotal < 100 && (
                      <p className="text-xs text-muted-foreground">
                        Add ${(100 - subtotal).toFixed(2)} more for free shipping
                      </p>
                    )}

                    <Separator />

                    <div className="flex justify-between text-base font-medium">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full mt-6 tracking-wider">
                    PROCEED TO CHECKOUT
                  </Button>

                  <Link to="/shop">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full mt-3 tracking-wider"
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
