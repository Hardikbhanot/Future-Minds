import Link from 'next/link';

import styles from './CourseBanner.module.scss';

const CourseBanner = () => {
  const dummyCourseData = [
    { _id: 1, name: 'UI/UX Designing' },
    { _id: 2, name: 'AI/Machine Learning' },
    { _id: 3, name: 'Front End Development' }
    // { _id: 4, name: 'Back End Development' },
    // { _id: 5, name: 'Human Resourses' }
  ];
  const course_card = dummyCourseData.map((course) => {
    return (
      <div key={course._id} className={styles.card}>
        <div className={styles.card_image_background}></div>
        <div className={styles.card_details_container}>
          <h4 className={styles.course_heading}>{course.name}</h4>
          <div className={styles.course_features}>
            <img
              src='/icons/card-icon-clock.png'
              alt='clock-icon'
              className={styles.course_features_img}
            />
            <p className={styles.course_features_description}>2-3 Months</p>
          </div>
          <div className={styles.course_features}>
            <img
              src='/icons/card-icon-chat-bubble.png'
              alt='chat-icon'
              className={styles.course_features_img}
            />
            <p className={styles.course_features_description}>Hindi/English</p>
          </div>
          <div className={styles.course_features}>
            <img
              src='/icons/card-icon-technical-support.png'
              alt='technical-support-icon'
              className={styles.course_features_img}
            />
            <p className={styles.course_features_description}>1-1 Support</p>
          </div>
          <div className={styles.course_features}>
            <img
              src='/icons/card-icon-job-seeker.png'
              alt='job-seeker-icon'
              className={styles.course_features_img}
            />
            <p className={styles.course_features_description}>
              Placement Assistance
            </p>
          </div>
          <Link href='#'>
            <a
              title={`${course.name} course link`}
              aria-label={`${course.name} course link`}
              className={styles.course_link}
            >
              Explore Course --{'>'}
            </a>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section className={styles.course_banner_section}>
      <div className={styles.course_banner_container}>
        <div className={styles.course_banner_description_container}>
          <h3 className={styles.course_banner_heading}>
            Our <span>popular</span> courses
          </h3>
          <p className={styles.course_banner_description}>
            Explore our courses and open the gateway to a bright career, So
            start learning now ! We promise you'll be the winner always!
          </p>
          <div className={styles.show_all_courses_link_monitor_container}>
            <Link href='/courses'>
              <a
                title='Show all courses'
                aria-label='Show all courses'
                className={styles.show_all_courses_link}
              >
                Show all courses
              </a>
            </Link>
            <div className={styles.pagination_btn_container}>
              <button className={styles.pagination_btn}>
                <svg
                  width='10'
                  height='18'
                  viewBox='0 0 10 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9 1L1 9L9 17'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <button className={styles.pagination_btn}>
                <svg
                  width='10'
                  height='18'
                  viewBox='0 0 10 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 17L9 9L1 0.999998'
                    stroke='black'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.card_container}>{course_card}</div>
        <div className={styles.show_all_courses_link_mobile_container}>
          <Link href='/courses'>
            <a
              title='Show all courses'
              aria-label='Show all courses'
              className={styles.show_all_courses_link}
            >
              Show all courses
            </a>
          </Link>
          <div className={styles.pagination_btn_container}>
            <button className={styles.pagination_btn}>
              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 1L1 9L9 17'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button className={styles.pagination_btn}>
              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 17L9 9L1 0.999998'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBanner;
