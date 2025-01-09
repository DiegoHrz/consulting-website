interface SubtitleProps {
  text: string;
  color?: string;
  position?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, color = "anna-white", position='center' }) => {
  return (
    <div
      className={`text-${position} text-${color} font-vollkorn font-medium text-xl`}
    >
      {text}
    </div>
  );
};

export default Subtitle;
