import { useRef } from 'react';
import Image from 'next/Image';
import styles from './Banner.module.scss';

const LandingPage = () => {
  const explore = useRef<HTMLInputElement>(null);

  // on explore button click
  const onExploreClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (explore && explore.current) {
      // can access explore current value here
      // const valueTypedInExplore =  explore.current.value
    }
  };

  return (
    <main className={styles.banner}>
      <div className={styles.banner_container}>
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
              placeholder='what do you want to listen'
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
            <a
              className={styles.banner_trending_links}
              title='Python-AI/ML'
              href='/'
            >
              Python-AI/ML
            </a>{' '}
            <a
              className={styles.banner_trending_links}
              title='Web Development'
              href='/'
            >
              Web Development
            </a>{' '}
            <a className={styles.banner_trending_links} title='UX/UI' href='/'>
              UX/UI
            </a>{' '}
            <a
              className={styles.banner_trending_links}
              title='Professional Traning'
              href='/'
            >
              Professional Traning
            </a>{' '}
            <a
              className={styles.banner_trending_links}
              title='Development'
              href='/'
            >
              Development
            </a>
          </div>
        </div>
        <div className={styles.banner_image_container}>
          <Image
            src='/images/banner-img2.png'
            alt='Build Skills With Experts Any Time, Anywhere'
            width={500}
            height={650}
          />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
