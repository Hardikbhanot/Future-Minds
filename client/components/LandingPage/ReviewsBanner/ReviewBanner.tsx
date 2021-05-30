import Image from 'next/Image';

import styles from './ReviewBanner.module.scss';

const Review = () => {
  return (
    <section className={styles.review_section}>
      <div className={styles.review_container}>
        <div className={styles.review_card}>
          <p className={styles.review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            illum inventore repudiandae animi, ab iusto! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Asperiores illum inventore
            repudiandae animi, ab iusto!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores illum inventore repudiandae animi, ab
            iusto!
          </p>
          <div className={styles.reviewer_profile}>
            <Image
              src='/images/logo_fm.png'
              alt='Picture of the reviewer'
              width={50}
              height={50}
            />
            <div className={styles.reviewer_details}>
              <h3 className={styles.reviewer_name}>Ayush Yadav</h3>
              <p className={styles.reviewer_position}>Web developer</p>
            </div>
          </div>
        </div>
        <div className={styles.review_card}>
          <p className={styles.review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            illum inventore repudiandae animi, ab iusto! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Asperiores illum inventore
            repudiandae animi, ab iusto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores illum inventore repudiandae animi, ab
            iusto!
          </p>
          <div className={styles.reviewer_profile}>
            <Image
              src='/images/logo_fm.png'
              alt='Picture of the reviewer'
              width={50}
              height={50}
            />
            <div className={styles.reviewer_details}>
              <h3 className={styles.reviewer_name}>Ayush Yadav</h3>
              <p className={styles.reviewer_position}>Web developer</p>
            </div>
          </div>
        </div>
        <div className={styles.review_card}>
          <p className={styles.review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            illum inventore repudiandae animi, ab iusto! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Asperiores illum inventore
            repudiandae animi, ab iusto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores illum inventore repudiandae animi, ab
            iusto!
          </p>
          <div className={styles.reviewer_profile}>
            <Image
              src='/images/logo_fm.png'
              alt='Picture of the reviewer'
              width={50}
              height={50}
            />
            <div className={styles.reviewer_details}>
              <h3 className={styles.reviewer_name}>Ayush Yadav</h3>
              <p className={styles.reviewer_position}>Web developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
