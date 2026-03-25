"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Product from "@/components/Product";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Showcase from "@/components/Showcase";
import PerformancePage from "@/components/Performance";
import Feature from "@/components/Features";
import HighlightPage from "@/components/Highlight";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Showcase />
      <PerformancePage   />
      <Feature />
      <HighlightPage />
      <Footer />
    </div>
  );
}
