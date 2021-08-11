import ChapterElement from './ChapterElement/ChapterElement';
import Features from '../LayoutComponents/Features/Features';
import Highlights from '../LandingPage/Highlights/Highlights';
import Link from 'next/link';

import styles from './CourseDescription.module.scss';
interface pageProps {
  course: {
    courseId: string;
    courseName: string;
    coursePrice: number;
    courseImage: string;
    courseInclude: string[];
    courseBy: {
      instructorId: string;
      instructorName: string;
    };
    courseLevel: string;
    courseCategory: string[];
    courseDuration: number;
    totalEnrolledStudents: number;
    lastUpdated: string;
    smallDescription: string;
    largeDescription: string;
    whatWillYouLearnDesp: string[];
    topicsOfCourse: { chapterName: string; topics: string[] }[];
    ratings: number;
    requirements: string[];
    tags: string[];
    targetAudience: string[];
  };
}

const CourseDescription = ({ course }: pageProps) => {
  const topicsOfCourse = course.topicsOfCourse.map((topic) => {
    return (
      <ChapterElement
        chapterName={topic.chapterName}
        topics={topic.topics}
        key={topic.chapterName}
      />
    );
  });

  const featuresCardsData = [
    {
      heading: 'Enroll',
      description:
        'Get Enrolled in our Course & Start  Journey to become Ace in your Skill'
    },
    {
      heading: 'Learn',
      description: 'Learn with industry  epperts & in hand live projects'
    },
    {
      heading: 'Conquer',
      description: 'Apply for your desired jobs & get it like a cakewalk'
    }
  ];

  let levelSVG;
  if (course.courseLevel === 'Beginner') {
    levelSVG = (
      <svg
        className={styles.level_svg}
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          x1='1'
          y1='9.00006'
          x2='1'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='5'
          y1='5.00006'
          x2='5'
          y2='11.0001'
          stroke='#D9E8FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='9'
          y1='1.00006'
          x2='9'
          y2='11.0001'
          stroke='#D9E8FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    );
  } else if (course.courseLevel === 'Intermediate') {
    levelSVG = (
      <svg
        className={styles.level_svg}
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          x1='1'
          y1='9.00006'
          x2='1'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='5'
          y1='5.00006'
          x2='5'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='9'
          y1='1.00006'
          x2='9'
          y2='11.0001'
          stroke='#D9E8FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    );
  } else {
    levelSVG = (
      <svg
        className={styles.level_svg}
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          x1='1'
          y1='9.00006'
          x2='1'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='5'
          y1='5.00006'
          x2='5'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='9'
          y1='1.00006'
          x2='9'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  return (
    <section className={styles.course_description_main_section}>
      <section className={styles.course_description_section}>
        <div className={styles.course_description_main}>
          <h1 className={styles.course_main_heading}>{course.courseName}</h1>
          <div className={styles.course_details_wrapper}>
            <div className={styles.course_level}>
              {levelSVG} {course.courseLevel}
            </div>
            <div className={styles.course_duration}>
              <strong>{course.courseDuration}</strong> Months
            </div>
            <div className={styles.course_type}>
              <strong>Live</strong> Classes
            </div>
          </div>
          <div className={styles.course_details_wrapper}>
            <Link href='/'>
              <a
                className={styles.enroll_now_btn}
                title='Enroll Button'
                aria-label='Enroll Button'
              >
                Enroll Now
              </a>
            </Link>
            <p className={styles.course_starting_desp}>Starting New Batches</p>
          </div>
          <img
            src='/images/course_description.png'
            alt='course description image'
            className={styles.course_description_image}
          />
        </div>
        <div className={styles.features_container}>
          <h2 className={styles.features_heading}>
            3 Easy Steps to Achieve Your Dream Career
          </h2>
          <Features cards={featuresCardsData} />
        </div>
        <div className={styles.course_description_container}>
          <div className={styles.flex_column}>
            <div className={styles.course_description_wrapper}>
              <h2 className={styles.course_section_heading}>
                Course <span>Description</span>
              </h2>
              <p className={styles.course_description}>
                {course.largeDescription}
              </p>
            </div>
            <div className={styles.course_chapter_wrapper}>
              <h2 className={styles.course_section_heading}>
                Course <span>Carriculam</span>
              </h2>
              {topicsOfCourse}
            </div>
          </div>
          <div className={styles.course_payment_card}>
            <img
              src={course.courseImage}
              alt={course.courseName}
              className={styles.course_thumbnail}
            />
            <div className={styles.course_price_wrapper}>
              <h2 className={styles.course_price}>₹ {course.coursePrice}</h2>
              <p className={styles.discount_offer}>30% off</p>
            </div>
            <div className={styles.payment_card_detail_container}>
              <p className={styles.payment_card_detail}>
                <strong>Instructor: </strong>
                {course.courseBy.instructorName}
              </p>
              <p className={styles.payment_card_detail}>
                <strong>Duration: </strong>
                {course.courseDuration} hr
              </p>
              <p className={styles.payment_card_detail}>
                <strong>Language: </strong>
                {course.courseLevel}
              </p>
              <Link href='/'>
                <a
                  className={styles.enroll_now_btn}
                  title='Enroll Button'
                  aria-label='Enroll Button'
                >
                  Enroll Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Highlights />
      <section className={styles.course_description_section}>
        <div className={styles.course_description_faq_container}>
          <h2 className={styles.course_description_faq_heading}>
            Frequently Asked Questions
          </h2>
        </div>
      </section>
    </section>
  );
};

export default CourseDescription;
