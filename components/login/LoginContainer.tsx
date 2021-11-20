import styles from './Login.module.scss';
import Link from 'next/link';
import GoogleLoginComponent from './GoogleLogin';
function Submit(){
  alert("You are Successfully logged in!")
}
const LoginContainer = () => {
  return (
    <section className={styles.login_section}>
        <div className={styles.left_component}>
        <img
            src='/images/login_page_character.png'
            alt='login page image'
            className={styles.login_character_image}
          />
          </div>
          <div className={styles.right_component}>
            <h2 className={styles.heading}>Welcome Back,</h2>
            <div className={styles.signin_buttons}>
              <div className={styles.g_signin}>
              <GoogleLoginComponent/>
              </div>
              <div className={styles.or}>
                <div className={styles.line_left}></div>
                <span>OR</span>
                <div className={styles.line_right}></div>
              </div>
            </div>
            <div className={styles.signin_form_container}>
              <form action="" className={styles.signin_form}>
                <input name="email_address" type="text" placeholder="Email Address" className={styles.signin_form_input} />
                <div className={styles.input_password}>
                <input name="password" type="password" placeholder="Password" className={styles.signin_form_input}/>
                {/* <i className="bi bi-eye"></i> */}
                </div>
                <Link href="/courses/">
              <button type="submit" onClick={Submit}  className={styles.form_submit}>Log In</button>
              </Link>
              {/* <p>Forgot Password</p> */}
              </form>
            </div>
          <p>Don't have an account?
            <span>
            <Link href="/courses/">
               Create New
            </Link>
            </span>
          </p>
          </div>
    </section>
  );
};

export default LoginContainer;
