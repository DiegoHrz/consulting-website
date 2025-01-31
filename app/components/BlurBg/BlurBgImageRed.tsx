import React from "react";



const BlurBgImageRed: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full blur-[40px] opacity-50">
      <img
        src="/bg-image-red.png"
        alt="Background"
        className="w-full h-full object-cover p-2 -z-50 opacity-30 brightness-200"
      />
    </div>
  );
};

export default BlurBgImageRed;
