import Link from 'next/link';

import styles from './StepDegreeBanner.module.scss';

const StepDegreeBanner = () => {
  return (
    <section className={styles.step_degree_banner}>
      <div className={styles.step_degree_content_container}>
        <p className={styles.step_degree_banner_sub_heading}>
          Step Degree Programme
        </p>
        <h2 className={styles.step_degree_banner_main_heading}>
          Full Proof Plan To Get Dream Jobs
        </h2>
        <p className={styles.step_degree_banner_discription}>
          Having doubts related to your career & future, and regular degree
          isn't helping out! We've plans for you to enhance your chances to
          better jobs & money.
        </p>
        <p className={styles.step_degree_banner_bold_discription}>
          A long-term degree alternative program to guide you to the right path.
        </p>

        <Link href='https://learn.futureminds.in/'>
          <a
            className={styles.step_degree_banner_link}
            title='Explore StepDegree'
          >
            Explore StepDegree
          </a>
        </Link>
      </div>
      <div className={styles.step_degree_image_animation_container}>
        <div className={styles.step_degree_image_container}>
          <img
            className={styles.step_degree_image}
            src='/images/step_degree_img.jpg'
            alt='Explore Step Degree'
          />
          <svg
            className={styles.circle_animation}
            width='79'
            height='79'
            viewBox='0 0 79 79'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='39.5' cy='39.5' r='39.5' fill='#EA6175' />
            <circle cx='40' cy='40' r='33' fill='#F8F9F8' />
          </svg>
          <svg
            className={styles.line_animation}
            width='193'
            height='280'
            viewBox='0 0 193 280'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask
              id='mask0'
              mask-type='alpha'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='193'
              height='280'
            >
              <rect width='193' height='280' fill='#C4C4C4' />
            </mask>
            <g mask='url(#mask0)'>
              <line
                x1='-1.41421'
                y1='209.586'
                x2='195.586'
                y2='12.5858'
                stroke='#60646F'
                strokeWidth='4'
              />
              <line
                x1='46.5858'
                y1='218.586'
                x2='144.586'
                y2='120.586'
                stroke='#60646F'
                strokeWidth='4'
              />
              <line
                x1='35.5858'
                y1='284.586'
                x2='195.586'
                y2='124.586'
                stroke='#EA6175'
                strokeWidth='4'
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StepDegreeBanner;
