import Link from 'next/link';

import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <main className={styles.page_not_found_section}>
      <div className={styles.page_not_found_main_container}>
        <div className={styles.page_not_found_main_wrapper}>
          <svg
            className={styles.page_not_found_4_svg}
            width='132'
            height='168'
            viewBox='0 0 132 168'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M77.9988 167.133V134.315H6.96819L0 116.557L51.0252 0.345459H90.5865L46.08 101.272H77.9988V72.9495L85.4166 52.4945H116.886V101.272H131.946V128.246L116.886 134.315V167.133H77.9988Z'
              fill='#3E404E'
            />
          </svg>
          <img
            className={[styles.page_not_found_image, styles.spaceman].join(' ')}
            src='/images/page_not_found_spaceman.png'
            alt='Page Not Found Spaceman'
          />
          <img
            className={styles.big_planet}
            src='/images/page_not_found_big_planet.png'
            alt='Page Not Found Spaceman'
          />
          <img
            className={[styles.page_not_found_image, styles.rocket_trail].join(
              ' '
            )}
            src='/images/page_not_found_rocket_trail.png'
            alt='Page Not Found Spaceman'
          />
          <img
            className={[styles.page_not_found_image, styles.rocket].join(' ')}
            src='/images/page_not_found_rocket.png'
            alt='Page Not Found Spaceman'
          />
          <svg
            className={styles.page_not_found_4_svg}
            width='132'
            height='168'
            viewBox='0 0 132 168'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M77.9988 167.133V134.315H6.96819L0 116.557L51.0252 0.345459H90.5865L46.08 101.272H77.9988V72.9495L85.4166 52.4945H116.886V101.272H131.946V128.246L116.886 134.315V167.133H77.9988Z'
              fill='#3E404E'
            />
          </svg>
        </div>
        <h2 className={styles.page_not_found_sub_heading}>OOPS!</h2>
        <h3 className={styles.page_not_found_text}>Page Not Found</h3>
        <div className={styles.page_not_found_link_wrapper}>
          <Link href='/'>
            <a className={styles.page_not_found_link}>GO HOME</a>
          </Link>
          <Link href='/'>
            <a className={styles.page_not_found_link}>GO BACK</a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
