import { Card } from "@/components/ui/card";
import imagem1 from "@/assets/imagem1.jpg";
import imagem2 from "@/assets/imagem2.jpg";
import imagem3 from "@/assets/imagem3.jpg";
import imagem4 from "@/assets/imagem4.jpg";
import imagem5 from "@/assets/imagem5.jpg";
import imagem6 from "@/assets/imagem6.jpg";
import imagem7 from "@/assets/imagem7.jpg";
import imagem8 from "@/assets/imagem8.jpg";
import imagem9 from "@/assets/imagem9.jpg";
import imagem10 from "@/assets/imagem10.jpg";
import imagem11 from "@/assets/imagem11.jpg";
import imagem12 from "@/assets/imagem12.jpg";
import imagem13 from "@/assets/imagem13.jpg";
import imagem14 from "@/assets/imagem14.jpg";
import imagem15 from "@/assets/imagem15.jpg";
import imagem16 from "@/assets/imagem16.jpg";
import imagem17 from "@/assets/imagem17.jpg";
import imagem18 from "@/assets/imagem18.jpg";
import imagem19 from "@/assets/imagem19.jpg";
import imagem20 from "@/assets/imagem20.jpg";
import imagem21 from "@/assets/imagem21.jpg";
import imagem22 from "@/assets/imagem22.jpg";
import imagem23 from "@/assets/imagem23.jpg";
import imagem24 from "@/assets/imagem24.jpg";
import imagem25 from "@/assets/imagem25.jpg";
import imagem26 from "@/assets/imagem26.jpg";
import imagem27 from "@/assets/imagem27.jpg";
import imagem28 from "@/assets/imagem28.jpg";
import imagem29 from "@/assets/imagem29.jpg";
import imagem30 from "@/assets/imagem30.jpg";
import imagem31 from "@/assets/imagem31.jpg";
import imagem32 from "@/assets/imagem32.jpg";
import imagem33 from "@/assets/imagem33.jpg";
import imagem34 from "@/assets/imagem34.jpg";
import imagem35 from "@/assets/imagem35.jpg";
import imagem36 from "@/assets/imagem36.jpg";
import imagem37 from "@/assets/imagem37.jpg";
import imagem38 from "@/assets/imagem38.jpg";
import imagem39 from "@/assets/imagem39.jpg";
import imagem40 from "@/assets/imagem40.jpg";
import imagem41 from "@/assets/imagem41.jpg";
import imagem42 from "@/assets/imagem42.jpg";
import imagem43 from "@/assets/imagem43.jpg";
import imagem44 from "@/assets/imagem44.jpg";
const PhotoGallery = () => {
  // Placeholder data for 20 photos
  const photos = [{
    id:1,
    image:imagem1,
    description:"Essa é a primeira foto sua que vc me mandou"
  },
  {
    id:2,
    image:imagem2,
    description:"Essa é a primeira foto minha que eu te me mandei"
  },
  {
    id:3,
    image:imagem3,
    description:"Esse foi o meu primeiro plano de fundo da nossa conversa, foi quando vc fez a gente num site, muito fofa"
  },
  {
    id:4,
    image:imagem4,
    description:"Vc com o presente de aniversário que eu fiquei horas pensando pra te dar KKKKKKKKK"
  },
  {
    id:5,
    image:imagem5,
    description:"Essa é a primeira foto nossa juntos"
  },
  {
    id:6,
    image:imagem6,
    description:"Nosso primeiro date só nós dois, lá no lagoa do nado, e a primeira foto sorrindo que eu tenho sua"
  },
  {
    id:7,
    image:imagem9,
    description:"Eu tirando foto sua lá no parque, foi o dia que eu chorei pq ganhei um presente seu"
  },
  {
    id:8,
    image:imagem7,
    description:"Nós dois felizes dia q vc tava de terninho (tão linda)"
  },
  {
    id:9,
    image:imagem8,
    description:"Eu tirando foto sua da minha perspectiva pra vc ver como é linda"
  },
  {
    id:10,
    image:imagem10,
    description:"Minha primeira header do twitter, essa foi a forma que eu te assumi pela primeira vez no twitter"
  },
  {
    id:11,
    image:imagem11,
    description:"A gente no pinoquio (foto sorrindo genuíno)"
  },
  {
    id:12,
    image:imagem12,
    description:"A gente no pinóquio (foto com cara de mau)"
  },
  {
    id:13,
    image:imagem13,
    description:"Vc indo me ver jogar vôlei e tirando foto minha"
  },
  {
    id:14,
    image:imagem14,
    description:"KKKKKKKKKKKKKKK?????? tipo de foto sua que eu adoro receber"
  },
  {
    id:15,
    image:imagem15,
    description:"A gente no aniversário da mel quando vc conheceu meus amigos da faculdade"
  },
  {
    id:16,
    image:imagem16,
    description:"Olha a gente lá de novo"
  },
  {
    id:17,
    image:imagem17,
    description:"O dia que a gente tava gritando na rua meia noite que se ama"
  },
  {
    id:18,
    image:imagem18,
    description:"No mesmo dia porém abraçando"
  },
  {
    id:19,
    image:imagem19,
    description:"O dia que a gente passou o dia dos namorados juntos sem estar namorando (te namorar era tudo que eu  queria)"
  },
  {
    id:20,
    image:imagem20,
    description:"KKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
  },
  {
    id:21,
    image:imagem21,
    description:"A gente foi pintar esse dia"
  },
  {
    id:22,
    image:imagem22,
    description:"O dia que vc foi conhecer a família do meu pai numa festa junina"
  },
  {
    id:23,
    image:imagem23,
    description:"A gente na sorveteria com a Bella e o Gustavo"
  },
  {
    id:24,
    image:imagem24,
    description:"Nossa primeira metadinha juntos"
  },
  {
    id:25,
    image:imagem25,
    description:"A fita que vc deixou comigo e eu dormi com ela"
  },
  {
    id:26,
    image:imagem26,
    description:"Vc tirando foto zuada minha e colocando coração (muito fofa te amo)"
  },
  {
    id:27,
    image:imagem27,
    description:"Eu com sua bolsa"
  },
  {
    id:28,
    image:imagem28,
    description:"Meu plano de fundo do pc pra trabalhar com vc ali"
  },
  {
    id:29,
    image:imagem29,
    description:"Eu tirando foto sua no pinoquio de novo"
  },
  {
    id:30,
    image:imagem30,
    description:"Forçando cara de mau no pinoquio"
  },
  {
    id:31,
    image:imagem31,
    description:"Como a gente realmente tava"
  },
  {
    id:32,
    image:imagem32,
    description:"Mais uma"
  },
  {
    id:33,
    image:imagem33,
    description:"A gente no barzinho numa quarta-feira"
  },
  {
    id:34,
    image:imagem34,
    description:"A gente lá de novo"
  },
  {
    id:35,
    image:imagem35,
    description:"Meu plano de fundo de todas as conversas menos a sua (a sua é a gente em forma de desenho)"
  },
  {
    id:36,
    image:imagem36,
    description:"A gente na casa da bella"
  },
  {
    id:37,
    image:imagem37,
    description:"Minha aliança"
  },
  {
    id:38,
    image:imagem38,
    description:"Nesse dia vc tava MUITO princesa, a gente foi na guarapari"
  },
  {
    id:39,
    image:imagem39,
    description:"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK eu todo beijado"
  },
  {
    id:40,
    image:imagem40,
    description:"A gente no Guarapas de novo"
  },
  {
    id:41,
    image:imagem41,
    description:"Abraço"
  },
  {
    id:42,
    image:imagem42,
    description:"O dia que fui conhecer a lis no lagoa do nado"
  },
  {
    id:43,
    image:imagem43,
    description:"O dia que te assumi nos storys do insta"
  },
  {
    id:44,
    image:imagem44,
    description:"Mais uma no lagoa pq somos lindos"
  },
  ];

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
                    className="w-auto h-full md:h-full object-cover hover:scale-105 transition-transform duration-romantic"
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