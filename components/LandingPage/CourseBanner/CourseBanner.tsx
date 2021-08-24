import { useRef } from 'react';
import Link from 'next/link';
import CourseCard from '../../CoursesCard/CourseCard';

import styles from './CourseBanner.module.scss';

interface pageProps {
  courses: {
    courseId: string;
    courseName: string;
    courseImage: string;
    courseCategory: string;
    courseDuration: number;
    courseLevel: string;
    courseMode: string;
    isTrending: boolean;
  }[];
}

const CourseBanner = ({ courses }: pageProps) => {
  const courseCardContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (courseCardContainerRef && courseCardContainerRef.current) {
      courseCardContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className={styles.course_banner_section}>
      <div className={styles.course_banner_container}>
        <div className={styles.course_banner_description_container}>
          <h2 className={styles.course_banner_heading}>
            Our <span>Popular</span> Courses
          </h2>
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
              <button
                className={styles.pagination_btn}
                onClick={() => scroll(-282)}
              >
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
              <button
                className={styles.pagination_btn}
                onClick={() => scroll(282)}
              >
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
        <div className={styles.card_container} ref={courseCardContainerRef}>
          {courses.map((course) => {
            return <CourseCard key={course.courseId} course={course} />;
          })}
        </div>
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
            <button
              className={styles.pagination_btn}
              onClick={() => scroll(-266)}
            >
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
            <button
              className={styles.pagination_btn}
              onClick={() => scroll(266)}
            >
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
