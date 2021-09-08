import { useState } from 'react';
import styles from './ChapterElement.module.scss';

interface pageProps {
  chapterName: string;
  topics: string[];
  isActive: boolean;
  elementIndex: number;
  onTopicClickHandler: (elementIndex: number, isActive: boolean) => void;
}

const ChapterElement = ({
  chapterName,
  topics,
  isActive,
  elementIndex,
  onTopicClickHandler
}: pageProps) => {
  const [showTopic, setShowTopic] = useState(isActive);

  const topicsOfCourse = topics.map((topic) => {
    return (
      <li
        key={topic + '' + Math.floor(Math.random() * 10)}
        className={styles.topic}
      >
        {topic}
      </li>
    );
  });
  let topicContainer: string = styles.topic_container;
  let topicSVG: string = styles.topic_svg;
  if (showTopic) {
    topicContainer = [styles.topic_container, styles.show_topic_container].join(
      ' '
    );
    topicSVG = [styles.topic_svg, styles.rotate180deg].join(' ');
  }

  return (
    <div className={styles.chapter_container}>
      <button
        className={styles.chapter_btn}
        type='button'
        name={'Chapter - ' + chapterName}
        onClick={() => onTopicClickHandler(elementIndex, isActive)}
      >
        <h3 className={styles.topic_name}>{chapterName}</h3>
        <svg
          className={topicSVG}
          width='27'
          height='15'
          viewBox='0 0 27 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.5 15L0.942631 0.75L26.0574 0.75L13.5 15Z'
            fill='#1271FF'
          />
        </svg>
      </button>
      <ul className={topicContainer}>{topicsOfCourse}</ul>
    </div>
  );
};

export default ChapterElement;
