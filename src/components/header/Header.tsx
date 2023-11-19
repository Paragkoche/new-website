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

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 820 });

  const [isMenuOpen, setMenuOpen] = useState(false);

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

  return (
    <header id="header">
      {isMobile ? (
        <>
          <div className="mobile-header">
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
                </div>
                <div className="links">
                  {links.map((link, i) => (
                    <Link href={link.link}>{link.title}</Link>
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
