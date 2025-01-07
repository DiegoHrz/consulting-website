interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div className="font-vollkornSC  tracking-[3px] text-base text-center ">{text}</div>
  );
};

export default Header;
