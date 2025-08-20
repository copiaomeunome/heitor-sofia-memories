import { Card } from "@/components/ui/card";
import placeholder1 from "@/assets/placeholder-1.jpg";
import placeholder2 from "@/assets/placeholder-2.jpg";
import placeholder3 from "@/assets/placeholder-3.jpg";

const PhotoGallery = () => {
  // Placeholder data for 20 photos
  const photos = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    image: [placeholder1, placeholder2, placeholder3][index % 3],
    description: `Aqui você pode adicionar a descrição da foto ${index + 1}. Esta é uma descrição placeholder que será substituída pela sua descrição personalizada.`
  }));

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-romantic font-bold text-center text-primary mb-16">
          Nossas Memórias
        </h2>
        
        <div className="space-y-16">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <Card className="overflow-hidden shadow-soft hover:shadow-romantic transition-all duration-romantic border-primary/10">
                  <img
                    src={photo.image}
                    alt={`Memória ${photo.id}`}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-romantic"
                  />
                </Card>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <Card className="p-8 bg-gradient-soft shadow-soft border-primary/10">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-romantic font-semibold text-primary">
                      Memória {photo.id}
                    </h3>
                    <p className="text-lg font-romantic text-foreground leading-relaxed">
                      {photo.description}
                    </p>
                    <div className="flex items-center justify-center pt-4">
                      <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
                      <span className="text-primary text-sm px-4">♥</span>
                      <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;