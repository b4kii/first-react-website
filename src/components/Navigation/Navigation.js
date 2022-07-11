import React from 'react';
import { useState } from 'react';

import Overlay from './Overlay';
import HamburgerButton from './HamburgerButton';
import CrossButton from './CrossButton';
import ScrollTop from './ScrollTop';

import styles from '../../styles/Navigation.module.css';

export default function Navbar() {
  const [isDropped, setIsDropped] = useState(false);

  const setTransition = () => {
    if (isDropped) {
      document.getElementById('menu').style.height = '0';
      setIsDropped(false);
    } else {
      document.getElementById('menu').style.height = '100vh';
      setIsDropped(true);
    }
  };

  //TODO: Add LOGO on the left side
  return (
    <nav>
      <h1 className={styles.logo}>LOGO</h1>
      <Overlay hideOverlay={setTransition} />
      <div className={styles['button-wrapper']}>
        {isDropped ? (
          <CrossButton buttonClick={setTransition} condition={isDropped} />
        ) : (
          <HamburgerButton buttonClick={setTransition} />
        )}
      </div>
      <ScrollTop />
    </nav>
  );
}
