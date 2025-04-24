interface SubtitleProps {
  text: string;
  color?: string;
  position?: string;
  size?:string
  mobileSize?:string
}

const Subtitle: React.FC<SubtitleProps> = ({ text, color = "anna-white", position='center',size='xl',mobileSize }) => {
  return (
    <div
      className={`text-${position} text-${color} font-vollkorn font-medium ${mobileSize?`${mobileSize} sm:text-${size}`:`text-${size}`} `}
    >
      {text}
    </div>
  );
};

export default Subtitle;
