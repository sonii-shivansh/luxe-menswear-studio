import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Product3DCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  index: number;
}

export const Product3DCard = ({ id, name, price, image, category, index }: Product3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return;

    // Entrance animation
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
        rotateX: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(cardRef.current, {
      rotateX: -rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={cardRef}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative bg-card overflow-hidden luxury-shadow hover:luxury-shadow-gold luxury-transition-slow">
        <div ref={imageRef} className="relative h-96 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 luxury-transition-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 luxury-transition-slow" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
          
          {/* Quick add button */}
          <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 luxury-transition-slow">
            <Button className="w-full bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground luxury-transition">
              <ShoppingBag className="mr-2 h-4 w-4" />
              QUICK ADD
            </Button>
          </div>
        </div>

        <Link to={`/product/${id}`} className="block p-6">
          <p className="text-xs tracking-widest text-muted-foreground mb-2">{category}</p>
          <h3 className="text-lg font-light tracking-wide text-foreground mb-3 group-hover:text-accent luxury-transition">
            {name}
          </h3>
          <p className="text-xl font-light text-foreground">${price.toFixed(2)}</p>
        </Link>
      </div>
    </div>
  );
};
