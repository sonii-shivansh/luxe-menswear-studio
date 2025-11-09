import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[40vh] lg:h-[60vh] overflow-hidden">
          <img
            src={heroBanner}
            alt="About ÉLITE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-white">
              ABOUT ÉLITE
            </h1>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-4">
                  Founded with a vision to redefine men's fashion, ÉLITE represents the perfect 
                  intersection of timeless elegance and contemporary style. Since our inception, 
                  we've been committed to crafting pieces that transcend fleeting trends and become 
                  essential elements of a gentleman's wardrobe.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Every garment tells a story of meticulous craftsmanship, from the selection of 
                  premium fabrics to the final stitch. We believe that true luxury lies not in excess, 
                  but in the perfect balance of quality, comfort, and style.
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-foreground mb-6">
                  Our Philosophy
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-4">
                  We embrace the philosophy that clothing should empower and inspire confidence. 
                  Each piece in our collection is designed with the modern gentleman in mind—one who 
                  values quality, appreciates fine details, and understands that true style is timeless.
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-foreground mb-6">
                  Craftsmanship
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Our commitment to excellence is reflected in every aspect of our production process. 
                  We partner with skilled artisans and use only the finest materials sourced from around 
                  the world. From Italian fabrics to precision tailoring, every detail is carefully 
                  considered to ensure uncompromising quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-foreground mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <h3 className="text-xl lg:text-2xl font-light tracking-wide text-foreground">
                  Quality
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We never compromise on the quality of our materials or craftsmanship, 
                  ensuring each piece meets our exacting standards.
                </p>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl lg:text-2xl font-light tracking-wide text-foreground">
                  Sustainability
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We're committed to responsible practices that respect both people and 
                  the planet, from ethical sourcing to sustainable production.
                </p>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl lg:text-2xl font-light tracking-wide text-foreground">
                  Integrity
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transparency and honesty guide everything we do, from our business 
                  practices to our relationships with customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
