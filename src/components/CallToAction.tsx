
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  const whatsappLink = "https://wa.me/5584994723473?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20com%20a%20Flux%20Brand.";

  return (
    <section className="bg-flux-black py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Pronto para entrar no <span className="text-flux-red">#FLUXO</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Solicite um orçamento e comece a criar a identidade visual da sua turma hoje mesmo!
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-flux-red hover:bg-flux-red/90 text-white px-8 py-6 rounded-full flex items-center justify-center gap-2"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                Contato via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
