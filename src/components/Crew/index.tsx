import React, { useState } from "react";
import { useFetchCrew } from "../../hooks/useCrew";
import Content from "../Content";
import Message from "../Message";
import Title from "../Title";

const Container: React.FC = ({ children }) => {
  return (
    <div className={`h-screen bg-crew-desktop bg-cover bg-center`}>
      {children}
    </div>
  );
};

const Crew: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const { isLoading, data, isError } = useFetchCrew();

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
        <Title id="02" title="meet your crew" />
        <div className="grid grid-cols-2 w-full relative h-[40%]">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="text-white text-2xl uppercase opacity-50">
                {data[selected].role}
              </div>
              <div className="text-white text-5xl uppercase">
                {data[selected].name}
              </div>
              <div className="text-blue-light text-lg max-w-lg">
                {data[selected].bio}
              </div>
            </div>
            <div className="flex gap-4">
              {data.map((_, index) => (
                <div
                  className={`w-3 h-3 rounded-full bg-white cursor-pointer hover:rounded-sm ${
                    index === selected ? "opacity-100" : "opacity-25"
                  }`}
                  key={index}
                  onClick={() => setSelected(index)}
                ></div>
              ))}
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute right-0 -bottom-[94%]">
              <img src={data[selected].images.png} alt="Picture of Crew" />
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Crew;
