import styles from './CourseDescription.module.scss';

interface courseFields {
  courseId: number;
  courseName: string;
  courseImg: string;
  aboutCourse: string;
  discription: string;
  courseLevel: string;
  coursePrice: number;
  category: string;
  duration: string;
  totalEnrolled: number;
  lastUpdate: string;
}

interface pageProps {
  course: courseFields;
}

const CourseDescription = ({ course }: pageProps) => {
  return (
    <section className={styles.course_description_page}>
      <p>{course.courseName}</p>
      <p>{course.discription}</p>
      <img src={course.courseImg} alt={course.courseName} />
      <p>{course.coursePrice}</p>
    </section>
  );
};

export default CourseDescription;
