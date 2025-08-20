import { Card } from "@/components/ui/card";

const PoemSection = () => {
  const poemLines = [
    "Por tempos sozinho",
    "Com uma vontade que não fulgura",
    "Com tantas pedras no caminho",
    "Enfrentando as noites de amargura",
    "",
    "Será esta a provação",
    "Que devemos enfrentar em vida?",
    "Aguentar a solidão",
    "Sem saber para onde ela nos guia",
    "",
    "Como digo praquele menino",
    "Que tanto queria calmaria",
    "Que nem deste sonho pequenino",
    "Seu coração desfrutaria",
    "",
    "E Chega para mim",
    "Seu brilho de ternura",
    "Causa a implosão enfim",
    "Das noites de amargura",
    "",
    "Seguro agora de um destino",
    "Que nem sei o que me aguarda",
    "Pois só importa praquele menino",
    "Dividir contigo a caminhada"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <Card className="p-12 shadow-soft bg-card border-primary/20">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-romantic font-bold text-primary mb-12">
              Nosso Poema
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {poemLines.map((line, index) => (
                <p 
                  key={index} 
                  className={`font-romantic text-lg md:text-xl leading-relaxed ${
                    line === "" ? "h-4" : "text-foreground"
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PoemSection;