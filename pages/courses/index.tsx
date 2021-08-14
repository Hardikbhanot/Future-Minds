import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import { connectToDatabase } from '../../utils/database';
// import axios from '../../utils/axiosInstance';

import AcademyNavbar from '../../components/LayoutComponents/AcademyNavbar/AcademyNavbar';
import Footer from '../../components/LayoutComponents/Footer/Footer';

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
  courseMode: string;
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
    courseMode: string;
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
      <Head>
        <title>Academy by Future Minds</title>
        <meta
          name='description'
          content='Academy by Future Minds. Futureminds is an incubated startup by DESU, Shakarpur campus, Govt. Of NCT of Delhi. An organisation which are imparting education through innovation by upskilling the student and prepare student to get employed and succees in their workplace.'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AcademyNavbar />
      <main className={styles.page_main}>
        <CourseIndexPageBanner />
        <div className={styles.page_content}>
          <div className={styles.filter_container}>
            {/* <button
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
            </div> */}
            <div className={styles.filter_ad}></div>
          </div>
          <div className={styles.card_container}>{card}</div>
        </div>
      </main>
      <Footer />
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
          courseCategory: course.courseCategory,
          courseLevel: course.courseLevel,
          courseDuration: course.courseDuration,
          courseMode: course.courseMode,
          isTrending: course.isTrending
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
