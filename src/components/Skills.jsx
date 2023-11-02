import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import SkillCard from "./SkillCard";

const skills = () => {
  const SkillList = [
    {
      ImgSrc: `${HTML}`,
      AltText: "HTML icon",
      SkillName: "HTML",
    },
    {
      ImgSrc: `${CSS}`,
      AltText: "CSS icon",
      SkillName: "CSS",
    },
    {
      ImgSrc: `${JavaScript}`,
      AltText: "Javascript icon",
      SkillName: "JAVASCRIPT",
    },
    {
      ImgSrc: `${ReactImg}`,
      AltText: "React icon",
      SkillName: "REACT",
    },
    {
      ImgSrc: `${GitHub}`,
      AltText: "Github icon",
      SkillName: "GITHUB",
    },
    {
      ImgSrc: `${Node}`,
      AltText: "Node icon",
      SkillName: "NODE",
    },
    {
      ImgSrc: `${Mongo}`,
      AltText: "Mongo db icon",
      SkillName: "Mongo DB",
    },
    {
      ImgSrc: `${Tailwind}`,
      AltText: "Tailwind icon",
      SkillName: "TAILWINDS",
    },
  ];
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* {Container} */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {SkillList.map((SkillItem) => (
            <SkillCard SkillItem={SkillItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default skills;
