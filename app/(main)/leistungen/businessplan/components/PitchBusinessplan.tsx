"use client";

import ButtonAnna from "../../../../components/customTags/ButtonAnna";

interface PitchProps {
  image: string;
  title: string;
  text: string;
  button: string;
  right?: boolean;
}

const PitchBusinessplan: React.FC<PitchProps> = ({
  image,
  title,
  text,
  button,
  right,
}) => {
  return (
    <div
      className={`flex w-full flex-col-reverse  md:justify-center max-w-[520px] md:max-w-[630px] lg:max-w-max mx-auto ${
        right ? "lg:flex-row-reverse" : "lg:flex-row"
      }    overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 `}
    >
      <div
        className={`lg:w-1/2 flex flex-col gap-10 justify-center ${
          right && "lg:pl-20"
        }`}
      >
        {/* <Title text={title} /> */}
        <h1
          className="lg:text-[40px] text-transparent "
          style={{
            background: "linear-gradient(to right,#125369,#3CA3B5)",
            backgroundClip: "text",
          }}
        >
          {title}
        </h1>
        <p className={`${!right && "sm:pr-20"} text-anna-gray text-justify `}>
          {text}
        </p>
        {/* <div className="w-fit  animate-fade-subtitle bg-anna-blue overflow-hidden rounded-3xl">
          <Link href="/" className="">
            <button
              className="relative rounded-3xl   text-anna-white font-medium font-cabin px-[21px] py-[11px]  overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px 10px 0px inset",
              }}
            >
              <p className="text-white relative z-10">{button}</p>{" "}
              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 
                hover:-bottom-1 -bottom-8 h-12 w-32 aspect-square `}
                style={{
                  backgroundColor: "#00FFFF",
                  filter: "blur(10px)",
                  borderRadius: "100px",
                  opacity: 0.3,
                }}
              ></div>
            </button>
          </Link>
        </div> */}
        <ButtonAnna text={button} />
      </div>
      <div className="lg:w-1/2">
        <img
          src={image}
          className=" rounded-lg shadow-gray-400 shadow-[0px_0px_15px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default PitchBusinessplan;
