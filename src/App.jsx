import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/all";
import Showcase from "./components/models/three/Showcase";
import Performance from "./components/models/three/Performance";
import Features from "./components/models/three/Features";
import Highlights from "./components/models/three/Highlights";
import Footer from "./components/models/three/Footer";



gsap.registerPlugin(ScrollTrigger);

const App  = () => {

    return(
   <main>
    <NavBar />
    <Hero/>
    <ProductViewer/> 
     <Showcase/>
    <Performance/>
    <Features/>
    <Highlights/> 
     <Footer/>
   </main>
    )
}
export default App;