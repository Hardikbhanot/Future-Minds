import { useEffect } from 'react';
import Link from 'next/link';

import styles from './BottomBanner.module.scss';
import { useInView } from 'react-intersection-observer';

const BottomBanner = () => {
  const { ref, inView } = useInView({
    threshold: 1
  });

  const countUpto = {
    finishedSessions: 80,
    enrolledLearners: 816,
    onlineInstructures: 21,
    satisfactionRate: 97
  };

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
        <svg
          className={styles.online_certification_filled_circle_animation}
          width='244'
          height='276'
          viewBox='0 0 244 276'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='97.5' cy='97.5' r='97.5' fill='#EA6175' />
          <line
            x1='242.061'
            y1='133.061'
            x2='101.061'
            y2='274.061'
            stroke='#EA6175'
            strokeWidth='3'
          />
        </svg>
        <svg
          className={styles.online_certification_concentric_circle_animation}
          width='197'
          height='197'
          viewBox='0 0 197 197'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='98.5' cy='98.5' r='98.5' fill='#EA6175' />
          <circle cx='98.5' cy='98.5' r='84.5' fill='white' />
          <circle cx='98' cy='98' r='63' fill='#EA6175' />
          <circle cx='98' cy='98' r='54' fill='white' />
        </svg>
        <svg
          className={styles.online_certification_strip_animation}
          width='202'
          height='202'
          viewBox='0 0 202 202'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask
            id='mask0'
            mask-type='alpha'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='202'
            height='202'
          >
            <circle cx='101' cy='101' r='101' fill='#2557FB' />
          </mask>
          <g mask='url(#mask0)'>
            <line
              x1='3.67616'
              y1='61.4657'
              x2='57.834'
              y2='7.30776'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='-1.85015'
              y1='97.9393'
              x2='98.7288'
              y2='-2.63961'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='2.57093'
              y1='124.466'
              x2='127.466'
              y2='-0.429079'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='9.20252'
              y1='147.676'
              x2='148.466'
              y2='8.41303'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='22.4656'
              y1='164.255'
              x2='167.255'
              y2='19.4657'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='36.8341'
              y1='180.834'
              x2='182.729'
              y2='34.9393'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='54.5183'
              y1='191.887'
              x2='192.676'
              y2='53.7288'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='78.8341'
              y1='199.624'
              x2='203.729'
              y2='74.7288'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='106.466'
              y1='202.939'
              x2='205.939'
              y2='103.466'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='142.939'
              y1='196.308'
              x2='198.202'
              y2='141.045'
              stroke='black'
              strokeWidth='3'
            />
          </g>
        </svg>
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
        <svg
          className={styles.newsletter_concentric_circle_animation}
          width='197'
          height='197'
          viewBox='0 0 197 197'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='98.5' cy='98.5' r='98.5' fill='#EA6175' />
          <circle cx='98.5' cy='98.5' r='84.5' fill='white' />
          <circle cx='98' cy='98' r='63' fill='#EA6175' />
          <circle cx='98' cy='98' r='54' fill='white' />
        </svg>
        <svg
          className={styles.newsletter_strip_animation}
          width='202'
          height='202'
          viewBox='0 0 202 202'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask
            id='mask0'
            mask-type='alpha'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='202'
            height='202'
          >
            <circle cx='101' cy='101' r='101' fill='#2557FB' />
          </mask>
          <g mask='url(#mask0)'>
            <line
              x1='3.67616'
              y1='61.4657'
              x2='57.834'
              y2='7.30776'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='-1.85015'
              y1='97.9393'
              x2='98.7288'
              y2='-2.63961'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='2.57093'
              y1='124.466'
              x2='127.466'
              y2='-0.429079'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='9.20252'
              y1='147.676'
              x2='148.466'
              y2='8.41303'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='22.4656'
              y1='164.255'
              x2='167.255'
              y2='19.4657'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='36.8341'
              y1='180.834'
              x2='182.729'
              y2='34.9393'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='54.5183'
              y1='191.887'
              x2='192.676'
              y2='53.7288'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='78.8341'
              y1='199.624'
              x2='203.729'
              y2='74.7288'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='106.466'
              y1='202.939'
              x2='205.939'
              y2='103.466'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='142.939'
              y1='196.308'
              x2='198.202'
              y2='141.045'
              stroke='black'
              strokeWidth='3'
            />
          </g>
        </svg>
      </section>
    </main>
  );
};

export default BottomBanner;
