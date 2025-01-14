import React from 'react';

const ParallaxBannerX = () => {
  const sections = [
    {
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1504357121897-47698286288d',
      heading: 'So green!'
    },
    {
      type: 'text',
      content: 'Armenian highlands',
      bgColor: 'bg-[#c8c8bc]'
    },
    {
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1538964173425-93884d739596',
      heading: 'Hot! hot! hot!'
    },
    {
      type: 'text',
      content: 'Paradise on earth',
      bgColor: 'bg-[#638a87]'
    },
    {
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99',
      heading: 'In a galaxy...'
    },
    {
      type: 'text',
      content: 'Far, far away...',
      bgColor: 'bg-[#384558]'
    },
    {
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1538982198821-0714ff3d74ba',
      heading: 'Suits..'
    },
    {
      type: 'text',
      content: 'Up into the sky',
      bgColor: 'bg-[#9dbdc4]'
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans">
      <div className="h-screen overflow-y-auto [perspective:3px]">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {section.type === 'image' && (
              <>
                <section 
                  className="relative h-screen bg-center bg-cover -z-10 scale-150 origin-center"
                  style={{
                    backgroundImage: `url(${section.imageUrl})`,
                    transform: 'translateZ(-1px) scale(1.5)'
                  }}
                />
                <section 
                  className="relative flex items-center justify-center -z-10 -translate-y-[30vh]"
                  style={{
                    transform: 'translateY(-30vh) translateZ(1px) scale(1.5)'
                  }}
                >
                  <h1 className="text-white text-4xl">{section.heading}</h1>
                </section>
              </>
            )}
            {section.type === 'text' && (
              <section className={`h-[50vh] flex items-center justify-center ${section.bgColor}`}>
                <h1 className="text-white text-4xl">{section.content}</h1>
              </section>
            )}
          </React.Fragment>
        ))}
      </div>
      <footer className="relative h-screen bg-black flex items-center justify-center">
        <h3 className="text-blue-500 font-normal text-2xl">Pretty cool right?</h3>
      </footer>
    </div>
  );
};

export default ParallaxBannerX;