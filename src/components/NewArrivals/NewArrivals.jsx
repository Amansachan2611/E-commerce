import React from 'react';
import './NewArrivals.css';
import card1Image from '../../assets/images/index-img/new arrival/card1.webp';
import card2Image from '../../assets/images/index-img/new arrival/card2.webp';
import card3Image from '../../assets/images/index-img/new arrival/card3.avif';

const NewArrivals = () => (
  <section className="new_arrival">
    <div class="new_arrival_heading"><h2>Just Dropped</h2></div>

    <div className="Offer_container">
      <div className="card">
        <div className="box">
          <img src={card1Image} alt="Card 1" />
          <div className="content">
            <h3>New Collection</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <img src={card2Image} alt="Card 2" />
          <div className="content">
            <h3>New Arrival</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <img src={card3Image} alt="Card 3" />
          <div className="content">
            <h3>Hot Collection</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewArrivals;
