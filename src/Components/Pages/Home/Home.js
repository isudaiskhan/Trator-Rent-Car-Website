import React from 'react'
import About from "../../About/About";
import BestCars from "../../BestCars/BestCars";
import ChooseUs from "../../ChooseUs/ChooseUs";
import ClientsSay from "../../ClientsSay/ClientsSay";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import SearchCars from "../../SearchCars/SearchCars";
import Topbar from "../../Topbar/Topbar";
import Layout from '../../Layout/Layout';
import ScrollButton from '../../ScrollButton/ScrollButton';

const Home = () => {
  return (
    <>

    
     <Layout>
     <Topbar />
     <Hero />
     <About />
     <SearchCars />
     <BestCars />
     <ChooseUs />
     <ClientsSay />
     <Contact />
     <Footer />
     <ScrollButton />
     </Layout>
      
    </>
  )
}

export default Home