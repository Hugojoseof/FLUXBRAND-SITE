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
      {/* Background minimalista */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-flux-red/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="w-20 h-20 mx-auto mb-4">
            <div className="w-full h-full rounded-full overflow-hidden bg-black border border-gray-800">
              <img 
                src={linksConfig.profile.avatar}
                alt="Flux Brand Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Logo FLUXBRAND */}
          <div className="w-56 h-14 mx-auto mb-4">
            <img 
              src={linksConfig.profile.logo}
              alt={linksConfig.profile.name}
              className="w-full h-full object-contain"
            />
          </div>
          
          <p className="text-gray-400 text-sm mb-4">
            {linksConfig.profile.description}
          </p>
          <div className="flex items-center justify-center gap-2 text-flux-red text-xs">
            <Star className="w-3 h-3" />
            <span>{linksConfig.profile.tagline}</span>
            <Star className="w-3 h-3" />
          </div>
        </div>

        {/* Links Principais */}
        <div className="space-y-3 mb-8">
          {linksConfig.socialLinks.map((link, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-102"
              onClick={() => window.open(link.href, '_blank')}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-white rounded-lg p-3 hover:bg-gray-800/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 text-flux-red">
                    {getIcon(link.icon)}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-sm">{link.title}</div>
                    <div className="text-xs text-gray-400">{link.subtitle}</div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Produtos */}
        {/*<div className="mb-8">
          <h2 className="text-white font-medium mb-4 text-center text-base">
            🔥 Nossas Camisetas
          </h2>
          <div className="space-y-3">
            {linksConfig.products.map((product, index) => (
              <div 
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-102"
                onClick={() => window.open(product.href, '_blank')}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-white rounded-lg p-3 hover:bg-gray-800/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-flux-red">
                      {getIcon(product.icon, "w-5 h-5")}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm">{product.title}</div>
                      <div className="text-xs text-gray-400">{product.subtitle}</div>
                    </div>
                    <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-gray-300 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-xs pb-8">
          {linksConfig.footer.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-2 mb-2">
              {getIcon(feature.icon, "w-3 h-3")}
              <span>{feature.text}</span>
            </div>
          ))}
          
          <div className="flex items-center justify-center gap-2">
            <Flame className="w-3 h-3 text-flux-red" />
            <p>{linksConfig.footer.copyright}</p>
            <Flame className="w-3 h-3 text-flux-red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links; 