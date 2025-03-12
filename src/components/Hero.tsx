import Button from "./Button"
interface HeroProps {
    section: string;
    title: string;
    desc: string;
    textTitle: string;
  }
const Hero: React.FC<HeroProps> = ({section, title, desc, textTitle}) => {
  return (
    <>
    <div className="circle1"></div>
    <div className="circle2"></div>

        <div className="h-screen w-full z-20 backdrop-blur-2xl bg-[#ffffff1a] flex flex-col justify-center pt-40 px-4 lg:px-32 gap-5">
            <h3 className="text-xl text-yellow-500 font-bold">{section}</h3>
            <h4 className="text-4xl font-bold">{title}</h4>
            <p className="lg:w-[500px] text-[#FFFFFF99]">{desc}</p>
            <Button text={textTitle}/>
        </div>
    </>
  )
}

export default Hero