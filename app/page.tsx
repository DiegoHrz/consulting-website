import AccordionElement from "./components/FAQ";
import BusinessPlans from "./components/BusinessPlans";
import { CarouselDemo } from "./components/CarouselDemo";
import Hero from "./components/Hero";

import Pitch from "./components/Pitch";
import PitchSecond from "./components/PitchSecond";
import Services from "./components/Services";
import ParallaxBanner2 from "./components/ParallaxBanner2";

import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";


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
      <div className="bg-anna-gray pb-10">
        <div className="max-w-2xl mx-auto py-10">
          <p className="text-center text-anna-brown font-vollkorn font-medium">
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
      <div className="relative py-10">
        <div className="w-screen h-1/2 bg-anna-gray absolute -z-50 bottom-1/2 "></div>
        <div className="max-w-7xl  m-auto sm:px-16 px-10 ">
          {/* <ParallaxBanner /> */}
          <ParallaxBanner2
            imageUrl="/banner/parallax-image-2.jpg"
            height={26}
          />
          {/* <ParallaxBanner2 imageUrl="/banner/parallax-image-2.jpg"  /> */}
        </div>
      </div>
      <Reviews/>
      <FAQ/>
    </div>
  );
}
