import { useState } from 'react';
import styles from './FAQ.module.scss';

interface pageProps {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: pageProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const onQuestionClickHandler = () => {
    setShowAnswer(!showAnswer);
  };

  let answerContainer: string = styles.answer_container;
  let questionSVG: string = styles.question_svg;
  if (showAnswer) {
    answerContainer = [
      styles.answer_container,
      styles.show_answer_container
    ].join(' ');
    questionSVG = [styles.question_svg, styles.display_negetaive].join(' ');
  }

  return (
    <div className={styles.faq_container}>
      <button
        className={styles.question_btn}
        type='button'
        name={'FAQs'}
        onClick={onQuestionClickHandler}
      >
        <h3 className={styles.question}>{question}</h3>
        <svg
          className={questionSVG}
          width='14'
          height='8'
          viewBox='0 0 14 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 1L7 6L1 1'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      </button>
      <ul className={answerContainer}>
        <li className={styles.answer}>{answer}</li>
      </ul>
    </div>
  );
};

export default FAQ;
