import styles from './Highlights.module.scss';

const Highlights = () => {
  const cardTopSecondaryBackground = [
    styles.card_top,
    styles.card_top_secondary_background
  ].join(' ');
  return (
    <section className={styles.highlight_section}>
      <div className={styles.highlight_container}>
        <h2 className={styles.highlight_heading}>Highlights</h2>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.card_main_container}>
                <h2 className={styles.main_percentage_0}>0%</h2>
                <p className={styles.main_text}>
                  Interest <br />
                  On EMI
                </p>
              </div>
              <ul className={styles.card_list_container}>
                <li className={styles.list_item}>Upto 3 Months EMI option</li>
                <li className={styles.list_item}>No Processing Fees</li>
              </ul>
            </div>
            <div className={styles.card_bottom}>
              <p className={styles.bottom_text}>
                All major banks Debit & Credit Cards
              </p>
              <p className={styles.t_c_para}>T&C Apply</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={cardTopSecondaryBackground}>
              <div className={styles.card_main_container}>
                <h2 className={styles.main_percentage_100}>100%</h2>
                <p className={styles.main_text}>
                  Refund <br />
                  Policy
                </p>
              </div>
              <ul className={styles.card_list_container}>
                <li className={styles.list_item}>Job Assistant</li>
                <li className={styles.list_item}>Guaranteed Internship</li>
              </ul>
            </div>
            <div className={styles.card_bottom}>
              <p className={styles.bottom_text}>
                Get early access to our premium Job Portal
              </p>
              <p className={styles.t_c_para}>T&C Apply</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.card_main_container}>
                <h2 className={styles.main_text_refer}>
                  Refer & Get Free Course
                </h2>
              </div>
              <ul className={styles.card_list_container}>
                <li className={styles.list_item}>
                  20% Course value as your Commission
                </li>
                <li className={styles.list_item}>
                  10% OFF for your friend who purchase it
                </li>
              </ul>
            </div>
            <div className={styles.card_bottom}>
              <p className={styles.bottom_text}>Become Our Student Partner</p>
              <p className={styles.t_c_para}>T&C Apply</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
