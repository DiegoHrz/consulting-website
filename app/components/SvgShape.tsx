import React from "react";

const SvgShape = ({
  width = "100px",
  height = "100px",
  imageX = 0,
  imageY = 0,
  imagePath = "/profile/profile.jpg",
}) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100" // El viewBox define el área del SVG
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width,
        height,
        border: "2px solid black", // Borde para visualizar mejor
      }}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 55, 0.3)" offset="0%" />
          <stop id="stop2" stopColor="rgba(251, 168, 31, 0.1)" offset="100%" />
        </linearGradient>

        <mask id="blob-mask" maskUnits="userSpaceOnUse">
          <g
            style={{
              transform: "scaleX(-1) rotate(42deg)",
              transformOrigin: "center",
            }}
          >
            <path
              fill="white"
              d="M12.3,7.5C5.2,19.4,-18.7,22,-23.6,11.4C-28.4,0.8,-14.2,-23,-2.3,-24.3C9.7,-25.6,19.4,-4.4,12.3,7.5Z"
              transform="translate(50 50)"
            />
          </g>
        </mask>
      </defs>

      {/* Aquí ajustamos la imagen al contorno definido por la máscara */}
      <image
        href={imagePath}
        x={imageX}
        y={imageY}
        width="100%" // Usamos 100% para que ocupe el espacio del SVG
        height="100%" // Usamos 100% para que ocupe el espacio del SVG
        mask="url(#blob-mask)"
        preserveAspectRatio="xMidYMid slice"
      />

      <g
        style={{
          transform: "scaleX(-1) rotate(42deg)",
          transformOrigin: "center",
        }}
      >
        <path
          fill="url(#sw-gradient)"
          d="M12.3,7.5C5.2,19.4,-18.7,22,-23.6,11.4C-28.4,0.8,-14.2,-23,-2.3,-24.3C9.7,-25.6,19.4,-4.4,12.3,7.5Z"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: "0.3s" }}
          opacity="0.3"
        />
      </g>
    </svg>
  );
};

export default SvgShape;
