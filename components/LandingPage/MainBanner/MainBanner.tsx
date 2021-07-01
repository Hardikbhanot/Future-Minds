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
      router.push(
        `https://learn.futureminds.in/?s=${valueTypedInExplore}&ref=course&post_type=courses`
      );
    }
  };

  return (
    <main className={styles.banner}>
      <section className={styles.banner_container}>
        <div className={styles.banner_main_content}>
          <h1 className={styles.banner_headline}>
            Build Skills With Experts Any Time, Anywhere
          </h1>
          <p className={styles.banner_discription}>
            Not only skills we help students to secure assured internship
            post-course completion, along with easy EMI options.
          </p>
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
            <p className={styles.banner_trending_para}>Trending </p>
            <Link href='https://learn.futureminds.in/course-category/data-science/'>
              <a className={styles.banner_trending_links} title='Python-AI/ML'>
                Python-AI/ML
              </a>
            </Link>
            <Link href='https://learn.futureminds.in/course-category/web-development/'>
              <a
                className={styles.banner_trending_links}
                title='Web Development'
              >
                Web Development
              </a>
            </Link>
            <Link href='https://learn.futureminds.in/course-category/ux-ui/'>
              <a className={styles.banner_trending_links} title='UX/UI'>
                UX/UI
              </a>
            </Link>
            <Link href='https://learn.futureminds.in/course-category/development/'>
              <a
                className={styles.banner_trending_links}
                title='Professional Traning'
              >
                Professional Training
              </a>
            </Link>
            <Link href='https://learn.futureminds.in/'>
              <a className={styles.banner_trending_links} title='Development'>
                Development
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.banner_image_container}>
          <img
            src='/images/banner-img2.png'
            alt='Build Skills With Experts Any Time, Anywhere'
            width={500}
            height={600}
          />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
