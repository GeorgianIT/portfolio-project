import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import SecondSection from "./components/SecondSection";
import Sidebar from "./components/Sidebar";
import ThirdSection from "./components/ThirdSection";
import Hobbies from "./components/Hobbies";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className=" scroll-smooth">
      <Sidebar />
      {/* First section */}
      <FirstSection />
      {/* <Contact/> */}
      {/* Second section */}
      <SecondSection />
      <Hobbies />
      {/* Third section */}
      <ThirdSection />
      {/* Footer */}
      <Footer/>
    
</div>
  );
}

export default App;
