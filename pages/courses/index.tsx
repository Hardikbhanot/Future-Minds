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
  const [showfilter, setShowFilter] = useState(false);
  // const [sortCourses, setSortCourses] = useState('');

  // const onCourseSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setSortCourses(event.target.value);
  // };
  let filterDropdownSvg = styles.filter_dropdown_triangle_svg;

  const onFilterClickHandler = () => {
    setShowFilter(!showfilter);
  };
  if (showfilter) {
    filterDropdownSvg = [
      styles.filter_dropdown_triangle_svg,
      styles.rotate180deg
    ].join(' ');
  }
  let card = courses.map((course) => {
    return <CourseCard key={course.courseId} course={course} />;
  });

  return (
    <>
      <CourseIndexPageBanner />
      <div className={styles.page_content}>
        <div className={styles.filter_container}>
          <button
            className={styles.filter_heading_container}
            onClick={onFilterClickHandler}
          >
            <h2 className={styles.filter_heading}>FILTER</h2>
            <svg
              className={filterDropdownSvg}
              width='22'
              height='14'
              viewBox='0 0 22 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M11 14L0.607697 0.5L21.3923 0.5L11 14Z' fill='black' />
            </svg>
          </button>
          <div className={styles.filter_wrapper}>
            <div className={styles.option_container}>
              Select Program Details
            </div>
            <div className={styles.option_container}>Industry Skill Type</div>
            <div className={styles.filter_btn_container}>
              <button
                className={[styles.filter_btn, styles.apply_btn].join(' ')}
              >
                Apply
              </button>
              <button
                className={[styles.filter_btn, styles.reset_btn].join(' ')}
              >
                Reset
              </button>
            </div>
          </div>
          <div className={styles.filter_ad}></div>
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
