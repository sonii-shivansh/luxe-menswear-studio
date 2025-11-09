import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-wider mb-4">ÉLITE</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Premium men's fashion crafted for the modern gentleman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/shop" className="hover:text-accent luxury-transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=shirts" className="hover:text-accent luxury-transition">
                  Shirts
                </Link>
              </li>
              <li>
                <Link to="/shop?category=pants" className="hover:text-accent luxury-transition">
                  Pants
                </Link>
              </li>
              <li>
                <Link to="/shop?category=outerwear" className="hover:text-accent luxury-transition">
                  Outerwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/about" className="hover:text-accent luxury-transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent luxury-transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent luxury-transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent luxury-transition">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">HELP</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent luxury-transition">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent luxury-transition">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent luxury-transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent luxury-transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-primary-foreground/60">
            © 2024 ÉLITE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent luxury-transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent luxury-transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent luxury-transition">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
