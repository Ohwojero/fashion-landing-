'use client';
import { motion } from 'framer-motion';
import styles from './service.module.scss';
import {servicesData} from './data'
// We'll use simple text/emoji icons for now, but you could import react-icons if preferred
// import { GiLargeDress, GiSewingMachine, GiRolledCloth, GiScissors } from 'react-icons/gi'; // Example icons

const Services = ({ services }) => {
  // if (!services || services.length === 0) {
  //   return null; // Or a placeholder message
  // }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 90, damping: 10, duration: 0.6 },
    },
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className="section-title">What We Offer</h2>
        <motion.div
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className={styles.serviceItem}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                {/* You can replace text/emoji icons with <Image> or <ReactIcons> */}
                <span className={styles.serviceIcon}>{service.icon || '⭐'}</span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;