import Link from 'next/link';
import Image from 'next/Image';

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
        <div className={styles.category_card_wrapper}>
          <div className={styles.category_card_container}>
            <Link href='/'>
              <a className={styles.category_card}>
                <Image
                  src='/images/category-img1.jpeg'
                  alt='Category background'
                  width={500}
                  height={600}
                  className={styles.category_card_background}
                />
                <span>Animation</span>
              </a>
            </Link>
          </div>
          <div className={styles.category_card_container}>
            <Link href='/'>
              <a className={styles.category_card}>
                <Image
                  src='/images/category-img1.jpeg'
                  alt='Category background'
                  width={500}
                  height={600}
                  className={styles.category_card_background}
                />
                <span>Data Science</span>
              </a>
            </Link>
          </div>
          <div className={styles.category_card_container}>
            <Link href='/'>
              <a className={styles.category_card}>
                <Image
                  src='/images/category-img1.jpeg'
                  alt='Category background'
                  width={500}
                  height={600}
                  className={styles.category_card_background}
                />
                <span>UX/UI</span>
              </a>
            </Link>
          </div>
          <div className={styles.category_card_container}>
            <Link href='/'>
              <a className={styles.category_card}>
                <Image
                  src='/images/category-img1.jpeg'
                  alt='Category background'
                  width={500}
                  height={600}
                  className={styles.category_card_background}
                />
                <span>Web Development</span>
              </a>
            </Link>
          </div>
          <div className={styles.category_card_container}>
            <Link href='/'>
              <a className={styles.category_card}>
                <Image
                  src='/images/category-img1.jpeg'
                  alt='Category background'
                  width={500}
                  height={600}
                  className={styles.category_card_background}
                />
                <span>Python</span>
              </a>
            </Link>
          </div>
          <div className={styles.category_card_container}>
            <Link href='/'>
              <a className={styles.category_card}>
                <Image
                  src='/images/category-img1.jpeg'
                  alt='Category background'
                  width={500}
                  height={600}
                  className={styles.category_card_background}
                />
                <span>Writting</span>
              </a>
            </Link>
          </div>
        </div>
        <Link href='/'>
          <a title='View All Categories'>
            <svg
              width='20'
              height='23'
              viewBox='0 0 20 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14 13.6562C12.7188 13.6562 12.1027 14.375 10 14.375C7.89732 14.375 7.28571 13.6562 6 13.6562C2.6875 13.6562 0 16.3605 0 19.6938V20.8438C0 22.0342 0.959821 23 2.14286 23H17.8571C19.0402 23 20 22.0342 20 20.8438V19.6938C20 16.3605 17.3125 13.6562 14 13.6562ZM17.8571 20.8438H2.14286V19.6938C2.14286 17.5555 3.875 15.8125 6 15.8125C6.65179 15.8125 7.70982 16.5312 10 16.5312C12.308 16.5312 13.3438 15.8125 14 15.8125C16.125 15.8125 17.8571 17.5555 17.8571 19.6938V20.8438ZM10 12.9375C13.5491 12.9375 16.4286 10.04 16.4286 6.46875C16.4286 2.89746 13.5491 0 10 0C6.45089 0 3.57143 2.89746 3.57143 6.46875C3.57143 10.04 6.45089 12.9375 10 12.9375ZM10 2.15625C12.3616 2.15625 14.2857 4.09238 14.2857 6.46875C14.2857 8.84512 12.3616 10.7812 10 10.7812C7.63839 10.7812 5.71429 8.84512 5.71429 6.46875C5.71429 4.09238 7.63839 2.15625 10 2.15625Z'
                fill='white'
              />
            </svg>
            <p>View All Categories</p>
          </a>
        </Link>
      </section>
    </main>
  );
};

export default CategoryBanner;
