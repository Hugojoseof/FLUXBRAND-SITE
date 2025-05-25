
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappLink = "https://wa.me/5584994723473?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20com%20a%20Flux%20Brand.";

  return (
    <footer className="bg-flux-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <a href="/">
              <img 
                src="./img/logo/logo.png" 
                alt="FluxBrand Logo" 
                className="h-12 w-auto" 
              />
              </a>
            </h3>
            <p className="mb-6 text-gray-400">
              Camisetas personalizadas e designs criativos para universitários que seguem o fluxo.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/fluxbrand.br" className="text-white hover:text-flux-red transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={whatsappLink} className="text-white hover:text-flux-red transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://tiktok.com/@fluxbrand.br" className="text-white hover:text-flux-red transition-colors" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#quem-somos" className="text-gray-400 hover:text-flux-red transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="/#proposito" className="text-gray-400 hover:text-flux-red transition-colors">
                  Nosso Propósito
                </a>
              </li>
              <li>
                <a href="/#servicos" className="text-gray-400 hover:text-flux-red transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-flux-red transition-colors">
                  Portfólio
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-flux-red mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-400">admfluxbrand@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-flux-red mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-400">+55 84 99472-3473</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Flux Brand. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
