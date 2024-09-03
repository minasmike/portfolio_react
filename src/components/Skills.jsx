import React from "react";
import AWS from "../assets/aws.png";
import Postgre from "../assets/postgre.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Go from "../assets/icons8-golang-250.png";
import Docker from "../assets/icons8-docker-250.png";
import Graphql from "../assets/icons8-graphql-250.png"
import Python from "../assets/icons8-python-250.png";
import SkillCard from "./SkillCard";

const skills = () => {
  const SkillList = [
    {
      ImgSrc: `${AWS}`,
      AltText: "AWS icon",
      SkillName: "AWS",
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
      ImgSrc: `${Go}`,
      AltText: "GO icon",
      SkillName: "GOLANG",
    },
    {
      ImgSrc: `${Python}`,
      AltText: "Python icon",
      SkillName: "Python",
    },
    {
      ImgSrc: `${Node}`,
      AltText: "Node icon",
      SkillName: "NODE",
    },
    {
      ImgSrc: `${GitHub}`,
      AltText: "Github icon",
      SkillName: "GITHUB",
    },

    {
      ImgSrc: `${Tailwind}`,
      AltText: "Tailwind icon",
      SkillName: "TAILWINDS",
    },
    {
      ImgSrc: `${Docker}`,
      AltText: "Docker icon",
      SkillName: "Docker",
    },
    {
      ImgSrc: `${Graphql}`,
      AltText: "Grahql icon",
      SkillName: "Graphql",
    },
    {
      ImgSrc: `${Mongo}`,
      AltText: "Mongo db icon",
      SkillName: "Mongo DB",
    },
    {
      ImgSrc: `${Postgre}`,
      AltText: "PostgreSQL icon",
      SkillName: "POSTGRESQL",
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
            <SkillCard SkillItem={SkillItem} key={SkillItem.SkillName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default skills;
