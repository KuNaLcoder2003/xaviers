
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';
import BackgroundSpotlight from './BackgroundSpotlight';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const campusImages = [
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Modern Campus"
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Science Labs"
  },
  {
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    title: "Sports Complex"
  },
  {
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Library"
  },
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    title: "Art Studio"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Technology Lab"
  }
];

const CampusSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offset: ["start end", "end start"] 
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="campus" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-4">
            Our Campus
          </span>
          <AnimatedText
            text="Experience Our World-Class Facilities"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Our campus is designed to inspire learning, creativity, and growth with modern facilities
            that support our students' educational journey.
          </p>
        </div>

        <motion.div
          style={{ scale, opacity }}
          className="relative"
        >
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={scrollLeft} 
              className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-md hover:bg-white dark:hover:bg-slate-800 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={scrollRight} 
              className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-md hover:bg-white dark:hover:bg-slate-800 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={carouselRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory py-8 px-4 -mx-4 space-x-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {campusImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                exit={{opacity : 0 , y : -20}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 snap-center w-72 sm:w-80 md:w-96"
              >
                <BackgroundSpotlight className="h-full">
                  <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-md border border-gray-100 dark:border-slate-700 h-full">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Explore our state-of-the-art {image.title.toLowerCase()} designed to enhance student learning and experiences.
                      </p>
                    </div>
                  </div>
                </BackgroundSpotlight>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusSection;
