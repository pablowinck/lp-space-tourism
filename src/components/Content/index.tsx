import React from "react";

const Content: React.FC = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col gap-12 items-end justify-center px-52 py-24 select-none">
      {children}
    </div>
  );
};

export default Content;
