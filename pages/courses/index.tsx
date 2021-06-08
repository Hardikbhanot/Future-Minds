import styles from './index.module.scss';
import CourseCard from '../../components/CoursesCard/CourseCard';

const Courses = () => {
  const dummy_data = [
    {
      courseId: 1,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1
    },
    {
      courseId: 2,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1
    },
    {
      courseId: 3,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1
    },
    {
      courseId: 4,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1
    },
    {
      courseId: 5,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1
    }
  ];

  let card = dummy_data.map((course) => {
    // console.log(course);
    return <CourseCard key={course.courseId} course={course} />;
  });

  return (
    <main className={styles.courses}>
      <div>Hello this is courses route</div>
      {card}
    </main>
  );
};

export default Courses;