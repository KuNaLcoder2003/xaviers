
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  children,
  direction = 'left',
  speed = 40,
  pauseOnHover = true,
  className,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [contentWidth, setContentWidth] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const calculateWidths = () => {
      if (!marqueeRef.current) return;
      
      const container = marqueeRef.current;
      const content = container.querySelector('.marquee-content') as HTMLElement;
      
      if (content) {
        setContainerWidth(container.offsetWidth);
        setContentWidth(content.offsetWidth);
        setDuration((content.offsetWidth / speed) * 1.5);
      }
    };

    calculateWidths();
    window.addEventListener('resize', calculateWidths);
    
    return () => {
      window.removeEventListener('resize', calculateWidths);
    };
  }, [speed, children]);

  const duplicate = contentWidth < containerWidth ? 3 : 2;

  return (
    <div 
      ref={marqueeRef}
      className={cn('overflow-hidden flex w-full', className)}
    >
      <motion.div
        className="marquee-content flex"
        animate={{
          x: direction === 'left' 
            ? [0, -contentWidth] 
            : [-contentWidth, 0]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: duration,
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {[...Array(duplicate)].map((_, i) => (
          <div key={i} className="flex-shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
