import React from "react";

interface PlaceholderProps {
  text: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ text }) => {
  return (
    <div className="text-black flex justify-center items-center h-[10vh] gap-2">
      <h1 className="text-lg lg:text-xl">{text} is being cooked</h1>
      <img src="/cooking.gif" alt="" className="h-10" />
    </div>
  );
};

export default Placeholder;
