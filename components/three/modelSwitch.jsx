import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import Macbook16Model from "../models/Macbook-16";
import Macbook14Model from "../models/Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1; // Duration of the animation in seconds
const OFFSET_DISTANCE = 5; // Distance to offset the models during the animation

const fadeMeshes = (group, opacity) => {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION,
    ease: "power2.inOut",
  });
};

const ModelSwitch = ({ scale, isMobile }) => {
  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;

  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();

  const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || SCALE_LARGE_MOBILE;

  const controlsConfig = {
    snap: true,
    zoom: 1,
    speed: 1,
    polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity], //slide as much as you want horizontally
    config: { mass: 1, tension: 0, friction: 26 }, // trys to replicate the feel of a physical object like real world
  };

  useGSAP(() => {
    if (showLargeMacbook) {
        moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
        moveGroup(largeMacbookRef.current, 0);

        fadeMeshes(smallMacbookRef.current, 0);
        fadeMeshes(largeMacbookRef.current, 1);
    }else{
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);

    }
  }, [scale]); // runs when something i.e. sclae here ; in the dependency array changes

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <Macbook16Model scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      { <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
            <Macbook14Model scale={isMobile ? 0.03 : 0.06}/>

        </group>
       </PresentationControls> }
    </>
  );
};
export default ModelSwitch;
