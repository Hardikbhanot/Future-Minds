import Head from 'next/head';
import LandingNavbar from '../../components/LayoutComponents/LandingNavbar/LandingNavbar';
import Footer from '../../components/LayoutComponents/Footer/Footer';
import LoginContainer from '@/components/login/LoginContainer';
import styles from '../../styles/index.module.scss';

const Login = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='FutureMinds is an incubated startup by DESU, Shakarpur campus, Govt. Of NCT of Delhi. An organisation which are imparting education through innovation by upskilling the student and prepare student to get employed and succees in their workplace, through edcational courses on affordable prices and few specialized courses which will be availabe free of cost to DESU students and faculty.'
        />
        <title>Login | Signin</title>
      </Head>
      <LandingNavbar />
      <main className={styles.page_main}>
        {/* <UnderConstruction /> */}
        <LoginContainer/>
        
      </main>
      <Footer />
    </>
  );
};

export default Login;
