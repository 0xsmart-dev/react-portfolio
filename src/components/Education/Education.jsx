import React from "react";
import { motion } from "framer-motion";
import { aboutAnim, iconsAnim, nameAnim } from "./Education.anime";
import { useChangeDocumentTitle } from "../../helpers/useChangeDocumentTitle";

export default function Education({ pageTitle }) {
  useChangeDocumentTitle(pageTitle);
  return (
    <motion.section
      className="about"
      variants={aboutAnim}
      initial="init"
      animate="anim"
      exit="end"
    >
      {/* <motion.h3 variants={iconsAnim}>Famous University in Asia</motion.h3> */}
      <motion.h3 variants={nameAnim} style={{ fontSize: "5rem" }}>
        OSAKA INSTITUTE OF TECHNOLOGY
      </motion.h3>
      <motion.h5
        variants={iconsAnim}
        style={{ fontSize: "2rem", marginTop: "2rem" }}
      >
        - Bachelor's Degree in Computer Science -
      </motion.h5>
    </motion.section>
  );
}
