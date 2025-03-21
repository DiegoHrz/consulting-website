// 'use client'
// import React, { useEffect, useRef, useState } from 'react';

// const ParallaxSection = ({ imageUrl = "/banner/parallax-image-2.jpg", height = "600px", speed = 0.3 }) => {
//   const [offset, setOffset] = useState(0);
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.01,
//         rootMargin: "50px"
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!isVisible || !sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const scrolled = window.scrollY;
      
//       if (rect.top < window.innerHeight && rect.bottom > 0) {
//         const distance = (window.innerHeight - rect.top) * speed;
//         setOffset(distance);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [speed, isVisible]);

//   return (
//     <div 
//       ref={sectionRef}
//       className="relative overflow-hidden"
//       style={{ height }}
//     >
//       <div
//         className="absolute inset-0"
//         style={{
//           transform: `translateY(${offset}px)`,
//           height: `calc(100% + 100px)`,  // Añadimos espacio extra para el efecto
//           top: '-50px',  // Compensamos el espacio extra
//           transition: 'transform 0.1s ease-out'
//         }}
//       >
//         <img 
//           src={imageUrl}
//           alt="Parallax background"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default ParallaxSection;