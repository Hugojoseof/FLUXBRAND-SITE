
import React, { useState } from 'react';
import ProductModal, { ProductDetails } from './ProductModal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const launches: ProductDetails[] = [
  {
    id: 101,
    title: 'Camiseta Flux Esportiva',
    category: 'Lançamento',
    description: 'Nossa nova camiseta da coleção Experience traz elementos modernos com estampas que representam a dinâmica da vida universitária. Produzida em algodão premium com acabamento de alta qualidade.',
    image: './img/CAMISAS/CAMISA.png',
    price: 'R$ 70,00',
    available: true,
    orderLink: 'https://forms.example.com/order',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/CAMISA.png' },
      { color: 'Preta', image: './img/CAMISAS/CAMISA FLUX.png' }
    ]
  },
  {
    id: 102,
    title: 'Camiseta Engenharia Civil',
    category: 'Lançamento',
    description: 'Para os estudantes de Ciência de Dados e Estatística, essa camiseta traz elementos gráficos representando análise de dados de forma minimalista e elegante.',
    image: './img/CAMISAS/ENG. CIVIL - UFRN/APRESENTACAO-CAMISETA.png',
    price: 'R$ 60,00',
    available: true,
    orderLink: 'https://forms.example.com/order',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/ENG. CIVIL - UFRN/APRESENTACAO-CAMISETA.png' },
      { color: 'Branca', image: './img/CAMISAS/ENG. CIVIL - UFRN/APRESENTACAO CAMISETA BRANCA.png' }
    ]
  },
  {
    id: 103,
    title: 'Camiseta Exclusiva para Arena Bessa Beach',
    category: 'Lançamento',
    description: 'Desenvolvida especialmente para estudantes de Arquitetura e Design, essa camiseta apresenta linhas modernas em uma estampa exclusiva.',
    image: './img/CAMISAS/Arena Bessa/MODELO APRESENTACAO.png',
    available: true ,
    orderLink: 'https://forms.example.com/order'
  },
  {
    id: 104,
    title: 'Camiseta BioMedicina',
    category: 'Lançamento',
    description: 'Para os futuros médicos, esta camiseta traz elementos anatômicos em um design moderno e elegante.',
    image: './img/CAMISAS/BIOMEDICINA/CAMISA BEGE/CAMISA BEGE.png',
    price: 'R$ 55,00',
    available: true,
    orderLink: 'https://forms.example.com/order',
    variations: [
      { color: 'Off-White', image: './img/CAMISAS/BIOMEDICINA/CAMISA BEGE/CAMISA BEGE.png' },
      { color: 'Preta', image: './img/CAMISAS/BIOMEDICINA/CAMISA PRETA/CAMISA PRETA.png' }
    ]
  },
];

const LaunchesSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVariations, setSelectedVariations] = useState<{[key: number]: number}>({});

  const handleProductClick = (product: ProductDetails) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleVariationChange = (productId: number, variationIndex: number) => {
    setSelectedVariations(prev => ({
      ...prev,
      [productId]: variationIndex
    }));
  };

  const getDisplayImage = (product: ProductDetails) => {
    if (product.variations && selectedVariations[product.id] !== undefined) {
      return product.variations[selectedVariations[product.id]].image;
    }
    return product.image;
  };

  const needsCarousel = launches.length > 3;

  return (
    <section id="lancamentos" className="section-padding bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Novos <span className="text-flux-red">Lançamentos</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Conheça as nossas mais recentes criações, disponíveis para compra imediata
          </p>
        </div>

        {needsCarousel ? (
          <Carousel className="w-full">
            <CarouselContent>
              {launches.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div 
                      className="aspect-square overflow-hidden cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      <img
                        src={getDisplayImage(product)}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                      <p className="text-flux-red font-bold mb-3">{product.price}</p>
                      
                      {product.variations && (
                        <div className="flex gap-2 mb-3">
                          {product.variations.map((variation, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleVariationChange(product.id, index);
                              }}
                              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                                selectedVariations[product.id] === index 
                                  ? 'border-flux-red scale-110' 
                                  : 'border-gray-300 hover:border-flux-red'
                              }`}
                              style={{
                                backgroundColor: 
                                               variation.color === 'Branca' ? '#fff' : 
                                               variation.color === 'Preta' ? '#000' : 
                                               variation.color === 'Cinza' ? '#666' :
                                               variation.color === 'Off-White' ? '#FFFFF0' :
                                               variation.color === 'Azul' ? '#0066cc' : '#ccc'
                                                
                              }}
                              title={variation.color}
                            />
                          ))}
                        </div>
                      )}
                      
                      <button 
                        onClick={() => handleProductClick(product)}
                        className="w-full bg-flux-red text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-flux-red/80 transition-colors"
                      >
                        Comprar agora
                      </button>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-flux-red text-white px-3 py-1 rounded-full text-sm font-bold">
                      NOVO
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {launches.map((product) => (
              <div 
                key={product.id} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
                onClick={() => handleProductClick(product)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{product.title}</h3>
                  <p className="text-flux-red">{product.price}</p>
                  <button className="mt-4 bg-white text-flux-black px-4 py-2 rounded-full text-sm font-bold hover:bg-flux-red hover:text-white transition-colors">
                    Ver detalhes
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-flux-red text-white px-3 py-1 rounded-full text-sm font-bold">
                  NOVO
                </div>
              </div>
            ))}
          </div>
        )}

        <ProductModal 
          product={selectedProduct}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </div>
    </section>
  );
};

export default LaunchesSection;
