import Link from 'next/link';
import styles from './CourseCard.module.scss';

interface pageProps {
  course: {
    courseId: string;
    courseName: string;
    courseImage: string;
    courseCategory: string;
    courseDuration: number;
    courseLevel: string;
    courseMode: string;
    isTrending: boolean;
  };
}

const CourseCard = ({ course }: pageProps) => {
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
    <Link href={'/courses/' + course.courseId}>
      <a className={styles.course_card} title={course.courseName}>
        <span className={styles.img_container}>
          <img
            src={course.courseImage}
            alt='Course name'
            className={styles.card_img}
            width={200}
            height={300}
          />
          {course.isTrending ? (
            <span className={styles.trending}>Trending</span>
          ) : (
            <span className={styles.not_trending}>Trending</span>
          )}
        </span>
        <span className={styles.detail_container}>
          <span className={styles.category_level_container}>
            <p className={styles.course_category}>{course.courseCategory}</p>

            <span className={styles.course_level_container}>
              {levelSVG}
              <p className={styles.course_level}>{course.courseLevel}</p>
            </span>
          </span>

          <h3 className={styles.course_name}>{course.courseName}</h3>
          <p className={styles.course_details}>
            Duration: {course.courseDuration} months
          </p>
          <p className={styles.course_details}>Classes: {course.courseMode}</p>
          <p className={styles.course_details}>Support: 1-1</p>

          <span className={styles.course_link_container}>
            <p className={styles.course_link}>Know more</p>
          </span>
        </span>
      </a>
    </Link>
  );
};

export default CourseCard;
