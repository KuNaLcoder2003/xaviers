
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import BackgroundSpotlight from './BackgroundSpotlight';
import InfiniteMarquee from './InfiniteMarquee';

const testimonials = [
  {
    quote: "Choosing Stellar School for our daughter was one of the best decisions we've made. The academic rigor combined with a supportive environment has helped her thrive.",
    name: "Emily Johnson",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    quote: "The teachers at Stellar are exceptional. They truly care about each student and go above and beyond to ensure everyone succeeds.",
    name: "Michael Thompson",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    quote: "I graduated from Stellar School and the education I received prepared me well for college and beyond. The critical thinking skills I developed have been invaluable.",
    name: "Jessica Williams",
    role: "Alumni",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    quote: "As a teacher, I'm proud to be part of a school that values innovation and continually strives to provide the best education possible.",
    name: "David Martinez",
    role: "Faculty",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    quote: "The STEM program at Stellar School is outstanding. My son has developed a genuine love for science and mathematics.",
    name: "Sarah Anderson",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    quote: "The diverse extracurricular activities offered at Stellar allowed me to explore my interests and develop leadership skills.",
    name: "Robert Wilson",
    role: "Alumni",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-4">
            Testimonials
          </span>
          <AnimatedText
            text="What Our Community Says"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Hear from our parents, students, alumni, and faculty about their experiences
            with Stellar School and the impact it has made on their lives.
          </p>
        </div>
      </div>

      <div className="py-8">
        <InfiniteMarquee speed={30} direction="left" className="mb-8">
          <div className="flex gap-8 px-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <BackgroundSpotlight key={index} className="w-[350px] flex-shrink-0">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-100 dark:border-slate-700 h-full">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
              </BackgroundSpotlight>
            ))}
          </div>
        </InfiniteMarquee>

        <InfiniteMarquee speed={30} direction="right">
          <div className="flex gap-8 px-4">
            {testimonials.slice(3).map((testimonial, index) => (
              <BackgroundSpotlight key={index} className="w-[350px] flex-shrink-0">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-gray-100 dark:border-slate-700 h-full">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
              </BackgroundSpotlight>
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;
