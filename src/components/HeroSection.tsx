
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="hero-video-overlay"></div>
        <img
          src="./img/logo/chama.png"
          alt="Logo da FluxBrand"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="text-flux-red">DE JOVENS,</span><br />
            <span className="text-white">PARA JOVENS.</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8">
            Camisetas personalizadas e designs criativos para universitários que seguem o fluxo
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="default"
              className="bg-flux-red hover:bg-flux-red/90 text-white px-8 py-6"
              size="lg"
              asChild
            >
              <a href="/portfolio">Ver Portfólio</a>
            </Button>
            {/* <Button 
              variant="outline" 
              className="border-white text-white bg-white/10 hover:bg-white hover:text-flux-black px-8 py-6 backdrop-blur-sm transition-all duration-300"
              size="lg"
              asChild
            >
              <a href="#lancamentos">Lançamentos</a>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
