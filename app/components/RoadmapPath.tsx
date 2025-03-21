// "use client";
// import React, { useRef, useEffect, useState } from "react";

// const RoadmapPath = () => {
//   const pathRef = useRef(null);
//   const [lineSegments, setLineSegments] = useState([]);

//   const points = [
//     {
//       id: 1,
//       x: 150,
//       y: 150,
//       text: "Erstgespräch",
//       description: "Erste Kontaktaufnahme und Bedarfsanalyse",
//       pinDirection: "down",
//       color: "#E63B46",
//       colorPoint: "#E63B46",
//     },
//     {
//       id: 2,
//       x: 350,
//       y: 250,
//       text: "Organisatorisches",
//       description: "Planung und Abstimmung der Details",
//       pinDirection: "down",
//       color: "#ff8920",
//       colorPoint: "#ff8920",
//     },
//     {
//       id: 3,
//       x: 550,
//       y: 150,
//       text: "Projektstart",
//       description: "Offizielle Projektinitiierung",
//       pinDirection: "down",
//       color: "#3B82F6",
//       colorPoint: "#3B82F6",
//     },
//     {
//       id: 4,
//       x: 750,
//       y: 250,
//       text: "Nachbetreuung",
//       description: "Kontinuierliche Unterstützung",
//       pinDirection: "down",
//       color: "#6D28D9",
//       colorPoint: "#6D28D9",
//     },
//   ];

//   const generatePath = () => {
//     return `M 50 ${points[0].y} 
//             L ${points[0].x} ${points[0].y}
//             C ${points[0].x + 100} ${points[0].y},
//               ${points[1].x - 100} ${points[1].y},
//               ${points[1].x} ${points[1].y}
//             C ${points[1].x + 100} ${points[1].y},
//               ${points[2].x - 100} ${points[2].y},
//               ${points[2].x} ${points[2].y}
//             C ${points[2].x + 100} ${points[2].y},
//               ${points[3].x - 100} ${points[3].y},
//               ${points[3].x} ${points[3].y}
//             L 850 ${points[3].y}`;
//   };

//   useEffect(() => {
//     if (pathRef.current) {
//       const pathLength = pathRef.current.getTotalLength();
//       const segmentCount = 50;
//       const segments = [];

//       for (let i = 0; i <= segmentCount; i++) {
//         const currentLength = (pathLength / segmentCount) * i;
//         const currentPoint = pathRef.current.getPointAtLength(currentLength);
//         const nextPoint = pathRef.current.getPointAtLength(currentLength + 1);

//         const angle = Math.atan2(
//           nextPoint.y - currentPoint.y,
//           nextPoint.x - currentPoint.x
//         );

//         segments.push({
//           x: currentPoint.x,
//           y: currentPoint.y,
//           angle,
//         });
//       }

//       setLineSegments(segments);
//     }
//   }, []);

//   return (
//     <div className="w-full max-w-7xl mx-auto p-8">
//       <svg
//         viewBox="0 0 900 400"
//         className="w-full h-full shadow-gray-400 text-[#222]"
//       >
//         {/* Path principal */}
//         <defs>
//           <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//             <feDropShadow
//               dx="4"
//               dy="8"
//               stdDeviation="3"
//               flood-color="#9ca3af"
//             />
//           </filter>
//         </defs>
//         <path
//           d={generatePath()}
//           fill="none"
//           stroke="#323363"
//           strokeWidth="37"
//           filter="url(#shadow)"
//         />
//         <path
//           d={generatePath()}
//           fill="none"
//           stroke="#FFFFFF"
//           strokeWidth="31"
//         />

//         <path
//           d={generatePath()}
//           fill="none"
//           stroke="#474C74"
//           strokeWidth="30"
//           ref={pathRef}
//         />

//         {/* Líneas horizontales pequeñas */}
//         {lineSegments.map((segment, index) => {
//           const lineLength = 10;
//           const dx = Math.cos(segment.angle) * lineLength;
//           const dy = Math.sin(segment.angle) * lineLength;

//           return (
//             <line
//               key={index}
//               x1={segment.x - dx / 2}
//               y1={segment.y - dy / 2}
//               x2={segment.x + dx / 2}
//               y2={segment.y + dy / 2}
//               stroke="#FFFFFF"
//               strokeWidth="2"
//             />
//           );
//         })}

//         {points.map((point) => {
//           const isTopRow = point.y === 150;
//           const gradientId = `gradient-${point.id}`;
//           const animationClass =
//             point.id === 1 || point.id === 3 ? "moveUp" : "moveDown";

//           return (
//             <g key={point.id} className={animationClass}>
//               <defs>
//                 <linearGradient
//                   id={gradientId}
//                   x1="0%"
//                   y1={point.id === 1 || point.id === 3 ? "0%" : "100%"}
//                   x2="100%"
//                   y2={point.id === 1 || point.id === 3 ? "100%" : "0%"}
//                 >
//                   <stop offset="50%" stopColor={point.color} />
//                   <stop offset="100%" stopColor="#222" />
//                 </linearGradient>
//               </defs>
//               <defs>
//                 <linearGradient
//                   id={`gradient-${point.id}-2`}
//                   y1={point.id === 1 || point.id === 3 ? "100%" : "0%"}
//                   y2={point.id === 1 || point.id === 3 ? "0%" : "100%"}
//                 >
//                   <stop offset="0%" stopColor={point.color} />
//                   <stop offset="100%" stopColor="#222" />
//                 </linearGradient>
//               </defs>
//               <g transform={`translate(${point.x}, ${point.y})`}>
//                 {/* Pin Point ajustado */}
//                 <path
//                   d={
//                     point.id === 1 || point.id === 3
//                       ? "M-12 10 L12 10 L0 30 Z"
//                       : "M-12 -10 L12 -10 L0 -30 Z"
//                   }
//                   fill={`url(#${`gradient-${point.id}-2`})`}
//                 />

//                 <circle
//                   cx={0} // Centrado en el pin point
//                   cy={point.id === 1 || point.id === 3 ? 40 : -40} // Posición dinámica
//                   r="7" // Radio del círculo (incluyendo el borde externo)
//                   fill='transparent' // Relleno transparente
//                   stroke={point.colorPoint} // Color del borde externo
//                   strokeWidth="1" // Grosor del borde externo
//                 />
//                 <circle
//                   cx={0} // Centrado en el pin point
//                   cy={point.id === 1 || point.id === 3 ? 40 : -40} // Posición dinámica
//                   r="5" // Radio del círculo interno
//                   fill={point.colorPoint} // Relleno del círculo
//                   // stroke="transparent" // Borde transparente
//                   // strokeWidth="2" // Grosor del borde transparente
//                 />

//                 {/* circle */}
//                 <circle
//                   r="13"
//                   fill="white"
//                   stroke={`url(#${gradientId})`}
//                   strokeWidth="5"
//                 />

//                 {/* Número dentro del círculo */}
//                 <text
//                   textAnchor="middle"
//                   dominantBaseline="middle"
//                   fill={`url(#${gradientId})`}
//                   fontSize="14"
//                   fontWeight="bold"
//                   className="select-none"
//                 >
//                   {point.id}
//                 </text>
//               </g>

//               {isTopRow && (
//                 <>
//                   <text
//                     x={point.x}
//                     y={point.y - 60}
//                     textAnchor="middle"
//                     fontSize="12"
//                     fill="#4B5563"
//                     className="select-none"
//                   >
//                     {point.description}
//                   </text>
//                   <text
//                     x={point.x}
//                     y={point.y - 40}
//                     textAnchor="middle"
//                     fontSize="14"
//                     fontWeight="bold"
//                     fill="#1E40AF"
//                     className="select-none"
//                   >
//                     {point.text}
//                   </text>
//                 </>
//               )}

//               {!isTopRow && (
//                 <>
//                   <text
//                     x={point.x}
//                     y={point.y + 40}
//                     textAnchor="middle"
//                     fontSize="16"
//                     fontWeight="bold"
//                     fill="#1E40AF"
//                     className="select-none"
//                   >
//                     {point.text}
//                   </text>
//                   <text
//                     x={point.x}
//                     y={point.y + 60}
//                     textAnchor="middle"
//                     fontSize="12"
//                     fill="#4B5563"
//                     className="select-none"
//                   >
//                     {point.description}
//                   </text>
//                 </>
//               )}
//             </g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// };

// export default RoadmapPath;
