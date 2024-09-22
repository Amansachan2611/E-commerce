// src/components/TestimonialSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css'; // Import the CSS file here

const testimonials = [
  {
    imgSrc: 'https://farsighttechnologies.com/wp-content/uploads/2020/09/AC.jpg',
    heading: 'A wonderful, user-friendly HR solution! Farsight HR Solution helped us implement ESS (Employee Self Service) portal for our large enterprise...',
    clientName: 'Vice President',
    clientDesc: 'CPF India',
  },
  {
    imgSrc: 'https://farsighttechnologies.com/wp-content/uploads/2020/09/MS.jpg',
    heading: 'For us, Farsight has become much more than a software solution provider...',
    clientName: 'Head IT',
    clientDesc: 'Mushahi Auto Parts',
  },
  {
    imgSrc: 'https://farsighttechnologies.com/wp-content/uploads/2020/09/RR.jpg',
    heading: 'I would like to place on record my sincere appreciation for helping us to automate the Salary Revision Exercise...',
    clientName: 'Vice President – India HR Services',
    clientDesc: 'Schneider Electric',
  },
  {
    imgSrc: 'https://farsighttechnologies.com/wp-content/uploads/2020/12/testimonial.png',
    heading: 'With Farsight’s Employee Self Service Portal, our Vision of implementing an HR Software in Honda R&D (India) could be realized...',
    clientName: 'General Manager – Administration Head',
    clientDesc: 'Honda R&D (India) Pvt. Ltd.',
  },
];

const TestimonialSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: true,
    // prevArrow: <button className="slick-prev" />,
    // nextArrow: <button className="slick-next" />,
  };

  return (

    <div className="sd_master_wrapper">
      <div className="heading_testimonal">
        <h1>What our Customer say about us !</h1>
      </div>
      <div className="sdtestBg2"></div>
      <div className="sdtestBg3"></div>
      <Slider {...settings} className="slideshow">
        {testimonials.map((testimonial, index) => (
          <div className="content" key={index}>
            <div className="thumbnail">
              <img src={testimonial.imgSrc} alt={`Testimonial ${index + 1}`} />
            </div>
            <div className="btnNtxt">
              <div className="sdAllContent">
                <div className="sd_scroll">
                  <h1 className="sdCustomSliderHeadig">{testimonial.heading}</h1>
                </div>
                <p className="SdClientName">{testimonial.clientName}</p>
                <p className="SdClientDesc">{testimonial.clientDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="spacer"></div>
    </div>
  );
};

export default TestimonialSlider;
