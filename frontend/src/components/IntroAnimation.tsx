import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  // Shrink + fade out the splash
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Once animation fades, disable rendering
  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      if (y > 300) setIsVisible(false);
    });
    return () => unsubscribe();
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ scale, opacity }}
      className="fixed top-0 left-0 w-full h-screen z-[90] flex items-center justify-center pointer-events-none bg-black/60 backdrop-blur-md"
    >
        <p className='absolute top-6 text-3xl font-semibold '>Scroll</p>
      <div className="w-[90%] max-w-[80%] h-[80vh] overflow-hidden rounded-3xl shadow-lg">
      <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020"

            className="w-full h-full object-cover"
          /> 
      </div>
    </motion.div>
  );
};

export default IntroAnimation;

// import { useEffect, useState } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const IntroAnimation = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const { scrollY } = useScroll();

//   // Shrink + fade out the splash
//   const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

//   // Lock scroll while intro is active
//   useEffect(() => {
//     if (isVisible) {
//       document.body.style.overflow = 'hidden';
//       window.scrollTo({ top: 0 });
//     } else {
//       document.body.style.overflow = '';
//     }
//   }, [isVisible]);

//   // Remove intro once scroll crosses 300px
//   useEffect(() => {
//     const unsubscribe = scrollY.onChange((y) => {
//       if (y > 300) setIsVisible(false);
//     });
//     return () => unsubscribe();
//   }, [scrollY]);

//   if (!isVisible) return null;

//   return (
//     <motion.div
//       style={{ scale, opacity }}
//       className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-black/60 backdrop-blur-md pointer-events-none"
//     >
//       <div className="w-[90%] max-w-[700px] h-[70vh] overflow-hidden rounded-3xl shadow-lg">
//         <img
//           src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default IntroAnimation;







// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import HeroSection from './HeroSection';

// const IntroAnimation = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ container: containerRef });

//   const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

//   return (
//     <div
//       ref={containerRef}
//       className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
//     >
//       {/* Splash section */}
//       <motion.div
//         style={{ scale, opacity }}
//         className="h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm snap-start"
//       >
//         <div className="w-[90%] max-w-[700px] h-[70vh] overflow-hidden rounded-3xl shadow-xl">
//         <img
//             src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020"

//             className="w-full h-full object-cover"
//           />
//         </div>
//       </motion.div>

//       {/* Content underneath (like Hero) */}
      
//     </div>
//   );
// };

// export default IntroAnimation;







{/* <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020"

            className="w-full h-full object-cover"
          /> */}

