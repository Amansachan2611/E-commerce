

import React from 'react';
import './StylesToSteal.css'; // Ensure to create and import the appropriate CSS file
import girl1 from '../../assets/images/index-img/girl1.png';
import girl2 from '../../assets/images/index-img/girl2.png';
import girl3 from '../../assets/images/index-img/girl3.png';
import girl4 from '../../assets/images/index-img/girl4.png';

const Seal = () => {
  return (
    <section className="seal">
      <h2 className="head-of-offer">Styles To Steal</h2>
      <br />
      <div className="index-grid-img-3">
        <a href="/products">
          <img src={girl1} alt="Style 1" />
        </a>
        <a href="/products">
          <img src={girl2} alt="Style 2" />
        </a>
        <a href="/products">
          <img src={girl3} alt="Style 3" />
        </a>
        <a href="/products">
          <img src={girl4} alt="Style 4" />
        </a>
      </div>
    </section>
  );
};

export default Seal;
