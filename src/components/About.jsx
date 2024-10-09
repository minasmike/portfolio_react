import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Menelik, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
            With over two years of full stack development experience, I specialize in building efficient, user-focused digital solutions. My background in graphics and motion design enhances my ability to blend technical expertise with creativity, delivering not only responsive, scalable websites but also compelling visuals and animations. I’m passionate about crafting seamless, engaging experiences that combine functionality with style. Let’s collaborate to turn your vision into reality.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
