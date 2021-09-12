import FAQ from './FAQ/FAQ';

import styles from './FAQSection.module.scss';

const FAQSection = () => {
  const faqData = [
    {
      question: 'What is StepDegree?',
      answer:
        "StepDegree offered by FutureMinds is an income share agreement (ISA). In which, FutureMinds offer courses (in online mode) and grantees job placement, in return for a portion of the money earned once the individual is placed. The proportion and length of payment are determined by the individual's course and the job offer."
    },
    {
      question: 'How StepDegree Works?',
      answer:
        'Our financial partner will authorise a 0% interest capital equal to your fees after your successful registration. Now, after completing your 6-month training, you will be successfully placed at a minimum package of 6.0 LPA. Following your placement, you will be required to pay 20% of your monthly salary for 36 months or until the whole fees, i.e. 3.60 lakh, is collected. Your ISA will automatically terminate after you reach the 3.60 lac target, and you will obtain your NOC. If your annual income falls below 6.0 LPA, your ISA will be paused.'
    },
    {
      question: 'What happen if I withdraw from StepDegree?',
      answer:
        "If you decide that FutureMinds isn't for you or that you can't keep up with the terms of the agreement, you can cancel within the first month without penalty. However, if you wish to leave after 2-3 months, you would be required to pay FutureMinds Rs. 50,000. If you withdraw after four months, you must pay the whole amount of your ISA."
    },
    {
      question: "What happens if I'm not placed?",
      answer:
        'If you are not able to get placed after graduating from FutureMinds upto 1 year then your ISA will automatically be terminated and no amount will be charged from you.'
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
