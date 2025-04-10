
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { ChevronRight, Users, Calendar, FileText, Check } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Submit Application",
    description: "Complete our online application form and submit the required documents, including academic records and recommendation letters.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Entrance Assessment",
    description: "Applicants take part in age-appropriate assessments to evaluate academic readiness and potential.",
    icon: Users,
  },
  {
    number: "03",
    title: "Interview",
    description: "Selected applicants and their families are invited for an interview with our admissions team.",
    icon: Calendar,
  },
  {
    number: "04",
    title: "Acceptance",
    description: "Successful applicants receive an offer of admission with details on next steps and enrollment procedures.",
    icon: Check,
  }
];

const AdmissionsSection: React.FC = () => {
  return (
    <section id="admissions" className="py-20 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute right-0 top-20 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute left-0 bottom-20 w-1/4 h-1/4 bg-accent/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-4">
              Admissions
            </span>
            <AnimatedText
              text="Join Our Stellar Community"
              className="text-3xl md:text-5xl font-bold mb-6"
            />
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We welcome applications from students who are eager to learn, grow, and contribute 
              to our vibrant community. Our admissions process is designed to identify students 
              who will thrive in our challenging and supportive environment.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Application Process</h3>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm font-medium text-primary mr-2">{step.number}</span>
                        <h4 className="font-bold">{step.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-200 transform hover:scale-105"
            >
              Apply Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-2 scale-105" />
            <div className="relative z-10 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-700">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Admission Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-slate-700/50 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-slate-700/50 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-slate-700/50 dark:text-white"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium mb-1">Grade Applying For</label>
                    <select
                      id="grade"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-slate-700/50 dark:text-white"
                    >
                      <option value="">Select Grade</option>
                      <option value="kindergarten">Kindergarten</option>
                      <option value="elementary">Elementary School (1-5)</option>
                      <option value="middle">Middle School (6-8)</option>
                      <option value="high">High School (9-12)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-slate-700/50 dark:text-white"
                      placeholder="Tell us about your child and any questions you have"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
