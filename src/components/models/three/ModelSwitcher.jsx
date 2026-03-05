import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import MacbookModel14 from "../Macbook-14.jsx";
import MacbookModel16 from "../Macbook-16.jsx";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OOFF_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;

  group.traverse((child) => {

    if (child.isMesh && child.material) {

      const materials = Array.isArray(child.material) 
        ? child.material 
        : [child.material];
      
      materials.forEach((mat) => {
        mat.transparent = true;
        gsap.to(mat, { opacity, duration: ANIMATION_DURATION });
      });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacbookReF = useRef();
  const largeMacbookReF = useRef();

  const showlargeMacbook = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showlargeMacbook) {
      moveGroup(smallMacbookReF.current, -OOFF_DISTANCE);
      moveGroup(largeMacbookReF.current, 0);

      fadeMeshes(smallMacbookReF.current, 0);
      fadeMeshes(largeMacbookReF.current, 1);
    } else {
      moveGroup(smallMacbookReF.current, 0);
      moveGroup(largeMacbookReF.current, OOFF_DISTANCE);

      fadeMeshes(smallMacbookReF.current, 1);
      fadeMeshes(largeMacbookReF.current, 0);
    }
  }, { dependencies: [scale] });

  const ControlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...ControlsConfig}>
        <group ref={largeMacbookReF}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls {...ControlsConfig}>
        <group ref={smallMacbookReF}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;