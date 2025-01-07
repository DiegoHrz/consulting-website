interface SubtitleProps{
    text: string
}

const Subtitle:React.FC<SubtitleProps> = ({text}) => {
  return (
    <div className="" >{text}</div>
  )
}

export default Subtitle