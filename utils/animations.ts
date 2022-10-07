export const liveMotion = {
  rest: {
    x: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeOut",
    },
  },
  hover: {
    x: 6,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeIn",
    },
  },
};

export const githubMotion = {
  rest: {
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeOut",
    },
  },
  hover: {
    x: 0,
    rotate: 40,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeIn",
    },
  },
};

export const navbarMotion = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeIn",
    },
  },
};
