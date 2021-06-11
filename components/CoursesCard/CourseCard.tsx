// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './CourseCard.module.scss';

interface courseFields {
  courseId: number;
  courseImg: string;
  courseName: string;
  discription: string;
  noOfCourses: number;
  noOfStudents: number;
  courseLevel: string;
  coursePrice: number;
}

interface pageProps {
  course: courseFields;
}

const CourseCard = ({ course }: pageProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <p className={styles.levels}>{course.courseLevel}</p>
        <button className={styles.bookmarkBtn}> Bookmark </button>
        <p className={styles.priceValue}>
          <strong>{course.coursePrice}</strong> Including GST
        </p>
        <img
          src={course.courseImg}
          alt='Course name'
          className={styles.card_img}
          width={200}
          height={300}
        />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.starRating} />
        <h1 className={styles.courseName}>{course.courseName}</h1>
        <p className={styles.courseDescription}>{course.discription}</p>
        <div className={styles.cardFooter}>
          <p>Lessons</p>
          <p>Students</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
