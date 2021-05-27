import Head from 'next/head';

import Navbar from '../components/layout/Navbar/Navbar';
import Banner from '../components/layout/LandingPage/Banner/Banner';
const Home = () => {
  return (
    <>
      <Head>
        <title>Future Minds - Imparting Education through Innvoation</title>
        <meta
          name='description'
          content='In the ever evolving world & fast growing competition, We equip you with the best skills to command you success.'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&family=Inter:wght@400;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <Navbar />
        <Banner />
      </main>
    </>
  );
};

export default Home;
