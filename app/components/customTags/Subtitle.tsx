interface SubtitleProps {
  text: string;
  color?: string;
  position?: string;
  size?:string
}

const Subtitle: React.FC<SubtitleProps> = ({ text, color = "anna-white", position='center',size='xl' }) => {
  return (
    <div
      className={`text-${position} text-${color} font-vollkorn font-medium text-${size}`}
    >
      {text}
    </div>
  );
};

export default Subtitle;
