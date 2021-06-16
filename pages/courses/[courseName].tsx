import { useRouter } from 'next/router';

import styles from './DynamicCourses.module.scss';
import CourseDescription from '../../components/CourseDescription/CourseDescription';

const DynamicCourses = () => {
  const router = useRouter();
  // router.query.courseName;
  // console.log(router);

  const dummy_course = {
    courseId: 1,
    courseImg:
      'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    courseName: 'HRM',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
    noOfCourses: 0,
    noOfStudents: 1,
    courseLevel: 'Beginner',
    coursePrice: 6000
  };

  return (
    <>
      <CourseDescription course={dummy_course} />
    </>
  );
};

export default DynamicCourses;
