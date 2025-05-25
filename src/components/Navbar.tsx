
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isPortfolioPage = location.pathname === '/portfolio';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappLink = "https://wa.me/5584994723473?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20com%20a%20Flux%20Brand.";

  // Different background styles for portfolio page
  const getNavbarBackground = () => {
    if (isPortfolioPage) {
      return isScrolled 
        ? 'bg-white dark:bg-neutral-900 shadow-md' 
        : 'bg-white/95 dark:bg-neutral-900 backdrop-blur-sm shadow-sm';
    }
    return isScrolled 
      ? 'bg-flux-black dark:bg-neutral-900 shadow-md' 
      : 'bg-transparent';
  };

  const getTextColor = () => {
    if (isPortfolioPage) {
      return 'text-gray-900 dark:text-white';
    }
    return 'text-white dark:text-gray-200';
  };

  const getHoverColor = () => {
    if (isPortfolioPage) {
      return 'hover:text-flux-red';
    }
    return 'hover:text-flux-red';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBackground()} ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <img 
                src="/lovable-uploads/bcccf2d5-c497-4f45-8b09-5593346116fe.png" 
                alt="FluxBrand Logo" 
                className="h-12 w-auto max-w-[200px] object-contain" 
                onError={(e) => {
                  console.log('Logo failed to load, trying fallback');
                  e.currentTarget.src = './img/logo/logo.png';
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* <a href="/#lancamentos" className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300`}>
              Lançamentos
            </a>
            <a href="/#camisas-venda" className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300`}>
              Camisas à Venda
            </a> */}
            <a href="/#portfolio" className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300`}>
              Portfólio
            </a>
            <a href="/#quem-somos" className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300`}>
              Quem Somos
            </a>
            <a href="/#servicos" className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300`}>
              Serviços
            </a>
            <DarkModeToggle />
            <Button 
              variant="outline" 
              className="border-flux-red text-flux-red hover:bg-flux-red hover:text-white"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Contato
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${getTextColor()} p-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 md:hidden">
            <div className="flex flex-col space-y-3">
              {/* <a 
                href="/#lancamentos" 
                className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300 py-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lançamentos
              </a>
              <a 
                href="/#camisas-venda" 
                className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300 py-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Camisas à Venda
              </a> */}
              <a 
                href="/#portfolio" 
                className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300 py-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfólio
              </a>
              <a 
                href="/#quem-somos" 
                className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300 py-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quem Somos
              </a>
              <a 
                href="/#servicos" 
                className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300 py-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <Button 
                variant="outline" 
                className="border-flux-red text-flux-red hover:bg-flux-red hover:text-white w-full mt-2"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Contato
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
