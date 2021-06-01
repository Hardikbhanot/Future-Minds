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
        <Link href='/'>
          <a title='View All Courses'>
            <svg
              width='20'
              height='23'
              viewBox='0 0 20 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14 13.6562C12.7188 13.6562 12.1027 14.375 10 14.375C7.89732 14.375 7.28571 13.6562 6 13.6562C2.6875 13.6562 0 16.3605 0 19.6938V20.8438C0 22.0342 0.959821 23 2.14286 23H17.8571C19.0402 23 20 22.0342 20 20.8438V19.6938C20 16.3605 17.3125 13.6562 14 13.6562ZM17.8571 20.8438H2.14286V19.6938C2.14286 17.5555 3.875 15.8125 6 15.8125C6.65179 15.8125 7.70982 16.5312 10 16.5312C12.308 16.5312 13.3438 15.8125 14 15.8125C16.125 15.8125 17.8571 17.5555 17.8571 19.6938V20.8438ZM10 12.9375C13.5491 12.9375 16.4286 10.04 16.4286 6.46875C16.4286 2.89746 13.5491 0 10 0C6.45089 0 3.57143 2.89746 3.57143 6.46875C3.57143 10.04 6.45089 12.9375 10 12.9375ZM10 2.15625C12.3616 2.15625 14.2857 4.09238 14.2857 6.46875C14.2857 8.84512 12.3616 10.7812 10 10.7812C7.63839 10.7812 5.71429 8.84512 5.71429 6.46875C5.71429 4.09238 7.63839 2.15625 10 2.15625Z'
                fill='white'
              />
            </svg>
            <p>View All Courses</p>
          </a>
        </Link>
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
