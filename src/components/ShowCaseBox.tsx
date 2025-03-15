import { IoArrowForwardCircleOutline } from "react-icons/io5";
interface ShowCaseBoxProps{
    category: String;
    title: String;
}
const ShowCaseBox: React.FC<ShowCaseBoxProps> = ({category, title}) => {
  return (
    <div className="w-[25vw] h-72 p-4 border-1 border-[#A1AEBF] rounded-md">
        <div className='bg-[#8474C4] w-full h-1/2 rounded-md mb-5'></div>
        <div className="flex flex-col gap-3 h-1/2">
            <p className="bg-yellow-500 px-3 uppercase rounded-md w-fit">{category}</p>
            <h5 className="text-xl text-white">{title}</h5>
            <p className="text-sm text-[#728095] flex items-center gap-1">Read more <IoArrowForwardCircleOutline />
 </p>
        </div>
    </div>
  )
}

export default ShowCaseBox