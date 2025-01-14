import BusinessPlans from "./components/BusinessPlans";

import Hero from "./components/Hero";

import Pitch from "./components/Pitch";
import PitchSecond from "./components/PitchSecond";
import Services from "./components/Services";

import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
// import ParallaxBanner from "./components/ParallaxBanner";

// import ParallaxBanner4 from "./components/ParallaxBanner4";
// import ParallaxBanner3 from "./components/ParallaxBanner3";
// import ParallaxBanner4 from "./components/ParallaxBanner4";
// import ParallaxBanner from "./components/ParallaxBanner";
// import ParallaxBanner from "./components/ParallaxBanner";
import ParallaxBanner2 from "./components/ParallaxBanner2";
import ImageOne from "./components/Parallax/ImageOne";
// import ImageOne from "./components/Parallax/ImageOne";

// import ParallaxSection from "./components/ParallaxBanner";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-black ">
      <Hero />
      <div className="">
        <BusinessPlans />
        <Pitch />
        <PitchSecond />

        <Services />
      </div>
      <div className="bg-anna-gray py-24">
        <div className="max-w-2xl mx-auto pb-10">
          <p className="text-center text-anna-brown font-vollkorn font-medium text-xl">
            Our name is inspired by the Japanese concept of mono no aware – the
            profound appreciation of the beauty in fleeting moments.
          </p>
        </div>
        <div className="w-full flex justify-center animate-fade-subtitle ">
          <button className="rounded-lg text-white mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-white hover:bg-anna-blue duration-700 transition border-anna-white ">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="relative  sm:pt-24  border-2 border-indigo-600 ">
        <div className="w-screen h-1/2 border-2 border-purple-600  bg-anna-gray absolute -z-50 bottom-1/2 "></div>
        <div className="max-w-7xl  mx-auto sm:px-16 px-10 relative border-4 border-red-500">
          {/* <ParallaxBanner  /> */}
          {/* <ParallaxBanner2 height={20} /> */}
          {/* <ParallaxBanner4/> */}
          {/* <ParallaxBanner  /> */}

          <ParallaxBanner2 />
          {/* <ParallaxBanner3 /> */}
        </div>
      </div>
      <ImageOne />
      <div className="bg-white sm:pt-0 border-red-400 border-2">
        <Reviews />
        <FAQ />
      </div>
    </div>
  );
}
