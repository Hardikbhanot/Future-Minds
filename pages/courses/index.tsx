import { ChangeEvent, useState } from 'react';

import styles from './index.module.scss';
import CourseCard from '../../components/CoursesCard/CourseCard';
import HeadingBanner from '../../components/HeadingBanner/HeadingBanner';

const Courses = () => {
  const [sortCourses, setSortCourses] = useState('');

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
      courseLevel: 'Beginner',
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
      courseLevel: 'Intermediate',
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
      courseLevel: 'Intermediate',
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
      courseLevel: 'Advanced',
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

  const onCourseSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortCourses(event.target.value);
  };

  let card = dummy_data.map((course) => {
    return <CourseCard key={course.courseId} course={course} />;
  });

  return (
    <>
      <HeadingBanner heading={'Courses'} />
      <div className={styles.page_content}>
        <div className={styles.course_filter}>
          <p className={styles.pagination_detail}>
            Showing <strong>{dummy_data.length}</strong> Courses
          </p>
          <div className={styles.dropdown_container}>
            <select
              value={sortCourses}
              className={styles.dropdown}
              onChange={onCourseSortChange}
            >
              <option value='releaseDateAsc'>
                Release Date (newest first)
              </option>
              <option value='releaseDateDes'>
                Release Date (oldest first)
              </option>
              <option value='courseTitleAsc'>Course Title (a-z)</option>
              <option value='courseTitleDes'>Course Title (z-a)</option>
            </select>
          </div>
        </div>
        <div className={styles.card_container}>{card}</div>
      </div>
    </>
  );
};

export default Courses;
