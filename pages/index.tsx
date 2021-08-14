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
        <title>Future Minds – Imparting Education through Innovation</title>
        <meta
          name='description'
          content='Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!'
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
