"use client";
import { useEffect, useState } from "react";

interface TitleProps {
  text: string;
  additionalClasses?: string;
  sans?: boolean;
  additionalTitle?: string;
  textPosition?: string;
}

const Title: React.FC<TitleProps> = ({
  text,
  additionalClasses,
  sans,
  additionalTitle,
  textPosition = "center",
}) => {
  const [textLengthMax, setTextLengthMax] = useState(false);

  useEffect(() => {
    if (sans) {
      const inputText = text.length;
      setTextLengthMax(inputText > 30);
    }
  }, [text, sans]);

  if (sans) {
    return (
      <div className="">
        {additionalTitle && (
          <h2 className=" text-center text-lg mb-2 text-anna-black tracking-wide">
            {additionalTitle}
          </h2>
        )}
        <h1
          className={` ${textLengthMax ? "lg:text-[48px]" : "lg:text-[58px]"} ${
            textPosition === "center" && "text-center"
          } ${textPosition === "left" && "text-left"} ${
            textPosition === "right" && "text-right"
          } max-w-[600px] lg:max-w-[900px] mx-auto text-transparent `}
          style={{
            background: "linear-gradient(to right,#125369,#3CA3B5)",
            backgroundClip: "text",
          }}
        >
          {text}
        </h1>
      </div>
    );
  }

  return (
    <h1
      className={`font-cabin ${
        additionalClasses && additionalClasses
      } text-3xl sm:text-[2.5rem]`}
    >
      {text}
    </h1>
  );
};

export default Title;
