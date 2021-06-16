import { useRouter } from 'next/router';

import styles from './DynamicCourses.module.scss';
import CourseDescription from '../../components/CourseDescription/CourseDescription';

const DynamicCourses = () => {
  const router = useRouter();
  // router.query.courseName;
  // console.log(router);

  const dummy_course = {
    courseId: 1,
    courseName: 'HRM',
    courseImg:
      'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    aboutCourse: 'HRM, consectetur adipisicing elit',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
    courseLevel: 'Beginner',
    coursePrice: 6000,
    category: 'Web development',
    duration: '70h',
    totalEnrolled: 2,
    lastUpdate: 'June 9, 2021'
  };

  return (
    <>
      <CourseDescription course={dummy_course} />
    </>
  );
};

export default DynamicCourses;
