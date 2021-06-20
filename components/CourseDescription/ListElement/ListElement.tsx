import styles from './ListElement.module.scss';

interface pageProps {
  heading: string;
  content: string[];
}

const ListElement = ({ heading, content }: pageProps) => {
  const listContent = content.map((content) => {
    return (
      <li key={content} className={styles.list_content_container}>
        <svg
          className={styles.list_svg}
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
        <p className={styles.list_content}>{content}</p>
      </li>
    );
  });

  return (
    <section className={styles.list_element_container}>
      <h3 className={styles.list_heading}>{heading}</h3>
      <ul className={styles.list_element_list}>{listContent}</ul>
    </section>
  );
};

export default ListElement;
