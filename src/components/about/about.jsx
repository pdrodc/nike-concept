import styles from "./about.module.css";
import NikeLogo from "../../assets/Logo_NIKE.svg";

const About = () => {
  return (
    <section className={styles.About} id="about">
      <div className={styles.wrapperAbout}>
        <p className={styles.description}>
          Nike, Inc. is one of the world's largest sports brands, founded in
          1964 by Bill Bowerman and Phil Knight as Blue Ribbon Sports in Oregon,
          USA. The company adopted the name "Nike" in 1971, inspired by the
          Greek goddess of victory, and introduced the iconic Swoosh logo the
          same year. Known for innovation in footwear and sports apparel, Nike
          became a global leader by partnering with top athletes, developing
          groundbreaking products like the Air Max, and launching influential
          campaigns such as “Just Do It.” Today, Nike operates worldwide and is
          a cultural icon in both athletics and lifestyle.
        </p>
        <img src={NikeLogo} alt="" />
      </div>
    </section>
  );
};

export default About;
