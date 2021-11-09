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
    courseBy: {
      instructorId: string;
      instructorName: string;
    };
    courseLevel: string;
    courseCategory: string[];
    courseDuration: number;
    courseMode: string;
    tags: string[];
    description: string;
    topicsOfCourse: { chapterName: string; topics: string[] }[];
    ratings: number;
    requirements: string[];
    lastUpdated: string;
    paymentGateway: string;
  };
  error: boolean;
}

const DynamicCourses = ({ course, error }: pageProps) => {
  return (
    <>
      <Head>
        <meta name='description' content={course.description} />
        <title>{course.courseName}</title>
      </Head>
      <AcademyNavbar />
      <main className={styles.page_main}>
        <CourseDescription course={course} />
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (content) => {
  const paramsCourseId = content.params?.courseId || '';
  let reqCourseId: string;
  if (typeof paramsCourseId !== 'string') {
    reqCourseId = paramsCourseId.join('');
  } else {
    reqCourseId = paramsCourseId;
  }
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
      courseBy: courseCollectionData.courseBy,
      courseLevel: courseCollectionData.courseLevel,
      courseCategory: courseCollectionData.courseCategory,
      courseDuration: courseCollectionData.courseDuration,
      tags: courseCollectionData.tags,
      description: courseCollectionData.description,
      courseMode: courseCollectionData.courseMode,
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
      lastUpdated: courseCollectionData.lastUpdated.toLocaleDateString('en-GB'),
      paymentGateway: courseCollectionData.paymentGateway || '/'
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
