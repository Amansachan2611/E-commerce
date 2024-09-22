import React from 'react';
import './Offers.css';
import girl1 from '../../assets/images/index-img/1.png';
import girl2 from '../../assets/images/index-img/2.png';
import girl3 from '../../assets/images/index-img/3.png';
import girl4 from '../../assets/images/index-img/4.png';
// import girl5 from '../../assets/images/index-img/ethan-haddox-QHGcADeeT00-unsplash.jpg';


const Seal = () => {
  return (
    <section className="seal">
     
      {/* <p className="para-of-offer">Inspired by influencer</p> */}
      <div className="index-grid-img-3">
        <a href="products.html">
          <img src={girl1} alt="Style 1" />
        </a>
        <a href="products.html">
          <img src={girl2} alt="Style 2" />
        </a>
        <a href="products.html">
          <img src={girl3} alt="Style 3" />
        </a>
        <a href="products.html">
          <img src={girl4} alt="Style 4" />
        </a>
      </div>
    </section>
  );
};

export default Seal;

