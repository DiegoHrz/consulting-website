interface TitleProps{
    text: string,
    additionalClasses?:string
}

const Title:React.FC<TitleProps> = ({text, additionalClasses}) => {
  return (
    <h1 className={`font-cabin ${additionalClasses&& additionalClasses} `} style={{fontSize:'2.5rem'}} >{text}</h1>
  )
}

export default Title