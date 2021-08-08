import styles from './Features.module.scss';

interface pageProps {
  cards: {
    heading: String;
    description: String;
  }[];
}

const Features = ({ cards }: pageProps) => {
  const card = cards.map((card) => {
    return (
      <div
        key={card.heading + '_' + (1 + Math.random())}
        className={styles.card_back_shadow}
      >
        <div className={styles.card}>
          <h3 className={styles.card_heading}>{card.heading}</h3>
          <div className={styles.heading_bottom_line}></div>
          <p className={styles.card_description}>{card.description}</p>
        </div>
      </div>
    );
  });
  return (
    <section className={styles.features_section}>
      <div className={styles.features_container}>{card}</div>
    </section>
  );
};

export default Features;
