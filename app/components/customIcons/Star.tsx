interface CustomStarProps{
  fill:string,
  stroke:string,
  strokeWidth:number,
  size:number
}

const CustomStar:React.FC<CustomStarProps> = ({
  fill = "#FFDC38", // Color interior
  stroke = "#FFAD2C", // Color del borde
  strokeWidth = 2, // Grosor del borde
  size = 16, // Tamaño del ícono (ancho y alto)
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size} // Tamaño ancho
    height={size} // Tamaño alto
    fill={fill} // Color del interior
    stroke={stroke} // Color del borde
    strokeWidth={strokeWidth} // Grosor del borde
  >
    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default CustomStar;