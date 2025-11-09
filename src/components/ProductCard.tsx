import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border-border hover:border-accent luxury-transition cursor-pointer">
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 luxury-transition"
          />
        </div>
        <div className="p-4 space-y-2">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">{category}</p>
          <h3 className="text-sm font-light tracking-wide text-foreground">{name}</h3>
          <p className="text-sm font-medium text-foreground">${price.toFixed(2)}</p>
        </div>
      </Card>
    </Link>
  );
};
