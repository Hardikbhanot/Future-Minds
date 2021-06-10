import styles from './CourseCard.module.scss';

interface courseFields {
  courseId: number;
  courseImg: string;
  courseName: string;
  discription: string;
  noOfCourses: number;
  noOfStudents: number;
  courseLevel: string;
  price: number;

}

interface pageProps {
  course: courseFields;
}

const CourseCard = ({ course }: pageProps) => {
  return (

    <div className={styles.card} >

      <div className={styles.imgCard}>
        <p className={styles.levels}> {course.courseLevel}</p>
        <button> Bookmark </button>

        <div className={styles.prices} />
        <p className={styles.priceValue}><strong>{course.price}</strong> Including GST</p>


        <img src={course.courseImg}
          alt="Course name"
          className="card_img"
        />

      </div>
      <div className={styles.dataCard}>

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
