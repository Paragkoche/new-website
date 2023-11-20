"use client";

import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import Link from "next/link";
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownMenu } from "@/src/utils/anim";
import { links } from "./db";
import NavBg from "./svg/NavBg";
import Image from "next/image";

const menuImg =
  "https://images.unsplash.com/photo-1601925165391-e5d6552a4e20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 820 });

  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const menuButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const dropdownClose = (e: any) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !menuButtonRef.current?.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", dropdownClose);

    return () => {
      document.removeEventListener("mousedown", dropdownClose);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const disableScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollY || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  useEffect(() => {
    if (isMenuOpen) {
      disableScroll();
    } else {
      window.onscroll = function () {};
    }
  }, [isMenuOpen]);

  return (
    <header id="header">
      {isMobile ? (
        <>
          <div className={`mobile-header ${isScrolled ? "scrollDown" : ""}`}>
            <Link href="/">
              <Logo />
            </Link>
            <Link href="/">WebStack</Link>
            <button
              className={isMenuOpen ? "open" : ""}
              type="button"
              onClick={menuButtonClick}
              ref={menuButtonRef}
            >
              {isMenuOpen ? "close" : "menu"}
            </button>
          </div>
          <AnimatePresence mode="wait">
            {isMenuOpen && (
              <motion.div
                variants={dropdownMenu}
                initial="initial"
                animate="enter"
                exit="exit"
                className="menu-open"
                ref={menuRef}
              >
                <div className="heading">
                  <p>Menu</p>
                  <Image
                    src={menuImg}
                    alt="menuimg"
                    fill
                    sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
                    loading="lazy"
                  />
                </div>
                <div className="links">
                  {links.map((link, i) => (
                    <Link
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      href={link.link}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="desktop-header">
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/" className="brand">
            WebStack
          </Link>
          <div className="links">
            {links.map((link, i) => (
              <Link key={i} href={link.link}>
                {link.title}
              </Link>
            ))}
          </div>
          <NavBg />
        </div>
      )}
    </header>
  );
};

export default Header;
