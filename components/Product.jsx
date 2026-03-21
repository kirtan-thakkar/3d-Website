"use client";
import useMacbookStore from "@/app/store";
import { Box } from "@react-three/drei";
import { Canvas, } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import clsx from "clsx";
import Macbook14Model from "./models/Macbook-14";
const Product = () => {
  const {color,setColor,scale,setScale}= useMacbookStore();
  return (
    <section id="product-viewer">
      <h2>Take closer look</h2>
      <div className="controls">
        <p className="info">MacbookPro 16" in {color}</p>
        <div className="flex-center mt-5 gap-4">
          <div className="color-control">
            <div onClick={()=>setColor("#adb5d")} className={clsx("bg-neutral-300",color==="#adb5d" && "active")}></div>
            <div onClick={()=>setColor("#2e2c2e")} className={clsx("bg-neutral-900",color==="#2e2c2e" && "active")}></div>
          </div>
          <div className="size-control">
            <div onClick={()=>setScale(0.06)} className={clsx("bg-neutral-300",scale===0.06 ? "bg-white text-black" : "bg-transparent text-white")}>
              <p>14"</p>
            </div>
            <div onClick={()=>setScale(0.08)} className={clsx("bg-neutral-300",scale===0.08 ? "bg-white text-black" : "bg-transparent text-white")}>
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas id="canvas" camera={{ position:[0, 2, 5], fov:50 , near:0.1, far:100}}>
        <ambientLight intensity={1} />
        <Macbook14Model scale={0.06} position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </section>
  );
};
export default Product;
