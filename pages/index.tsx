import Features from '../components/LandingPage/Features/Features';
import MainBanner from '../components/LandingPage/MainBanner/MainBanner';
import Highlights from '../components/LandingPage/Highlights/Highlights';
import Newsletter from '../components/LandingPage/Newsletter/Newsletter';
import StepDegree2 from '../components/LandingPage/StepDegree2/StepDegree2';
import CourseBanner from '../components/LandingPage/CourseBanner/CourseBanner';

const Home = () => {
  return (
    <>
      <MainBanner />
      <Features />
      <CourseBanner />
      <Highlights />
      <StepDegree2 />
      <Newsletter />
    </>
  );
};

export default Home;
