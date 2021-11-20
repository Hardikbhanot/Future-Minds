import { useState, useEffect } from 'react';
import Link from 'next/link';

import FAQElement from './FAQElement/FAQElement';
import Features from '../LayoutComponents/Features/Features';
import ChapterElement from './ChapterElement/ChapterElement';
import Highlights from '../LandingPage/Highlights/Highlights';

import styles from './CourseDescription.module.scss';

interface pageProps {
  course: {
    courseId: string;
    courseName: string;
    coursePrice: number;
    courseImage: string;
    courseBy: {
      instructorId: string;
      instructorName: string;
    };
    courseLevel: string;
    courseCategory: string[];
    courseDuration: number;
    courseMode: string;
    tags: string[];
    description: string;
    topicsOfCourse: { chapterName: string; topics: string[] }[];
    ratings: number;
    requirements: string[];
    lastUpdated: string;
    paymentGateway: string;
  };
}

interface topicsType {
  chapterName: string;
  topics: string[];
  isActive: boolean;
}

const CourseDescription = ({ course }: pageProps) => {
  const [topics, setTopics] = useState<topicsType[]>();
  let updatedTopics = course.topicsOfCourse.map((topic) => {
    return { ...topic, isActive: false };
  });

  useEffect(() => {
    setTopics([...updatedTopics]);
  }, []);

  const expandAndCollapseHandler = (
    elementIndex: number,
    isActive: boolean
  ) => {
    if (isActive) {
      updatedTopics = course.topicsOfCourse.map((topic) => {
        return { ...topic, isActive: false };
      });
    } else {
      updatedTopics = course.topicsOfCourse.map((topic, index) => {
        if (index !== elementIndex) {
          return { ...topic, isActive: false };
        }
        return { ...topic, isActive: true };
      });
    }
    setTopics([...updatedTopics]);
  };

  let topicsOfCourse;
  if (topics) {
    topicsOfCourse = topics.map((topic, index) => {
      return (
        <ChapterElement
          chapterName={topic.chapterName}
          topics={topic.topics}
          isActive={topic.isActive}
          elementIndex={index}
          onTopicClickHandler={expandAndCollapseHandler}
          key={topic.chapterName + '' + Math.floor(Math.random() * 10)}
        />
      );
    });
  }

  const featuresCardsData = [
    {
      heading: 'Enroll',
      description:
        'Get Enrolled in our Course & Start  Journey to become Ace in your Skill'
    },
    {
      heading: 'Learn',
      description: 'Learn with industry  epperts & in hand live projects'
    },
    {
      heading: 'Conquer',
      description: 'Apply for your desired jobs & get it like a cakewalk'
    }
  ];

  const faqData = [
    {
      question: 'What are the benefits of this course?',
      answer:
        'Future minds will help you to get internship & Placement post course completion. '
    },
    {
      question: 'What are the perquisite of this course?',
      answer: 'Basic knowledge of computer, Laptop/PC.'
    },
    {
      question: 'How could I get this course with EMI option?',
      answer:
        'With future minds, you can simply pay in instalments at checkout page.'
    }
  ];

  let levelSVG;
  if (course.courseLevel === 'Beginner') {
    levelSVG = (
      <svg
        className={styles.level_svg}
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          x1='1'
          y1='9.00006'
          x2='1'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='5'
          y1='5.00006'
          x2='5'
          y2='11.0001'
          stroke='#D9E8FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='9'
          y1='1.00006'
          x2='9'
          y2='11.0001'
          stroke='#D9E8FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    );
  } else if (course.courseLevel === 'Intermediate') {
    levelSVG = (
      <svg
        className={styles.level_svg}
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          x1='1'
          y1='9.00006'
          x2='1'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='5'
          y1='5.00006'
          x2='5'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='9'
          y1='1.00006'
          x2='9'
          y2='11.0001'
          stroke='#D9E8FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    );
  } else {
    levelSVG = (
      <svg
        className={styles.level_svg}
        width='10'
        height='12'
        viewBox='0 0 10 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          x1='1'
          y1='9.00006'
          x2='1'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='5'
          y1='5.00006'
          x2='5'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='9'
          y1='1.00006'
          x2='9'
          y2='11.0001'
          stroke='#1271FF'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  const FAQS = faqData.map((faq) => {
    return (
      <FAQElement
        key={faq.question}
        question={faq.question}
        answer={faq.answer}
      />
    );
  });

  return (
    <section className={styles.course_description_main_section}>
      <section className={styles.course_description_section}>
        <div className={styles.course_description_main}>
          <h1 className={styles.course_main_heading}>{course.courseName}</h1>
          <div className={styles.course_details_wrapper}>
            <div className={styles.course_level}>
              {levelSVG} {course.courseLevel}
            </div>
            <div className={styles.course_duration}>
              <strong>{course.courseDuration}</strong> months
            </div>
            <div className={styles.course_type}>
              <strong>Live</strong> Classes
            </div>
          </div>
          <div className={styles.course_details_wrapper}>
            <Link href={course.paymentGateway}>
              <a
                className={styles.enroll_now_btn}
                title='Enroll Button'
                aria-label='Enroll Button'
              >
                Enroll Now
              </a>
            </Link>
            <p className={styles.course_starting_desp}>Starting New Batches</p>
          </div>
          <img
            src='/images/course_description.png'
            alt='course description image'
            className={styles.course_description_image}
          />
        </div>
        <div className={styles.features_container}>
          <h2 className={styles.features_heading}>
            3 Easy Steps to Achieve Your Dream Career
          </h2>
          <Features cards={featuresCardsData} />
        </div>
        <div className={styles.course_description_container}>
          <div className={styles.flex_column}>
            <div className={styles.course_description_wrapper}>
              <h2 className={styles.course_section_heading}>
                Course <span>Description</span>
              </h2>
              <p className={styles.course_description}>{course.description}</p>
            </div>
            <div className={styles.course_chapter_wrapper}>
              <h2 className={styles.course_section_heading}>
                Course <span>Curriculum</span>
              </h2>
              {topicsOfCourse}
            </div>
          </div>
          <div className={styles.course_payment_card}>
            <img
              src={course.courseImage}
              alt={course.courseName}
              className={styles.course_thumbnail}
            />
            <div className={styles.course_price_wrapper}>
              <h2 className={styles.course_price}>₹ {course.coursePrice}</h2>
              <p className={styles.discount_offer}>incl. GST</p>
            </div>
            <div className={styles.payment_card_detail_container}>
              <p className={styles.payment_card_detail}>
                <strong>Instructor: </strong>
                {course.courseBy.instructorName}
              </p>
              <p className={styles.payment_card_detail}>
                <strong>Duration: </strong>
                {course.courseDuration} months
              </p>
              <p className={styles.payment_card_detail}>
                <strong>Language: </strong>
                English/Hindi
              </p>
              <Link href={course.paymentGateway}>
                <a
                  className={styles.enroll_now_btn}
                  title='Enroll Button'
                  aria-label='Enroll Button'
                >
                  Enroll Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Highlights />
      <section className={styles.course_description_section}>
        <div className={styles.course_description_faq_container}>
          <h2 className={styles.course_description_faq_heading}>
            Frequently Asked Questions
          </h2>
          {FAQS}
        </div>
      </section>
    </section>
  );
};

export default CourseDescription;
