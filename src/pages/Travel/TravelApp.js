import Title from './travelappComp/Title'
import Footer from './travelappComp/Footer';
import Navbar from './travelappComp/Navbar'
import Exploring from "./travelappComp/Exploring";
// import './index.css'
import ThirdSection from "./travelappComp/ThirdSection";


function TravelApp() {
  return (
    <div className='snap-y snap-mandatory scroll-smooth h-screen w-screen'>
      <Navbar/>
      <Title />
      <Exploring/>
      <ThirdSection/>
      <Footer />
    </div>
  );
}

export default TravelApp;
