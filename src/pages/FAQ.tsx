import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedText } from "@/components/AnimatedText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your shipping policy?",
    answer: "We offer free standard shipping on all orders over $100. Standard shipping typically takes 3-5 business days. Express shipping is available for an additional fee and takes 1-2 business days. International shipping is available to select countries.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of delivery for unworn, unwashed items with original tags attached. Items must be in their original condition. Return shipping is free for US customers. Refunds are processed within 5-7 business days of receiving your return.",
  },
  {
    question: "How do I determine my size?",
    answer: "We provide a detailed size guide for each product category. Our garments follow standard sizing, but we recommend checking the specific measurements provided in each product's size guide. If you're between sizes, we suggest sizing up for a more comfortable fit.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption to ensure your payment information is protected.",
  },
  {
    question: "How do I care for my garments?",
    answer: "Each product includes specific care instructions on the label. Generally, we recommend dry cleaning for wool and structured items, and machine washing cold for cotton pieces. Always check the care label before washing. Proper care ensures the longevity of your garments.",
  },
  {
    question: "Do you offer alterations?",
    answer: "While we don't offer in-house alterations, we recommend taking your garments to a professional tailor for any necessary adjustments. Our pieces are designed with classic proportions that work well with standard alterations.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes! Once your order ships, you'll receive a tracking number via email. You can use this number to track your package's progress. If you have an account, you can also view your order status by logging into your account.",
  },
  {
    question: "What materials do you use?",
    answer: "We use only premium, ethically-sourced materials including Italian cotton, merino wool, cashmere, and fine leather. Each fabric is carefully selected for its quality, durability, and comfort. Detailed material composition is listed on each product page.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <AnimatedText className="text-5xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
                FREQUENTLY ASKED
              </AnimatedText>
              <p className="text-muted-foreground text-base lg:text-lg tracking-wide">
                Find answers to common questions
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border luxury-shadow hover:luxury-shadow-gold luxury-transition-slow px-6 lg:px-8"
                >
                  <AccordionTrigger className="text-left text-base lg:text-lg font-light tracking-wide hover:text-accent py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 text-center bg-muted/30 p-8 lg:p-12 rounded-lg">
              <h3 className="text-2xl lg:text-3xl font-light tracking-tight text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our customer service team is here to help
              </p>
              <a
                href="/contact"
                className="inline-block text-accent hover:text-accent/80 luxury-transition tracking-wider font-medium"
              >
                CONTACT US →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
