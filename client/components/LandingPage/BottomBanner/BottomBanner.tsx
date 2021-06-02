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
              data-target={countUpto.satisfactionRate}
            >
              0
            </h2>
            <p>%</p>
          </div>
          <h4 className={styles.count_upto_discription}>Satisfaction Rate</h4>
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
              data-target={countUpto.enrolledLearners}
            >
              0
            </h2>
            <p>+</p>
          </div>
          <h4 className={styles.count_upto_discription}>Enrolled Learners</h4>
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
        <Link href='/'>
          <a title='Get started now'>
            <svg
              width='28'
              height='47'
              viewBox='0 0 28 47'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.11478 0V2.07277H0V43.4288H3.00003V5.06961H8.11478V47L28 43.4288V37.585V3.57868L8.11478 0ZM11.7729 25.1108C11.1045 25.1108 10.5625 24.4064 10.5625 23.5375C10.5625 22.6687 11.1045 21.9643 11.7729 21.9643C12.4414 21.9643 12.9833 22.6687 12.9833 23.5375C12.9833 24.4064 12.4414 25.1108 11.7729 25.1108Z'
                fill='white'
              />
            </svg>
            <p>Get Started Now</p>
          </a>
        </Link>
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
          <button type='submit'>
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
            <p>Subscribe Now</p>
          </button>
        </form>
      </section>
    </main>
  );
};

export default BottomBanner;
