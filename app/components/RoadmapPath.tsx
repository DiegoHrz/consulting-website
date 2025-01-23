import React from 'react';

const RoadmapPath = () => {
  // Data for the points along the path
  const points = [
    { id: 1, x: 150, y: 150, text: "Erstgespräch" },
    { id: 2, x: 350, y: 250, text: "Organisatorisches – Kickoff" },
    { id: 3, x: 550, y: 150, text: "Projektstart" },
    { id: 4, x: 750, y: 250, text: "Nachbetreuung" }
  ];

  // Generate the SVG path for the curved line with extended ends
  const generatePath = () => {
    return `M 50 ${points[0].y} 
            L ${points[0].x} ${points[0].y}
            C ${points[0].x + 100} ${points[0].y},
              ${points[1].x - 100} ${points[1].y},
              ${points[1].x} ${points[1].y}
            C ${points[1].x + 100} ${points[1].y},
              ${points[2].x - 100} ${points[2].y},
              ${points[2].x} ${points[2].y}
            C ${points[2].x + 100} ${points[2].y},
              ${points[3].x - 100} ${points[3].y},
              ${points[3].x} ${points[3].y}
            L 850 ${points[3].y}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <svg 
        viewBox="0 0 900 400" 
        className="w-full h-full"
      >
        {/* Main curved path */}
        <path
          d={generatePath()}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="4"
          className="transition-all duration-500"
        />

        {/* Points and labels */}
        {points.map((point) => (
          <g key={point.id}>
            {/* Circle point */}
            <circle
              cx={point.x}
              cy={point.y}
              r="8"
              fill="#1E40AF"
              className="transition-all duration-500"
            />
            
            {/* Number inside circle */}
            <text
              x={point.x}
              y={point.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
              className="select-none"
            >
              {point.id}
            </text>

            {/* Description text */}
            <g transform={`translate(${point.x}, ${point.y + (point.y === 150 ? 30 : -30)})`}>
              <rect
                x="-60"
                y="-20"
                width="120"
                height="40"
                rx="8"
                fill="white"
                stroke="#3B82F6"
                strokeWidth="2"
                className="transition-all duration-500"
              />
              <text
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="14"
                fill="#1E40AF"
                className="select-none"
              >
                {point.text}
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default RoadmapPath;