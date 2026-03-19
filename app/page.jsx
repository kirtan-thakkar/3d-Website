import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-screen"></div>
      <div className="h-screen bg-red-500"></div>
      <div className="h-screen bg-red-500"></div>
    </div>
  );
}
