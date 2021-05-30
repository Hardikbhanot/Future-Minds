import { RefObject, useEffect, useRef } from 'react';
import Link from 'next/link';

import styles from './BottomBanner.module.scss';
import { useInView } from 'react-intersection-observer';
// import useIntersections from '../../../hook/useIntersection';

const BottomBanner = () => {
  // const counterSectionRef = useRef<HTMLElement>(null);
  const { ref, inView } = useInView({
    threshold: 1
  });

  const countUpto = {
    finishedSessions: 80,
    enrolledLearners: 816,
    onlineInstructures: 21,
    satisfactionRate: 97
  };

  // let isViewPort = false;

  // check if counterSectionRef is null
  // const checkIfCounterSectionIsNull = (
  //   counterSectionRef: RefObject<HTMLElement>
  // ) => {
  //   if (counterSectionRef && counterSectionRef.current) {
  //     isViewPort = useIntersections({
  //       element: counterSectionRef.current,
  //       rootMargin: '-100px'
  //     });
  //   }
  //   return isViewPort;
  // };

  const counterFunc = () => {
    const counterArray = document.querySelectorAll(
      '.' + styles.count_upto_counter
    );
    const speed = 200;

    counterArray.forEach((counter: Element) => {
      const updateCount = () => {
        let targetString = counter.getAttribute('data-target');
        let target;
        if (targetString) {
          target = +targetString;
        } else {
          target = 0;
        }
        const count = +counter.innerHTML;
        const inc = target / speed;
        if (count < target) {
          counter.innerHTML = `${Math.ceil(count + inc)}`;
          setTimeout(updateCount, 1);
        } else {
          counter.innerHTML = `${target}`;
        }
      };
      updateCount();
    });
  };

  useEffect(() => {
    // const isInViewPort = checkIfCounterSectionIsNull(counterSectionRef);
    if (inView) {
      counterFunc();
    }
  }, [inView]);

  return (
    <main className={styles.bottom_banner}>
      <section className={styles.count_upto_container} ref={ref}>
        <div className={styles.count_upto}>
          <div className={styles.counter_heading_container}>
            <h2
              className={styles.count_upto_counter}
              data-target={countUpto.finishedSessions}
            >
              0
            </h2>
          </div>
          <h4 className={styles.count_upto_discription}>Finished Sessions</h4>
        </div>
        <div className={styles.count_upto}>
          <div className={styles.counter_heading_container}>
            <h2
              className={styles.count_upto_counter}
              data-target={countUpto.enrolledLearners}
            >
              0
            </h2>
            <p>+</p>
          </div>
          <h4 className={styles.count_upto_discription}>Enrolled Learners</h4>
        </div>
        <div className={styles.count_upto}>
          <div className={styles.counter_heading_container}>
            <h2
              className={styles.count_upto_counter}
              data-target={countUpto.onlineInstructures}
            >
              0
            </h2>
            <p>+</p>
          </div>
          <h4 className={styles.count_upto_discription}>Online Instructures</h4>
        </div>
        <div className={styles.count_upto}>
          <div className={styles.counter_heading_container}>
            <h2
              className={styles.count_upto_counter}
              data-target={countUpto.satisfactionRate}
            >
              0
            </h2>
            <p>%</p>
          </div>
          <h4 className={styles.count_upto_discription}>Satisfaction Rate</h4>
        </div>
      </section>
      <section className={styles.bottom_banner_section_our_experts}>
        <p className={styles.bottom_banner_sub_heading}>OUR EXPERTS</p>
        <h2 className={styles.bottom_banner_main_heading}>
          Meet Our World-class Instructors
        </h2>
        <p className={styles.bottom_banner_discription}>
          Our Experts & Faculties have over 200 years of cumulative experience
          of imparting teaching and training with a successful history of
          changing the lives of thousands across the globe.
        </p>
      </section>
      <section className={styles.bottom_banner_section_online_certification}>
        <p className={styles.bottom_banner_sub_heading}>ONLINE CERTIFICATION</p>
        <h2 className={styles.bottom_banner_main_heading}>
          Get Your Quality Skills Certificate Through Online Exam
        </h2>
        <p className={styles.bottom_banner_discription}>
          Students friendly pricing for the certificate programs helps
          individuals to get their skill certificate easier than ever!
        </p>
        <Link href='/'>Get Started Now</Link>
      </section>
      <section className={styles.bottom_banner_section_blog}>
        <p className={styles.bottom_banner_sub_heading}>NEWS</p>
        <h2 className={styles.bottom_banner_main_heading}>
          Check Out Our Latest Blog
        </h2>
        <p className={styles.bottom_banner_discription}>
          We share content related to the latest trends, researches, and
          technologies through our blogs
        </p>
        <p className={styles.bottom_banner_blog_para}>
          Get into details now?
          <Link href='/'> View all posts</Link>
        </p>
      </section>
      <section className={styles.bottom_banner_section_newsletter}>
        <p className={styles.bottom_banner_sub_heading}>GO AT YOUR OWN PACE</p>
        <h2 className={styles.bottom_banner_main_heading}>
          Subscribe to Our Newsletter
        </h2>
        <p className={styles.bottom_banner_discription}>
          We do not share your email with any third parties.
        </p>
        <form className={styles.newsletter_form}>
          <input type='text' placeholder='Enter your email address' />
          <button type='submit'>Subscribe Now</button>
        </form>
      </section>
    </main>
  );
};

export default BottomBanner;
