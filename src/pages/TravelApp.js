import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
import SectionTwo from './components/travelappComp/SectionTwo';
import Title from './components/travelappComp/Title';
import Footer from './components/travelappComp/Footer';
import Navbar from './components/travelappComp/Navbar'
import Exploring from "./components/travelappComp/Exploring";
import '../index.css'

function TravelApp() {
  return (
    <div className='snap-y snap-mandatory scroll-smooth h-screen w-screen'>
      <Navbar/>
      <Title />
      <Exploring/>
      <SectionTwo />
      <Footer/>
    </div>
  );
}

export default TravelApp;
