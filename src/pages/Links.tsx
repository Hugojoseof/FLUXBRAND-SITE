import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Instagram, 
  MessageCircle, 
  ExternalLink, 
  ShoppingBag,
  Heart,
  Star,
  Truck,
  Shield,
  Flame,
  Zap,
  Building,
  HardHat,
  Wrench
} from 'lucide-react';
import { linksConfig } from '@/config/linksConfig';

// Mapeamento de ícones
const iconMap = {
  'external-link': ExternalLink,
  'message-circle': MessageCircle,
  'instagram': Instagram,
  'shopping-bag': ShoppingBag,
  'heart': Heart,
  'truck': Truck,
  'shield': Shield,
  'flame': Flame,
  'zap': Zap,
  'building': Building,
  'wrench': Wrench,
  'tiktok': () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
};

const Links = () => {
  const getIcon = (iconName: string, size: string = "w-5 h-5") => {
    if (iconName === 'tiktok') {
      return iconMap.tiktok();
    }
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || ExternalLink;
    return <IconComponent className={size} />;
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background com efeito de chama */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-flux-red/20 via-black to-black"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-flux-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-flux-red/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="w-24 h-24 mx-auto mb-4">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img 
                src={linksConfig.profile.avatar}
                alt="Flux Brand Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Logo FLUXBRAND - Versão Limpa e Maior */}
          <div className="w-64 h-16 mx-auto mb-4">
            <img 
              src={linksConfig.profile.logo}
              alt={linksConfig.profile.name}
              className="w-full h-full object-contain"
            />
          </div>
          
          <p className="text-white/80 text-sm mb-4">
            {linksConfig.profile.description}
          </p>
          <div className="flex items-center justify-center gap-2 text-flux-red text-xs">
            <Star className="w-4 h-4" />
            <span>{linksConfig.profile.tagline}</span>
            <Star className="w-4 h-4" />
          </div>
        </div>

        {/* Links Principais */}
        <div className="space-y-4 mb-8">
          {linksConfig.socialLinks.map((link, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => window.open(link.href, '_blank')}
            >
              <div className={`${link.color} text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {getIcon(link.icon)}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-lg">{link.title}</div>
                    <div className="text-sm opacity-90">{link.subtitle}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Produtos */}
        <div className="mb-8">
          <h2 className="text-white font-semibold mb-4 text-center text-lg">
            🔥 Nossas Camisetas Disponíveis
          </h2>
          <div className="space-y-4">
            {linksConfig.products.map((product, index) => (
              <div 
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => window.open(product.href, '_blank')}
              >
                <div className={`${product.color} text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {getIcon(product.icon, "w-6 h-6")}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-lg">{product.title}</div>
                      <div className="text-sm opacity-90">{product.subtitle}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white/60 text-xs pb-8">
          {linksConfig.footer.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-2 mb-2">
              {getIcon(feature.icon)}
              <span>{feature.text}</span>
            </div>
          ))}
          
          <div className="flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-flux-red" />
            <p>{linksConfig.footer.copyright}</p>
            <Flame className="w-4 h-4 text-flux-red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links; 