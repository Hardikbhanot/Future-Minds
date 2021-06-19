import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const db_url: string = process.env.DB_URL || '';
      const client = await MongoClient.connect(db_url);
      const db = client.db();
      const courseCollection = db.collection('courses');
      const result = await courseCollection.find().limit(18).toArray();
      client.close();
      if (result && result.length > 0) {
        const response = {
          count: result.length,
          data: result.map((course) => {
            return {
              courseId: course._id,
              courseName: course.courseName,
              coursePrice: course.coursePrice,
              courseImage: course.courseImage,
              courseLevel: course.courseLevel,
              smallDescription: course.smallDescription,
              rating: course.rating
            };
          })
        };
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: { message: 'No course found' } });
      }
    } catch (error) {
      res.status(405).json({ error: { message: error.message } });
    }
  } else {
    res.status(400).json({ error: { message: 'This route does not exist' } });
  }
};
