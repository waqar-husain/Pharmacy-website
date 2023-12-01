"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Reveal(props) {
  return (
    <motion.div
      className="w-fit"
      initial={props.initial}
      animate={props.animate}
      transition={{
        type: "spring",
        duration: props.dur,
      }}
    >
      {props.children}
    </motion.div>
  );
}
