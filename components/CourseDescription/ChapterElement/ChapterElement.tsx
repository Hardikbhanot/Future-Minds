import styles from './ChapterElement.module.scss';

interface pageProps {
  topicName: string;
  topics: string[];
}

const ChapterElement = ({ topicName, topics }: pageProps) => {
  const topicsOfCourse = topics.map((topic) => {
    return <li key={topic}>{topic}</li>;
  });

  return (
    <div>
      <button className={styles.topic_btn} type='button' name='Chapter Name'>
        {topicName}
      </button>
      <ul>{topicsOfCourse}</ul>
    </div>
  );
};

export default ChapterElement;
