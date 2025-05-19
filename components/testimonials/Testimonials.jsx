'use client';
import { motion } from 'framer-motion';
import styles from './test.module.scss';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // Using react-icons
import { testimonialsData } from './data';
const Testimonials = ({ testimonials }) => {
  
      
    
  

  const containerVariants = {
    hidden: {}, // Parent doesn't need to animate itself, just orchestrate children
    visible: {
      transition: {
        staggerChildren: 0.2, // Each child card will animate 0.2s after the previous
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6
      },
    },
  };

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className="container">
     
        <h2 className={`section-title ${styles.sectionTitleWhite}`}>
          What Our Clients Say
        </h2>
        <motion.div
          className={styles.testimonialsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }} // Animate when 15% of section is visible
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={styles.testimonialItem}
              variants={itemVariants}
            >
              <FaQuoteLeft className={`${styles.quoteIcon} ${styles.quoteIconLeft}`} />
              <p className={styles.quoteText}>{testimonial.quote}</p>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>— {testimonial.author}</span>
                {testimonial.location && (
                  <span className={styles.authorLocation}>, {testimonial.location}</span>
                )}
              </div>
              <FaQuoteRight className={`${styles.quoteIcon} ${styles.quoteIconRight}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;