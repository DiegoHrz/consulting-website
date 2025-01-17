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

import ParallaxBanner from "./components/Parallax/ParallaxBanner";
import Quote from "./components/Quote";
import Workflow from "./components/Workflow";
import Calendly from "./components/calendly/Calendly";
import CurvedRoadmap from "./components/Roadmap";

// import ImageOne from "./components/Parallax/ImageOne";

// import ParallaxSection from "./components/ParallaxBanner";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-black ">
      <Hero />
      <div className="bg-white h-full">
        <BusinessPlans />
        <Pitch image='/profile/profile.jpg' />
        <PitchSecond />

        <Services />
      </div>
      <Quote />
      <div className="relative     ">
        <div className="w-screen h-1/2   bg-anna-gray absolute -z-50 bottom-1/2 "></div>
        {/* <div className="max-w-7xl  mx-auto sm:px-16 px-10 relative border-4 border-red-500">
          <ParallaxBanner2 />
        </div> */}
        <ParallaxBanner />
      <CurvedRoadmap/>
      </div>
      <Workflow/>
      <Calendly/>
      <div className="bg-white sm:pt-0 ">
        <Reviews />
        <FAQ />
      </div>
    </div>
  );
}
