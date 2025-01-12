"use client";
import React from "react";


interface ParallaxBannerProps {
  imageUrl?: string;
  height?: string | number;
}

const ParallaxBanner3: React.FC<ParallaxBannerProps> = ({
  imageUrl = "https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg",
  height = "30rem",
}) => {
  return (
    <div
      className="parallax-banner"
      style={{
        height,
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <h1 className="relative z-10 text-white">Site with static background</h1>
    </div>
  );
};

export default ParallaxBanner3;
