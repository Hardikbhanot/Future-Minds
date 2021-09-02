import styles from './StepDegreeDescription.module.scss';

const StepDegreeDescription = () => {
  return (
    <section className={styles.description_section}>
      <h3 className={styles.sub_heading}>And Best Part is</h3>
      <div className={styles.description_container}>
        <div className={styles.currency_container}>
          <h1 className={styles.currency_symbol}>₹</h1>
          <h1 className={styles.zero}>0</h1>
        </div>
        <div className={styles.heading_container}>
          <h1 className={styles.heading}>
            Pay only after Job, <span className={styles.green_zero}>Zero</span>{' '}
            upfront fee
          </h1>
          <p className={styles.description}>
            You pay no fees while studying at Masai School. Only once you
            complete the course, get placed and start earning Rs. 5 lakh or more
            per year, you will pay 15% of your monthly income towards the Income
            Share Agreement (ISA) for a maximum of 3 years or until you have
            paid Rs 3 lakhs (including GST).
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepDegreeDescription;
