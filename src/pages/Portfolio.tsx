import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ProductModal, { ProductDetails } from '@/components/ProductModal';
import OptimizedImage from '@/components/OptimizedImage';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Extended portfolio items with all available designs
const allPortfolioItems: ProductDetails[] = [
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
    title: 'Camiseta Informática Matutino IFRN - Campus Pau Dos Ferros',
    category: 'Tecnologia',
description: 'Camiseta Informática Matutino IFRN - Desenvolvida especialmente para estudantes de Informática. Estampa com elementos visuais da tecnologia, conforto para o dia a dia e identidade com o curso.',    image: './img/CAMISAS/INFO MATUTINO - IFRN/CAMISA INFORMATICA PRETA.jpg',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/INFO MATUTINO - IFRN/CAMISA INFORMATICA PRETA.jpg' },
      { color: 'Branca', image: './img/CAMISAS/INFO MATUTINO - IFRN/CAMISA INFORMATICA BRANCA.png' }
    ]
  },
  {
    id: 5,
    title: 'Camiseta Apicultura Matutino IFRN - Campus Pau Dos Ferros',
    category: 'Agricultura',
    description: 'Camiseta Apicultura – Estampa exclusiva para estudantes e profissionais da área. Mostre seu amor pela natureza e pelas abelhas com muito conforto e estilo.',
    image: './img/CAMISAS/APICULTURA MATUTINO -IFRN/FINALIZADOS/CAMISA APICULTOR PRETA.png',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/APICULTURA MATUTINO -IFRN/FINALIZADOS/CAMISA APICULTOR PRETA.png' },
      { color: 'Branca', image: './img/CAMISAS/APICULTURA MATUTINO -IFRN/FINALIZADOS/CAMISA APICULTOR BRANCA.png' }
    ]
  },
  {
    id: 6,
    title: 'Camiseta Apicultura Vespertino IFRN - Campus Pau Dos Ferros',
    category: 'Agricultura',
    description: 'Camiseta Apicultura Vespertino – Confortável e estilosa, ideal para quem estuda ou trabalha com apicultura. Tecido de qualidade e ótima durabilidade.',
    image: './img/CAMISAS/APICULTURA VESPERTINO- IFRN/CAMISA-APICULTURA-.jpg',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/APICULTURA VESPERTINO- IFRN/CAMISA-APICULTURA-.jpg' },
      { color: 'Branca', image: './img/CAMISAS/APICULTURA VESPERTINO- IFRN/CAMISA-BRANCA.jpg' }
    ]    
  },
  {
    id: 7,
    title: 'Camiseta Biomedicina',
    category: 'Saúde',
    description: 'Camiseta Biomedicina – Perfeita para quem vive a ciência. Estampa moderna, tecido confortável e ótimo caimento para o dia a dia acadêmico.',
    image: './img/CAMISAS/BIOMEDICINA/CAMISA PRETA/CAMISA PRETA.png',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/BIOMEDICINA/CAMISA PRETA/CAMISA PRETA.png' },
      { color: 'Bege', image: './img/CAMISAS/BIOMEDICINA/CAMISA BEGE/CAMISA BEGE.png' }
    ]
  },
  {
    id: 8,
    title: 'Camiseta Engenharia Civil',
    category: 'Engenharia',
    description: 'Camiseta Engenharia Civil – Mostre seu orgulho pelo curso com essa peça estilosa e resistente. Estampa temática e tecido ideal para uso diário.',
    image: './img/CAMISAS/ENG. CIVIL - UFRN/APRESENTACAO-CAMISETA.png',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/ENG. CIVIL - UFRN/APRESENTACAO-CAMISETA.png' },
      { color: 'Branca', image: './img/CAMISAS/ENG. CIVIL - UFRN/APRESENTACAO CAMISETA BRANCA.png' }
    ]
  },
  {
    id: 9,
    title: 'Camiseta Desenvolvimento de Sistemas',
    category: 'Tecnologia',
  description: 'Camiseta Desenvolvimento de Sistemas – Ideal para quem vive o mundo da programação. Visual moderno, tecido confortável e arte exclusiva que traduz a essência da área de desenvolvimento.',    image: './img/CAMISAS/Desenvolvimento de sistemas/MODELO DE APRESENTACAO.png'
  },
  {
    id: 10,
    title: 'Camiseta 9º Ano',
    category: 'Educação',
    description: 'Camiseta 9º Ano – Camiseta divertida e marcante para quem está encerrando o ensino fundamental. Ideal para festas, eventos escolares e recordação.',
    image: './img/CAMISAS/9ºANO/MODELO DE APRESENTACAO.png'
  },
  {
    id: 11,
    title: 'Camiseta Agroindustria IFPB',
    category: 'Agricultura',
    description: 'Camiseta Agroindústria – Para quem é do agro e tem orgulho disso. Estampa temática, tecido confortável e ideal para o dia a dia na escola técnica ou no trabalho.',
    image: './img/CAMISAS/AGROINDUSTRIA/camisa-preta.jpg',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/AGROINDUSTRIA/camisa-preta.jpg' },
      { color: 'Branca', image: './img/CAMISAS/AGROINDUSTRIA/camisa-branca.jpg' }
    ]
  },
  {
    id: 12,
    title: 'Camiseta Alimentos Vespertino IFRN - Campus Pau Dos Ferros',
    category: 'Saúde',
    description: 'Camiseta Alimentos – Para estudantes e técnicos em alimentos. Visual moderno, tecido confortável e ideal para ambientes acadêmicos ou profissionais.',
    image: './img/CAMISAS/ALIMENTOS VESPERTINO - IFRN/Apresentacao/modelo preto.png',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/ALIMENTOS VESPERTINO - IFRN/Apresentacao/modelo preto.png' },
      { color: 'Branca', image: './img/CAMISAS/ALIMENTOS VESPERTINO - IFRN/Apresentacao/modelo branca.png' }
    ]
  },
  {
    id: 13,
    title: 'Camiseta Polo Informática',
    category: 'Tecnologia',
    description: 'Camisa Polo Informática – Tecido premium, ideal para eventos, palestras e uso profissional. Conforto e elegância no mesmo produto.',
    image: './img/CAMISAS/CAMISA POLO INFO/CAMISA POLO.jpg'
  },
  {
    id: 14,
    title: 'Camiseta Eletrotécnica SP',
    category: 'Engenharia',
    description: 'Camiseta Eletrotécnica – Alta durabilidade e conforto. Estampa voltada para o universo elétrico, perfeita para estudantes e técnicos da área.',
    image: './img/CAMISAS/ELETROTÉCNICA - SP/CAMISA 01/CAMISA ELETROTÉCNICA 01.png',
    variations: [
      { color: 'Off-White', image: './img/CAMISAS/ELETROTÉCNICA - SP/CAMISA 01/CAMISA ELETROTÉCNICA 01.png' },
      { color: 'Off-White', image: './img/CAMISAS/ELETROTÉCNICA - SP/CAMISA 02/CAMISA ELETROTÉCNICA 02.png' }
    ]
  },
  {
    id: 15,
    title: 'Camiseta Engenharia de Produção IFCE',
    category: 'Engenharia',
    description: 'Camiseta Engenharia de Produção IFCE – Representa sua instituição com orgulho. Tecido leve, estampa criativa e excelente para o cotidiano universitário.',
    image: './img/CAMISAS/ENGENHARIA DE PRODUÇÃO/Material/Apresentacao-EngProdIFCE.png'
  },
  {
    id: 16,
    title: 'Camiseta Informática IFBA',
    category: 'Tecnologia',
    description: 'Camiseta Informática IFBA – Estilosa, confortável e com estampa que traduz o espírito tech do IFBA. Ideal para estudantes e ex-alunos.',
    image: './img/CAMISAS/INFO - IFBA/APRESENTACAO ciano.png',
    variations: [
      { color: 'Ciano', image: './img/CAMISAS/INFO - IFBA/APRESENTACAO ciano.png' },
      { color: 'Roxo', image: './img/CAMISAS/INFO - IFBA/APRESENTACAO roxo.png' }
    ]
  },
  {
    id: 17,
    title: 'Camiseta Informática ISERJ FAETEC',
    category: 'Tecnologia',
    description: 'Camiseta Informática ISERJ FAETEC – Perfeita para quem estuda ou estudou na instituição. Estampa exclusiva e tecido de alta qualidade.',
    image: './img/CAMISAS/INFO - ISERJ FAETEC/Apresentacao preta.png',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/INFO - ISERJ FAETEC/Apresentacao preta.png' },
      { color: 'Off-White', image: './img/CAMISAS/INFO - ISERJ FAETEC/Apresentacao offwhitee.png' }
    ]
  },
  {
    id: 18,
    title: 'Camiseta Informática ISERJ',
    category: 'Tecnologia',
    description: 'Camiseta ISERJ Informática – Produto com ótimo caimento, durável e com estampa marcante. Ideal para representar sua jornada acadêmica.',
    image: './img/CAMISAS/INFORMÁTICA - ISERJ/MOCKUP/CAMISA INFORMÁTICA.png'
  },
  {
    id: 19,
    title: 'Camiseta Engenharia Mecânica',
    category: 'Engenharia',
    description: 'Camiseta Engenharia Mecânica – Representa com orgulho quem é da área técnica. Confortável, com estampa temática e excelente para o dia a dia.',
    image: './img/CAMISAS/MECÂNICA/CAMISA TERCEIRO ELETRO.png'
  },
  {
    id: 20,
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
    id: 21,
    title: 'Camiseta Arena Bessa 2º Open',
    category: 'Esportes',
    description: 'Camiseta 2º Open Arena Bessa – Produto exclusivo do evento. Ideal como lembrança e para quem participou do torneio.',
    image: './img/CAMISAS/Arena Bessa/MODELO APRESENTACAO.png'
  },
  {
    id: 22,
    title: 'Camiseta Beach Tennis Leag Beach',
    category: 'Esportes',
    description: 'Camiseta Beach Tennis Leag Beach – Estampa exclusiva, modelagem confortável e tecido próprio para esportes. Ótima opção para treinos ou passeios.',
    image: './img/CAMISAS/Adriel/CAMISA  BEACH TÊNIS 02.png'
  },
  {
    id: 23,
    title: 'Camiseta Flux Brand Esporte',
    category: 'Esportes',
    description: 'Camiseta Esportiva Flux Brand – Design criativo, tecido leve e ideal para atividades físicas ou uso casual. Destaque-se com estilo.',
    image: './img/CAMISAS/CAMISA FLUX.png',
    variations: [
      { color: 'Preta', image: './img/CAMISAS/CAMISA FLUX.png' },
      { color: 'Preta', image: './img/CAMISAS/CAMISA.png' }
    ]
  },

];

const Portfolio = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVariations, setSelectedVariations] = useState<{[key: number]: number}>({});
  const [filteredCategory, setFilteredCategory] = useState<string>('Todas');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Todas', ...Array.from(new Set(allPortfolioItems.map(item => item.category)))];
  
  const filteredItems = filteredCategory === 'Todas' 
    ? allPortfolioItems 
    : allPortfolioItems.filter(item => item.category === filteredCategory);

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
    <Layout>
      <div className="pt-20 pb-16 bg-white dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-flux-red dark:hover:text-flux-red transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar para página principal</span>
            </button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Nosso <span className="text-flux-red">Portfólio Completo</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore todos os nossos designs exclusivos criados para diversos cursos e eventos
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilteredCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filteredCategory === category
                    ? 'bg-flux-red text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-flux-red/80 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
                <div 
                  className="aspect-square overflow-hidden cursor-pointer"
                  onClick={() => handleProductClick(item)}
                >
                  <OptimizedImage
                    src={getDisplayImage(item)}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{item.title}</h3>
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
                                           variation.color === 'Off-White' ? '#FFFFF0' :
                                           variation.color === 'Bege' ? '#F5F5DC' :
                                           variation.color === 'Vermelha' ? '#DC2626' :
                                           variation.color === 'Verde' ? '#16A34A' :
                                           variation.color === 'Ciano' ? '#06B6D4' :
                                           variation.color === 'Roxo' ? '#7C3AED' :
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

          <ProductModal 
            product={selectedProduct}
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
