import { Fragment, ReactNode } from 'react';
import Head from 'next/head';

import styles from './Layout.module.scss';
import Navbar from '../LayoutComponents/Navbar/Navbar';
import Footer from '../LayoutComponents/Footer/Footer';

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  return (
    <Fragment>
      <Head>
        <title>Future Minds – Imparting Education through Innovation</title>
        <meta
          name='description'
          content='... websites in every aspects like certification, providing guaranteed internship opportunities and many more. I am going to recommend FutureMinds for sure!'
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

      {/* <Navbar /> */}
      <main className={styles.page_main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
