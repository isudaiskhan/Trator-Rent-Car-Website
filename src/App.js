import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Servicess from './Components/Pages/Servicess/servicess';
import Form from './Components/Pages/Form/Form';
import AboutCars from './Components/Pages/AboutCars/AboutCars';
import Vehicles from './Components/Pages/Vehicles/Vehicles';
import OurClients from './Components/Pages/OurClients/OurClients';


function App() {
  return (
    <>

   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutCars" element={<AboutCars/>} />
          <Route path="/servicess" element={<Servicess/>} />
          <Route path="/vehicles" element={<Vehicles/>} />
          <Route path="/ourclients" element={<OurClients/>} />
          <Route path="/form" element={<Form/>} />
   </Routes>
    

    </>
  );
}

export default App;