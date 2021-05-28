import { Fragment, ReactNode } from 'react';

import styles from './Layout.module.scss';
import Navbar from '../LayoutComponents/Navbar/Navbar';
import Footer from '../LayoutComponents/Footer/Footer';

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  return (
    <Fragment>
      <Navbar />
      <main className={styles.page}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
