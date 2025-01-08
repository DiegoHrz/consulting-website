import AccordionElement from "./components/FAQ";
import BusinessPlans from "./components/BusinessPlans";
import { CarouselDemo } from "./components/CarouselDemo";
import Hero from "./components/Hero";
import ParallaxBanner from "./components/ParallaxBanner";
import Pitch from "./components/Pitch";
import PitchSecond from "./components/PitchSecond";
import Services from "./components/Services";
import ParallaxBanner2 from "./components/ParallaxBanner2";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-black ">
      <Hero />
      <div className="max-w-7xl mx-auto ">
        <BusinessPlans />
        <Pitch />
        <PitchSecond/>
        <Services />
        <CarouselDemo/>
        <AccordionElement />
      </div>
      <div className="relative py-10">
        <div className="w-screen h-1/2 bg-anna-gray absolute -z-50 top-1/2 "></div>
        <div className="max-w-7xl  m-auto">
          {/* <ParallaxBanner /> */}
          <ParallaxBanner2 imageUrl="/banner/parallax-image-2.jpg" height={26} />
          {/* <ParallaxBanner2 imageUrl="/banner/parallax-image-2.jpg"  /> */}
        </div>
      </div>
      <div className="bg-anna-gray pb-10">
        <div className="max-w-2xl mx-auto py-10">
          <p className="text-center text-anna-brown font-vollkorn font-medium">
            Our name is inspired by the Japanese concept of mono no aware – the
            profound appreciation of the beauty in fleeting moments.
          </p>
        </div>
        <div className="w-full flex justify-center animate-fade-subtitle ">
          <button className="rounded-lg text-anna-blue mx-auto w-fit border px-10 py-4 font-semibold text-sm hover:text-anna-white hover:bg-anna-blue duration-700 transition border-anna-blue ">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
