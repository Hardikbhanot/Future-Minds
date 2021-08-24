import Head from 'next/head';

import { connectToDatabase } from '../utils/database';
import LandingNavbar from '../components/LayoutComponents/LandingNavbar/LandingNavbar';
import Footer from '../components/LayoutComponents/Footer/Footer';

import MainBanner from '../components/LandingPage/MainBanner/MainBanner';
import Features from '../components/LayoutComponents/Features/Features';
import CourseBanner from '../components/LandingPage/CourseBanner/CourseBanner';
import Highlights from '../components/LandingPage/Highlights/Highlights';
import StepDegree from '../components/LandingPage/StepDegree/StepDegree';
import OtherFeatures from '../components/LandingPage/OtherFeatures/OtherFeatures';
import Newsletter from '../components/LandingPage/Newsletter/Newsletter';

import styles from '../styles/index.module.scss';

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

const Home = ({ courses, error }: pageProps) => {
  const featuresCardsData = [
    {
      heading: 'Live Classes',
      description:
        'Better learning and Understanding through live interactions with experts.'
    },
    {
      heading: 'Expert Mentors',
      description:
        'Learn from renowned subject expert Corporate Stalwarts & Academicians.'
    },
    {
      heading: 'Career Gateway',
      description:
        'Hands on experience through assured Internships and get Job opportunities'
    }
  ];

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!'
        />
        <title>FutureMinds – Imparting Education through Innovation</title>
      </Head>

      <LandingNavbar />
      <main className={styles.page_main}>
        <MainBanner />
        <Features cards={featuresCardsData} />
        <CourseBanner courses={courses} />
        <Highlights />
        <StepDegree />
        <OtherFeatures />
        <Newsletter />
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
    .limit(6)
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

export default Home;
