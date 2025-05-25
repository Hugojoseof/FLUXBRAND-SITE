
import React from 'react';

const PurposeSection: React.FC = () => {
  return (
    <section id="proposito" className="section-padding bg-flux-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="./img/nosso-proposito/bti.jpg"
                  alt="Camiseta do curso Bacharelado em Tecnologia da Informação"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg mt-8">
                <img
                  src="./img/nosso-proposito/engcomp.jpg"
                  alt="Camiseta do curso Engenharia da Computação"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="./img/nosso-proposito/engeletrica.jpg"
                  alt="Camiseta do curso Engenharia Elétrica"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg mt-8">
                <img
                  src="./img/nosso-proposito/agro.jpg"
                  alt="Camiseta do curso Agroindústria"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nosso <span className="text-flux-red">Propósito</span>
            </h2>
            <p className="text-lg mb-6">
              Nosso propósito é simples: levar estilo e autenticidade para dentro do seu curso. Criamos peças versáteis e personalizadas para cada área, porque vestir-se também é uma forma de se expressar.
            </p>
            <p className="text-lg mb-8">
              Entendemos o mundo universitário por dentro, porque somos parte dele. Por isso, criamos produtos que fazem sentido para o seu dia a dia, a sua turma e a sua história.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-flux-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">#</span>
              </div>
              <p className="text-xl font-semibold">Sempre no <span className="text-flux-red">#fluxo</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
