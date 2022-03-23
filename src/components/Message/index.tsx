import React from "react";

const Message: React.FC = ({ children }) => {
  return (
    <div className="h-full w-full grid place-items-center">
      <div className="h-12 w-52 backdrop-brightness-200 backdrop-blur-sm grid place-items-center text-xl rounded-sm text-white">
        {children}
      </div>
    </div>
  );
};

export default Message;
