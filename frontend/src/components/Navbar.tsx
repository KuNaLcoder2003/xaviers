
// import  { useState, useEffect } from 'react';
// import { motion, AnimatePresence , useTransform , useScroll } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import BackgroundSpotlight from './BackgroundSpotlight';

// const navItems = [
//   { title: 'Home', href: '#home' },
//   { title: 'About', href: '#about' },
//   { title: 'Programs', href: '#programs' },
//   { title: 'Achievements', href: '#achievements' },
//   { title: 'Campus', href: '#campus' },
//   { title: 'Admissions', href: '#admissions' },
//   { title: 'Contact', href: '#contact' },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
//         isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
//       )}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <motion.a 
//           href="#" 
//           className="font-bold text-2xl text-primary dark:text-primary"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="text-gradient font-bold">ST.Xavier's </span>
//           <span className="dark:text-white text-slate-900">Nevta</span>
//         </motion.a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-1">
//           {navItems.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <BackgroundSpotlight>
//                 <a
//                   href={item.href}
//                   className="px-3 py-2 rounded-md text-sm font-medium hover-text-gradient transition-colors duration-200"
//                 >
//                   {item.title}
//                 </a>
//               </BackgroundSpotlight>
//             </motion.div>
//           ))}
//           <motion.a
//             href="#contact"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
//             className="ml-4 px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/80 transition-colors duration-200"
//           >
//             Enroll Now
//           </motion.a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <motion.button
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden flex items-center p-2"
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? (
//             <X className="w-6 h-6" />
//           ) : (
//             <Menu className="w-6 h-6" />
//           )}
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white dark:bg-slate-900 shadow-lg"
//           >
//             <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.title}
//                   href={item.href}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   className="py-2 hover:text-primary transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.title}
//                 </motion.a>
//               ))}
//               <motion.a
//                 href="#contact"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
//                 className="py-2 px-4 bg-primary text-white rounded-md inline-block text-center hover:bg-primary/80 transition-colors duration-200"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Enroll Now
//               </motion.a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import BackgroundSpotlight from './BackgroundSpotlight';

const navItems = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Programs', href: '#programs' },
  { title: 'Achievements', href: '#achievements' },
  { title: 'Campus', href: '#campus' },
  { title: 'Admissions', href: '#admissions' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <motion.div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.a
            href="#"
            className="font-bold text-2xl text-primary dark:text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient font-bold">ST.Xavier's </span>
            <span className="dark:text-white text-slate-900">Nevta</span>
          </motion.a>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                style={{ opacity, scale }}
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 mt-2 w-64 h-36 z-50 rounded-lg overflow-hidden shadow-lg pointer-events-none"
              >
                {/* 🔁 Replace with your image or video */}
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020"
                  // autoPlay
                  // muted
                  // loop
                  className="w-full h-full object-cover"
                />
                {/* OR use an image: */}
                {/* <img src="/preview.jpg" alt="Preview" className="w-full h-full object-cover" /> */}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <BackgroundSpotlight>
                <a
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover-text-gradient transition-colors duration-200"
                >
                  {item.title}
                </a>
              </BackgroundSpotlight>
            </motion.div>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            className="ml-4 px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/80 transition-colors duration-200"
          >
            Enroll Now
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 shadow-lg"
          >
            <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="py-2 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="py-2 px-4 bg-primary text-white rounded-md inline-block text-center hover:bg-primary/80 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enroll Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
