import React from "react";
import "./styles.css";

// Define the component
const Carousel: React.FC = () => {
  return (
    <div >
      <div
        className="slider h-[5rem] pt-10  mx-auto will-change-transform"
        style={
          {
            "--width": "160px",
            "--height": "120px",
            "--quantity": 6,
          } as React.CSSProperties // Ensure TypeScript knows these are CSS variables
        }
        data-reverse={true} // Use data attributes for non-standard HTML attributes
      >
        <div className="list ">
          <div className="item" style={{ "--position": 1 } as React.CSSProperties}>
            <img src="/brands/brand1.avif" alt="" loading="lazy" 
              decoding="async" />
          </div>
          <div className="item" style={{ "--position": 2 } as React.CSSProperties}>
            <img src="/brands/brand2.webp" alt="" loading="lazy" 
              decoding="async"  />
          </div>
          <div className="item" style={{ "--position": 3 } as React.CSSProperties}>
            <img src="/brands/brand3.png" alt="" loading="lazy" 
              decoding="async"  />
          </div>
          <div className="item" style={{ "--position": 4 } as React.CSSProperties}>
            <img src="/brands/brand4.png" alt="" loading="lazy" 
              decoding="async"  />
          </div>
          <div className="item" style={{ "--position": 5 } as React.CSSProperties}>
            <img src="/brands/brand6.2.jpg" alt="" loading="lazy" 
              decoding="async"   />
          </div>
          <div className="item" style={{ "--position": 6 } as React.CSSProperties}>
            <img src="/brands/brand6.jpeg" alt="" loading="lazy" 
              decoding="async"  />
          </div>
          {/* <div className="item" style={{ "--position": 7 } as React.CSSProperties}>
            <img src="/brands/1.png.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 8 } as React.CSSProperties}>
            <img src="/brands/1.png.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 9 } as React.CSSProperties}>
            <img src="/images/tech/reactjs.png" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
