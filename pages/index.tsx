import MainBanner from '../components/LandingPage/MainBanner/MainBanner';
import Features from '../components/LayoutComponents/Features/Features';
// import CourseBanner from '../components/LandingPage/CourseBanner/CourseBanner';
import Highlights from '../components/LandingPage/Highlights/Highlights';
import StepDegree from '../components/LandingPage/StepDegree/StepDegree';
import OtherFeatures from '../components/LandingPage/OtherFeatures/OtherFeatures';
import Newsletter from '../components/LandingPage/Newsletter/Newsletter';

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
      <MainBanner />
      <Features cards={featuresCardsData} />
      {/* <CourseBanner /> */}
      <Highlights />
      <StepDegree />
      <OtherFeatures />
      <Newsletter />
    </>
  );
};

export default Home;
