import React from 'react';
import Slider from '../Components/Slider/Slider';
import { About } from '../Components/About/About';
import { PortfolioCard } from '../Components/PortfolioCard/PortfolioCard';
import Layout from '../Hoc/Layout';

export const Home = props => {
  return (
   <Layout source='index'>
     <Slider />
     <About />
     <PortfolioCard />
   </Layout>
  )
}

export default Home;
