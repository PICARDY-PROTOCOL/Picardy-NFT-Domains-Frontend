import React from 'react';
import Navbar from './Navbar';

import Footer from './Footer';
import styles from '../helper/style';

const Layout = ({ children }) => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      </div>
      <main className="flex-1">{children}</main>
      <div className="mt-8" />
      <Footer />
    </div>
  );
};

export default Layout;
