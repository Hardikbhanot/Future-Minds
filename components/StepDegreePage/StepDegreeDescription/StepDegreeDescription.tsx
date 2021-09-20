import styles from './StepDegreeDescription.module.scss';

const StepDegreeDescription = () => {
  return (
    <section className={styles.description_section}>
      <h3 className={styles.sub_heading}>And The Best Part is</h3>
      <div className={styles.description_container}>
        <div className={styles.currency_container}>
          <h1 className={styles.currency_symbol}>₹</h1>
          <h1 className={styles.zero}>0</h1>
        </div>
        <div className={styles.heading_container}>
          <h1 className={styles.heading}>
            Pay only after Job, <span className={styles.green_zero}>Zero</span>{' '}
            upfront fee.
          </h1>
          <p className={styles.description}>
            Futureminds assures you guaranteed placement after the completion of
            course with salary starting from Rs.6 lakh or more per year. You
            will pay 20% of your monthly income towards the Income Share
            Agreement (ISA), 36 months or until the full fees is recovered i.e.,
            3.60 Lakh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepDegreeDescription;
