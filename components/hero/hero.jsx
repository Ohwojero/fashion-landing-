'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import { FiArrowRight } from 'react-icons/fi'; // For CTA button icon

const Hero = ({
  title = "Elegance Redefined, Crafted For You",
  subtitle = "Experience bespoke fashion that tells your unique story, blending timeless style with contemporary design.",
  ctaText = "Book a Consultation",
  ctaLink = "https://wa.me/YOUR_WHATSAPP_NUMBER", // IMPORTANT: Replace
  imageUrl = "/images/gallery-1.jpeg" // Fixed path without /public
}) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Time between each child animation
        delayChildren: 0.2,   // Delay before first child starts
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12, duration: 0.8 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 10, duration: 0.7 },
    },
  };

  const ctaButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 10, duration: 0.6 },
    },
  };

  return (
    <section id="home" className={styles.hero}> {/* Added id="home" here */}
      <div className={styles.heroImageContainer}>
        {/* Optional: Subtle zoom on image for visual interest */}
        <motion.div
          className={styles.imageInnerWrapper}
          initial={{ scale: 1.05 }} // Start slightly zoomed in
          animate={{ scale: 1 }}    // Zoom out to normal
          transition={{ duration: 8, ease: "easeInOut" }} // Slow, smooth transition
        >
          <Image
            src={imageUrl}
            alt="Hero background fashion image - a stunning designer piece"
            layout="fill"
            objectFit="cover"
            quality={90} // High quality for hero
            priority // Load this image first - critical for LCP
          />
        </motion.div>
        <div className={styles.overlay}></div>
      </div>

      <motion.div
        className={`${styles.heroContent} container`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={titleVariants} className={styles.title}>
          {title}
        </motion.h1>
        <motion.p variants={subtitleVariants} className={styles.subtitle}>
          {subtitle}
        </motion.p>
        {ctaText && ctaLink && (
          <motion.a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            variants={ctaButtonVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(darken($accent-color, 15%), 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText} <FiArrowRight className={styles.ctaIcon} />
          </motion.a>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
