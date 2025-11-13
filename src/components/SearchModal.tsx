import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import productShirt1 from "@/assets/product-shirt-1.jpg";
import productBlazer1 from "@/assets/product-blazer-1.jpg";
import productPants1 from "@/assets/product-pants-1.jpg";

const searchProducts = [
  { id: "1", name: "Premium Black Shirt", price: 89.99, image: productShirt1, category: "Shirts" },
  { id: "2", name: "Navy Blazer", price: 249.99, image: productBlazer1, category: "Outerwear" },
  { id: "3", name: "Gray Wool Trousers", price: 129.99, image: productPants1, category: "Pants" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(searchProducts);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(searchProducts);
    }
  }, [query]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden p-0">
        <div className="p-6 border-b border-border">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-12 h-14 text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground luxury-transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="overflow-y-auto p-6 space-y-4">
          {results.length > 0 ? (
            results.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={onClose}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 luxury-transition group"
              >
                <div className="w-20 h-20 bg-muted overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 luxury-transition-slow"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-light text-foreground group-hover:text-accent luxury-transition">
                    {product.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <p className="text-lg font-light text-foreground">${product.price.toFixed(2)}</p>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
