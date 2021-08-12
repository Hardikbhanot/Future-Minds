import styles from './UnderConstruction.module.scss';

const UnderConstruction = () => {
  return (
    <section className={styles.under_construction_section}>
      <h1 className={styles.under_construction_heading}>We're almost done!</h1>
      <h3 className={styles.under_construction_sub_heading}>
        Website is under construction
      </h3>

      <img
        src='/images/under_construction.png'
        alt='under construction'
        className={styles.under_construction_img}
      />
      <div className={styles.under_construction_blue_block}></div>
    </section>
  );
};

export default UnderConstruction;
