"use client";
import React from "react";

interface ParallaxBannerProps {
  imageUrl?: string;
  height?: string | number; // Altura del contenedor (por ejemplo, 600px)
}

const ParallaxBanner3: React.FC<ParallaxBannerProps> = ({
  imageUrl,
  height,
}) => {
  return (
    <div className="relative overflow-hidden border-4 h-80">

        <div className="parallax" >
            <img src="/banner/parallax-image-2.jpg" alt="" className="absolute" />
        </div>

    </div>
  );
};

export default ParallaxBanner3;

// div
// style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 715.531px, 0px); height: 603.227px; width: 431px;"


// div
// style="transform: translate3d(0px, 349.531px, 0px); visibility: visible; height: 603.227px; width: 464px;"



// img
// style="transform: translate3d(-406px, 167.575px, 0px); position: absolute; height: 851px; width: 1276px; max-width: none;"