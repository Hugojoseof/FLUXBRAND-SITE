
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollAnimations from './ScrollAnimations';

interface LayoutProps {
  children: React.ReactNode;
  showScrollAnimations?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showScrollAnimations = false }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {showScrollAnimations && <ScrollAnimations />}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
