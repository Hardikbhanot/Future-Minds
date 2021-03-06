import Link from 'next/link';
import { useRef } from 'react';
import { useRouter } from 'next/router';

import styles from './MainBanner.module.scss';

const LandingPage = () => {
  const explore = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // on explore button click
  const onExploreClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (explore && explore.current) {
      // can access explore current value here
      const valueTypedInExplore = explore.current.value;
      router.push(`courses/`); //!Check this again
    }
  };

  return (
    <section className={styles.banner}>
      <div className={styles.banner_container}>
        <div className={styles.banner_main_content}>
          <h1 className={styles.banner_headline}>
            Build Skills With Experts Any Time, Anywhere
          </h1>
          <form
            className={styles.banner_explore_form}
            onSubmit={onExploreClick}
          >
            <input
              type='text'
              placeholder='What do you want to learn?'
              ref={explore}
            />
            <button
              className={styles.banner_explore_form_submit_btn}
              type='submit'
            >
              Explore
            </button>
          </form>
          <div className={styles.banner_trending_links_container}>
            <p className={styles.banner_trending_para}>Trending:</p>
            <Link href='/courses/6118284cd4ac27532b7d35d5'>
              <a
                className={styles.banner_trending_links}
                title='Full Stack Web Development'
              >
                Web Development
              </a>
            </Link>
            <Link href='https://futureminds.in/courses/611828ffdb3ba7543e8c1ea7'>
              <a className={styles.banner_trending_links} title='UX/UI'>
                UX/UI
              </a>
            </Link>
            <Link href='https://futureminds.in/courses/6118293bdb3ba7543e8c1eb6'>
              <a className={styles.banner_trending_links} title='Python'>
                Python
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.banner_image_container}>
          <img
            className={styles.banner_image}
            src='/images/main_banner.png'
            alt='Build Skills With Experts Any Time, Anywhere'
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
