import React from 'react';
import greySeaImage from '../../assets/images/index-img/new arrival/grey_sea.jpeg';
import './MissionBanner.css';

const MissionBanner = () => (
  <section className="learn_more">
    <div className="containers">
      <img src={greySeaImage} alt="grey sea" />
      <h3>We're on a Mission To Clean Up the Industry</h3>
      <h6>Read about our progress in our latest Impact Report.</h6>
      <button className="btn">Learn More</button>
    </div>
  </section>
);

export default MissionBanner;
