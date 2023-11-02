import React from "react";

const SkillCard = ({ SkillItem }) => {
  const ImgSrc = SkillItem.ImgSrc;
  const AltText = SkillItem.AltText;
  const SkillName = SkillItem.SkillName;
  return (
    <div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={ImgSrc} alt={AltText} />
        <p className="my-4 font-semibold">{SkillName}</p>
      </div>
    </div>
  );
};

export default SkillCard;
