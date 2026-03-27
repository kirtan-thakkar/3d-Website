"use client";
import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import MacbookModel from "./models/Macbook";
import { useMediaQuery } from "react-responsive";
import { Html } from "@react-three/drei";
import useMacbookStore from "@/app/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const features = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "Email AI.",
    text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/feature-icon2.svg",
    highlight: "Image AI.",
    text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/feature-icon3.svg",
    highlight: "Summarize AI.",
    text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/feature-icon4.svg",
    highlight: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/feature-icon5.svg",
    highlight: "Writing Tool.",
    text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];
const featureSequence = [
  { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];
const ModelScroll = () => {
  const groupRef = useRef();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const { setTexture } = useMacbookStore();

  //preloading all the feature videos during component mount
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");
      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });
      v.load(); //starts fetching the video;
    });
  }, []);

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      },
    });

    //sync feature
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    //spin model
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    //content and texture sync
    timeline
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to('.box1', {
        opacity: 1,
        y: 0,
        delay: 1,
      })
      .call(() => setTexture("/videos/feature-2.mp4"))
      .to('.box2', {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-3.mp4"))
      .to('.box3', {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-4.mp4"))
      .to('.box4', {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-5.mp4"))
      .to('.box5', {
        opacity: 1,
        y: 0,
      });
  }, []);
  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-xl tracking-wide text-white  text-left">Loading...</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Feature = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>
      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.6} />
        <ModelScroll />
      </Canvas>
      <div className="absolute inset-0 z-50 pointer-events-none">
        {features.map((feature, index) => (
          <div
            key={index}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Feature;
