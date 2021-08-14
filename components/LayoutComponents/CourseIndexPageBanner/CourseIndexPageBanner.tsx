import styles from './CourseIndexPageBanner.module.scss';

const CourseIndexPageBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_container}>
        <h1 className={styles.banner_heading}>
          Welcome to Academy by FutureMinds
        </h1>
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
