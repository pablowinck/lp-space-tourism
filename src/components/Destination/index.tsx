import { motion } from "framer-motion";
import React, { useState } from "react";
import { useFetchDestination } from "../../hooks/useDestination";
import Content from "../Content";
import Message from "../Message";
import Title from "../Title";

const Container: React.FC = ({ children }) => {
  return (
    <div className={`h-screen bg-destination-desktop bg-cover bg-center`}>
      {children}
    </div>
  );
};

const Destination: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const { isLoading, data, isError } = useFetchDestination();

  if (isLoading)
    return (
      <Container>
        <Message>Loading...</Message>
      </Container>
    );
  if (isError || !data)
    return (
      <Container>
        <Message>Error :(</Message>
      </Container>
    );
  return (
    <Container>
      <Content>
        <Title id="01" title="pick your destination" />
        <div className="w-full grid grid-cols-2 gap-12 place-content-center">
          <picture className="max-w-md flex items-center">
            <motion.img
              src={data[selected].images.webp}
              draggable="false"
              animate={{ rotate: [0, 180, 360] }}
              transition={{
                duration: 40,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
          </picture>
          <div className="flex flex-col gap-6 justify-center items-start">
            <div className="flex gap-6 h-9 items-center justify-center">
              {data.map(({ name }, index) => (
                <motion.div
                  className={`select-none relative z-0 cursor-pointer ${
                    selected === index ? "text-white" : "text-blue-light"
                  } uppercase h-full ${
                    selected === index
                      ? "hover:text-blue-light"
                      : "hover:text-white"
                  } transition-colors duration-300`}
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <p>{name}</p>
                  {selected === index ? (
                    <motion.div
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute w-full h-[3px] bg-white rounded-lg bottom-0 left-0 right-0"
                      // layoutScroll={true}
                      // layoutId="underlineDestination"
                      // initial={{ opacity: 0 }}
                      // whileInView={{ opacity: 1 }}
                    />
                  ) : null}
                </motion.div>
              ))}
            </div>
            <motion.p className="text-7xl uppercase text-white">
              {data[selected].name}
            </motion.p>
            <motion.p className="text-sm text-blue-light leading-7">
              {data[selected].description}
            </motion.p>
            <div className="w-full h-[1px] bg-[#383B4B] "></div>
            <div className="flex gap-12">
              <div className="flex flex-col">
                <div className="uppercase text-xs text-blue-light">
                  AVG. DISTANCE
                </div>
                <motion.div className="uppercase text-2xl text-white">
                  {data[selected].distance}
                </motion.div>
              </div>
              <div className="flex flex-col">
                <div className="uppercase text-xs text-blue-light">
                  EST. TRAVEL TIME
                </div>
                <motion.div className="uppercase text-2xl text-white">
                  {data[selected].travel}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Destination;
