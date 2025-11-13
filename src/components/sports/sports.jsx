import styles from "./sports.module.css";
import NikeVideo from "../../assets/video.mp4";
import Running from "../../assets/running.avif";
import Soccer from "../../assets/socce.jpg";
import Basketball from "../../assets/basketball.avif";
import NFL from "../../assets/nfl.jpg";
import Tennis from "../../assets/tennis.jpg";

const Sports = () => {
  return (
    <section className={styles.Sports} id="sports">
      <div className={styles.wrapperSports}>
        <div className={styles.videoContainer}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={NikeVideo}
            aria-label="Vídeo mostrando atletas e esportes diversos"
          />
          <div className={styles.overlay}>
            <h2 className={styles.titleVideo}>Move with Nike</h2>
            <p className={styles.subtitle}>
              The sport energy on every move.
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardWrapper}>
            <img src={Running} alt="" />
            <h1>Running</h1>
            <button>Nike for Runners</button>
          </div>
          <div className={styles.cardWrapper}>
            <img src={Soccer} alt="" />
            <h1>Soccer</h1>
            <button>Nike for Players</button>
          </div>
          <div className={styles.cardWrapper}>
            <img src={Basketball} alt="" />
            <h1>Basketball</h1>
            <button>Nike for Hoopers</button>
          </div>
          <div className={styles.cardWrapper}>
            <img src={NFL} alt="" />
            <h1>Football</h1>
            <button>Nike for QBs</button>
          </div>
          <div className={styles.cardWrapper}>
            <img src={Tennis} alt="" />
            <h1>Tennis</h1>
            <button>Nike for Tennis</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
