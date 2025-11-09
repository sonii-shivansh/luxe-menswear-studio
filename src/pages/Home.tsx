import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import productBlazer1 from "@/assets/product-blazer-1.jpg";
import productPants1 from "@/assets/product-pants-1.jpg";
import productShirt2 from "@/assets/product-shirt-2.jpg";
import productCoat1 from "@/assets/product-coat-1.jpg";
import productJacket1 from "@/assets/product-jacket-1.jpg";

const featuredProducts = [
  { id: "1", name: "Premium Black Shirt", price: 89.99, image: productShirt1, category: "Shirts" },
  { id: "2", name: "Navy Blazer", price: 249.99, image: productBlazer1, category: "Outerwear" },
  { id: "3", name: "Gray Wool Trousers", price: 129.99, image: productPants1, category: "Pants" },
  { id: "4", name: "Classic White Shirt", price: 79.99, image: productShirt2, category: "Shirts" },
  { id: "5", name: "Camel Wool Coat", price: 399.99, image: productCoat1, category: "Outerwear" },
  { id: "6", name: "Leather Jacket", price: 449.99, image: productJacket1, category: "Outerwear" },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <img
          src={heroBanner}
          alt="ÉLITE Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-primary-foreground">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight mb-6">
                TIMELESS
                <br />
                ELEGANCE
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-8 text-primary-foreground/90 max-w-lg leading-relaxed">
                Discover the essence of refined menswear. Crafted for those who appreciate the finer details.
              </p>
              <Link to="/shop">
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 luxury-transition text-sm sm:text-base tracking-wider px-8 py-6"
                >
                  EXPLORE COLLECTION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-foreground mb-4">
              FEATURED COLLECTION
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base tracking-wide">
              Curated pieces for the distinguished gentleman
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <Link to="/shop">
              <Button 
                variant="outline" 
                size="lg"
                className="tracking-wider hover:bg-primary hover:text-primary-foreground luxury-transition"
              >
                VIEW ALL PRODUCTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Link to="/shop?category=shirts" className="group">
              <div className="relative h-96 overflow-hidden bg-card">
                <img
                  src={productShirt1}
                  alt="Shirts"
                  className="w-full h-full object-cover group-hover:scale-105 luxury-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-2xl lg:text-3xl font-light tracking-wider text-white p-6 lg:p-8">
                    SHIRTS
                  </h3>
                </div>
              </div>
            </Link>

            <Link to="/shop?category=pants" className="group">
              <div className="relative h-96 overflow-hidden bg-card">
                <img
                  src={productPants1}
                  alt="Pants"
                  className="w-full h-full object-cover group-hover:scale-105 luxury-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-2xl lg:text-3xl font-light tracking-wider text-white p-6 lg:p-8">
                    PANTS
                  </h3>
                </div>
              </div>
            </Link>

            <Link to="/shop?category=outerwear" className="group">
              <div className="relative h-96 overflow-hidden bg-card">
                <img
                  src={productCoat1}
                  alt="Outerwear"
                  className="w-full h-full object-cover group-hover:scale-105 luxury-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-2xl lg:text-3xl font-light tracking-wider text-white p-6 lg:p-8">
                    OUTERWEAR
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-foreground mb-6">
              CRAFTED FOR EXCELLENCE
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-8">
              Each piece in our collection is thoughtfully designed and meticulously crafted using the finest materials. 
              We believe in creating timeless garments that transcend seasonal trends and become essential elements of your wardrobe.
            </p>
            <Link to="/about">
              <Button 
                variant="ghost" 
                className="tracking-widest hover:text-accent luxury-transition"
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
