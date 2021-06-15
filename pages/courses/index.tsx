import styles from './index.module.scss';
import CourseCard from '../../components/CoursesCard/CourseCard';
import Banner from '../../components/HeadingBanner/Banner';

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
      noOfStudents: 1,
      courseLevel: 'Beginner',
      coursePrice: 6000
    },
    {
      courseId: 2,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1,
      courseLevel: 'easy',
      coursePrice: 6000
    },
    {
      courseId: 3,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1,
      courseLevel: 'easy',
      coursePrice: 6000
    },
    {
      courseId: 4,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1,
      courseLevel: 'easy',
      coursePrice: 6000
    },
    {
      courseId: 5,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1,
      courseLevel: 'easy',
      coursePrice: 6000
    },
    {
      courseId: 6,
      courseImg:
        'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      courseName: 'HRM',
      discription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
      noOfCourses: 0,
      noOfStudents: 1,
      courseLevel: 'Advanced',
      coursePrice: 6000
    }
  ];

  let card = dummy_data.map((course) => {
    // console.log(course);
    return <CourseCard key={course.courseId} course={course} />;
  });


  return (
    <main className={styles.courses}>
      {/* <div className={styles.heading}>Hello this is courses route</div> */}
      <Banner />
      <div className={styles.card_container}>{card}</div>
    </main>
  );
};

export default Courses;
