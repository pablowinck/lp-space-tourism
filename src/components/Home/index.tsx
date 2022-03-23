import React from "react";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-home-desktop bg-cover bg-center">
      <div className="w-full h-full flex items-end justify-between px-[10%] py-[5%]">
        <div className="max-w-sm h-auto flex flex-col gap-6 ">
          <div className="uppercase text-xl text-blue-light">
            SO, TOU WANT TO TRAVEL TO
          </div>
          <div className="uppercase text-9xl text-white">SPACE</div>
          <div className="text-md text-blue-light">
            {`Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!`}
          </div>
        </div>
        <button className="w-64 h-64 rounded-full text-3xl bg-white uppercase hover:bg-blue-light transition-colors duration-300">
          explore
        </button>
      </div>
    </div>
  );
};

export default Home;
