import { ObjectId } from 'mongodb';
import { GetServerSideProps } from 'next';
import { connectToDatabase } from '../../../utils/database';

import CourseDescription from '../../../components/CourseDescription/CourseDescription';

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
      <CourseDescription course={course} />
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
