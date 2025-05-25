
import React, { useEffect } from 'react';

const ScrollAnimations: React.FC = () => {
  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      
      const vertInView = (rect.top <= windowHeight * 0.8) && (rect.bottom >= 0);
      const horInView = (rect.left <= windowWidth) && (rect.right >= 0);
      
      return (vertInView && horInView);
    };
    
    // Function to add 'in-view' class to elements that are visible
    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll('section');
      const staggeredElements = document.querySelectorAll('.stagger-children');
      
      // Handle sections
      sections.forEach((section) => {
        if (isInViewport(section) && !section.classList.contains('in-view')) {
          section.classList.add('in-view');
        }
      });
      
      // Handle staggered elements
      staggeredElements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('in-view')) {
          element.classList.add('in-view');
        }
      });
    };
    
    // Initial check for elements in viewport
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default ScrollAnimations;
