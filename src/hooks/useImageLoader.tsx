
import { useState, useEffect } from 'react';

interface UseImageLoaderProps {
  src: string;
  fallbackSrc?: string;
}

export const useImageLoader = ({ src, fallbackSrc }: UseImageLoaderProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setImageSrc(src);

    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      }
    };
    img.src = src;
  }, [src, fallbackSrc]);

  return { imageSrc, isLoading, hasError };
};
