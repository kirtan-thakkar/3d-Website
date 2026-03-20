"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Product from "@/components/Product";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
}
