import styles from './BenefitsBanner.module.scss';

const BenefitsBanner = () => {
  return (
    <section className={styles.benefits_banner}>
      <div className={styles.company_section}>
        <p className={styles.company_heading}>
          We've Mentors & Resources in Companines Worldwide
        </p>
        <div className={styles.company_logo_container}>
          <img
            src='/images/deloitte_logo_black_white.png'
            className={styles.company_logo}
          />
          <img
            src='/images/amazon_logo_black_white.png'
            className={styles.company_logo}
          />
          <img
            src='/images/microsoft_logo_black_white.png'
            className={styles.company_logo}
          />
        </div>
      </div>
      <div className={styles.benefits_heading_container}>
        <h3 className={styles.benefits_heading}>
          We Will Get the Benefits Include
        </h3>
        <p className={styles.benefits_description}>
          From a decade major corporates shifted to skilled profiles instead of
          premium institutions
        </p>
      </div>
      <div className={styles.benefits_card_container}>
        <div className={styles.benefits_card}>
          <div className={styles.benefits_card_image_background}>
            <img
              src='/images/stepdegree_benefits_card_clock.png'
              className={styles.benefits_card_img}
            />
          </div>
          <p className={styles.benefits_card_heading}>
            Flexible <strong>Timing</strong>
          </p>
          <p className={styles.benefits_card_description}>
            Learn Along with your study & job without disturb your daily life
          </p>
          <div className={styles.benefits_card_shadow}></div>
        </div>
        <div className={styles.benefits_card}>
          <div className={styles.benefits_card_image_background}>
            <img
              src='/images/stepdegree_benefits_card_briefcase.png'
              className={styles.benefits_card_img}
            />
          </div>
          <p className={styles.benefits_card_heading}>
            Guranteed <strong>Job</strong>
          </p>
          <p className={styles.benefits_card_description}>
            Learn Along with your study & job without disturb your daily life
          </p>
          <div className={styles.benefits_card_shadow}></div>
        </div>
        <div className={styles.benefits_card}>
          <div className={styles.benefits_card_image_background}>
            <img
              src='/images/stepdegree_benefits_card_person.png'
              className={styles.benefits_card_img}
            />
          </div>
          <p className={styles.benefits_card_heading}>
            Expert <strong>Mentors</strong>
          </p>
          <p className={styles.benefits_card_description}>
            Learn Along with your study & job without disturb your daily life
          </p>
          <div className={styles.benefits_card_shadow}></div>
        </div>
        <div className={styles.benefits_card}>
          <div className={styles.benefits_card_image_background}>
            <img
              src='/images/stepdegree_benefits_card_tiles.png'
              className={styles.benefits_card_img}
            />
          </div>
          <p className={styles.benefits_card_heading}>
            Live <strong>Projects</strong>
          </p>
          <p className={styles.benefits_card_description}>
            Learn Along with your study & job without disturb your daily life
          </p>
          <div className={styles.benefits_card_shadow}></div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsBanner;
