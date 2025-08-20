import HeroSection from "@/components/HeroSection";
import PoemSection from "@/components/PoemSection";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PoemSection />
      <PhotoGallery />
    </div>
  );
};

export default Index;
