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
            height={600}
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
            <circle cx='39.5' cy='38.5' r='32.5' fill='white' />
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
                width='79'
                height='50'
                viewBox='0 0 79 50'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M67.9532 22.0006C70.2541 20.3802 71.7777 17.6846 71.7777 14.6463C71.7777 9.67591 67.7667 5.65597 62.8074 5.65597C57.8481 5.65597 53.8371 9.67591 53.8371 14.6463C53.8371 17.6846 55.3451 20.3802 57.6615 22.0006C55.6871 22.6862 53.8838 23.7457 52.3602 25.1169C50.2615 23.325 47.7896 21.9539 45.0845 21.1437C48.3648 19.1493 50.5724 15.5189 50.5724 11.3898C50.5724 5.09505 45.4887 0 39.208 0C32.9272 0 27.8436 5.11063 27.8436 11.3898C27.8436 15.5189 30.0356 19.1493 33.3314 21.1437C30.6575 21.9539 28.2167 23.3094 26.1335 25.0701C24.6099 23.7301 22.8376 22.6862 20.8943 22.0162C23.1952 20.3958 24.7188 17.7002 24.7188 14.6619C24.7188 9.69149 20.7078 5.67155 15.7485 5.67155C10.7892 5.67155 6.77822 9.69149 6.77822 14.6619C6.77822 17.7002 8.28622 20.3958 10.6026 22.0162C4.43072 24.1508 0 30.0249 0 36.9274V37.9558C0 37.9869 0.0310928 38.0181 0.0621855 38.0181H19.0754C18.9666 38.875 18.9044 39.7632 18.9044 40.6513V41.7108C18.9044 46.2917 22.6044 50 27.1751 50H51.272C55.8426 50 59.5427 46.2917 59.5427 41.7108V40.6513C59.5427 39.7632 59.4805 38.875 59.3716 38.0181H78.5092C78.5403 38.0181 78.5714 37.9869 78.5714 37.9558V36.9274C78.5403 30.0093 74.1252 24.1352 67.9532 22.0006ZM56.3245 14.6307C56.3245 11.0471 59.2317 8.13337 62.8074 8.13337C66.3831 8.13337 69.2902 11.0471 69.2902 14.6307C69.2902 18.1677 66.4452 21.0502 62.9318 21.1281C62.8851 21.1281 62.854 21.1281 62.8074 21.1281C62.7608 21.1281 62.7297 21.1281 62.683 21.1281C59.154 21.0658 56.3245 18.1832 56.3245 14.6307ZM30.2999 11.3898C30.2999 6.48177 34.2798 2.49299 39.1769 2.49299C44.074 2.49299 48.0539 6.48177 48.0539 11.3898C48.0539 16.1265 44.3383 20.0062 39.6899 20.2711C39.5189 20.2711 39.3479 20.2711 39.1769 20.2711C39.0059 20.2711 38.8349 20.2711 38.6639 20.2711C34.0155 20.0062 30.2999 16.1265 30.2999 11.3898ZM9.21901 14.6307C9.21901 11.0471 12.1262 8.13337 15.7018 8.13337C19.2775 8.13337 22.1847 11.0471 22.1847 14.6307C22.1847 18.1677 19.3397 21.0502 15.8262 21.1281C15.7796 21.1281 15.7485 21.1281 15.7018 21.1281C15.6552 21.1281 15.6241 21.1281 15.5775 21.1281C12.064 21.0658 9.21901 18.1832 9.21901 14.6307ZM19.5107 35.5095H2.51851C3.2181 28.8719 8.8148 23.6678 15.6086 23.6211C15.6397 23.6211 15.6708 23.6211 15.7018 23.6211C15.7329 23.6211 15.764 23.6211 15.7951 23.6211C19.0288 23.6366 21.9826 24.8364 24.2679 26.784C22.0292 29.2147 20.3658 32.2063 19.5107 35.5095ZM57.0241 41.7108C57.0241 44.905 54.4279 47.507 51.2409 47.507H27.144C23.957 47.507 21.3607 44.905 21.3607 41.7108V40.6513C21.3607 30.9754 29.0717 23.0601 38.6639 22.7797C38.8349 22.7953 39.0214 22.7953 39.1924 22.7953C39.3634 22.7953 39.55 22.7953 39.721 22.7797C49.3131 23.0601 57.0241 30.9754 57.0241 40.6513V41.7108V41.7108ZM58.8742 35.5095C58.0191 32.2219 56.3867 29.277 54.1636 26.8464C56.4645 24.852 59.4494 23.6522 62.7141 23.6211C62.7452 23.6211 62.7763 23.6211 62.8074 23.6211C62.8385 23.6211 62.8696 23.6211 62.9007 23.6211C69.6944 23.6678 75.2911 28.8719 75.9907 35.5095H58.8742Z'
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
