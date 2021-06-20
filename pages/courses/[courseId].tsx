import { MongoClient, ObjectId } from 'mongodb';
import { GetServerSideProps } from 'next';

import CourseDescription from '../../components/CourseDescription/CourseDescription';

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
    topicsOfCourse: { topicName: string; topics: string[] }[];
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
  const db_url: string = process.env.DB_URL || '';
  let response: object = {};
  try {
    const client = await MongoClient.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = client.db();
    const courseCollection = db.collection('courses');
    const course = await courseCollection.findOne({ _id: courseId });
    client.close();
    response = {
      courseId: `${course._id}`,
      courseName: course.courseName,
      coursePrice: course.coursePrice,
      courseImage: course.courseImage,
      courseInclude: course.courseInclude,
      courseBy: course.courseBy,
      courseLevel: course.courseLevel,
      courseCategory: course.courseCategory,
      courseDuration: course.courseDuration,
      totalEnrolledStudents: course.totalEnrolledStudents,
      smallDescription: course.smallDescription,
      largeDescription: course.largeDescription,
      whatWillYouLearnDesp: course.whatWillYouLearnDesp,
      topicsOfCourse: course.topicsOfCourse.map(
        (topicOfCourse: { topicName: string; topics: string[] }) => {
          return {
            topicName: topicOfCourse.topicName,
            topics: topicOfCourse.topics
          };
        }
      ),
      rating: course.rating || 0,
      requirements: course.requirements,
      tags: course.tags,
      targetAudience: course.targetAudience,
      lastUpdated: course.lastUpdated.toLocaleDateString('en-GB')
    };
    return {
      props: {
        course: response,
        error: false
      }
    };
  } catch (error) {
    return {
      props: {
        course: response,
        error: true
      }
    };
  }
};

export default DynamicCourses;
