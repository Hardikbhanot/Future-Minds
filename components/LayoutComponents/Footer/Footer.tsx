import Link from 'next/link';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_main_content}>
        <div className={styles.discription_card_container}>
          <h2 className={styles.main_heading}>Future Minds</h2>
          <p className={styles.main_discription}>
            Working to bring significant changes in online-based learning by
            doing extensive research for course curriculum preparation, student
            engagements, and looking forward to the flexible education!
          </p>
        </div>
        <div className={styles.card_container}>
          <h3 className={styles.sub_heading}>Explore</h3>
          <ul className={styles.links_list}>
            <li>
              <Link href='/stepdegree'>
                <a title='StepDegree' aria-label='StepDegree'>
                  StepDegree
                </a>
              </Link>
            </li>
            <li>
              <Link href='/topslot'>
                <a title='TopSlot' aria-label='TopSlot'>
                  TopSlot
                </a>
              </Link>
            </li>
            <li>
              <Link href='/leet'>
                <a title='LEET' aria-label='LEET'>
                  LEET
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.card_container}>
          <h3 className={styles.sub_heading}>Resources</h3>
          <ul className={styles.links_list}>
            <li>
              <Link href='/courses'>
                <a title='Courses' aria-label='Courses'>
                  Courses
                </a>
              </Link>
            </li>
            <li>
              <Link href='/login'>
                <a title='Sign in' aria-label='Sign in'>
                  Sign In
                </a>
              </Link>
            </li>
            <li>
              <Link href='/register'>
                <a title='Register' aria-label='Register'>
                  Register
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.card_container}>
          <h3 className={styles.sub_heading}>Address</h3>
          <ul className={styles.links_list}>
            <li>
              <Link href='https://futureminds.in/'>
                <a title='Address' aria-label='Address'>
                  New Delhi, India
                </a>
              </Link>
            </li>
            <li>
              <Link href='tel:+91%2085953%2067753'>
                <a title='Contact Number' aria-label='Contact Number'>
                  +9185953 67753
                </a>
              </Link>
            </li>
            <li>
              <Link href='mailto:info@futureminds.in'>
                <a title='Contact Email' aria-label='Contact Email'>
                  info@futureminds.in
                </a>
              </Link>
            </li>
            <ul className={styles.social_media_links_container}>
              <li>
                <Link href='https://futureminds.in/#'>
                  <a
                    title='Twitter link'
                    aria-label='Twitter link'
                    className={styles.social_media_link}
                  >
                    <svg
                      width='49'
                      height='40'
                      viewBox='0 0 49 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M49 4.73538C47.1778 5.53846 45.2362 6.07077 43.2119 6.32923C45.2944 5.08 46.8838 3.11692 47.6311 0.750769C45.6894 1.91385 43.5457 2.73538 41.2611 3.19385C39.4174 1.22154 36.7898 0 33.9233 0C28.3618 0 23.8844 4.53538 23.8844 10.0954C23.8844 10.8954 23.9518 11.6646 24.1172 12.3969C15.7658 11.9877 8.37594 7.96615 3.41162 1.84C2.54494 3.35077 2.03656 5.08 2.03656 6.94154C2.03656 10.4369 3.82812 13.5354 6.49862 15.3292C4.88469 15.2985 3.30137 14.8277 1.96 14.0862C1.96 14.1169 1.96 14.1569 1.96 14.1969C1.96 19.1015 5.44206 23.1754 10.0082 24.1138C9.19056 24.3385 8.29937 24.4462 7.3745 24.4462C6.73137 24.4462 6.08212 24.4092 5.47269 24.2738C6.77425 28.2708 10.4676 31.2092 14.8593 31.3046C11.4415 33.9908 7.10194 35.6092 2.40406 35.6092C1.58025 35.6092 0.790125 35.5723 0 35.4708C4.44981 38.3538 9.72344 40 15.4105 40C33.8957 40 44.002 24.6154 44.002 11.28C44.002 10.8338 43.9867 10.4031 43.9652 9.97539C45.9589 8.55385 47.6341 6.77846 49 4.73538Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://futureminds.in/#'>
                  <a
                    title='Facebook link'
                    aria-label='Facebook link'
                    className={styles.social_media_link}
                  >
                    <svg
                      width='30'
                      height='60'
                      viewBox='0 0 30 60'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M24.523 9.9625H30V0.4225C29.0551 0.2925 25.8054 0 22.0207 0C14.1238 0 8.71428 4.9675 8.71428 14.0975V22.5H0V33.165H8.71428V60H19.3984V33.1675H27.7602L29.0876 22.5025H19.3959V15.155C19.3984 12.0725 20.2283 9.9625 24.523 9.9625V9.9625Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://futureminds.in/#'>
                  <a
                    title='Instagram link'
                    aria-label='Instagram link'
                    className={styles.social_media_link}
                  >
                    <svg
                      width='52'
                      height='52'
                      viewBox='0 0 52 52'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M25.5124 12.4064C18.2799 12.4064 12.4246 18.2681 12.4246 25.4943C12.4246 32.7268 18.2862 38.5821 25.5124 38.5821C32.7449 38.5821 38.6002 32.7204 38.6002 25.4943C38.6002 18.2617 32.7385 12.4064 25.5124 12.4064V12.4064ZM25.5124 33.9892C20.8175 33.9892 17.0174 30.187 17.0174 25.4943C17.0174 20.8015 20.8196 16.9993 25.5124 16.9993C30.2051 16.9993 34.0074 20.8015 34.0074 25.4943C34.0095 30.187 30.2073 33.9892 25.5124 33.9892V33.9892Z'
                        fill='black'
                      />
                      <path
                        d='M36.0207 0.160222C31.3279 -0.0586876 19.7045 -0.048061 15.0075 0.160222C10.8801 0.353628 7.23938 1.35041 4.30429 4.2855C-0.600987 9.19078 0.025987 15.8006 0.025987 25.4942C0.025987 35.4153 -0.5266 41.8721 4.30429 46.703C9.22869 51.6252 15.9341 50.9813 25.513 50.9813C35.3406 50.9813 38.7326 50.9876 42.2075 49.6423C46.9322 47.8081 50.4985 43.5851 50.847 35.9998C51.0681 31.3049 51.0553 19.6836 50.847 14.9866C50.4262 6.03253 45.6208 0.602292 36.0207 0.160222V0.160222ZM43.4487 43.4576C40.2331 46.6732 35.772 46.3863 25.4514 46.3863C14.8247 46.3863 10.5634 46.5436 7.45404 43.4257C3.87285 39.8615 4.52107 34.138 4.52107 25.4602C4.52107 13.7177 3.31601 5.26103 15.101 4.65743C17.8087 4.56179 18.6057 4.52991 25.4216 4.52991L25.5173 4.59367C36.8432 4.59367 45.7292 3.40774 46.2627 15.1906C46.3838 17.8792 46.4115 18.6868 46.4115 25.4921C46.4093 35.9955 46.6091 40.2823 43.4487 43.4576V43.4576Z'
                        fill='black'
                      />
                      <path
                        d='M39.1188 14.9483C40.8079 14.9483 42.1771 13.579 42.1771 11.89C42.1771 10.2009 40.8079 8.8316 39.1188 8.8316C37.4297 8.8316 36.0604 10.2009 36.0604 11.89C36.0604 13.579 37.4297 14.9483 39.1188 14.9483Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://futureminds.in/#'>
                  <a
                    title='Linkedin link'
                    aria-label='Linkedin link'
                    className={styles.social_media_link}
                  >
                    <svg
                      width='49'
                      height='49'
                      viewBox='0 0 49 49'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M48.9877 49V48.998H49V31.0272C49 22.2358 47.1073 15.4636 36.8296 15.4636C31.8887 15.4636 28.5731 18.1749 27.2195 20.7454H27.0765V16.2843H17.3317V48.998H27.4787V32.7994C27.4787 28.5343 28.2872 24.4102 33.569 24.4102C38.7732 24.4102 38.8508 29.2775 38.8508 33.073V49H48.9877Z'
                        fill='black'
                      />
                      <path
                        d='M0.808472 16.2864H10.9678V49H0.808472V16.2864Z'
                        fill='black'
                      />
                      <path
                        d='M5.88408 0C2.63579 0 0 2.63579 0 5.88408C0 9.13237 2.63579 11.8233 5.88408 11.8233C9.13237 11.8233 11.7682 9.13237 11.7682 5.88408C11.7661 2.63579 9.13033 0 5.88408 0V0Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={styles.all_rights_reserved_container}>
        <p className={styles.all_rights_reserved}>
          ©2021 Futureminds. All right reserved.
        </p>
        <div className={styles.all_rights_reserved_links}>
          <Link href='/privacy-policy'>
            <a title='Pricacy Policy' aria-label='Privacy Policy'>
              Privacy Policy
            </a>
          </Link>
          <Link href='/terms-conditions'>
            <a title='Terms & Conditions' aria-label='Terms & Conditions'>
              Terms & Conditions
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
