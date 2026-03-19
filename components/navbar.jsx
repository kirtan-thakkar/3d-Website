"use client";
import { Link } from "next-view-transitions";
import Container from "./Container";
import {
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const [hovered, setHovered] = useState(null);
  const { scrollY } = useScroll();
  const [scroled, setScroled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page Scroll value : ", latest);
    if (latest > 10) {
      setScroled(true);
    } else {
      setScroled(false);
    }
  });

  return (
    <div>
      <Container>
        <motion.nav
          className="fixed inset-x-0 top-0 z-10 mx-auto flex w-full max-w-4xl items-center justify-between p-4 px-6 backdrop-blur-sm transition-shadow duration-100 ease-in-out"
          animate={{
            boxShadow: scroled ? "var(--shadow-aceternity)" : "none",
            width: scroled ? "50%" : "100%",
            borderRadius: scroled ? "30px" : "0px",
            y: scroled ? 10 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <Link href="/">Logo</Link>
          <LayoutGroup>
            <div className="relative flex items-center justify-center gap-10">
              {navItems.map((item, index) => (
                <Link
                  className="relative px-1 py-1"
                  key={index}
                  href={item.href}
                  onMouseEnter={() => {
                    setHovered(index);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                  }}
                >
                  {hovered === index && (
                    <motion.span
                      // LayoutID animation isn't working when the element is conditionally rendered!
                      layoutId="hovered-span"
                      className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                    />
                  )}
                  <span className="relative z-10">{item.title}</span>
                </Link>
              ))}
            </div>
          </LayoutGroup>
        </motion.nav>
      </Container>
    </div>
  );
};
export default Navbar;
