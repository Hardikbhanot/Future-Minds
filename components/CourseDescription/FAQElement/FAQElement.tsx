import { useState } from 'react';
import styles from './FAQElement.module.scss';

interface pageProps {
  question: string;
  answer: string;
}

const FAQElement = ({ question, answer }: pageProps) => {
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
        <svg
          className={questionSVG}
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line y1='7.5' x2='15' y2='7.5' stroke='black' strokeWidth='3' />
          <line
            x1='7.5'
            y1='8.74224e-08'
            x2='7.5'
            y2='15'
            stroke='black'
            strokeWidth='3'
          />
        </svg>
        <h3 className={styles.question}>{question}</h3>
      </button>
      <ul className={answerContainer}>
        <li className={styles.answer}>{answer}</li>
      </ul>
    </div>
  );
};

export default FAQElement;
