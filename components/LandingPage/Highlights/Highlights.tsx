
import styles from './Highlights.module.scss';

const Highlights = () => {
  return (

    <div className={styles.highlights_section}>
      <h1 className={styles.Heading}>Highlights</h1>
      <div className={styles.card_container}>
        <div className={styles.main}>
          <div className={styles.card}>
            <p className={styles.card_heading}>0% Interest on EMI</p>
            <p className={styles.card_list}>All major banks Debit & Credit Cards</p>
            <p className={styles.card_bottom_para}>Upto 3 Months EMI  option.No Proccessing Fees</p>
            <p className={styles.card_bottom_corner}>T&C Apply</p>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.card}>
            <p className={styles.card_heading}>0% Interest on EMI</p>
            <p className={styles.card_list}>All major banks Debit & Credit Cards</p>
            <p className={styles.card_bottom_para}>Upto 3 Months EMI  option.No Proccessing Fees</p>
            <p className={styles.card_bottom_corner}>T&C Apply</p>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.card}>
            <p className={styles.card_heading}>0% Interest on EMI</p>
            <p className={styles.card_list}>All major banks Debit & Credit Cards</p>
            <p className={styles.card_bottom_para}>Upto 3 Months EMI  option.No Proccessing Fees</p>
            <p className={styles.card_bottom_corner}>T&C Apply</p>
          </div>
        </div>
      </div>
    </div>



  );
};


export default Highlights;