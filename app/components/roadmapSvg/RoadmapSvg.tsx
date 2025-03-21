"use client";
import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
interface Point {
  id: number;
  x: number;
  y: number;
  text: string;
  description: string;
  pinDirection: string;
  color: string;
  colorPoint: string;
  image: string;
}

const RoadmapPath: React.FC = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [lineSegments, setLineSegments] = useState<
    { x: number; y: number; angle: number }[]
  >([]);

  const points: Point[] = [
    {
      id: 1,
      x: 150,
      y: 150,
      text: "erstgespräch",
      description: "Erste Kontaktaufnahme und Bedarfsanalyse",
      pinDirection: "down",
      color: "#696D62",
      colorPoint: "#696D62",
      image: "/icons/videoconference.png",
    },
    {
      id: 2,
      x: 350,
      y: 250,
      text: "organisatorisches",
      description: "Planung und Abstimmung der Details",
      pinDirection: "down",
      color: "#89ACA6",
      colorPoint: "#89ACA6",
      image: "/icons/planning.png",
    },
    {
      id: 3,
      x: 550,
      y: 150,
      text: "projektphase",
      description: "Offizielle Projektinitiierung",
      pinDirection: "down",
      color: "#A1755D",
      colorPoint: "#A1755D",
      image: "/icons/project.png",
    },
    {
      id: 4,
      x: 750,
      y: 250,
      text: "nachbetreuung",
      description: "Kontinuierliche Unterstützung",
      pinDirection: "down",
      color: "#125369",
      colorPoint: "#125369",
      image: "/icons/follow-up.png",
    },
  ];

  const generatePath = (): string => {
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

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const segmentCount = 50;
      const segments: { x: number; y: number; angle: number }[] = [];

      for (let i = 0; i <= segmentCount; i++) {
        const currentLength = (pathLength / segmentCount) * i;
        const currentPoint = pathRef.current.getPointAtLength(currentLength);
        const nextPoint = pathRef.current.getPointAtLength(currentLength + 1);

        const angle = Math.atan2(
          nextPoint.y - currentPoint.y,
          nextPoint.x - currentPoint.x
        );

        segments.push({
          x: currentPoint.x,
          y: currentPoint.y,
          angle,
        });
      }

      setLineSegments(segments);
    }
  }, []);

  return (
    // <div className="w-full max-w-7xl mx-auto p-8">
    <div>
      <svg viewBox="0 0 900 400" className="w-full h-full shadow-gray-400 ">
        {/* Path principal */}
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="4" dy="8" stdDeviation="3" floodColor="#9ca3af" />
          </filter>
        </defs>
        <path
          d={generatePath()}
          fill="none"
          stroke="gray"
          strokeWidth="37"
          filter="url(#shadow)"
        />
        <path
          d={generatePath()}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="31"
        />

        <path
          d={generatePath()}
          fill="none"
          // stroke="gray"
          stroke="#3D426B"
          strokeWidth="30"
          width="100%"
          ref={pathRef}
        />

        {/* Líneas horizontales pequeñas */}
        {lineSegments.map((segment, index) => {
          const lineLength = 10;
          const dx = Math.cos(segment.angle) * lineLength;
          const dy = Math.sin(segment.angle) * lineLength;

          return (
            <line
              key={index}
              x1={segment.x - dx / 2}
              y1={segment.y - dy / 2}
              x2={segment.x + dx / 2}
              y2={segment.y + dy / 2}
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          );
        })}

        {points.map((point) => {
          const isTopRow = point.y === 150;
          const gradientId = `gradient-${point.id}`;
          const animationClass =
            point.id === 1 || point.id === 3 ? "moveUp" : "moveDown";

          return (
            <g key={point.id} className={animationClass}>
              <defs>
                <linearGradient
                  id={gradientId}
                  y1={point.id === 1 || point.id === 3 ? "200%" : "10%"}
                  y2={point.id === 1 || point.id === 3 ? "10%" : "100%"}
                >
                  <stop offset="50%" stopColor={point.color} />
                  <stop offset="100%" stopColor="#555" />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient
                  id={`gradient-${point.id}-2`}
                  y1={point.id === 1 || point.id === 3 ? "100%" : "0%"}
                  y2={point.id === 1 || point.id === 3 ? "0%" : "100%"}
                >
                  <stop offset="0%" stopColor={point.color} />
                  <stop offset="100%" stopColor="#222" />
                </linearGradient>
              </defs>
              <g transform={`translate(${point.x}, ${point.y})`}>
                {/* Pin Point ajustado */}
                <path
                  d={
                    point.id === 1 || point.id === 3
                      ? "M-17 10 L17 10 L0 37 Z"
                      : "M-17 -10 L17 -10 L0 -37 Z"
                  }
                  fill={point.colorPoint}
                />

                <circle
                  cx={0} // Centrado en el pin point
                  cy={point.id === 1 || point.id === 3 ? 60 : -60} // Posición dinámica
                  r="7" // Radio del círculo (incluyendo el borde externo)
                  fill="transparent" // Relleno transparente
                  stroke={`url(#${gradientId})`} // Color del borde externo
                  strokeWidth="1" // Grosor del borde externo
                />
                <circle
                  cx={0} // Centrado en el pin point
                  cy={point.id === 1 || point.id === 3 ? 60 : -60} // Posición dinámica
                  r="5" // Radio del círculo interno
                  fill={`url(#${gradientId})`} // Relleno del círculo
                />

                {/* circle */}
                <circle
                  r="25"
                  fill="white"
                  stroke={`url(#${gradientId})`}
                  strokeWidth="5"
                />

                <image
                  href={point.image} // Ruta de la imagen
                  x={
                    point.id === 1
                      ? -14
                      : point.id === 2
                      ? -15
                      : point.id === 3
                      ? -13
                      : -16
                  } // Centrado horizontalmente (mitad del ancho de la imagen)
                  y={point.id === 3?-15:-17} // Centrado verticalmente (mitad del alto de la imagen)
                  width={
                    point.id === 1 || point.id === 4
                      ? 30
                      : point.id === 2
                      ? 35
                      : 28
                  }
                  height={
                    point.id === 1 || point.id === 4
                      ? 30
                      : point.id === 2
                      ? 35
                      : 28
                  }
                />

                {/* Número dentro del círculo */}
                {/* <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={`url(#${gradientId})`}
                  fontSize="14"
                  fontWeight="bold"
                  className="select-none"
                >
                  {point.id}
                </text> */}
              </g>

              {isTopRow && (
                <>
                  {/* <text
                    x={point.x}
                    y={point.y - 60}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#4B5563"
                    className="select-none"
                  >
                    {point.description}
                  </text> */}
                  <text
                    x={point.x}
                    y={point.y - 40}
                    textAnchor="middle"
                    fontSize="18"
                    // fontFamily="Instrument Sans, Instrument Sans Placeholder, sans-serif"
                    fontFamily="Vollkorn SC"
                    fontWeight="500"
                    fill={point.colorPoint}
                    className="select-none"
                  >
                    {point.text}
                  </text>
                  {/* <image
                    href={point.image} // Ruta de la imagen
                    x={point.x - 30} // Ajusta la posición horizontal
                    y={point.y + 100} // Posición dinámica
                    width="60" // Ancho de la imagen
                    height="60" // Alto de la imagen
                  /> */}
                </>
              )}

              {!isTopRow && (
                <>
                  <text
                    x={point.x}
                    y={point.y + 50}
                    textAnchor="middle"
                    fontSize="18"
                    // fontFamily="Instrument Sans, Instrument Sans Placeholder, sans-serif"
                    fontFamily="Vollkorn SC"
                    fontWeight="500"
                    fill={point.colorPoint}
                    className="select-none"
                  >
                    {point.text}
                  </text>
                  {/* <image
                    href={point.image} // Ruta de la imagen
                    x={point.x - 30} // Ajusta la posición horizontal
                    y={point.y - 170} // Posición dinámica
                    width="60" // Ancho de la imagen
                    height="60" // Alto de la imagen
                  /> */}
                  {/* <text
                    x={point.x}
                    y={point.y + 60}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#4B5563"
                    className="select-none"
                  >
                    {point.description}
                  </text> */}
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default RoadmapPath;
