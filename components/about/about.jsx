'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.scss';

const About = ({
  title = "Meet The Designer",
  imageUrl = "/images/about-image.webp", // Placeholder, ensure it exists
  imageAlt = "Photo of the fashion designer",
  story = "With a profound passion for intricate details and timeless style, [Designer Name] has been passionately crafting unique fashion pieces for over [X] years. Believing that clothing is a powerful form of self-expression, each design is a harmonious blend of contemporary trends and classic elegance, meticulously tailored to reflect the distinct individuality of every cherished client.",
  signature = "[Designer Name]" // Can be an image or text
}) => {

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 },
    },
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <motion.div
          className={styles.aboutContentWrapper}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className={styles.imageColumn} variants={imageVariants}>
            <div className={styles.imageContainer}>
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={450} // Adjust based on your image's aspect ratio
                height={600} // Adjust based on your image's aspect ratio
                layout="responsive"
                objectFit="cover"
                className={styles.designerImage}
              />
            </div>
          </motion.div>
          <motion.div className={styles.textColumn} variants={textVariants}>
            <h2 className="section-title_left-aligned">{title}</h2>
            {/* If using a more specific title for the section, replace "section-title" class */}
            {/* Or, use a standard h2 and style it within this component */}
            <p className={styles.story}>{story}</p>
            {signature && (
              <div className={styles.signature}>
                {/* If signature is an image: <Image src={signature} alt="Designer Signature" width={150} height={50} /> */}
                {/* For text signature: */}
                <p>{signature}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;