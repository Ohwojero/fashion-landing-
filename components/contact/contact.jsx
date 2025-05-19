'use client';
import { motion } from 'framer-motion';
import styles from './contact.module.scss';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa'; // Specific WhatsApp icon

const Contact = ({
  title = "Get In Touch",
  subtitle = "Ready to bring your vision to life? Contact us today for a consultation or any inquiries.",
  whatsappNumber = "2348012345678", // Use international format without + or spaces for wa.me link
  phoneDisplay = "+234 9020266783",
  email = "ohwojerogodstime@gmail.com",
  address = "123 Fashion Street, Lekki Phase 1, Lagos, Nigeria (By Appointment Only)"
}) => {

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12, duration: 0.6 },
    },
  };

  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`; // Removes non-digits

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">{title}</motion.h2>
          <motion.p variants={itemVariants} className={styles.subtitle}>{subtitle}</motion.p>

          <div className={styles.contactGrid}>
            {/* Contact Info Column */}
            <motion.div className={styles.contactInfoColumn} variants={itemVariants}>
              <h3 className={styles.columnTitle}>Contact Details</h3>
              {whatsappNumber && (
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <FaWhatsapp className={styles.contactIcon} />
                  <span>Chat on WhatsApp</span>
                </a>
              )}
              {phoneDisplay && (
                <a href="tel: +234 9020266783" className={styles.contactItem}>
                  <FiPhone className={styles.contactIcon} />
                  <span>{phoneDisplay}</span>
                </a>
              )}
              {email && (
                <a href="mailto:ohwojerogodstime@gmail.com" className={styles.contactItem}>
                  <FiMail className={styles.contactIcon} />
                  <span>{email}</span>
                </a>
              )}
              {address && (
                <div className={styles.contactItem}>
                  <FiMapPin className={styles.contactIcon} />
                  <span>{address}</span>
                </div>
              )}
            </motion.div>

            {/* Contact Form Column (Placeholder or Simple Implementation) */}
            <motion.div className={styles.contactFormColumn} variants={itemVariants}>
              <h3 className={styles.columnTitle}>Send Us a Message</h3>
              <form className={styles.contactForm} onSubmit={(e) => { e.preventDefault(); alert('Form submission placeholder!'); }}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email_form">Email Address</label>
                  <input type="email" id="email_form" name="email_form" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;