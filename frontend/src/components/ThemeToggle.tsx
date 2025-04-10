
import  { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const ThemeToggle = ({ className }: { className?: string }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is preferred or previously set
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    console.log('clicked')
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Apply dark mode to HTML element
    document.documentElement.classList.toggle('dark', newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={()=>toggleTheme()}
      className={cn(
        'fixed top-5 right-5 z-[9999999] p-2 rounded-full transition-colors duration-200',
        'bg-white/20 backdrop-blur-md border border-white/10 shadow-lg',
        'hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/40',
        className
      )}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
