import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BouncingTextProps {
  children: ReactNode; // Defines children as any valid React node (e.g., text, elements, etc.)
}
const BouncingText: React.FC<BouncingTextProps> = ({ children }) => {
  return (
    <motion.div
      className=""
      initial={{ y: 70 }} // Empieza 50px debajo de su posición original
      whileInView={{ y: [70, -30, 10, -7,0,] }} // Sube desde abajo, pequeño rebote, y cae a la posición final
      transition={{
        duration: 1.5, // Duración total del movimiento
        ease: "easeInOut", // Suavidad en el movimiento
        times: [0, 0.6, 0.8, 1], // Define los tiempos para cada parte de la animación
      }}
      viewport={{ once: true, amount: 0.1 }} // Permite que la animación se ejecute cada vez que aparece en el viewport
    >
      {children}
    </motion.div>
  );
};

export default BouncingText;
