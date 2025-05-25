
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export interface ProductVariation {
  color: string;
  image: string;
}

export interface ProductDetails {
  id: number;
  title: string;
  image: string;
  description: string;
  price?: string;
  category: string;
  available?: boolean;
  orderLink?: string;
  variations?: ProductVariation[];
}

interface ProductModalProps {
  product: ProductDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, open, onOpenChange }) => {
  const [selectedVariation, setSelectedVariation] = useState(0);

  useEffect(() => {
    setSelectedVariation(0);
  }, [product]);

  if (!product) return null;

  const displayImage = product.variations ? product.variations[selectedVariation].image : product.image;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-4xl h-[90vh] max-h-[90vh] overflow-hidden p-0 gap-0">
        {/* Fixed close button for better mobile visibility */}
        <DialogClose className="absolute right-3 top-3 z-50 rounded-full bg-white/90 dark:bg-black p-2 shadow-lg opacity-100 ring-offset-background transition-opacity hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-5 w-5" />
          <span className="sr-only">Fechar</span>
        </DialogClose>

        {/* Scrollable content */}
        <div className="overflow-y-auto h-full">
          <DialogHeader className="p-4 pb-2">
            <DialogTitle className="text-xl md:text-2xl font-bold pr-12">{product.title}</DialogTitle>
            <DialogDescription className="text-flux-red font-medium">
              {product.category}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-md overflow-hidden">
                <img 
                  src={displayImage} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              
              {product.variations && (
                <div className="flex gap-3 justify-center flex-wrap">
                  {product.variations.map((variation, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariation(index)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                        selectedVariation === index 
                          ? 'bg-flux-red/10 border-2 border-flux-red' 
                          : 'border-2 border-gray-200 hover:border-flux-red'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full border-2 border-gray-300"
                        style={{
                          backgroundColor: variation.color === 'Branca' ? '#fff' : 
                                         variation.color === 'Preta' ? '#000' : 
                                         variation.color === 'Cinza' ? '#666' :
                                         variation.color === 'Off-White' ? '#FFFFF0' :
                                         variation.color === 'Azul' ? '#0066cc' : '#ccc'
                        }}
                      />
                      <span className="text-xs font-medium">{variation.color}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Descrição</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base">{product.description}</p>
                
                {product.price && (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">Preço</h3>
                    <p className="text-xl font-bold text-flux-red">{product.price}</p>
                  </div>
                )}
              </div>
              
              {product.available && product.orderLink && (
                <Button 
                  className="bg-flux-red hover:bg-flux-red/90 text-white w-full py-4 text-base"
                  size="lg"
                  asChild
                >
                  <a href={product.orderLink} target="_blank" rel="noopener noreferrer">
                    Fazer pedido
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
