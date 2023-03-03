import html from "../../Assets/images/skills/html.png";
import cocos from "../../Assets/images/skills/cocos.png";
import csharp from "../../Assets/images/skills/csharp.png";
import css from "../../Assets/images/skills/css.png";
import ethereum from "../../Assets/images/skills/ethereum.png";
import express from "../../Assets/images/skills/express.png";
import git from "../../Assets/images/skills/git.png";
import javascript from "../../Assets/images/skills/javascript.png";
import max from "../../Assets/images/skills/max.png";
import mongo from "../../Assets/images/skills/mongo.png";
import next from "../../Assets/images/skills/next.png";
import node from "../../Assets/images/skills/node.png";
import react from "../../Assets/images/skills/react.png";
import rust from "../../Assets/images/skills/rust.png";
import solana from "../../Assets/images/skills/solana.png";
import solidity from "../../Assets/images/skills/solidity.png";
import sql from "../../Assets/images/skills/sql.png";
import tailwind from "../../Assets/images/skills/tailwind.png";
import typescript from "../../Assets/images/skills/typescript.png";
import unity from "../../Assets/images/skills/unity.png";

export const skillCat = {
  web: {
    categoryName: "Web Dev",
    percentage: 100,
    skillList: [
      { name: "HTML", xp: "8 YRS", icon: html },
      { name: "CSS", xp: "8 YRS", icon: css },
      { name: "Tailwind", xp: "7 YRS", icon: tailwind },
      { name: "Javascript", xp: "8 YRS", icon: javascript },
      { name: "Typescript", xp: "5 YRS", icon: typescript },
      { name: "React", xp: "5 YRS", icon: react },
      { name: "Next", xp: "5 YRS", icon: next },
      { name: "Express", xp: "5 YRS", icon: express },
      { name: "Node", xp: "5 YRS", icon: node },
      { name: "MongoDB", xp: "5 YRS", icon: mongo },
      { name: "SQL", xp: "8 YRS", icon: sql },
      { name: "Git", xp: "5 YRS", icon: git },
    ],
  },
  game: {
    categoryName: "Game Dev",
    percentage: 100,
    skillList: [
      { name: "Unity", xp: "3 YRS", icon: unity },
      { name: "C#", xp: "5 YRS", icon: csharp },
      { name: "3Dmax", xp: "3 YRS", icon: max },
      { name: "Cocos", xp: "3 YRS", icon: cocos },
    ],
  },
  Blockchain: {
    categoryName: "Blockchain",
    percentage: 100,
    skillList: [
      { name: "Ethereum", xp: "4 YRS", icon: ethereum },
      { name: "Solidity", xp: "4 YRS", icon: solidity },
      { name: "Rust", xp: "3 YRS", icon: rust },
      { name: "Solana", xp: "4 YRS", icon: solana },
    ],
  },
  soft: {
    categoryName: [
      "Creative",
      "Patient",
      "Enthusiastic",
      "Hardworking",
      "Teamplayer",
    ],
    percentage: 100,
  },
};
