import React from "react";

type Props = {
  id: string;
  title: string;
};

const Title: React.FC<Props> = ({ id, title }) => {
  return (
    <div className="flex gap-4 uppercase text-white w-full justify-start text-2xl">
      <p className="opacity-25 font-semibold">{id}</p>
      <p className="font-thin">{title}</p>
    </div>
  );
};

export default Title;
