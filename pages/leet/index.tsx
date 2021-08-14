import Head from 'next/head';

import LandingNavbar from '../../components/LayoutComponents/LandingNavbar/LandingNavbar';
import Footer from '../../components/LayoutComponents/Footer/Footer';

import UnderConstruction from '../../components/LayoutComponents/UnderConstruction/UnderConstruction';

import styles from '../../styles/index.module.scss';

const Leet = () => {
  return (
    <>
      <Head>
        <title>LEET by Future Minds</title>
        <meta
          name='description'
          content='Futureminds is an incubated startup by DESU, Shakarpur campus, Govt. Of NCT of Delhi. An organisation which are imparting education through innovation by upskilling the student and prepare student to get employed and succees in their workplace, through edcational courses on affordable prices and few  specialized courses which will be availabe free of cost to DESU students and faculty.'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingNavbar />
      <main className={styles.page_main}>
        <UnderConstruction />
      </main>
      <Footer />
    </>
  );
};

export default Leet;
