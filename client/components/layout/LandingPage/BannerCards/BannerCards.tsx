import styles from './BannerCards.module.scss';
interface BannerCardsProps {
  noOfCards: number;
}

const BannerCards = ({ noOfCards }: BannerCardsProps) => {
  return (
    <section className={styles.banner_cards}>
      <div className={styles.banner_card_container}>
        <div className={styles.banner_card}>
          <div className={styles.card_img_container}></div>
          <div className={styles.card_content}>
            <h3 className={styles.cards_heading}>Interactive Live Classes</h3>
            <p className={styles.card_summary}>
              Better learning and Understanding through live interactions with
              expert Faculty.
            </p>
          </div>
        </div>
        <div className={styles.banner_card}>
          <div className={styles.card_img_container}></div>
          <div className={styles.card_content}>
            <h3 className={styles.cards_heading}>Expert Faculty</h3>
            <p className={styles.card_summary}>
              Learn from renowned subject expert Corporate Stalwarts &
              Academicians.
            </p>
          </div>
        </div>
        <div className={styles.banner_card}>
          <div className={styles.card_img_container}></div>
          <div className={styles.card_content}>
            <h3 className={styles.cards_heading}>Career Gateway</h3>
            <p className={styles.card_summary}>
              Hands on experience through assured Internships and get Job
              opportunities
            </p>
          </div>
        </div>
      </div>
      <h3 className={styles.banner_cards_last_para}>
        Easy EMI's Available Through Our Finance Partners
      </h3>
    </section>
  );
};

export default BannerCards;
