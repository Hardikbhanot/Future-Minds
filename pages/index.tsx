import MainBanner from '../components/LandingPage/MainBanner/MainBanner';
import Features from '../components/LandingPage/Features/Features';
import CourseBanner from '../components/LandingPage/CourseBanner/CourseBanner';
import Highlights from '../components/LandingPage/Highlights/Highlights';
import StepDegree from '../components/LandingPage/StepDegree/StepDegree';
import StepDegree2 from '../components/LandingPage/StepDegree2/StepDegree2';
import Newsletter from '../components/LandingPage/Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <MainBanner />
      <Features />
      {/* <CourseBanner /> */}
      <Highlights />
      {/* <StepDegree /> */}
      <StepDegree2 />
      <Newsletter />
    </>
  );
};

export default Home;
