import styles from './MainBanner.module.scss';

const MainBanner = () => {
  return (
    <section className={styles.stepdegree_page}>
      <section className={styles.main_section}>
        <div className={styles.main_image_container}>
          <div className={styles.boy_background_circle}>
            <img
              className={styles.boy_image}
              src='/images/stepdegree_boy_image.png'
              alt='stepdegree_boy_image'
              width={370}
              height={542}
            />
            <div className={styles.boy_light_background_circle}></div>
          </div>
          <img
            className={[styles.company_logo, styles.company_logo_1].join(' ')}
            src='/images/microsoft_logo_color.png'
            alt='company_logo'
            width={145}
            height={32}
          />
          <img
            className={[styles.company_logo, styles.company_logo_2].join(' ')}
            src='/images/flipkart_logo.png'
            alt='company_logo'
            width={145}
            height={38}
          />
          <img
            className={[styles.company_logo, styles.company_logo_3].join(' ')}
            src='/images/paypal_logo.png'
            alt='company_logo'
            width={145}
            height={38}
          />
          <img
            className={[styles.company_logo, styles.company_logo_4].join(' ')}
            src='/images/upstox_logo.png'
            alt='company_logo'
            width={85}
            height={57}
          />
        </div>
        <div className={styles.main_description_container}>
          <h1 className={styles.heading}>
            Get Your <span className={styles.blue_heading}>Dream Jobs</span>{' '}
            Through Guided Learning From
            <span className={styles.green_heading}> Industry Experts</span>
          </h1>
          <h4 className={styles.tag_line}>
            With <strong>StepDegree</strong>, No Job then No Fees Gurantee*
          </h4>
        </div>
      </section>
      <div className={styles.main_background}></div>
    </section>
  );
};

export default MainBanner;
