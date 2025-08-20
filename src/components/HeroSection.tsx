import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Card className="p-12 backdrop-blur-sm bg-card/90 shadow-romantic border-0">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-romantic font-bold bg-gradient-romantic bg-clip-text text-transparent animate-fade-in">
                Heitor & Sofia
              </h1>
              <div className="flex items-center justify-center space-x-6">
                <div className="h-px bg-primary flex-1 max-w-32"></div>
                <span className="text-2xl font-romantic text-primary">♥</span>
                <div className="h-px bg-primary flex-1 max-w-32"></div>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-romantic text-muted-foreground leading-relaxed">
              Uma homenagem ao nosso amor
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;