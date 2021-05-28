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
      </section>
      <section className={styles.banner_card_section}>
        <div className={styles.banner_card_container}>
          <div className={styles.banner_card}>
            <div className={styles.card_img_container}></div>
            <div className={styles.card_content}>
              <h3 className={styles.cards_heading}>Interactive Live Classes</h3>
              <p className={styles.card_summary}>
                Better learning and Understanding through live interactions with
                expert Faculty.
              </p>
            </div>
          </div>
          <div className={styles.banner_card}>
            <div className={styles.card_img_container}></div>
            <div className={styles.card_content}>
              <h3 className={styles.cards_heading}>Expert Faculty</h3>
              <p className={styles.card_summary}>
                Learn from renowned subject expert Corporate Stalwarts &
                Academicians.
              </p>
            </div>
          </div>
          <div className={styles.banner_card}>
            <div className={styles.card_img_container}></div>
            <div className={styles.card_content}>
              <h3 className={styles.cards_heading}>Career Gateway</h3>
              <p className={styles.card_summary}>
                Hands on experience through assured Internships and get Job
                opportunities
              </p>
            </div>
          </div>
        </div>
        <h3 className={styles.banner_cards_last_para}>
          Easy EMI's Available Through Our Finance Partners
        </h3>
      </section>
    </main>
  );
};

export default LandingPage;
