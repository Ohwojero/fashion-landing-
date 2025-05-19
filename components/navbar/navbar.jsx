'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './navbar.module.scss';
import { FiMenu, FiX } from 'react-icons/fi'; 



const Navbar = ({ designerName = "Designer" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const navItemVariants = {
     hidden: { opacity: 0, x: -20 },
     visible: (i) => ({ 
       opacity: 1,
       x: 0,
       transition: {
         delay: i * 0.1, 
         type: 'spring',
         stiffness: 120
       },
     }),
  };


  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.navContainer} container`}>
        <Link href="#home" className={styles.logo}>
          {designerName}
        </Link>

       
        <ul className={styles.navLinksDesktop}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>
            </li>
          ))}
        </ul>

       
        <div className={styles.mobileMenuToggle} onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  custom={index} 
                  variants={navItemVariants}
                  initial="hidden" 
                  animate="visible" 
                >
                  <Link href={link.href} onClick={toggleMenu}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;