'use client'
import dynamic from 'next/dynamic';
import Nasa from "../../../public/img/nasa.jpg";
const Parallax = dynamic(() => import('react-parallax').then((mod) => mod.Parallax), { ssr: false });

const ImageTwo = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage='/img/spaceStation.jpeg'
    strength={400}
    bgImageStyle={{ minHeight: "100vh", height: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">A trip to Space</span>
    </div>
  </Parallax>
);

export default ImageTwo;


// body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   }

//   .image {
//     min-height: 100vh;
//     position: relative;
//   }

//   .image .content {
//     position: absolute;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100vh;
//   }

//   .content span.img-txt {
//     background-color: #333;
//     text-transform: uppercase;
//     color: #fff;
//     padding: 1rem;
//     font-size: 1.5rem;
//     letter-spacing: 10px;
//   }

//   h3 {
//     letter-spacing: 6px;
//     text-transform: uppercase;
//     font: 1.3rem;
//     text-align: center;
//   }

//   .text-box {
//     text-align: center;
//     padding: 3rem 1rem;
//     text-align: justify;
//   }