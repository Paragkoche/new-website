//*----------> Loader

export const loader = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const loading = {
  initial: {
    width: "0",
  },
  enter: {
    width: "100%",
    transition: { duration: 2.5, ease: [0.76, 0, 0.24, 1] },
  },
};

//*----------> Menu

export const dropdownMenu = {
  initial: { height: "0", padding: "0 4vw" },
  enter: {
    height: "calc(85vh - 80px - 10px)",
    padding: "4vw",

    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    height: "0",
    padding: "0 4vw",

    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};
