import Head from 'next/head';

import AcademyNavbar from '../../../components/LayoutComponents/AcademyNavbar/AcademyNavbar';
import Footer from '../../../components/LayoutComponents/Footer/Footer';

import { ObjectId } from 'mongodb';
import { GetServerSideProps } from 'next';
import { connectToDatabase } from '../../../utils/database';

import CourseDescription from '../../../components/CourseDescription/CourseDescription';

import styles from '../../../styles/index.module.scss';

interface pageProps {
  course: {
    courseId: string;
    courseName: string;
    coursePrice: number;
    courseImage: string;
    courseInclude: string[];
    courseBy: {
      instructorId: string;
      instructorName: string;
    };
    courseLevel: string;
    courseCategory: string[];
    courseDuration: number;
    totalEnrolledStudents: number;
    lastUpdated: string;
    smallDescription: string;
    largeDescription: string;
    whatWillYouLearnDesp: string[];
    topicsOfCourse: { chapterName: string; topics: string[] }[];
    ratings: number;
    requirements: string[];
    tags: string[];
    targetAudience: string[];
  };
  error: boolean;
}

const DynamicCourses = ({ course, error }: pageProps) => {
  return (
    <>
      <Head>
        <title>{course.courseName}</title>
        <meta name='description' content={course.smallDescription} />
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
      <main className={styles.page_main}>
        <AcademyNavbar />
        <CourseDescription course={course} />
        <Footer />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (content) => {
  const reqCourseId: string = content.params?.courseId || '';
  const courseId = new ObjectId(reqCourseId);

  const { db } = await connectToDatabase();
  const courseCollectionData = await db
    .collection('courses')
    .findOne({ _id: courseId });

  if (courseCollectionData) {
    const response = {
      courseId: `${courseCollectionData._id}`,
      courseName: courseCollectionData.courseName,
      coursePrice: courseCollectionData.coursePrice,
      courseImage: courseCollectionData.courseImage,
      courseInclude: courseCollectionData.courseInclude,
      courseBy: courseCollectionData.courseBy,
      courseLevel: courseCollectionData.courseLevel,
      courseCategory: courseCollectionData.courseCategory,
      courseDuration: courseCollectionData.courseDuration,
      totalEnrolledStudents: courseCollectionData.totalEnrolledStudents,
      smallDescription: courseCollectionData.smallDescription,
      largeDescription: courseCollectionData.largeDescription,
      whatWillYouLearnDesp: courseCollectionData.whatWillYouLearnDesp,
      topicsOfCourse: courseCollectionData.topicsOfCourse.map(
        (topicOfCourse: { chapterName: string; topics: string[] }) => {
          return {
            chapterName: topicOfCourse.chapterName,
            topics: topicOfCourse.topics
          };
        }
      ),
      rating: courseCollectionData.rating || 0,
      requirements: courseCollectionData.requirements,
      tags: courseCollectionData.tags,
      targetAudience: courseCollectionData.targetAudience,
      lastUpdated: courseCollectionData.lastUpdated.toLocaleDateString('en-GB')
    };
    return {
      props: {
        course: response,
        error: false
      }
    };
  }

  return {
    props: {
      course: {},
      error: true
    }
  };
};

export default DynamicCourses;
