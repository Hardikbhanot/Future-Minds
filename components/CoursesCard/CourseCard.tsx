import styles from './CourseCard.module.scss';

interface courseFields {
  courseId: number;
  courseImg: string;
  courseName: string;
  discription: string;
  noOfCourses: number;
  noOfStudents: number;
}

interface pageProps {
  course: courseFields;
}

const CourseCard = (props: pageProps) => {
  return (
    <section className={styles.course_card}>
      <h1>{props.course.courseName}</h1>
    </section>
  );
};

export default CourseCard;
