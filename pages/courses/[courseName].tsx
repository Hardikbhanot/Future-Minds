import { useRouter } from 'next/router';
import styles from './DynamicCourses.module.scss';

const DynamicCourses = () => {
  const router = useRouter();
  console.log(router);

  const dummy_course = {
    courseImg:
      'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    aboutCourse: 'HRM, consectetur adipisicing elit',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
    courseLevel: 'Beginner',
    coursePrice: 6000,
    Category: 'Web development',
    Duration: '70h',
    TotalEnrolled: 2,
    LastUpdate: 'June 9, 2021'

  };

  return (
    <main className={styles.dynamicCourses}>
      <h1>{router.query.courseName}</h1>
      <CourseDetails course={dummy_course} />
    </main>
  );
};

export default DynamicCourses;
