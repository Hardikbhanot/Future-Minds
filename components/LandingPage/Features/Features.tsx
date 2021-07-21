import styles from './Features.module.scss';

const Features = () => {
  return (
    <section className={styles.features_section}>
      <div className={styles.features_container}>
        <div className={styles.card_back_shadow}>
          <div className={styles.card}>
            <h3 className={styles.card_heading}>Live Classes</h3>
            <div className={styles.heading_bottom_line}></div>
            <p className={styles.card_description}>
              Better learning and Understanding through live interactions with
              experts.
            </p>
          </div>
        </div>
        <div className={styles.card_back_shadow}>
          <div className={styles.card}>
            <h3 className={styles.card_heading}>Expert Mentors</h3>
            <div className={styles.heading_bottom_line}></div>
            <p className={styles.card_description}>
              Learn from renowned subject expert Corporate Stalwarts &
              Academicians.
            </p>
          </div>
        </div>
        <div className={styles.card_back_shadow}>
          <div className={styles.card}>
            <h3 className={styles.card_heading}>Career Gateway</h3>
            <div className={styles.heading_bottom_line}></div>
            <p className={styles.card_description}>
              Hands on experience through assured Internships and get Job
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
