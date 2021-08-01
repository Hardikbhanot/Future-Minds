import Image from 'next/image';

import styles from './CourseIndexPageBanner.module.scss';

const CourseIndexPageBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_container}>
        <img
          className={styles.banner_image}
          src='/images/academy_index.png'
          alt='Course Index Page Banner'
          width={449}
          height={197}
        />
      </div>
    </div>
  );
};

export default CourseIndexPageBanner;
