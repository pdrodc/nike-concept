import styles from './footer.module.css';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logoSection}>
          <img src="/logo.png" alt="Nike" className={styles.logo} />
        </div>
        <nav className={styles.links}>
          <a href="/about">About</a>
          <a href="/stores">Stores</a>
          <a href="/products">Sports</a>
          <a href="/support">Support</a>
        </nav>
        <div className={styles.social}>
          <a href="https://facebook.com/nike" aria-label="Facebook"><Facebook size={22} /></a>
          <a href="https://instagram.com/nike" aria-label="Instagram"><Instagram size={22} /></a>
          <a href="https://twitter.com/nike" aria-label="Twitter"><Twitter size={22} /></a>
          <a href="https://youtube.com/nike" aria-label="YouTube"><Youtube size={22} /></a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>&copy; {new Date().getFullYear()} Nike, Inc.</span>
        <div className={styles.legal}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;