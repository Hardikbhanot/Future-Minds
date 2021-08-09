import styles from './CourseIndexPageBanner.module.scss';

const CourseIndexPageBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_container}>
        <img
          className={styles.banner_image}
          src='/images/academy_index.png'
          alt='Course Index Page Banner'
        />
      </div>
    </div>
  );
};

export default CourseIndexPageBanner;
