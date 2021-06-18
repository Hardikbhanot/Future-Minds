import ListElement from './ListElement/ListElement';
import ChapterElement from './ChapterElement/ChapterElement';
import HeadingBanner from '../HeadingBanner/HeadingBanner';

import styles from './CourseDescription.module.scss';

interface courseFields {
  courseId: string;
  courseName: string;
  coursePrice: number;
  courseImg: string;
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
  whatWillYouLearnDisp: string[];
  topicsOfCourse: { topicName: string; topics: string[] }[];
  ratings: number;
  requirements: string[];
  tags: string[];
  targetAudience: string[];
}

interface pageProps {
  course: courseFields;
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
    <main className={styles.course_description_page}>
      <HeadingBanner heading={course.courseName} />
      <section>
        <img src={course.courseImg} alt={course.courseName} />
        <p>Rs. {course.coursePrice} including GST</p>
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
          Enroll Now
        </button>
      </section>
      <ListElement heading='Requirements' content={course.requirements} />
      <ListElement heading='Tags' content={course.tags} />
      <ListElement heading='Target Audience' content={course.targetAudience} />
      <section className={styles.course_description_container}>
        <div>
          <p>By {course.courseBy.instructorName}</p>
          <p>Course Level: {course.courseLevel}</p>
          <div>Category: {courseCategory}</div>
        </div>
        <div>
          <p>Duration: {course.courseDuration}</p>
          <p>Total Enrolled: {course.totalEnrolledStudents}</p>
          <p>Last Updated: {course.lastUpdated}</p>
        </div>
        <div>
          <h3>About this course</h3>
          <p>{course.smallDescription}</p>
        </div>
      </section>
      <section>
        <h3>Description</h3>
        <p>{course.largeDescription}</p>
      </section>
      <ListElement
        heading='What Will You Learn?'
        content={course.whatWillYouLearnDisp}
      />
      <section>
        <h3>Topics for this course</h3>
        <div>{topicsOfCourse}</div>
      </section>
      <section>
        <h3>About the instructor</h3>
        <p>Name: {course.courseBy.instructorName}</p>
      </section>
    </main>
  );
};

export default CourseDescription;
