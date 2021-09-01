import Head from 'next/head';

import LandingNavbar from '../../components/LayoutComponents/LandingNavbar/LandingNavbar';
import Footer from '../../components/LayoutComponents/Footer/Footer';

import MainBanner from '../../components/StepDegreePage/MainBanner/MainBanner';
import BenefitsBanner from '../../components/StepDegreePage/BenefitsBanner/BenefitsBanner';
import StepDegreeCourses from '../../components/StepDegreePage/StepDegreeCourses/StepDegreeCourses';

import styles from '../../styles/index.module.scss';

const StepDegree = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='FutureMinds is an incubated startup by DESU, Shakarpur campus, Govt. Of NCT of Delhi. An organisation which are imparting education through innovation by upskilling the student and prepare student to get employed and succees in their workplace, through edcational courses on affordable prices and few specialized courses which will be availabe free of cost to DESU students and faculty.'
        />
        <title>StepDegree by FutureMinds</title>
      </Head>
      <LandingNavbar />
      <main className={styles.page_main}>
        <MainBanner />
        <BenefitsBanner />
        <StepDegreeCourses />
      </main>
      <Footer />
    </>
  );
};

export default StepDegree;
