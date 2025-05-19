'use client';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Bespoke Designs. All rights reserved.</p>
      </div>
    </footer>
  );
}
