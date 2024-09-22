import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import FlashSale from '../../components/FlashSale/FlashSale';
import NewArrivals from '../../components/NewArrivals/NewArrivals.jsx';
import Offers from '../../components/Offers/Offers.jsx';
import StylesToSeal from '../../components/StylesToSeal/StylesToSeal.jsx';
import MissionBanner from '../../components/MissionBanner/MissionBanner.jsx';
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Layout>
      <HeroSection />
      <Offers/>
     
      <NewArrivals />
      <FlashSale />
      <StylesToSeal />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <MissionBanner />
      <Testimonial />
    </Layout>
  )
}

export default Home