import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_main_content}>
        <div className={styles.discription_card_container}>
          <h2 className={styles.main_heading}>Future Minds</h2>
          <p className={styles.main_discription}>
            Working to bring significant changes in online-based learning by
            doing extensive research for course curriculum preparation, student
            engagements, and looking forward to the flexible education!
          </p>
        </div>
        <div className={styles.card_container}>
          <h3 className={styles.sub_heading}>Explore</h3>
          <ul className={styles.links_list}>
            <li>
              <Link href='/'>Courses</Link>
            </li>
            <li>
              <Link href='/'>Free Courses</Link>
            </li>
            <li>
              <Link href='/'>Boot Camps</Link>
            </li>
          </ul>
        </div>
        <div className={styles.card_container}>
          <h3 className={styles.sub_heading}>Resources</h3>
          <ul className={styles.links_list}>
            <li>
              <Link href='/'>Courses</Link>
            </li>
            <li>
              <Link href='/'>Instructor Registration</Link>
            </li>
            <li>
              <Link href='/'>Student Registration</Link>
            </li>
            <li>
              <Link href='/'>Reset Password</Link>
            </li>
            <li>
              <Link href='/'>Sucess Story</Link>
            </li>
          </ul>
        </div>
        <div className={styles.card_container}>
          <h3 className={styles.sub_heading}>Address</h3>
          <ul className={styles.links_list}>
            <li>
              <Link href='/'>New Delhi, India</Link>
            </li>
            <li>
              <Link href='/'>+9185953 67753</Link>
            </li>
            <li>
              <Link href='/'>info@futureminds.in</Link>
            </li>
            <ul className={styles.social_media_links_container}>
              <li>
                <Link href='/'>Twitter</Link>
              </li>
              <li>
                <Link href='/'>Facebook</Link>
              </li>
              <li>
                <Link href='/'>Insta</Link>
              </li>
              <li>
                <Link href='/'>Linkedin</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={styles.all_rights_reserved_container}>
        <p className={styles.all_rights_reserved}>
          ©2021 Futureminds. All right reserved.
        </p>
        <div className={styles.all_rights_reserved_links}>
          <Link href='https://futureminds.in/privacy-policy/'>
            Privacy Policy
          </Link>
          <Link href='https://futureminds.in/terms-conditions/'>
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className={styles.vertical_line_container}>
        <span className={styles.vertical_line}></span>
      </div>
    </footer>
  );
};

export default Footer;
