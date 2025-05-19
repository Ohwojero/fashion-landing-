import { IoClose } from "react-icons/io5";
import styles from "./modal.module.scss";

const SliderModal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.upumiCarouselModal}>
      <div className={styles.upumiCarouselModalWrapper}>
        <div className={styles.upumiCarouselModalContent}>
          <button 
            onClick={onClose} 
            className={styles.upumiCloseButton}
            aria-label="Close modal"
          >
            <IoClose />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SliderModal;
