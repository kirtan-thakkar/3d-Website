"use client";
import { Link } from "next-view-transitions";
import Image from "next/image";
import Container from "./Container";
import {
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const navItem = [
    { label: "Store" },
    { label: "Mac" },
    { label: "iphone" },
    { label: "Watch" },
    { label: "Vision" },
    { label: "Airpods" },
  ];
  return (
    <header>
      <nav>
        <Image src="logo.svg" alt="logo" width={30} height={30} />
        <ul>{navItem.map((item, index) => (
          <li key={item.label}>
            <a href={`#${item.label.toLowerCase()}`} className="text-white">{item.label}</a>
          </li>
        ))}</ul>
        <div className="flex-center gap-3">
          <button>
            <Image src="/search.svg" alt="search" width={20} height={20} />
          </button>
          <button>
            <Image src="/cart.svg" alt="cart" width={20} height={20} />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
