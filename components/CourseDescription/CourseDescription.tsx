import ListElement from './ListElement/ListElement';
import ChapterElement from './ChapterElement/ChapterElement';
import HeadingBanner from '../HeadingBanner/HeadingBanner';

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
    topicsOfCourse: { topicName: string; topics: string[] }[];
    ratings: number;
    requirements: string[];
    tags: string[];
    targetAudience: string[];
  };
}

const CourseDescription = ({ course }: pageProps) => {
  const courseCategory = course.courseCategory.map((category) => {
    return (
      <p className={styles.course_category} key={category}>
        {category}
      </p>
    );
  });
  const topicsOfCourse = course.topicsOfCourse.map((topic) => {
    return (
      <ChapterElement
        topicName={topic.topicName}
        topics={topic.topics}
        key={topic.topicName}
      />
    );
  });

  return (
    <>
      <HeadingBanner heading={course.courseName} />
      <main className={styles.course_description_page}>
        <section className={styles.course_main_section}>
          <div className={styles.image_container}>
            <img
              className={styles.image}
              src={course.courseImage}
              alt={course.courseName}
            />
            <div className={styles.price_enroll_btn_container}>
              <p className={styles.price}>
                ₹ {course.coursePrice} including GST
              </p>
              <ListElement
                heading='This course include'
                content={course.courseInclude}
              />
              <button
                className={styles.enroll_now_btn}
                type='button'
                name='Enroll Now'
                autoFocus
              >
                <svg
                  width='30'
                  height='13'
                  viewBox='0 0 324 310'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M260.531 309.68C241.125 309.68 225.324 293.887 225.324 274.492C225.324 255.094 241.125 239.301 260.531 239.301C279.938 239.301 295.738 255.094 295.738 274.492C295.738 293.887 279.938 309.68 260.531 309.68ZM260.531 253.375C248.887 253.375 239.406 262.848 239.406 274.492C239.406 286.133 248.887 295.605 260.531 295.605C272.18 295.605 281.656 286.133 281.656 274.492C281.656 262.848 272.18 253.375 260.531 253.375Z'
                    fill='white'
                  />
                  <path
                    d='M119.703 309.68C100.301 309.68 84.4961 293.887 84.4961 274.492C84.4961 255.094 100.301 239.301 119.703 239.301C139.109 239.301 154.91 255.094 154.91 274.492C154.91 293.887 139.109 309.68 119.703 309.68ZM119.703 253.375C108.059 253.375 98.582 262.848 98.582 274.492C98.582 286.133 108.059 295.605 119.703 295.605C131.352 295.605 140.828 286.133 140.828 274.492C140.828 262.848 131.352 253.375 119.703 253.375Z'
                    fill='white'
                  />
                  <path
                    d='M288.699 225.223H126.168C102.762 225.223 82.4297 208.57 77.8359 185.625L43.5156 14.0781H7.04297C3.15625 14.0781 0 10.9258 0 7.03906C0 3.15625 3.15625 0 7.04297 0H49.293C52.6445 0 55.5313 2.36719 56.1914 5.66016L91.6523 182.852C94.9336 199.254 109.453 211.148 126.168 211.148H288.699C292.586 211.148 295.738 214.301 295.738 218.184C295.738 222.07 292.586 225.223 288.699 225.223Z'
                    fill='white'
                  />
                  <path
                    d='M277.91 168.918H84.4961C80.6094 168.918 77.457 165.766 77.457 161.879C77.457 157.996 80.6094 154.84 84.4961 154.84H277.91C288.543 154.84 297.555 146.887 298.879 136.344L308.891 56.3086H63.375C59.4883 56.3086 56.332 53.1523 56.332 49.2695C56.332 45.3828 59.4883 42.2305 63.375 42.2305H316.863C318.891 42.2305 320.805 43.1016 322.145 44.6094C323.48 46.1172 324.102 48.1445 323.848 50.1406L312.852 138.09C310.652 155.672 295.625 168.918 277.91 168.918Z'
                    fill='white'
                  />
                </svg>
                Enroll Now
              </button>
            </div>
          </div>
          <div className={styles.course_extra_description}>
            <ListElement heading='Requirements' content={course.requirements} />
            <ListElement heading='Tags' content={course.tags} />
            <ListElement
              heading='Target Audience'
              content={course.targetAudience}
            />
          </div>
        </section>
        <section className={styles.course_description_section}>
          <div className={styles.course_main_description_container}>
            <div className={styles.course_level_category_container}>
              <p className={styles.course_description_field}>
                By: {course.courseBy.instructorName}
              </p>
              <p className={styles.course_description_field}>
                Course Level: {course.courseLevel}
              </p>
              <div className={styles.course_category_container}>
                Category: {courseCategory}
              </div>
            </div>
            <div className={styles.course_duration_enroll_Stdn_container}>
              <p className={styles.course_description_field}>
                Duration: {course.courseDuration}hr
              </p>
              <p className={styles.course_description_field}>
                Total Enrolled: {course.totalEnrolledStudents}
              </p>
              <p className={styles.course_description_field}>
                Last Updated: {course.lastUpdated}
              </p>
            </div>
            <div className={styles.course_small_description}>
              <h3 className={styles.course_small_description_heading}>
                About this course
              </h3>
              <p>{course.smallDescription}</p>
            </div>
          </div>
          <div className={styles.course_large_description}>
            <h3 className={styles.course_large_description_heading}>
              Description
            </h3>
            <p>{course.largeDescription}</p>
          </div>
          <ListElement
            heading='What Will You Learn?'
            content={course.whatWillYouLearnDesp}
          />
          <div className={styles.topics_of_course}>
            <h3 className={styles.topics_of_course_heading}>
              Topics for this course
            </h3>
            <div className={styles.course_chapter_container}>
              {topicsOfCourse}
            </div>
          </div>
          <div className={styles.course_instructor_description}>
            <h3 className={styles.course_instructor_heading}>
              About the instructor
            </h3>
            <p>Name: {course.courseBy.instructorName}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default CourseDescription;
