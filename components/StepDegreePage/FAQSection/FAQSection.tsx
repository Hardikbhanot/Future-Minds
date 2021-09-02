import FAQ from './FAQ/FAQ';

import styles from './FAQSection.module.scss';

const FAQSection = () => {
  const faqData = [
    {
      question: 'What is StepDegree Program?',
      answer: 'What is StepDegree Program?'
    },
    {
      question: 'Benefit of StepDegree',
      answer: 'Benefit of StepDegree'
    },
    {
      question: 'Partner of Program',
      answer: 'Partner of Program'
    },
    {
      question: 'What is StepDegree Program',
      answer: 'What is StepDegree Program'
    }
  ];

  return (
    <section className={styles.faq_section}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.btn_container}>
        <button className={[styles.btn, styles.active_btn].join(' ')}>
          StepDegree
        </button>
        <button className={styles.btn}>Carriculam</button>
        <button className={styles.btn}>Mentors</button>
        <button className={styles.btn}>Placement</button>
      </div>
      <div className={styles.faq_container}>
        {faqData.map((faq) => {
          return (
            <FAQ
              key={faq.question + Math.ceil(Math.random() * 5).toString()}
              question={faq.question}
              answer={faq.answer}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
