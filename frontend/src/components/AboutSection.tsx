
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import BackgroundSpotlight from './BackgroundSpotlight';
import { CheckCircle, Flag } from 'lucide-react';

const features = [
  {
    title: "Excellence in Education",
    description: "Our curriculum is designed to nurture critical thinking, creativity, and academic excellence."
  },
  {
    title: "Experienced Faculty",
    description: "Our teachers are among the best in their fields, dedicated to inspiring students to reach their potential."
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, labs, sports fields, and performance spaces enhance the learning experience."
  },
  {
    title: "Holistic Development",
    description: "We focus on developing not just academic skills, but also character, leadership, and social responsibility."
  }
];

const aboutVariants = {
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

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-slate-900/50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 h-64 w-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 h-64 w-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-4">
            About Us
          </span>
          <AnimatedText
            text="Where Excellence Meets Opportunity"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Founded on principles of academic excellence, character development, and innovation, 
            Stellar School has been nurturing bright minds for over 25 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{opacity : 0 , x : 20}}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-3 scale-105" />
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
              alt="Students in classroom" 
              className="rounded-3xl shadow-lg relative z-10 object-cover w-full h-[500px]"
            />
            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-gray-500">Years of Excellence</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={aboutVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To provide a transformative educational experience that nurtures curiosity, builds character, 
                and prepares students to lead meaningful lives and contribute positively to society.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <BackgroundSpotlight key={index} className="p-5 rounded-xl bg-white dark:bg-slate-800/50 shadow-sm border border-gray-100 dark:border-slate-800">
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </BackgroundSpotlight>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
