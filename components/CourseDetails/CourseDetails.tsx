import Link from 'next/link';
import React from 'react';
import styles from './CourseDetails.module.scss';

interface courseDetails {
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
    course: courseDetails;
}

const Banner = () => {
    return (

        <div className={styles.banner}>
            <div className={styles.bannerContainer}>
                <p className={styles.bannerText}>Courses
                </p>
            </div>
        </div>


    );
};

const CourseCard = ({ course }: pageProps) => {
    return (

        <div className={styles.card}>
            <div className={styles.imgContainer}></div>
        </div>

    );
};
