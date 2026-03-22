"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Product from "@/components/Product";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
}
