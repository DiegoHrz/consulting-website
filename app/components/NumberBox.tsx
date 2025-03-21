import React from "react";

interface NumberBoxProps {
  number: string;
  title: string;
  description: string;
  color: string;
}

const NumberBox: React.FC<NumberBoxProps> = ({
  number,
  title,
  description,
  color,
}) => {
  return (
    <div className="border w-full h-full rounded-xl text-center relative border-[#D5E0E2] bg-[#fff] shadow-gray-400 shadow-[0px_0px_15px] flex flex-col items-center justify-center">
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 font-extrabold rounded-full border w-10 h-10 mx-auto text-xl flex items-center justify-center text-white"
        style={{
          backgroundColor: color, // Color dinámico de fondo
        }}
      >
        {number}
      </div>
      <div className="font-vollkornSC mt-8 text-lg flex-grow p-4" style={{ color: color }}>
        {title}
      </div>
      <div className="mt-3 text-[#6e6868] text-sm px-4 pb-8">{description}</div>
    </div>
  );
};

export default NumberBox;