export const smooth = {
 // type: 'tween',
  duration: 0.6,
  //ease: [0.22, 0.8, 0.36, 1],
};

export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
      duration: 0.6,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.6,
    //  ease: [0.22, 0.8, 0.36, 1],
    },
  },
};
