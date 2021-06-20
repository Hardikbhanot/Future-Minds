import { useState } from 'react';
import styles from './ChapterElement.module.scss';

interface pageProps {
  topicName: string;
  topics: string[];
}

const ChapterElement = ({ topicName, topics }: pageProps) => {
  const [showTopic, setShowTopic] = useState(false);

  const onTopicClickHandler = () => {
    setShowTopic(!showTopic);
  };

  const topicsOfCourse = topics.map((topic) => {
    return (
      <li key={topic} className={styles.topic}>
        <svg
          className={styles.topic_svg}
          width='22'
          height='10'
          viewBox='0 0 374 296'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M128.913 296L0.824341 167.754L51.8629 116.64L128.913 193.775L322.467 0L373.51 51.0969L128.913 296Z'
            fill='#E5434C'
          />
        </svg>
        <p className={styles.topic_content}>{topic}</p>
      </li>
    );
  });
  let topicContainer: string = styles.topic_container;
  if (showTopic) {
    topicContainer = [styles.topic_container, styles.show_topic_container].join(
      ' '
    );
  }

  return (
    <div className={styles.course_chapter}>
      <button
        className={styles.topic_btn}
        type='button'
        name='Chapter Name'
        onClick={onTopicClickHandler}
      >
        {topicName}
      </button>
      <ul className={topicContainer}>{topicsOfCourse}</ul>
    </div>
  );
};

export default ChapterElement;
