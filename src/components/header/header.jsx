import styles from "./header.module.css";
import Logo from "../../assets/logo.png";
import LoginModal from "../loginmodal/loginmodal";
import { User } from "lucide-react";
import { useState } from "react";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img
            src={menuActive ? iconCloser : iconBars}
            id={styles.menuIcons}
            alt=""
          />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="#hero">Home</a>
            </li>
            <li className={styles.navLi}>
              <a href="#story">History</a>
            </li>
            <li className={styles.navLi}>
              <a href="#sports">Sports</a>
            </li>
            <li className={styles.navLi}>
              <a href="#stores">Stores</a>
            </li>
            <li className={styles.navLi}>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <button
          className={styles.loginButton}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
      </div>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </header>
  );
};

export default Header;

