
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';

const stats = [
  { label: "Graduation Rate", value: "99%" },
  { label: "College Acceptance", value: "96%" },
  { label: "Student-Faculty Ratio", value: "14:1" },
  { label: "Academic Awards", value: "200+" },
];

const achievements = [
  {
    year: "2023",
    title: "National STEM Excellence Award",
    description: "Recognized for outstanding STEM education programs and student achievements in regional and national competitions."
  },
  {
    year: "2022",
    title: "Arts & Culture Recognition",
    description: "Our performing arts department received statewide recognition for exceptional programs in music, theater, and visual arts."
  },
  {
    year: "2021",
    title: "Athletic Championship",
    description: "Our varsity teams secured championships in basketball, swimming, and track & field at the state level."
  },
  {
    year: "2020",
    title: "Community Impact Award",
    description: "Students and faculty were honored for contributing over 15,000 hours of community service and leading impactful initiatives."
  },
];

const AchievementsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900/50 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-accent/5 to-transparent" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-4">
            Our Achievements
          </span>
          <AnimatedText
            text="Excellence in Every Endeavor"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            At Stellar School, we take pride in our students' accomplishments across academics, 
            arts, sports, and community service. Here's a glimpse of our recent achievements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-slate-700"
            >
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{opacity : 0 , x: index % 2 === 0 ? 50 : -50 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-end">
                  <div className="bg-primary text-white text-lg font-bold py-2 px-6 rounded-full mb-4 z-10">
                    {achievement.year}
                  </div>
                  <div className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-slate-700 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2" />
                
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-slate-900" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
