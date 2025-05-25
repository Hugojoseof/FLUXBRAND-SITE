
import React, { useState } from 'react';
import ProductModal, { ProductDetails } from './ProductModal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const shirtsForSale: ProductDetails[] = [
  {
    id: 201,
    title: 'Camiseta Engenharia Elétrica',
    category: 'Engenharia',
    description: 'Camiseta Engenharia Elétrica – Confortável e estilosa, feita para os apaixonados por circuitos e eletrônica. Ótima opção para uso diário ou eventos acadêmicos.',
    image: './img/CAMISAS/ENG. ELÉTRICA/MATERIAL ENGENHARIA ELETRICA/camisa preta eletrica.jpg',
    price: 'R$ 55,00',
    available: true,
    orderLink: 'https://forms.example.com/order',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/ENG. ELÉTRICA/MATERIAL ENGENHARIA ELETRICA/camisa preta eletrica.jpg' },
      { color: 'Branca', image: './img/CAMISAS/ENG. ELÉTRICA/MATERIAL ENGENHARIA ELETRICA/Camisa branca eletrica.jpg' }
    ]
  },
  {
    id: 202,
    title: 'Camiseta Flux Esporte',
    category: 'Esporte',
    description: 'Camiseta Esportiva Flux Brand – Design criativo, tecido leve e ideal para atividades físicas ou uso casual. Destaque-se com estilo.',
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
    id: 203,
    title: 'Camiseta Bacharelado em Tecnologia da Informação',
    category: 'Tecnologia',
    description: 'Camiseta BTI – Bacharelado em Tecnologia da Informação. Perfeita para quem vive o mundo da tecnologia. Tecido macio, estampa de alta qualidade e excelente para o dia a dia universitário.',
    image: './img/CAMISAS/BTI/BTI PRETA.jpg',
    price: 'R$ 55,00',
    available: true,
    orderLink: 'https://forms.example.com/order',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/BTI/BTI PRETA.jpg' },
      { color: 'Branca', image: './img/CAMISAS/BTI/BTI BRANCA.jpg' }
    ]
  },
  {
    id: 204,
    title: 'Camiseta Engenharia Civil',
    category: 'Engenharia',
    description: 'Camiseta Engenharia Civil – Mostre seu orgulho pelo curso com essa peça estilosa e resistente. Estampa temática e tecido ideal para uso diário.',
    image: './img/CAMISAS/ENG. CIVIL - UFRN/APRESENTACAO-CAMISETA.png',
    price: 'R$ 60,00',
    available: true,
    orderLink: 'https://forms.example.com/order',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/ENG. CIVIL - UFRN/APRESENTACAO-CAMISETA.png' },
      { color: 'Branca', image: './img/CAMISAS/ENG. CIVIL - UFRN/APRESENTACAO CAMISETA BRANCA.png' }
    ]
  },
];

const ShirtsForSaleSection: React.FC = () => {
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

  return (
    <section id="camisas-venda" className="section-padding bg-flux-gray py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Camisas <span className="text-flux-red">à Venda</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Faça já seu pedido!
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {shirtsForSale.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
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
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-flux-red font-bold mb-3">{product.price}</p>
                    
                    {product.variations && (
                      <div className="flex gap-2 mb-4">
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
                              backgroundColor: variation.color === 'Branca' ? '#fff' : 
                                             variation.color === 'Preta' ? '#000' : 
                                             variation.color === 'Cinza' ? '#666' :
                                             variation.color === 'Azul' ? '#0066cc' : '#ccc'
                            }}
                            title={variation.color}
                          />
                        ))}
                      </div>
                    )}
                    
                    <button 
                      onClick={() => handleProductClick(product)}
                      className="w-full bg-flux-red text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-flux-red/80 transition-colors"
                    >
                      Comprar agora
                    </button>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    DISPONÍVEL
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>

        <ProductModal 
          product={selectedProduct}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </div>
    </section>
  );
};

export default ShirtsForSaleSection;
