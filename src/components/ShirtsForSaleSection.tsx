
import React, { useState, useCallback } from 'react';
import ProductModal, { ProductDetails } from './ProductModal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShoppingCart } from 'lucide-react';

const shirtsForSale: ProductDetails[] = [
  {
    id: 201,
    title: 'Camiseta Engenharia Elétrica',
    category: 'Engenharia',
    description: 'Camiseta Engenharia Elétrica – Confortável e estilosa, feita para os apaixonados por circuitos e eletrônica. Ótima opção para uso diário ou eventos acadêmicos.',
    image: './img/CAMISAS/ENG. ELÉTRICA/Apresentacao-UFRNpreta.png',
    price: 'R$ 60,00',
    available: true,
    orderLink: 'https://forms.gle/QKiupTpLagkKNqZ48',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/ENG. ELÉTRICA/Apresentacao-UFRNpreta.png' },
      { color: 'Branca', image: './img/CAMISAS/ENG. ELÉTRICA/Apresentacao-UFRNbranca.png' }
    ]
  },
  {
    id: 202,
    title: 'Camiseta Direito',
    category: 'Humanas',
    description: 'Camiseta Direito – Confortável e estilosa, feita para os apaixonados por leis e justiça. Ótima opção para uso diário ou eventos acadêmicos.',
    image: './img/CAMISAS/Direito/APRESENTACAO preta.png',
    price: 'R$ 60,00',
    available: true,
    orderLink: 'https://forms.gle/gCSi15B9dRZcJDo18',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/Direito/APRESENTACAO preta.png' },
      { color: 'Branca', image: './img/CAMISAS/Direito/APRESENTACAO branca.png' }
    ]
  },
  {
    id: 203,
    title: 'Camiseta Medicina',
    category: 'Saúde',
    description: 'Camiseta Medicina – Confortável e estilosa, feita para os apaixonados por cuidados com a saúde e o corpo humano. Ótima opção para uso diário ou eventos acadêmicos.',
    image: './img/CAMISAS/Medicina/APRESENTACAO-preta.png',
    price: 'R$ 60,00',
    available: true,
    orderLink: 'https://forms.gle/W7VdY2j21ive12pNA',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/Medicina/APRESENTACAO-preta.png' },
      { color: 'Branca', image: './img/CAMISAS/Medicina/APRESENTACAO-branca.png' },
      { color: 'Verde', image: './img/CAMISAS/Medicina/APRESENTACAO-verde.png' }
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
    orderLink: 'https://forms.gle/crTH91gffiLJ2JuY6',
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


  const handleProductClick = useCallback((product: ProductDetails) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const handleVariationChange = useCallback((productId: number, variationIndex: number) => {
    setSelectedVariations(prev => ({
      ...prev,
      [productId]: variationIndex
    }));
  }, []);

  const getDisplayImage = useCallback((product: ProductDetails) => {
    if (product.variations && selectedVariations[product.id] !== undefined) {
      return product.variations[selectedVariations[product.id]].image;
    }
    return product.image;
  }, [selectedVariations]);



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

        <div className="relative">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}

          >
            <CarouselContent>
              {shirtsForSale.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
                    {/* Badge de disponibilidade */}
                                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    DISPONÍVEL
                  </div>

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
                                               variation.color === 'Verde' ? '#008000' :
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            

          </Carousel>


        </div>

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
