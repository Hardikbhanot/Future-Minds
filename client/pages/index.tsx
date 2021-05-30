import dynamic from 'next/dynamic';

import Banner from '../components/LandingPage/Banner/Banner';
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
      <Banner />
      <SecondaryBanner />
      <BottomBanner />
    </>
  );
};

export default Home;
