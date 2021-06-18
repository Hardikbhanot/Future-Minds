import styles from './ListElement.module.scss';

interface pageProps {
  heading: string;
  content: string[];
}

const ListElement = ({ heading, content }: pageProps) => {
  const listContent = content.map((content) => {
    return (
      <li key={content} className={styles.list_content}>
        {content}
      </li>
    );
  });

  return (
    <section className={styles.list_element_container}>
      <h3>{heading}</h3>
      <ul>{listContent}</ul>
    </section>
  );
};

export default ListElement;
