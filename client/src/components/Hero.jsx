import React from "react";
import backgroundImage from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-start justify-center flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-1/2 mx-20 mt-24">
      <div className="text-white text-5xl md:text-7xl font-bold mb-4 max-w-screen-xl">
        Find a place where you can feel at home
      </div>
      <p className="text-white text-lg md:text-xl max-w-screen-md mb-12">
        Join our community and explore the world.
      </p>
      <form className="flex flex-col sm:flex-row items-center max-w-screen-sm bg-white p-2 rounded-md">
        <label htmlFor="firstSelector" className="sr-only">
          First Option
        </label>
        <select
          id="firstSelector"
          className="w-full m-1 p-4 rounded-md bg-white focus:outline-none appearance-none cursor-pointer hover:bg-gray-100 transition duration-300"
        >
          <option value="any">Any</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <label htmlFor="secondSelector" className="sr-only">
          Second Option
        </label>
        <select
          id="secondSelector"
          className="w-full m-1 p-4 rounded-md bg-white focus:outline-none appearance-none cursor-pointer hover:bg-gray-100 transition duration-300"
        >
          <option value="any">Any</option>
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>

        <label htmlFor="thirdSelector" className="sr-only">
          Third Option
        </label>
        <select
          id="thirdSelector"
          className="w-full m-1 p-4 rounded-md bg-white focus:outline-none appearance-none cursor-pointer hover:bg-gray-100 transition duration-300"
        >
          <option value="any">Any</option>
          <option value="choiceX">Choice X</option>
          <option value="choiceY">Choice Y</option>
          <option value="choiceZ">Choice Z</option>
        </select>

        <button className="bg-gray-700 hover:bg-gray-900 text-white mx-2 font-bold w-full p-4 rounded-md mt-2 sm:mt-0 cursor-pointer">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Hero;
