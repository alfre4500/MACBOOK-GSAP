import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import MacbookModel14 from "../Macbook-14.jsx";
import MacbookModel16 from "../Macbook-16.jsx";


const ModelSwitcher = ({scale , isMobile}) => {
 
 const smallMacbookReF = useRef();
 const largeMacbookReF = useRef();

 const showlargeMacbook = scale === 0.08 || scale === 0.05;

 const ControlsConfig = {
    snap:true,
    speed: 1 ,
    zoom: 1,
  azimuth : [-Infinity, Infinity],
 }
    return(
    
    <>
    <PresentationControls {...ControlsConfig}>
        <group ref={largeMacbookReF}>
            <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
    </PresentationControls  >
    {/* <PresentationControls {...ControlsConfig}>
        <group ref={smallMacbookReF}>
            <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
    </PresentationControls> */}
    
    </>
 )
}
export default ModelSwitcher;