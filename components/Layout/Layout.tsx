import { ReactNode } from 'react';
import Head from 'next/head';

import styles from './Layout.module.scss';
import LandingNavbar from '../LayoutComponents/LandingNavbar/LandingNavbar';
import AcademyNavbar from '../LayoutComponents/AcademyNavbar/AcademyNavbar';
import Footer from '../LayoutComponents/Footer/Footer';

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  return (
    <>
      <Head>
        <title>Future Minds – Imparting Education through Innovation</title>
        <meta
          name='description'
          content='Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AcademyNavbar />
      <main className={styles.page_main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
