"use client";


import { motion } from "framer-motion";

interface CollageProps {
  main_image: string;
  left_top_image: string;
  right_top_image: string;
  left_bottom_image: string;
  right_bottom_image: string;
}

const Collage: React.FC<CollageProps> = ({
  main_image,
  left_top_image,
  right_top_image,
  left_bottom_image,
  right_bottom_image,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        delay: i * 0.4, // Retraso basado en el índice
        type: "spring",
      },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="text-black"
    >
      <div className="flex justify-center items-center h-screen -z-50">
        <div className="relative w-96 h-96">
          {/* Card 1 */}
          <motion.div
            className="absolute top-[-70px] left-[-140px]  bg-white shadow-gray-500 shadow-[0px_0px_15px] border  w-[250px] h-[320px] z-[1] rounded-lg"
            variants={cardVariants}
            custom={0}
          >
            <img
              src={`/workers/${left_top_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="absolute -top-[20px] left-[270px]  bg-white shadow-gray-500 shadow-[0px_0px_15px] border w-[250px] h-[320px] z-[2] rounded-lg"
            variants={cardVariants}
            custom={1}
          >
            <img
              src={`/workers/${right_top_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </motion.div>
          {/* Card 3 (Main card) */}
          <motion.div
            className="absolute left-0 right-0 mx-auto top-[100px] bg-white shadow-gray-500 border shadow-[0px_0px_15px] w-[270px] h-[350px] z-[5] rounded-lg"
            variants={cardVariants}
            custom={4}
            style={{ transform: "translateX(-50%)" }}
          >
            <img
              src={`/workers/${main_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="absolute top-[280px] left-[-160px] bg-white shadow-gray-500 shadow-[0px_0px_15px] border w-[250px] h-[320px]  z-[4] rounded-lg"
            variants={cardVariants}
            custom={2}
          >
            <img
              src={`/workers/${left_bottom_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </motion.div>
          {/* Card 5 */}
          <motion.div
            className="absolute top-[280px] left-[250px] bg-white shadow-gray-500 shadow-[0px_0px_15px] border w-[250px] h-[320px]  z-[3] rounded-lg"
            variants={cardVariants}
            custom={3}
          >
            <img
              src={`/workers/${right_bottom_image}`}
              alt=""
              className="rounded-lg object-cover h-full bg-center w-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Collage;

{
  /* <motion.div
initial={{ opacity: 0, y: 50 }} // Estado inicial
whileInView={{ opacity: 1, y: 0 }} // Estado cuando entra al viewport
viewport={{ once: false, amount: 0.5 }} // Animar cada vez que entra al viewport
transition={{ duration: 1 }} // Duración de la animación
className="font-[family-name:var(--font-geist-sans)] text-black"
>
<h1 className="text-4xl font-bold">Hello, Viewport!</h1>
<p>
  Este componente se animará cada vez que vuelva a entrar en el viewport.
</p>
</motion.div>
// <motion.div
//   initial={{ opacity: 0, y: 50 }} // Estado inicial antes de que el componente sea visible
//   whileInView={{ opacity: 1, y: 0 }} // Estado final cuando el componente entra al viewport
//   viewport={{ once: true, amount: 0.5 }} // Configuración del viewport
//   transition={{ duration: 1 }} // Duración de la animación
//   className="font-[family-name:var(--font-geist-sans)] text-black"
// >
//   <h1 className="text-4xl font-bold">Hello, Viewport!</h1>
//   <p>
//     Este componente se anima cuando entra en el viewport, y la animación se
//     ejecuta una sola vez.
//   </p>
// </motion.div> */
}
