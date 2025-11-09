import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import productBlazer1 from "@/assets/product-blazer-1.jpg";
import productPants1 from "@/assets/product-pants-1.jpg";
import productShirt2 from "@/assets/product-shirt-2.jpg";
import productCoat1 from "@/assets/product-coat-1.jpg";
import productJacket1 from "@/assets/product-jacket-1.jpg";

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

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              SHOP
            </h1>
            <p className="text-muted-foreground text-sm lg:text-base tracking-wide">
              Explore our complete collection
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 lg:mb-12 gap-4">
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="tracking-wider luxury-transition"
                >
                  {category.toUpperCase()}
                </Button>
              ))}
            </div>

            <Button variant="outline" className="gap-2 tracking-wider">
              <SlidersHorizontal className="h-4 w-4" />
              FILTERS
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Load More */}
          {filteredProducts.length >= 8 && (
            <div className="text-center mt-12 lg:mt-16">
              <Button 
                variant="outline" 
                size="lg"
                className="tracking-wider hover:bg-primary hover:text-primary-foreground luxury-transition"
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
