import { useRef } from 'react';
import Image from 'next/Image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Banner.module.scss';

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
          <Image
            src='/images/banner-img2.png'
            alt='Build Skills With Experts Any Time, Anywhere'
            width={500}
            height={600}
            priority
          />
          <svg
            className={styles.image_circle_animation}
            width='78'
            height='78'
            viewBox='0 0 78 78'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='39' cy='39' r='39' fill='#BC845E' />
            <circle cx='39.5' cy='38.5' r='32.5' fill='#F8F9F8' />
          </svg>
          <svg
            className={styles.image_weird_animation}
            width='197'
            height='235'
            viewBox='0 0 197 235'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.19245 77.3909C-10.8075 134.391 18.6926 173.391 26.1926 185.891C78.1926 247.391 197 250.371 197 192.5C197 157 153 149.5 137.5 140C122 130.5 110.014 105.5 107 85.5C102.078 52.8347 133.693 30.8908 111.193 4.39089C96.9504 -12.384 19.1925 20.3909 4.19245 77.3909Z'
              fill='#ECEAF1'
            />
          </svg>
        </div>
      </section>
      <section className={styles.banner_card_section}>
        <div className={styles.banner_card_container}>
          <div className={styles.banner_card}>
            <div className={styles.card_img_container}>
              <svg
                width='50'
                height='48'
                viewBox='0 0 50 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M49.8692 18.1365C49.54 17.1222 48.642 16.4042 47.5838 16.3083L33.1503 14.9956L27.4461 1.61726C27.0249 0.63437 26.0666 0 25 0C23.9334 0 22.9748 0.63437 22.5563 1.61726L16.8521 14.9956L2.4163 16.3083C1.35808 16.4061 0.461997 17.1242 0.130876 18.1365C-0.198337 19.1507 0.105699 20.2631 0.906035 20.9663L11.8166 30.5502L8.59963 44.7441C8.36426 45.7877 8.76863 46.8669 9.63305 47.4929C10.0977 47.8311 10.6436 48 11.1914 48C11.6621 48 12.1332 47.8747 12.554 47.6224L25 40.1674L37.4438 47.6224C38.3566 48.1689 39.5045 48.1188 40.367 47.4929C41.2314 46.8669 41.6358 45.7877 41.4004 44.7441L38.1834 30.5502L49.094 20.9663C49.894 20.2631 50.1984 19.153 49.8692 18.1365V18.1365Z'
                  fill='black'
                />
              </svg>
            </div>
            <div className={styles.card_content}>
              <h3 className={styles.cards_heading}>Interactive Live Classes</h3>
              <p className={styles.card_summary}>
                Better learning and Understanding through live interactions with
                expert Faculty.
              </p>
            </div>
          </div>
          <div className={styles.banner_card}>
            <div className={styles.card_img_container}>
              <svg
                width='50'
                height='48'
                viewBox='0 0 50 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M25.353 15.4324C29.6145 15.4324 33.0692 11.9777 33.0692 7.71618C33.0692 3.45466 29.6145 0 25.353 0C21.0915 0 17.6368 3.45466 17.6368 7.71618C17.6368 11.9777 21.0915 15.4324 25.353 15.4324Z'
                  fill='black'
                />
                <path
                  d='M40.7854 19.8415C43.8293 19.8415 46.2969 17.3739 46.2969 14.33C46.2969 11.2861 43.8293 8.81851 40.7854 8.81851C37.7415 8.81851 35.2739 11.2861 35.2739 14.33C35.2739 17.3739 37.7415 19.8415 40.7854 19.8415Z'
                  fill='black'
                />
                <path
                  d='M10.0773 19.8415C13.1212 19.8415 15.5888 17.3739 15.5888 14.33C15.5888 11.2861 13.1212 8.81851 10.0773 8.81851C7.03338 8.81851 4.5658 11.2861 4.5658 14.33C4.5658 17.3739 7.03338 19.8415 10.0773 19.8415Z'
                  fill='black'
                />
                <path
                  d='M25.353 17.6369C17.4516 17.6369 11.0229 24.0656 11.0229 31.9669C11.0229 32.5754 11.5168 33.0693 12.1253 33.0693H38.5806C39.1891 33.0693 39.683 32.5754 39.683 31.9669C39.683 24.0656 33.2543 17.6369 25.353 17.6369Z'
                  fill='black'
                />
                <path
                  d='M11.9777 22.2843C11.303 22.141 10.6174 22.0462 9.92076 22.0462C4.45111 22.0462 0 26.4973 0 31.967C0 32.5754 0.493868 33.0693 1.10234 33.0693H9.02127C8.89778 32.7232 8.81842 32.355 8.81842 31.967C8.81842 28.3492 10.0001 25.0092 11.9777 22.2843Z'
                  fill='black'
                />
                <path
                  d='M40.7854 22.0462C40.0888 22.0462 39.4031 22.141 38.7285 22.2843C40.7061 25.0092 41.8878 28.3492 41.8878 31.967C41.8878 32.355 41.8084 32.7231 41.6849 33.0693H49.6038C50.2123 33.0693 50.7062 32.5754 50.7062 31.967C50.7062 26.4973 46.2551 22.0462 40.7854 22.0462Z'
                  fill='black'
                />
              </svg>
            </div>
            <div className={styles.card_content}>
              <h3 className={styles.cards_heading}>Expert Faculty</h3>
              <p className={styles.card_summary}>
                Learn from renowned subject expert Corporate Stalwarts &
                Academicians.
              </p>
            </div>
          </div>
          <div className={styles.banner_card}>
            <div className={styles.card_img_container}>
              <svg
                width='55'
                height='45'
                viewBox='0 0 55 45'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M44.0864 2.7824C44.122 1.08503 44.058 0.0125333 44.058 0.0125333L27.5836 0H27.5H27.4164L10.9402 0.0125333C10.9402 0.0125333 10.878 1.08503 10.9136 2.7824H0V4.59436C0 5.00796 0.0693547 14.7643 6.04986 20.1088C8.54485 22.338 11.6569 23.4588 15.3256 23.4606C15.8804 23.4606 16.4513 23.423 17.0292 23.3729C19.1134 26.2466 21.5213 28.2591 24.2297 29.2617V37.2204H16.2788V42.2051H13.6522V45H27.4164H27.5836H41.3478V42.2069H38.7194V37.2222H30.7686V29.2635C33.4752 28.2608 35.8848 26.2484 37.969 23.3746C38.5505 23.4248 39.1213 23.4606 39.6762 23.4606C43.3431 23.457 46.4552 22.338 48.9501 20.107C54.9306 14.7625 55 5.00617 55 4.59257V2.7824H44.0864ZM8.45059 17.407C5.03443 14.3632 4.02435 9.15291 3.72559 6.40632H11.1199C11.4328 9.82791 12.1691 14.091 13.8674 17.8385C14.1786 18.526 14.5058 19.1778 14.8401 19.8152C12.2918 19.7167 10.1471 18.9164 8.45059 17.407ZM46.5494 17.407C44.8547 18.9182 42.7082 19.7167 40.1617 19.8152C40.496 19.1796 40.8232 18.526 41.1344 17.8385C42.8327 14.091 43.5689 9.82791 43.8801 6.40632H51.2744C50.9757 9.15112 49.9673 14.3614 46.5494 17.407Z'
                  fill='black'
                />
              </svg>
            </div>
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
