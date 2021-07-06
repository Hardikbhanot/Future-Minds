
import styles from './Highlights.module.scss';

const Highlights = () => {
  let cardbg = [styles.main, styles.main2].join(' ');
  return (

    <div className={styles.highlights_section}>
      <h1 className={styles.Heading}>Highlights</h1>
      <div className={styles.card_container}>
        <div className={styles.main}>
          <div className={styles.card}>
            <div className={styles.card_heading}>
              <p className={styles.card_percentage}><strong>0%</strong></p>
              <p className={styles.card_text}>Interest<br /> on<br /> EMI<br /></p>
            </div>
            <p className={styles.card_list}><ul>
              <li>20% Course value as your Commission </li>
              <li>10% OFF for your friend who purchase it</li>
            </ul></p>
            <p className={styles.card_bottom_para}>All major banks Debit & Credit Cards</p>
            <p className={styles.card_bottom_corner}>T&C Apply</p>
          </div>
        </div>

        <div className={cardbg}>
          <div className={styles.card}>
            <div className={styles.card_heading2}>
              <p className={styles.card_hundered}><strong>100%</strong></p>
              <p className={styles.card_text}>Refund<br /> Policy</p>
            </div>
            <div className={styles.card_list2}>
              <ul>
                <li>Guaranteed  Internship</li>
                <li>Job Assistant/ Guranteed Internship</li>
              </ul>
            </div>
            <p className={styles.card_bottom_para}>Get early access to our premium Job Portal</p>
            <p className={styles.card_bottom_corner}>T&C Apply</p>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.card}>
            <div className={styles.card_heading}>
              <p className={styles.card_refer}><strong>Refer & Get Free Course </strong></p>
            </div>
            <div className={styles.card_list}>
              <ul>
                <li>20% Course value as your Commission </li>
                <li>10% OFF for your friend who purchase it</li>
              </ul>
            </div>
            <p className={styles.card_bottom_para}>Become Our Student Partner</p>
            <p className={styles.card_bottom_corner}>T&C Apply</p>
          </div>
        </div>
      </div>
    </div>



  );
};


export default Highlights;