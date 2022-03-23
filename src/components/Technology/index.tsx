import React, { useState } from "react";
import { useFetchTechnology } from "../../hooks/useTechnology";
import Container from "../Container";
import Content from "../Content";
import Message from "../Message";
import Title from "../Title";

const Technology: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const { isLoading, data, isError } = useFetchTechnology();
  if (isLoading)
    return (
      <Container type="technology">
        <Message>Loading...</Message>
      </Container>
    );
  if (isError || !data)
    return (
      <Container type="technology">
        <Message>Error :(</Message>
      </Container>
    );

  return (
    <Container type="technology">
      <Content>
        <Title id="03" title="space launch 101" />
        <div className="w-full flex justify-start items-center gap-16 relative">
          <div className="flex flex-col gap-6">
            {data.map((_, index) => (
              <div
                className={`cursor-pointer text-white hover:backdrop-brightness-200 w-14 h-14 rounded-full grid place-items-center border-[1px] border-solid border-white ${
                  selected === index && "bg-white text-black"
                }`}
                key={index}
                onClick={() => setSelected(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="uppercase text-md text-blue-light">
              the terminology...
            </div>
            <div className="text-5xl text-white uppercase">
              {data[selected].name}
            </div>
            <div className="text-md text-blue-light w-1/2">
              {data[selected].description}
            </div>
          </div>
          <div className="absolute -right-[20%]">
            <img
              src={data[selected].images.portrait}
              alt="Technology Spaceship"
            />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Technology;
