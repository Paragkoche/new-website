"use client";

import { useState, useEffect } from "react";
import "./style.scss";
import { AnimatePresence, motion } from "framer-motion";
import { loader, loading, opacity } from "@/src/utils/anim";
import Logo from "../../header/Logo";

const words = ["😀", "🚀", "😎", "👩‍💻", "😁", "🐍", "😍", "webstack"];

const Loader = () => {
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.section
            id="pageLoader"
            variants={loader}
            initial="initial"
            exit="exit"
          >
            <Logo />
            <motion.p variants={opacity} initial="initial" animate="enter">
              {words[index]}
            </motion.p>
            <div className="loading-container">
              <motion.div
                variants={loading}
                initial="initial"
                animate="enter"
                className="loading"
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;
