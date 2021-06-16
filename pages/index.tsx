import dynamic from 'next/dynamic';

import MainBanner from '../components/LandingPage/MainBanner/MainBanner';
import CategoryBanner from '../components/LandingPage/CategoryBanner/CategoryBanner';
import ReviewBanner from '../components/LandingPage/ReviewsBanner/ReviewBanner';
import StepDegreeBanner from '../components/LandingPage/StepDegreeBanner/StepDegreeBanner';
import SecondaryBanner from '../components/LandingPage/SecondaryBanner/SecondaryBanner';

// Dynamic import with server site rendering(ssr) off,
// This is done to access the document object in bottom banner
const BottomBanner = dynamic(
  () => import('../components/LandingPage/BottomBanner/BottomBanner'),
  {
    ssr: false
  }
);

const Home = () => {
  return (
    <>
      <MainBanner />
      <SecondaryBanner />
      <StepDegreeBanner />
      <ReviewBanner />
      <CategoryBanner />
      <BottomBanner />
    </>
  );
};

export default Home;
