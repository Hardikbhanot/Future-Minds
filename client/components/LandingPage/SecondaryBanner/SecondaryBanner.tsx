import Link from 'next/link';
import styles from './SecondaryBanner.module.scss';

const SecondaryBanner = () => {
  return (
    <main className={styles.secondary_banner}>
      <section className={styles.secondary_banner_container}>
        <p className={styles.secondary_banner_sub_heading}>
          IMPARTING EDUCATION THROUGH INNOVATION
        </p>
        <h2 className={styles.secondary_banner_main_heading}>
          Courses to Boost Your Career
        </h2>
        <p className={styles.secondary_banner_discription}>
          Explore our courses and open the gateway to a bright career, So start
          learning now ! We promise you'll be the winner always!
        </p>
        {/* <div className={styles.secondary_banner_courses_card_container}>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
        </div> */}
        <Link href='/'>View All Courses</Link>
        <p className={styles.secondary_banner_discription}>
          Enjoy the top notch learning methods and achieve next level skills!
          You are the creator of your own career & we will guide you through
          that. <Link href='/'>Register Free Now!​</Link>​
        </p>
      </section>
      <section className={styles.secondary_banner_container}>
        <p className={styles.secondary_banner_sub_heading}>
          EDUCATION FOR EVERYONE
        </p>
        <h2 className={styles.secondary_banner_main_heading}>
          Online Classes Ease of Learning
        </h2>
        <p className={styles.secondary_banner_discription}>
          In the ever evolving world & fast growing competition, We equip you
          with the best skills to command you success.
        </p>
        <div className={styles.courses_detail_card_container}>
          <div className={styles.courses_detail_card}>
            <div className={styles.courses_detail_card_icon}></div>
            <h3 className={styles.courses_detail_card_heading}>
              Learn the In-Demand Skills
            </h3>
            <p className={styles.courses_detail_card_discription}>
              Be it AI/ML Development, UI/UX, Full Stack, Digital Marketing,
              Mobile App Development or any in-demand skills, Our experts teach
              them all.
            </p>
            <Link href='/'>Start Now!</Link>
          </div>
          <div className={styles.courses_detail_card}>
            <div className={styles.courses_detail_card_icon}></div>
            <h3 className={styles.courses_detail_card_heading}>
              Secured Internship
            </h3>
            <p className={styles.courses_detail_card_discription}>
              Be it Technical course OR Job oriented Non- technical one, We
              ensure you get live experience through corporate internships .
            </p>
            <Link href='/'>Start Now!</Link>
          </div>
          <div className={styles.courses_detail_card}>
            <div className={styles.courses_detail_card_icon}></div>
            <h3 className={styles.courses_detail_card_heading}>
              We Got Your Fee Covered
            </h3>
            <p className={styles.courses_detail_card_discription}>
              Having issues paying fees! Don't worry our financial partners got
              it covered for You.
            </p>
            <Link href='/'>Start Now!</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SecondaryBanner;
