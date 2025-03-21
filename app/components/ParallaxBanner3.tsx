"use client";
import React from "react";


const ParallaxBanner3: React.FC = () => {
  return (
    // <div className="parallax-div-div mx-auto w-full border-black border-4">
    //   <div className="parallax-div mx-auto w-full">
    //     <img
    //       src="/banner/parallax-image-2.jpg"
    //       alt=""
    //       className="parallax-image"
    //     />
    //   </div>
    // </div>
     <div className="border h-64 w-full bg-transparent parallax mx-auto" >
</div> 
  );
};

export default ParallaxBanner3;

// div
// style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 715.531px, 0px); height: 603.227px; width: 431px;"

// div
// style="transform: translate3d(0px, 349.531px, 0px); visibility: visible; height: 603.227px; width: 464px;"

// img
// style="transform: translate3d(-406px, 167.575px, 0px); position: absolute; height: 851px; width: 1276px; max-width: none;"

    // <div className="parallax-div-div mx-auto w-full">
    //   <div className="parallax-div mx-auto w-full">
    //     <img
    //       src="/banner/parallax-image-2.jpg"
    //       alt=""
    //       className="parallax-image"
    //     />
    //   </div>
    // </div>



//     import React from 'react';

// const ParallaxGallery = () => {
//   const sections = [
//     {
//       type: 'image',
//       imageUrl: 'https://images.unsplash.com/photo-1504357121897-47698286288d',
//       heading: 'So green!'
//     },
//     {
//       type: 'text',
//       content: 'Armenian highlands',
//       bgColor: 'bg-[#c8c8bc]'
//     },
//     {
//       type: 'image',
//       imageUrl: 'https://images.unsplash.com/photo-1538964173425-93884d739596',
//       heading: 'Hot! hot! hot!'
//     },
//     {
//       type: 'text',
//       content: 'Paradise on earth',
//       bgColor: 'bg-[#638a87]'
//     },
//     {
//       type: 'image',
//       imageUrl: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99',
//       heading: 'In a galaxy...'
//     },
//     {
//       type: 'text',
//       content: 'Far, far away...',
//       bgColor: 'bg-[#384558]'
//     },
//     {
//       type: 'image',
//       imageUrl: 'https://images.unsplash.com/photo-1538982198821-0714ff3d74ba',
//       heading: 'Suits..'
//     },
//     {
//       type: 'text',
//       content: 'Up into the sky',
//       bgColor: 'bg-[#9dbdc4]'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black font-sans">
//       <div className="h-screen overflow-y-auto [perspective:3px]">
//         {sections.map((section, index) => (
//           <React.Fragment key={index}>
//             {section.type === 'image' && (
//               <>
//                 <section 
//                   className="relative h-screen bg-center bg-cover -z-10 scale-150 origin-center"
//                   style={{
//                     backgroundImage: `url(${section.imageUrl})`,
//                     transform: 'translateZ(-1px) scale(1.5)'
//                   }}
//                 />
//                 <section 
//                   className="relative flex items-center justify-center -z-10 -translate-y-[30vh]"
//                   style={{
//                     transform: 'translateY(-30vh) translateZ(1px) scale(1.5)'
//                   }}
//                 >
//                   <h1 className="text-white text-4xl">{section.heading}</h1>
//                 </section>
//               </>
//             )}
//             {section.type === 'text' && (
//               <section className={`h-[50vh] flex items-center justify-center ${section.bgColor}`}>
//                 <h1 className="text-white text-4xl">{section.content}</h1>
//               </section>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//       <footer className="relative h-screen bg-black flex items-center justify-center">
//         <h3 className="text-blue-500 font-normal text-2xl">Pretty cool right?</h3>
//       </footer>
//     </div>
//   );
// };

// export default ParallaxGallery;