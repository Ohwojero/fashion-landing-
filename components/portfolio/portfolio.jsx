"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./portfolio.module.scss";
import { data } from "./data";
import { FiEye } from "react-icons/fi"; 
import SliderModal from "../modal/modal";
import { useState } from "react";
import Carousel from "../carousel/carousel";
const PortfolioGallery = ({ items }) => {
  const [openModal, setOpenModal] = useState(false);
  const galleryVariants = {
    hidden: {}, 
    visible: {
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className="container">
        <h2 className="section-title">Our Creations</h2>
        <motion.div
          className={styles.galleryGrid}
          variants={galleryVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              className={styles.galleryItem}
              variants={itemVariants}
            
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src}
                  alt={item.alt || "Fashion design portfolio item"}
                  width={500} 
                  height={700} 
                  layout="responsive" 
                  objectFit="cover"
                  quality={80}
                  className={styles.galleryImage}
                />
                <div className={styles.itemOverlay}>
                  <div className={styles.overlayContent}>
                   
                    <h3 className={styles.itemTitle}>
                      {item.title}
                    </h3>
                    <p>{item.alt}</p>
                      <p className={styles.itemDescription}>
                        {item.description}
                      </p>
                    
                     <button className={styles.viewButton}>
                      <FiEye /> View Details
                    </button> 
                    {/* <SliderModal isOpen={openModal} onClose={() => setOpenModal(false)}>
                      <Carousel />
                    </SliderModal> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
