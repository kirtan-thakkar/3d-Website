import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import Macbook16Model from "../models/Macbook-16";
import Macbook14Model from "../models/Macbook-14";
const ModelSwitch = ({scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale ===0.08 || scale === 0.05;

    const controlsConfig={
        snap :true,
        zoom:1,
        speed:1,
        polar: [-Math.PI , Math.PI],
    }

    return (
       <>
       <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
            <Macbook16Model scale={isMobile ? 0.05 : 0.08}/>

        </group>
       </PresentationControls>
       {/* <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
            <Macbook14Model scale={isMobile ? 0.03 : 0.06}/>

        </group>
       </PresentationControls> */}
       </>
    )
}
export default ModelSwitch;