import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl lg:text-3xl font-light tracking-wider text-foreground hover:text-accent luxury-transition">
            ÉLITE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm tracking-wide text-foreground hover:text-accent luxury-transition">
              SHOP
            </Link>
            <Link to="/about" className="text-sm tracking-wide text-foreground hover:text-accent luxury-transition">
              ABOUT
            </Link>
            <Link to="/contact" className="text-sm tracking-wide text-foreground hover:text-accent luxury-transition">
              CONTACT
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hover:text-accent relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:text-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            <Link
              to="/shop"
              className="block text-sm tracking-wide text-foreground hover:text-accent luxury-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              to="/about"
              className="block text-sm tracking-wide text-foreground hover:text-accent luxury-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="block text-sm tracking-wide text-foreground hover:text-accent luxury-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
