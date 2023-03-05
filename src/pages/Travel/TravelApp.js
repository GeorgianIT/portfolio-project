import Title from './travelappComp/Title'
import Footer from './travelappComp/Footer';
import Navbar from './travelappComp/Navbar'
import Exploring from "./travelappComp/Exploring";
// import './index.css'
import ThirdSection from "./travelappComp/ThirdSection";
import BackButton from '../BackButton';


function TravelApp() {
  return (
    <div className='snap-y snap-mandatory scroll-smooth h-screen w-screen'>
      <BackButton/>
      <Navbar/>
      <Title />
      <Exploring/>
      <ThirdSection/>
      <Footer />
    </div>
  );
}

export default TravelApp;
