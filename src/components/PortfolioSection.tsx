
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductModal, { ProductDetails } from './ProductModal';

const portfolioItems: ProductDetails[] = [
  {
    id: 1,
    title: 'Camiseta Engenharia da Computação',
    category: 'Engenharia',
    description: 'Camiseta Engenharia da Computação – Ideal para estudantes e profissionais da área. Estampa moderna, tecido confortável e ótima durabilidade. Mostre seu orgulho pelo curso com estilo.',
    image: './img/CAMISAS/ENG COMP/ENG COMP PRETA.jpg',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/ENG COMP/ENG COMP PRETA.jpg' },
      { color: 'Branca', image: './img/CAMISAS/ENG COMP/ENG COMP BRANCA.jpg' }
    ]
  },
  {
    id: 2,
    title: 'Camiseta Bacharelado em Tecnologia da Informação',
    category: 'Tecnologia',
    description: 'Camiseta BTI – Bacharelado em Tecnologia da Informação. Perfeita para quem vive o mundo da tecnologia. Tecido macio, estampa de alta qualidade e excelente para o dia a dia universitário.',
    image: './img/CAMISAS/BTI/BTI PRETA.jpg',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/BTI/BTI PRETA.jpg' },
      { color: 'Branca', image: './img/CAMISAS/BTI/BTI BRANCA.jpg' }
    ]
  },
  {
    id: 3,
    title: 'Camiseta Engenharia Elétrica',
    category: 'Engenharia',
    description: 'Camiseta Engenharia Elétrica – Confortável e estilosa, feita para os apaixonados por circuitos e eletrônica. Ótima opção para uso diário ou eventos acadêmicos.',
    image: './img/CAMISAS/ENG. ELÉTRICA/MATERIAL ENGENHARIA ELETRICA/camisa preta eletrica.jpg',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/ENG. ELÉTRICA/MATERIAL ENGENHARIA ELETRICA/camisa preta eletrica.jpg' },
      { color: 'Branca', image: './img/CAMISAS/ENG. ELÉTRICA/MATERIAL ENGENHARIA ELETRICA/Camisa branca eletrica.jpg' }
    ]
  },
  {
    id: 4,
    title: 'Camiseta Flux Brand Esporte',
    category: 'Esportes',
    description: 'Camiseta Esportiva Flux Brand – Design criativo, tecido leve e ideal para atividades físicas ou uso casual. Destaque-se com estilo.',
    image: './img/CAMISAS/CAMISA FLUX.png',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/CAMISA FLUX.png' },
      { color: 'Preta', image: './img/CAMISAS/CAMISA.png' }
    ]
  },
  {
    id: 5,
    title: 'Camiseta Beach Tennis',
    category: 'Esportes',
    description: 'Camiseta Beach Tennis – Ideal para prática esportiva e momentos de lazer. Tecido leve, respirável e com estampa despojada.',
    image: './img/CAMISAS/BEACH TENIS/Apresentcao-verde.png',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/BEACH TENIS/Apresentcao-verde.png' },
      { color: 'Branca', image: './img/CAMISAS/BEACH TENIS/Apresentacao-vermelho.png' }
    ]
  },
  {
    id: 6,
    title: 'Camiseta Arena Bessa 2º Open',
    category: 'Esportes',
    description: 'Camiseta 2º Open Arena Bessa – Produto exclusivo do evento. Ideal como lembrança e para quem participou do torneio.',
    image: './img/CAMISAS/Arena Bessa/MODELO APRESENTACAO.png'
  },
];

const PortfolioSection: React.FC = () => {
  const navigate = useNavigate();
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

  const handleViewMoreClick = () => {
    navigate('/portfolio');
  };

  return (
    <section id="portfolio" className="section-padding bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nosso <span className="text-flux-red">Portfólio</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Conheça algumas de nossas criações para diversos cursos e eventos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.slice(0, 6).map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div 
                className="aspect-square overflow-hidden cursor-pointer"
                onClick={() => handleProductClick(item)}
              >
                <img
                  src={getDisplayImage(item)}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-flux-red text-sm mb-3">{item.category}</p>
                
                {item.variations && (
                  <div className="flex gap-2 mb-3">
                    {item.variations.map((variation, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVariationChange(item.id, index);
                        }}
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                          selectedVariations[item.id] === index 
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
                  onClick={() => handleProductClick(item)}
                  className="w-full bg-flux-red text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-flux-red/80 transition-colors"
                >
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={handleViewMoreClick}
            className="px-8 py-3 bg-flux-red text-white rounded-lg shadow-lg hover:bg-flux-red/90 transition-colors inline-block"
          >
            Ver mais projetos
          </button>
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

export default PortfolioSection;
