
interface MarqueeBoxProps {
    icon: string;
    title: string;
  }
   
const MarqueeBox: React.FC<MarqueeBoxProps> = ({ icon, title }) => {
  return (
    <div className='border rounded-xl px-2 lg:px-5 py-3 lg:py-4'>
        <img className="w-30 h-7 lg:h-14 lg:w-56" src={icon} alt={title} />
    </div>
  )
}

export default MarqueeBox