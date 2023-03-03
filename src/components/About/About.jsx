import React from "react";
import { motion } from "framer-motion";
import { Skill } from "./Skill/Skill";
import { aboutAnim, iconsAnim, nameAnim } from "./About.anim";
import { SKILLS } from "./About.constants";
import { useChangeDocumentTitle } from "../../helpers/useChangeDocumentTitle";

export default function About({ pageTitle }) {
  useChangeDocumentTitle(pageTitle);

  return (
    <motion.section
      className="about"
      variants={aboutAnim}
      initial="init"
      animate="anim"
      exit="end"
    >
      <motion.h3 variants={iconsAnim}>Hello there, my name is</motion.h3>
      <motion.h2 variants={nameAnim}>Dustin Hayate</motion.h2>
      <motion.h5 variants={iconsAnim}>
        - Senior <b>Full Stack & Blockchain</b> Developer @ Canada -
      </motion.h5>
      <motion.h5 variants={iconsAnim}>
        - <b>Front End</b>, <b>Back End</b>, <b>Game</b>, <b>Blockchain</b> -
      </motion.h5>

      <motion.div className="skillsContainer" variants={iconsAnim}>
        {SKILLS.map((skill) => (
          <Skill key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </motion.section>
  );
}
