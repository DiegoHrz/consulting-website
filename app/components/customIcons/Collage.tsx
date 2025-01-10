"use client";

interface CollageProps {
  main_image: string;
  left_top_image: string;
  right_top_image: string;
  left_bottom_image: string;
  right_bottom_image: string;
}

const Collage: React.FC<CollageProps> = ({
  main_image,
  left_top_image,
  right_top_image,
  left_bottom_image,
  right_bottom_image,
}) => {
  return (
    <div className="flex justify-center items-center h-screen -z-50">
      <div className="relative w-96 h-96">
        {/* Card 1 */}
        <div className="absolute top-[-70px] left-[-140px]  bg-white shadow-gray-500 shadow-[0px_0px_15px] border  w-[250px] h-[320px] z-[1] rounded-lg">
          <div className=" h-full">
            <img
              src={`/workers/${left_top_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </div>
        </div>
        {/* Card 2 */}
        <div className="absolute -top-[20px] left-[270px]  bg-white shadow-gray-500 shadow-[0px_0px_15px] border w-[250px] h-[320px] z-[2] rounded-lg">
          <div className=" h-full ">
            <img
              src={`/workers/${right_top_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </div>
        </div>
        {/* Card 3 (Main card) */}
        <div className="absolute -translate-x-1/2 top-[100px] left-1/2  bg-white shadow-gray-500 border shadow-[0px_0px_15px]  w-[270px] h-[350px]  z-[5] rounded-lg ">
          <div className=" h-full">
            <img
              src={`/workers/${main_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </div>
        </div>
        {/* Card 4 */}
        <div className="absolute top-[280px] left-[-160px] bg-white shadow-gray-500 shadow-[0px_0px_15px] border w-[250px] h-[320px]  z-[4] rounded-lg">
          <div className=" h-full">
            <img
              src={`/workers/${left_bottom_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </div>
        </div>
        {/* Card 5 */}
        <div className="absolute top-[280px] left-[250px] bg-white shadow-gray-500 shadow-[0px_0px_15px] border w-[250px] h-[320px]  z-[3] rounded-lg">
          <div className=" h-full">
            <img
              src={`/workers/${right_bottom_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
