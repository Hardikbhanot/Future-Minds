import styles from './CourseDescription.module.scss';

interface courseFields {
  courseId: number;
  courseImg: string;
  courseName: string;
  discription: string;
  noOfCourses: number;
  noOfStudents: number;
  courseLevel: string;
  coursePrice: number;
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
