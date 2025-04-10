
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import BackgroundSpotlight from './BackgroundSpotlight';
import { BookOpen, Code, Beaker, Music, Trophy, Heart } from 'lucide-react';

const programs = [
  {
    title: "Arts & Humanities",
    description: "Explore literature, history, philosophy, and the arts to develop critical thinking and creative expression.",
    icon: BookOpen,
    color: "bg-yellow-500"
  },
  {
    title: "STEM Education",
    description: "Engage with science, technology, engineering, and mathematics through hands-on projects and cutting-edge resources.",
    icon: Beaker,
    color: "bg-green-500"
  },
  {
    title: "Computer Science",
    description: "Learn programming, app development, robotics, and computational thinking to prepare for the digital future.",
    icon: Code,
    color: "bg-blue-500"
  },
  {
    title: "Performing Arts",
    description: "Develop talents in music, drama, dance, and visual arts through professional instruction and performances.",
    icon: Music,
    color: "bg-purple-500"
  },
  {
    title: "Athletics",
    description: "Build teamwork, discipline, and physical fitness through our comprehensive sports programs.",
    icon: Trophy,
    color: "bg-red-500"
  },
  {
    title: "Community Service",
    description: "Engage with local and global communities through meaningful service projects and initiatives.",
    icon: Heart,
    color: "bg-pink-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-4">
            Our Programs
          </span>
          <AnimatedText
            text="Comprehensive Educational Offerings"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            We offer a wide range of programs designed to nurture every aspect of a student's development,
            from academic excellence to artistic expression and physical wellbeing.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BackgroundSpotlight className="h-full">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 shadow-md border border-gray-100 dark:border-slate-700 h-full flex flex-col">
                  <div className={`${program.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{program.description}</p>
                  <a 
                    href="#" 
                    className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </BackgroundSpotlight>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
