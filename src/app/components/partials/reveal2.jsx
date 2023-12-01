"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
export default function RevealUp(props) {
  const ref = useRef(null);
  const animate = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) animate.start({ y: 0, opacity: 1 });
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      initial={props.initial}
      animate={animate}
      transition={{
        type: "spring",
        duration: 1.4,
        delay: props?.delay,
      }}
    >
      {props.children}
    </motion.div>
  );
}
