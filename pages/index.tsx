import MainBanner from '../components/LandingPage/MainBanner/MainBanner';
import Features from '../components/LandingPage/Features/Features';
import CourseBanner from '../components/LandingPage/CourseBanner/CourseBanner';
import Highlights from '../components/LandingPage/Highlights/Highlights';
import StepDegree from '../components/LandingPage/StepDegree/StepDegree';
import OtherFeatures from '../components/LandingPage/OtherFeatures/OtherFeatures';
import Newsletter from '../components/LandingPage/Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <MainBanner />
      <Features />
      {/* <CourseBanner /> */}
      <Highlights />
      <StepDegree />
      <OtherFeatures />
      <Newsletter />
    </>
  );
};

export default Home;
