import Link from 'next/link';

import styles from './CategoryBanner.module.scss';

const CategoryBanner = () => {
  return (
    <main className={styles.category_banner}>
      <section className={styles.category_banner_section}>
        <p className={styles.category_banner_sub_heading}>EXPLORE</p>
        <h2 className={styles.category_banner_main_heading}>
          Course Categories
        </h2>
        <p className={styles.category_banner_discription}>
          Choose from your choice of subjects.
        </p>
        <div className={styles.category_card_container}>
          <Link href='/'>
            <a className={styles.category_card}>
              <span>Animation</span>
            </a>
          </Link>

          <Link href='/'>
            <a className={styles.category_card}>
              <span>Data Science</span>
            </a>
          </Link>

          <Link href='/'>
            <a className={styles.category_card}>
              <span>UX/UI</span>
            </a>
          </Link>

          <Link href='/'>
            <a className={styles.category_card}>
              <span>Web Development</span>
            </a>
          </Link>

          <Link href='/'>
            <a className={styles.category_card}>
              <span>Python</span>
            </a>
          </Link>

          <Link href='/'>
            <a className={styles.category_card}>
              <span>Writing</span>
            </a>
          </Link>

          <Link href='/'>
            <a className={styles.category_card}>
              <span>Machine Learning</span>
            </a>
          </Link>

          <Link href='/'>
            <a className={styles.category_card}>
              <span>IT & Software</span>
            </a>
          </Link>
        </div>
        <Link href='/'>View All Categories</Link>
      </section>
    </main>
  );
};

export default CategoryBanner;
