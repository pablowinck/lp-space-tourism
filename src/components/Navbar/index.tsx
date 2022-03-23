import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
  menuSelected: number;
  menus: { name: string }[];
};

const Navbar: React.FC<Props> = ({ menuSelected, menus }) => {
  const [focus, setFocus] = useState<number | null>(null);
  return (
    <div className="h-full w-3/5 relative z-50 backdrop-blur-lg after:w-full after:h-full after:absolute after:bg-blue-light after:opacity-5 after:-z-10 after:top-0">
      <div
        className="w-full h-full flex gap-6 justify-center items-center"
        onMouseLeave={() => setFocus(null)}
      >
        {menus.map(({ name }, index) => (
          <motion.div
            onMouseEnter={() => setFocus(index)}
            onFocus={() => setFocus(index)}
            onClick={() => document.getElementById(name)?.scrollIntoView()}
            className="text-white h-1/2 p-2 select-none relative cursor-pointer"
            key={index}
          >
            <div className="h-full flex gap-2 items-center uppercase">
              <p className="font-bold">0{index}</p>
              {name}
            </div>
            {focus === index ? (
              <motion.div
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="absolute w-full h-full backdrop-brightness-200 z-[-1] rounded-lg top-0 bottom-0 left-0 right-0"
                layoutId="glass"
              />
            ) : null}
            {menuSelected === index ? (
              <motion.div
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="absolute w-full h-[3px] bg-white rounded-lg -bottom-6 left-0 right-0"
                layoutId="underline"
              />
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
