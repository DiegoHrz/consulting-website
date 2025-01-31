"use client";
import { useEffect, useState } from "react";

interface TitleProps {
  text: string;
  additionalClasses?: string;
  title?: boolean;
  additionalTitle?: string;
  textPosition?: string;
  rainbow?: boolean;
  additionalClass?: string;
  noLengthMax?: boolean;
}

const Title: React.FC<TitleProps> = ({
  text,
  title = true,
  additionalTitle,
  textPosition = "center",
  rainbow,
  additionalClass,
  noLengthMax = false,
}) => {
  const [textLengthMax, setTextLengthMax] = useState(false);

  useEffect(() => {
    if (title && !noLengthMax) {
      const inputText = text.length;
      setTextLengthMax(inputText > 30);
    }
  }, [text, title, noLengthMax]);

  if (title) {
    return (
      <div className="">
        {additionalTitle && (
          <h2 className=" text-center text-lg mb-2 text-anna-maroon tracking-wide">
            {additionalTitle}
          </h2>
        )}
        <h1
          className={` ${textLengthMax ? "lg:text-[48px]" : "lg:text-[58px]"} ${
            textPosition === "center" && "text-center"
          } ${textPosition === "left" && "text-left"} ${
            textPosition === "right" && "text-right"
          } max-w-[600px] lg:max-w-[900px] mx-auto text-transparent ${
            additionalClass && additionalClass
          }`}
          style={
            rainbow
              ? {
                  background: "linear-gradient(to right, #125369, #3CA3B5)",
                  backgroundClip: "text",
                }
              : {
                  background: "#333336",
                  backgroundClip: "text",
                }
          }
          // {
          //   background: "linear-gradient(to right, #125369 0%, #3CA3B5 50%, #6DD5D8 75%, #A8E6CF 100%)",
          //   backgroundClip: "text",
          // }
        >
          {text}
        </h1>
      </div>
    );
  }

  return (
    <div className="">
      {additionalTitle && (
        <h2 className=" text-center text-lg mb-2 text-anna-black tracking-wide">
          {additionalTitle}
        </h2>
      )}
      <h1
        className={` text-[24px] md:text-[48px] ${
          textPosition === "center" && "text-center"
        } ${textPosition === "left" && "text-left"} ${
          textPosition === "right" && "text-right"
        } max-w-[600px] lg:max-w-[900px] mx-auto text-transparent `}
        style={
          rainbow
            ? {
                background: "linear-gradient(to right, #125369, #3CA3B5)",
                backgroundClip: "text",
              }
            : {
                background: "#333336",
                backgroundClip: "text",
              }
        }
        // {
        //   background: "linear-gradient(to right, #125369 0%, #3CA3B5 50%, #6DD5D8 75%, #A8E6CF 100%)",
        //   backgroundClip: "text",
        // }
      >
        {text}
      </h1>
    </div>
  );
};

export default Title;
