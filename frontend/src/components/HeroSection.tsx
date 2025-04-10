
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { ChevronDown, Flag } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const layers = heroRef.current.querySelectorAll('.layer');
      const x = e.clientX;
      const y = e.clientY;
      
      layers.forEach((layer: Element) => {
        const speed = (layer as HTMLElement).dataset.speed || '2';
        const movement = parseInt(speed) / 10;
        
        const moveX = (x - window.innerWidth / 2) * movement;
        const moveY = (y - window.innerHeight / 2) * movement;
        
        (layer as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="layer absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/20" 
          data-speed="2"
        />
        <div 
          className="layer absolute bottom-40 right-20 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/20" 
          data-speed="3"
        />
        <div 
          className="layer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 blur-3xl" 
          data-speed="1"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{once : false}}
          exit={{opacity: 0, y: -20}}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-6">
            Welcome to Excellence
          </span>
        </motion.div>

        <AnimatedText
          text="Inspiring Minds, Shaping Futures"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10"
        >
          At Stellar School, we combine innovative teaching methods with timeless values to create 
          an extraordinary educational experience that prepares students for a successful future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#programs" 
            className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-200 transform hover:scale-105"
          >
            Explore Programs
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200 transform hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
