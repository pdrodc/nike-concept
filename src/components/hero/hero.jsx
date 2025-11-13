import { useState, useEffect } from 'react';
import styles from './hero.module.css';
import hero1 from '../../assets/banner-amx95.png';
import hero2 from '../../assets/banner-estevão.png';
import hero3 from '../../assets/banner-lebron.png';
import hero4 from '../../assets/banner-aja.png';
import hero5 from '../../assets/banner-mariona.png';

const images = [hero1, hero2, hero3, hero4, hero5];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    function handleResize() {
      setAutoRotate(window.innerWidth > 768); // rotaçao automática só em telas maiores que 768px
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoRotate) return; // Para se não for para rotacionar automaticamente

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const goPrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.carousel}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`${styles.image} ${
              index === currentIndex ? styles.active : ''
            }`}
          />
        ))}

        <button className={styles.prev} onClick={goPrev} aria-label="Anterior">
          &#10094;
        </button>
        <button className={styles.next} onClick={goNext} aria-label="Próximo">
          &#10095;
        </button>

        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
