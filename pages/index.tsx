import Head from 'next/head';

import LandingNavbar from '../components/LayoutComponents/LandingNavbar/LandingNavbar';
import Footer from '../components/LayoutComponents/Footer/Footer';

import MainBanner from '../components/LandingPage/MainBanner/MainBanner';
import Features from '../components/LayoutComponents/Features/Features';
// import CourseBanner from '../components/LandingPage/CourseBanner/CourseBanner';
import Highlights from '../components/LandingPage/Highlights/Highlights';
import StepDegree from '../components/LandingPage/StepDegree/StepDegree';
import OtherFeatures from '../components/LandingPage/OtherFeatures/OtherFeatures';
import Newsletter from '../components/LandingPage/Newsletter/Newsletter';

import styles from '../styles/index.module.scss';

const Home = () => {
  const featuresCardsData = [
    {
      heading: 'Live Classes',
      description:
        'Better learning and Understanding through live interactions with experts.'
    },
    {
      heading: 'Expert Mentors',
      description:
        'Learn from renowned subject expert Corporate Stalwarts & Academicians.'
    },
    {
      heading: 'Career Gateway',
      description:
        'Hands on experience through assured Internships and get Job opportunities'
    }
  ];

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!'
        />
        <title>FutureMinds – Imparting Education through Innovation</title>
      </Head>

      <LandingNavbar />
      <main className={styles.page_main}>
        <MainBanner />
        <Features cards={featuresCardsData} />
        {/* <CourseBanner /> */}
        <Highlights />
        <StepDegree />
        <OtherFeatures />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
