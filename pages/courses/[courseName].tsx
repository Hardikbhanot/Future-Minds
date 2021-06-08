import { useRouter } from 'next/router';
import styles from './DynamicCourses.module.scss';

const DynamicCourses = () => {
  const router = useRouter();
  console.log(router);

  return (
    <main className={styles.dynamicCourses}>
      <h1>{router.query.courseName}</h1>
    </main>
  );
};

export default DynamicCourses;
