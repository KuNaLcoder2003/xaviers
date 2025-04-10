import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroMedia = () => {
  const [showMedia, setShowMedia] = useState(true);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Optional: Hide after a certain scroll
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 300) setShowMedia(false);
    });
    return () => unsubscribe();
  }, [scrollY]);

  if (!showMedia) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      style={{ scale, opacity }}
    >
      <img
        src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020" // or use image: <img src="/intro.jpg" />
        className="w-[50%] h-[50%] object-cover"
      />
    </motion.div>
  );
};

export default IntroMedia;
