"use client";

import Collage from "./customIcons/Collage";

const Services: React.FC = ({}) => {
  return (
    <div>
      <Collage
        main_image="worker2.jpg"
        left_top_image="worker1.jpg"
        right_top_image="worker3.jpg"
        left_bottom_image="worker4.jpeg"
        right_bottom_image="worker5.jpeg"
      />
    </div>
  );
};

export default Services;
