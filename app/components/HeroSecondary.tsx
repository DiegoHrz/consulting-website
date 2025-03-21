import Header from "./customTags/Header";
import Title from "./customTags/Title";

interface HeroSecondaryProps {
  image: string;
  header?: string;
  title: string;
  text?: string;
  imageStyles?:string
}

const HeroSecondary: React.FC<HeroSecondaryProps> = ({
  image,
  header,
  title,
  text,
  imageStyles
}) => {
  return (
    <div className="relative h-1/2">
      <div className="h-full w-screen  overflow-hidden">
        <img
          src={`${image}`}
          alt=""
          className={`w-auto min-w-full object-cover h-full ${imageStyles}`}
        />
      </div>
      <div className="border max-w-screen-sm mx-auto   absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-10 sm:min-w-px min-w-[80%] w-48 sm:w-fit">
        {header && <Header text={header} />}
        <Title text={title} additionalClasses='text-center' />
        {text && <p className="pt-6 sm:pt-4 text-center  sm:w-auto">{text}</p>}
      </div>
    </div>
  );
};

export default HeroSecondary;
