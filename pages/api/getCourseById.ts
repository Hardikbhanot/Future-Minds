import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const courseId = new ObjectId('60cdc13b5f25aa163828985b');
    try {
      const db_url: string = process.env.DB_URL || '';
      const client = await MongoClient.connect(db_url);
      const db = client.db();
      const courseCollection = db.collection('courses');
      const course = await courseCollection.findOne({ _id: courseId });
      client.close();
      if (course) {
        const response = {
          data: {
            courseId: course._id,
            courseName: course.courseName,
            coursePrice: course.coursePrice,
            courseImage: course.courseImage,
            courseInclude: course.courseInclude,
            courseBy: course.courseBy,
            courseLevel: course.courseLevel,
            courseCategory: course.courseCategory,
            courseDuration: course.courseDuration,
            smallDescription: course.smallDescription,
            largeDescription: course.largeDescription,
            whatWillYouLearnDesp: course.whatWillYouLearnDesp,
            topicsOfCourse: course.topicsOfCourse,
            rating: course.rating,
            requirements: course.requirements,
            tags: course.tags,
            targetAudience: course.targetAudience,
            lastUpdated: course.lastUpdated.toLocaleString('en-GB')
          }
        };
        res.status(200).json(response);
      } else {
        res
          .status(404)
          .json({ error: { message: 'No course found for this Id' } });
      }
    } catch (error) {
      res.status(405).json({ error: { message: error.message } });
    }
  } else {
    res.status(400).json({ error: { message: 'This route does not exist' } });
  }
};
