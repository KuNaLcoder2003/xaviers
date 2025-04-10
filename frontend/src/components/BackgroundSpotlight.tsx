
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BackgroundSpotlightProps {
  className?: string;
  children: React.ReactNode;
}

const BackgroundSpotlight: React.FC<BackgroundSpotlightProps> = ({ 
  className = "",
  children 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const updatePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
    updatePosition(e);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    setOpacity(isHovering ? 1 : 0);
  }, [isHovering]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={updatePosition}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{ 
          opacity, 
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120, 119, 198, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export default BackgroundSpotlight;
