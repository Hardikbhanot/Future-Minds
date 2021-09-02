import styles from './HowToApply.module.scss';

const HowToApply = () => {
  return (
    <section className={styles.how_to_apply_section}>
      <h1 className={styles.heading}>Know How to Apply</h1>
      <ul className={styles.steps_container}>
        <li className={styles.steps_wrapper}>
          <h2 className={styles.steps_counter}>1</h2>
          <p className={styles.steps}>Register for the Course</p>
        </li>
        <li className={styles.steps_wrapper}>
          <h2 className={styles.steps_counter}>2</h2>
          <p className={styles.steps}>
            Get Free Consultation <br />
            from our Experts
          </p>
        </li>
        <li className={styles.steps_wrapper}>
          <h2 className={styles.steps_counter}>3</h2>
          <p className={styles.steps}>Complete Proccess</p>
        </li>
      </ul>
    </section>
  );
};

export default HowToApply;
