"use client";

const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className="h-full w-full relative">
        <div className="absolute w-full h-full"></div>
        <img
          src="/giphylentils.gif"
          alt="Full-width GIF"
          className="w-screen h-screen object-cover"
        />
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
          <img
            src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
            alt="White Logo"
            className="h-auto w-96  mx-auto px-3 animate-fade-title mb-10   "
          />
          <div className="w-full flex justify-center animate-fade-subtitle" >
            <button className="text-white mx-auto w-fit border px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition">CONTACT US</button>
          </div>
          {/* <img
            src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png "
            alt="Cafe Logo"
            className="mx-auto mt-4 animate-fade-subtitle"
          /> */}
        </div>
      </div>

      {/* <div className="hidden lg:block h-screen" id="home">
        <div
          className="relative flex h-full w-full justify-center bg-fixed bg-cover bg-center bg-no-repeat safari-fix"
          style={{ backgroundImage: "url('/assets/home-cafe-2.jpg')" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <img
              src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
              alt=""
              className=" h-full w-fit mx-auto px-3 "
            />
            <img
              src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png"
              alt=""
              className=" mx-auto mt-4  "
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Hero;