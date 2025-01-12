
import BusinessPlans from "./components/BusinessPlans";

import Hero from "./components/Hero";

import Pitch from "./components/Pitch";
import PitchSecond from "./components/PitchSecond";
import Services from "./components/Services";
import ParallaxBanner2 from "./components/ParallaxBanner2";

import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
// import ParallaxBanner from "./components/ParallaxBanner";
import ParallaxBanner3 from "./components/ParallaxBanner3";


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
      <div className="relative sm:py-24 py-10">
        <div className="w-screen h-1/2 bg-anna-gray absolute -z-50 bottom-1/2 "></div>
        <div className="max-w-7xl  mx-auto sm:px-16 px-10 ">
          {/* <ParallaxBanner /> */}
          <ParallaxBanner2
            imageUrl="https://monos.com/cdn/shop/files/WebsiteBanner_3000x2000-JPG_x2000.jpg?v=1660263331"
            height={26}
          />
          {/* <ParallaxBanner2 imageUrl="/banner/parallax-image-2.jpg"  /> */}
          <ParallaxBanner3 />
        </div>
      </div>
      <Reviews/>
      <FAQ/>
    </div>
  );
}
