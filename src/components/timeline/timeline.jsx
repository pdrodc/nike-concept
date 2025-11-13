import styles from "./timeline.module.css";

const events = [
  {
    year: "1964",
    title: "Founded as Blue Ribbon Sports",
    description: "The beginning of the journey that would become Nike.",
  },
  {
    year: "1971",
    title: "Creation of the Swoosh",
    description: "The iconic logo symbolizing movement and speed.",
  },
  {
    year: "1972",
    title: "Launch of Nike Cortez",
    description: "Nike's first commercial shoe hits the Olympics and global market.",
  },
  {
    year: "1987",
    title: "Birth of Air Max",
    description: "Revolutionary visible air cushioning changes sneaker design forever.",
  },
  {
    year: "1988",
    title: "“Just Do It” Campaign",
    description: "Debut of one of the most memorable campaigns worldwide.",
  },
  {
    year: "1994",
    title: "Brazil National Football Team Partnership",
    description: "Nike becomes official sponsor, marking its entry into global football.",
  },
  {
    year: "2003",
    title: "“Nike Considered” Program",
    description: "Focus on sustainability and environmental impact.",
  },
  {
    year: "2009",
    title: "Launch of Air Yeezy",
    description: "Collaboration with Kanye West redefines sneaker culture.",
  },
  {
    year: "2017",
    title: "Breaking2 Project",
    description: "Nike leads the quest to break the 2-hour marathon barrier.",
  },
  {
    year: "2020",
    title: "Diversity and inclusion initiatives",
    description: "Commitment to social responsibility and equality.",
  },
];

export default function Timeline() {
  return (
    <section className={styles.timelineSection} id="story">
      <h2 className={styles.title}>NIKE HISTORY TIMELINE</h2>
      <ul className={styles.timeline}>
        {events.map((event, index) => (
          <li
            key={event.year}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.content}>
              <span className={styles.year}>{event.year}</span>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.description}>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
