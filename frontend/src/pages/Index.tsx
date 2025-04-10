
import React, { useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import AchievementsSection from '@/components/AchievementsSection';
import CampusSection from '@/components/CampusSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AdmissionsSection from '@/components/AdmissionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import IntroMedia from '@/components/IntroMedia';
import IntroSplash from '@/components/IntroSplash';
import IntroAnimation from '@/components/IntroAnimation';

const Index = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin + anchor.pathname === window.location.origin + window.location.pathname) {
        e.preventDefault();
        
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
          
          // Update URL hash without scrolling
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* <IntroSplash/> */}
      <ThemeToggle />
      <Navbar />
      <IntroAnimation/>
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <AchievementsSection />
        <CampusSection />
        <TestimonialsSection />
        <AdmissionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
