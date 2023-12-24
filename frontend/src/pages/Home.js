import NavbarComponent from "../components/Navbar";
import HeroSection from "../components/Hero-section";
import Benefits from "../components/Benefits";
import FooterPage from "../components/FooterPage";
const Home = () =>{
    return(
    <div>
         <NavbarComponent/>
      <HeroSection/>
    <Benefits/>
    <FooterPage/>
    </div>
     
    )
}

export default Home;