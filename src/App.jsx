import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteBuilderModal from './components/QuoteBuilderModal';
import FloatingEmergencyButton from './components/FloatingEmergencyButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CoveragePage from './pages/CoveragePage';
import TechnologyPage from './pages/TechnologyPage';
import OperationsPage from './pages/OperationsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedLocation, setPreselectedLocation] = useState('');

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'projects', 'operations', 'coverage', 'technology', 'careers', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceOrLocation = '') => {
    if (serviceOrLocation) {
      if (serviceOrLocation.includes('Province') || serviceOrLocation.includes('District') || ['Lusaka', 'Ndola', 'Kitwe', 'Chipata', 'Kasama'].includes(serviceOrLocation)) {
        setPreselectedLocation(serviceOrLocation);
      } else {
        setPreselectedService(serviceOrLocation);
      }
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5] text-[#0F172A] selection:bg-[#16A34A] selection:text-white font-sans antialiased">
      
      {/* 1. Header Navigation */}
      <Navbar 
        activePage={activePage === 'operations' ? 'projects' : activePage} 
        setActivePage={handlePageChange} 
        onOpenQuote={() => handleOpenQuote()} 
      />

      {/* 2. Main Page Content */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={handlePageChange} 
            onOpenQuote={handleOpenQuote} 
          />
        )}
        {activePage === 'about' && (
          <AboutPage 
            setActivePage={handlePageChange} 
            onOpenQuote={handleOpenQuote} 
          />
        )}
        {activePage === 'services' && (
          <ServicesPage 
            onOpenQuote={handleOpenQuote} 
          />
        )}
        {(activePage === 'projects' || activePage === 'operations') && (
          <OperationsPage 
            onOpenQuote={handleOpenQuote} 
          />
        )}
        {activePage === 'coverage' && (
          <CoveragePage 
            onOpenQuote={handleOpenQuote} 
          />
        )}
        {activePage === 'technology' && (
          <TechnologyPage 
            onOpenQuote={handleOpenQuote} 
          />
        )}
        {activePage === 'careers' && (
          <CareersPage />
        )}
        {activePage === 'contact' && (
          <ContactPage 
            onOpenQuote={handleOpenQuote} 
          />
        )}
      </main>

      {/* 3. Corporate Footer */}
      <Footer 
        setActivePage={handlePageChange} 
        onOpenQuote={() => handleOpenQuote()} 
      />

      {/* 4. Global Interactive Quote Modal */}
      <QuoteBuilderModal 
        isOpen={quoteModalOpen} 
        onClose={() => {
          setQuoteModalOpen(false);
          setPreselectedService('');
          setPreselectedLocation('');
        }}
        preselectedService={preselectedService}
        preselectedLocation={preselectedLocation}
      />

      {/* 5. 24/7 Floating Emergency Dispatch Trigger */}
      <FloatingEmergencyButton 
        onOpenQuote={() => handleOpenQuote()} 
      />
    </div>
  );
}
