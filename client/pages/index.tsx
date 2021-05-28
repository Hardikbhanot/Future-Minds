import Banner from '../components/LandingPage/Banner/Banner';
import BannerCards from '../components/LandingPage/BannerCards/BannerCards';

const Home = () => {
  return (
    <>
      <Banner />
      <BannerCards noOfCards={3} />
    </>
  );
};

export default Home;
