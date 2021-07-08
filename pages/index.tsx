import Features from '../components/LandingPage/Features/Features';
import Highlights from '../components/LandingPage/Highlights/Highlights';
import MainBanner from '../components/LandingPage/MainBanner/MainBanner';
import Newsletter from '../components/LandingPage/Newsletter/Newsletter';
import StepDegree2 from '../components/LandingPage/StepDegree2/StepDegree2';

const Home = () => {
  return (
    <>
      <MainBanner />
      <Features />
      <Highlights />
      <StepDegree2 />
      <Newsletter />
    </>
  );
};

export default Home;
