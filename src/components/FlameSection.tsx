
import React from 'react';

const FlameSection: React.FC = () => {
  return (
    <section className="bg-flux-red text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O conceito da <span className="text-flux-white">chama</span>
            </h2>
            <p className="text-xl mb-8">
              A chama é a nossa essência. Representa a energia, o movimento e a transformação que queremos trazer para o estilo universitário. Sempre acesa, sempre no <span className="font-bold">#fluxo</span>.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-flux-black rounded-full">
              <span className="mr-2 text-xl">#</span>
              <span className="text-xl font-bold">SEGUE O BAILE</span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              {/* Custom Flame graphic */}
              <img 
                src="./img/logo/chama.png" 
                alt="Flame logo" 
                className="w-full h-full"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlameSection;
