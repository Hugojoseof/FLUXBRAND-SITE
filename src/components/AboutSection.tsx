
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="quem-somos" className="section-padding bg-flux-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-flux-black">
              Quem <span className="text-flux-red">Somos</span>
            </h2>
            <p className="text-lg mb-6">
              A Flux Brand é uma marca criada por universitários, para universitários. Produzimos camisetas que expressam estilo, identidade e atitude para quem quer viver a faculdade de forma autêntica e com personalidade.
            </p>
            <p className="text-lg">
              Nossas peças são mais do que apenas roupas – são manifestos de estilo que carregam a essência jovem e criativa que você procura.
            </p>
          </div>

          <div className="flex-1 relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
              <img
                src="./img/logo/logo.jpg"
                alt="Equipe Flux Brand"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-flux-red rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold text-4xl">#</span>
            </div>
            <div className="absolute -top-4 -right-4 p-4 bg-flux-black text-white rotate-6">
              <span className="font-bold">SEGUE O FLUXO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
