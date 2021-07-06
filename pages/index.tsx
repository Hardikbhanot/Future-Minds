import Features from '../components/LandingPage/Features/Features';
import Highlights from '../components/LandingPage/Highlights/Highlights';
import MainBanner from '../components/LandingPage/MainBanner/MainBanner';
import Newsletter from '../components/LandingPage/Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <MainBanner />
      <Features />
      {/* <Highlights /> */}
      <Newsletter />
    </>
  );
};

export default Home;
