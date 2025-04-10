// import { useEffect, useState } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const IntroSplash = () => {
//   const { scrollY } = useScroll();
//   const [hideSplash, setHideSplash] = useState(false);

//   // Animate fade and scale out between 0 and 300px scroll
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);
//   const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

//   // Hide splash completely after scrolling past 400px
//   useEffect(() => {
//     const unsubscribe = scrollY.onChange((latest) => {
//       if (latest > 400) {
//         setHideSplash(true);
//       } else {
//         setHideSplash(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [scrollY]);

//   if (hideSplash) return null;

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[40] pointer-events-none"
//       style={{
//         opacity,
//         scale,
//         backdropFilter: 'blur(4px)',
//       }}
//     >
//       {/* You can use a video here as well */}
//       <motion.img
//         src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020"
//         alt="Intro Splash"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.2, ease: 'easeInOut' }}
//         className="w-[250px] h-auto"
//       />
//     </motion.div>
//   );
// };

// export default IntroSplash;
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroSplash = () => {
  const { scrollY } = useScroll();
  const [permanentlyHidden, setPermanentlyHidden] = useState(false);

  // Smooth animation while scrolling
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Hide permanently after 400px, without toggling back
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 400 && !permanentlyHidden) {
        setPermanentlyHidden(true);
      }
    });

    return () => unsubscribe();
  }, [scrollY, permanentlyHidden]);

  if (permanentlyHidden) return null;

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-[60vh] flex items-center justify-center z-30 pointer-events-none"
      style={{
        opacity,
        scale,
        backdropFilter: 'blur(4px)',
      }}
    >
      <motion.img
        src="/your-logo-or-splash.png"
        alt="Intro Splash"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="w-[250px] h-auto"
      />
    </motion.div>
  );
};

export default IntroSplash;




