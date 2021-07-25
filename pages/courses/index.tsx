import { ChangeEvent, useState } from 'react';
import { connectToDatabase } from '../../utils/database';
// import axios from '../../axiosInstance';

import styles from './index.module.scss';
import CourseIndexPageBanner from '../../components/LayoutComponents/CourseIndexPageBanner/CourseIndexPageBanner';
import CourseCard from '../../components/CoursesCard/CourseCard';

interface courseStructure {
  _id: string;
  courseImage: string;
  courseCategory: string;
  courseName: string;
  courseDuration: number;
  courseLevel: string;
  courseClassType: string;
  isTrending: boolean;
}

interface pageProps {
  courses: {
    courseId: string;
    courseImage: string;
    courseCategory: string;
    courseName: string;
    courseDuration: number;
    courseLevel: string;
    courseClassType: string;
    isTrending: boolean;
  }[];
  error: boolean;
}

const Courses = ({ courses, error }: pageProps) => {
  const [sortCourses, setSortCourses] = useState('');

  const onCourseSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortCourses(event.target.value);
  };

  let card = courses.map((course) => {
    return <CourseCard key={course.courseId} course={course} />;
  });

  return (
    <>
      <CourseIndexPageBanner />
      <div className={styles.page_content}>
        <div className={styles.course_filter}>
          <p className={styles.pagination_detail}>
            Showing <strong>{courses.length}</strong> Courses
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

export const getStaticProps = async () => {
  const { db } = await connectToDatabase();
  const coursesCollectionData = await db
    .collection('courses')
    .find()
    .limit(18)
    .toArray();
  if (coursesCollectionData && coursesCollectionData.length > 0) {
    const response = {
      count: coursesCollectionData.length,
      courses: coursesCollectionData.map((course: courseStructure) => {
        return {
          courseId: `${course._id}`,
          courseImage: course.courseImage,
          courseName: course.courseName,
          courseCategory: course.courseCategory || 'Web',
          courseLevel: course.courseLevel,
          courseDuration: course.courseDuration,
          courseClassType: course.courseClassType || 'Online',
          isTrending: course.isTrending || false
        };
      })
    };
    return {
      props: {
        courses: response.courses,
        error: false
      }
    };
  }
  return {
    props: {
      courses: [],
      error: true
    }
  };
};

// USING AXIOS AND CUSTOM API
// export const getStaticProps = async () => {
//   const result = await axios({
//     method: 'GET',
//     url: '/api/course/getAllCourses',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then((response) => {
//       if (response.status === 200) {
//         return {
//           props: {
//             courses: response.data.courses,
//             error: false
//           }
//         };
//       } else {
//         return {
//           props: {
//             courses: [],
//             error: false
//           }
//         };
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       return {
//         props: {
//           courses: [],
//           error: false
//         }
//       };
//     });
//   return result;
// };

export default Courses;
