interface SubtitleProps{
    text: string
}

const Subtitle:React.FC<SubtitleProps> = ({text}) => {
  return (
    <div className="text-center text-anna-white font-vollkorn font-medium text-xl" >{text}</div>
  )
}

export default Subtitle